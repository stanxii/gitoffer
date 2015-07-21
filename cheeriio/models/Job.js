
var mongoose = require('mongoose');

var jobSchema = new mongoose.Schema({
    title: String,
    company : String,
    locality: String,
    city : String,
    job_type : String,
    position_type: String,
    vacancies: String,
    min_experience: String,
    education: String,
    salary_range : String,
    bonus: String,
    category : [String],
    rate : {
         star : String,
         rate_img : String
    },
    publish : Date,
    create_date : {type: Date, default: Date.now},
    last_update : String,
    description : String,
    detail_link : String,
    from_link : String,
    country : String,
    State : String
});

module.exports = mongoose.model('Job', jobSchema);
