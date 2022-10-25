/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        dbUser: 'kbiganashvili',
        dbPassword: 'y29P5UQv5wWdmJJm',
        dbCluster: 'cluster0',
        dbName: 'my-site-dev',
      },
    };
  }

  return {
    env: {
      dbUser: 'kbiganashvili',
      dbPassword: 'y29P5UQv5wWdmJJm',
      dbCluster: 'cluster0',
      dbName: 'my-site',
    },
  };
};
