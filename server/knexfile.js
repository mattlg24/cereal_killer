// Update with your config settings.

module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://localhost/cereal_killer'
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL + '?ssl=true'
    }
};
