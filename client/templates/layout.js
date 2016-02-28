// truncate description
Template.registerHelper('truncateText', function(text, length){

    var newText = text.substring(0, length);
    newText = newText.substr(0, Math.min(newText.length, newText.lastIndexOf(" "))) + "...";

    return new Spacebars.SafeString(newText);

});

// get average rating
Template.registerHelper('getAvg', function(reviews){

    if(reviews){
        var sum = 0;
        for(var i = 0; i < reviews.length; i++) {
            sum += parseInt(reviews[i].rating, 10);
        }
        var avg = sum / reviews.length;

        return Math.round(avg);
    } else {
        return "";
    }

});



Template.registerHelper('countReviews', function(reviews){

    if(reviews){ return reviews.length; }
    else { return 0; }

});

Template.registerHelper('canReview', function(reviews){

    var userID = Meteor.userId();

    if(userID && reviews){
        for(i in reviews){
            if(reviews[i].user == userID){
                return false;
            }
        }
        return true;
    } else if (userID && !reviews) {
        return true;
    }

    return false;

});
