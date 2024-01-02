const {parse} = require('pg-connection-string');

module.exports = ({env}) => {
  const {host, port, database, user, password} = parse(env('DATABASE_URL'));

  return {
    connection: {
      client: 'postgres',
      host,
      port,
      database,
      username: user,
      password,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  };
}