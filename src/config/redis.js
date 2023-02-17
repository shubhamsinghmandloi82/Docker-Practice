const redis = require('redis');

const client = redis.createClient(6379, 'redis')

client.connect();
client.on('error', function(error) {
  console.error('Redis Connection Error: ', error);
;
});
client.on('connect', function() {
  console.log('Connected To Redis Server');
});
client.on('ready', function() {
  console.log('Redis Connection Is Established');
}); 
 
module.exports = client;