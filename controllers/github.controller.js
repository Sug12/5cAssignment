const axios = require('axios');

const Repository = require('../models/Repository');
const Owner = require('../models/Owner');

async function saveDocuments(url) {
    const result = await axios.get(url);
    const documents = result.data;
    let docIndex = 0;

    for (docIndex = 0; docIndex < documents.length; docIndex++) {
        const repositoryObj = documents[docIndex];
        const ownerObj = repositoryObj.owner;

        const result = await Owner.upsert({
            id: ownerObj.id,
            avatarurl: ownerObj.avatar_url,
            htmlurl: ownerObj.html_url,
            type: ownerObj.type,
            siteadmin: ownerObj.site_admin

        }, {returning: true});

        if (!result || result.length < 1)
            throw new Error("Owner not inserted!");

        if (result[0].dataValues.id > 0) {
            await Repository.upsert({
                id: repositoryObj.id,
                name: repositoryObj.name,
                htmlurl: repositoryObj.html_url,
                description: repositoryObj.description,
                createdat: repositoryObj.created_at,
                openissues: repositoryObj.open_issues,
                watchers: repositoryObj.watchers,
                ownerid: ownerObj.id
            });
        }
    }
    return {ReceivedCount: documents.length, UpsertedCount: docIndex};
}

async function getDocumentById(id) {
    const result = await Repository.findOne({
        attributes: {exclude: ['ownerid']}, where: {id: id}, include: [{
            model: Owner,
            required: true
        }]
    });

    if (!result) throw new Error(`No document found by id ${id}`);
    return result;
}

module.exports = {
    saveDocuments,
    getDocumentById,
};