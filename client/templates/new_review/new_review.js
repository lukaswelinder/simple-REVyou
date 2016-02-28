Template.new_review.events({
    "submit .new-review": function(event){

        var userID = Meteor.userId();
        var productID = this._id;
        var rating = event.target.rating.value;
        var body = event.target.body.value;


        Meteor.call('addReview', userID, productID, rating, body);

        return false;
    }
});
