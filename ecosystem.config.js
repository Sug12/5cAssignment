module.exports = {
    apps: [
        {
            name: 'assignments',
            script: 'app.js',
            env: {
                NODE_ENV: "development",
                PORT: 3001,
                DBNAME: 'github',
                USERNAME: 'postgres',
                PASSWORD: 'test',
            },
        }
    ]
};