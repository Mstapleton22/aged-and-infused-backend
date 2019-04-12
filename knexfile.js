// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/aged_and_infused' || 'postgres://ljdzngeoabvxab:7e25c8fdbd80854df38f13736308c2510323d2a54703cd15b1a2de67a6346005@ec2-184-73-210-189.compute-1.amazonaws.com:5432/d4hn4763ug8ij0'
  },


  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://ljdzngeoabvxab:7e25c8fdbd80854df38f13736308c2510323d2a54703cd15b1a2de67a6346005@ec2-184-73-210-189.compute-1.amazonaws.com:5432/d4hn4763ug8ij0'
  }

};
