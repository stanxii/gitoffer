var request = require('request');
var extractor = require('unfluff');


//great job source 
//casperjs for ajax

//Brilliant fun and profit

 //http://salesforce.careermount.com/cm/candidate/search_jobs
  
  //
  // var url = 'http://careers.force.com/jobs/ts2__JobDetails?jobId=a1k700000008MNeAAM&tSource=a1z7000000001NIAAY';
  
  // var url = 'https://jobs.groupon.com/jobs/oFzV1fwU?nl=1&jvi=oFzV1fwU,Job&jvs=IndeedSponsored&jvk=Job';
  
  var url = 'https://krb-sjobs.brassring.com/tgwebhost/jobdetails.aspx?partnerid=26059&siteid=5016&jobid=17758&AReq=13313BR&Codes=JB_IndeedOrganic';
  
	request(url, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
		 console.log(body); // Show the HTML for the Google homepage.
		
		var data = extractor(body, 'en');
		console.log(data);
	  }
	})
