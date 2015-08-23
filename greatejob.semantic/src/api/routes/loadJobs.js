
// var $ = jQuery = require('jquery');
// window.jQuery = $; // Assure it's available globally.
// var s = require('semantic-ui');

//elastic search engine
var elasticsearch = require('elasticsearch');
var esclient_v17 = new elasticsearch.Client({
  host: '192.168.31.171:9200',
  log: 'trace'
});

const initJobs = [
  {id: 1, category: 'it', title: ' fuck ios developer', company: 'apple', description:'descr', detail_link:'xxx', city:'xx', last_update:'laster up', job_type: 'full'},
  {id: 2, category: 'java', title: 'android', company: 'google', description:'descr', detail_link:'xxx', city:'xx', last_update:'laster up', job_type: 'full'},
  {id: 3, category: 'it', title: 'ios developer', company: 'apple', description:'descr', detail_link:'xxx', city:'xx', last_update:'laster up', job_type: 'full'}
];


export function searchJobs(req) {
  let queryString = req.session.queryString;
  let jobs = [];
  if (!queryString) {
    jobs = initJobs;
    return jobs;
  }else{
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
        return [];
        reject('loadSearch load fails 33% of the time. You were unlucky.');
      }else{
         resolve(resp.hits.hits);
      }
    });
  }
}

export default function loadJobs(req) {
  return new Promise((resolve, reject) => {
    // make async call to database
    setTimeout(() => {
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
            return [];
            reject('loadSearch load fails 33% of the time. You were unlucky.');
          }else{
             resolve(resp.hits.hits);
          }
        });

    }, 1000); // simulate async load
  });
}


// export default function(req) {
//
//   esclient_v17.search({
//         index: 'greatejob',
//         type: 'job',
//         body: {
//             query: {
//                 query_string:{
//                    query:"ios developer"
//                 }
//             }
//         }
//     }).then(function (resp) {
//          console.log('okkkkkkkk' + JSON.stringify(resp.hits.hits));
//          return Promise.resolve(resp.hits.hits);
//     }, function (err) {
//         console.log(err.message);
//         return Promise.reject(err.message);
//     });

  // const jobs = [
  //     {id: 1, category: 'it', title: ' fuck ios developer', company: 'apple'},
  //     {id: 2, category: 'java', title: 'android', company: 'google'},
  //     {id: 3, category: 'it', title: 'ios developer', company: 'apple'},
  //     {id: 4, category: 'java', title: 'android', company: 'wanlong'},
  //     {id: 5, category: 'it', title: 'ios developer', company: 'apple'},
  //     {id: 6, category: 'it', title: 'fucker  developer', company: req.body.queryString}
  // ];
  // return Promise.resolve(jobs);
// }
