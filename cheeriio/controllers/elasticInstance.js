// ES Connection

var elasticsearch = require('elasticsearch');

var elasticInstance =  new elasticsearch.Client({
      host: '192.168.31.171:9200',
      log: 'trace'
    });


exports.elasticInstance = elasticInstance;
