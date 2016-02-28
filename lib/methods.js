Meteor.methods({

    addProduct: function(name, category, description, imgLoc, is_featured){

        Products.insert({
            name: name,
            category: category,
            description: description,
            is_featured: is_featured,
            image: imgLoc,
            createdAt: new Date()
        }, function(){
            Router.go('/');
            FlashMessages.sendSuccess("Product Added");
        });


    },

    addReview: function(userID, productID, rating, body){

        Products.update({
            _id: productID
        },{
            $push:{
                reviews: {
                    user: userID,
                    rating: rating,
                    body: body
                }
            }
        }, function(){
            Router.go('/');
            FlashMessages.sendSuccess('Review Added');
        });

    }
});
