
var elasticsearch = require('elasticsearch');

console.log('sssss-------------------------');
let esclient_v17 = new elasticsearch.Client({
  host: '192.168.31.171:9200',
  log: 'trace'
});

function performSearch(termToSearch) {

    esclient_v17.search({
      index: 'greatejob',
      type: 'job',
      body: {
          query: {
              query_string:{
                 query:"ios developer"
              }
          }
      }
  }, function (error, resp) {

    if(error){
      //resolve {hits:[], pageNum:0};
      reject('loadJobs load faild cant find. You were unlucky.');
    }else{
       resolve({jobs: resp.hits.hits, pageNum: resp.hits.total});
    }
  });
}

exports.performSearch = performSearch;
