// Update with your config settings.

module.exports = {
    development: {
        client: 'mysql',
        connection: {
            user: 'matt',
            password: 'some_pass',
            database: 'cereal_killer'
        }
    },
    // production: {
    //     client: 'mysql',
    //     connection: process.env.DATABASE_URL + '?ssl=true'
    // }
};
