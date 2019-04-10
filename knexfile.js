// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/aged_and_infused'
  },


  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }

};
