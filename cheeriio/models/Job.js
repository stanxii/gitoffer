
var mongoose = require('mongoose');

var jobSchema = new mongoose.Schema({
    indexid: Number,
    title: String,
    skills: String,
    company : String,
    city : String,
    state : String,
    zipcode: Number,
    job_type : String,
    position_type: String,
    vacancies:Number,
    min_experience: String,
    education: String,
    salary_min : Number,
    salary_max : Number,
    bonus: String,
    category : String,
    rank : Number,
    create_date : {type: Date, default: Date.now},
    last_update : {type: Date},
    description : String,
    requirements: String,
    companydesc:  String,
    detail_link : String,
    from_link : String,
    country : String
});

module.exports = mongoose.model('Job', jobSchema);
