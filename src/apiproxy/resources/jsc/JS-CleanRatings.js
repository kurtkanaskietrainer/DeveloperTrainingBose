var servicecalloutcontent = context.getVariable('ratingsResponse.content');
var ratingsSourceObj = JSON.parse(servicecalloutcontent);
var cleanRatings = {};
cleanRatings = ratingsSourceObj.entities;

for (var i = 0;i< cleanRatings.length; i++) {
    delete(cleanRatings[i].uuid);
    delete(cleanRatings[i].type);
    delete(cleanRatings[i].created);
    delete(cleanRatings[i].modified);
    delete(cleanRatings[i].metadata);
}
context.setVariable('ratingsResponse.content', JSON.stringify(cleanRatings));
