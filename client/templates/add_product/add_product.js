Template.add_product.events({
    "submit .add_product": function(event){

        var name = event.target.name.value;
        var category = event.target.category.value;
        var description = event.target.description.value;
        var imgLoc = "/img/noimg.jpg";
        var is_featured = event.target.is_featured.value;

        var file = $("#productImage").get(0).files[0];

        fsFile = new FS.File(file);

        ProductsIMG.insert(fsFile, function(err, fileOBJ) {
            if(err) {
                throw new Meteor.Error(err);
                FlashMessages.sendError("Error Uploading")
            } else {
                imgLoc = '/cfs/files/ProductsIMG/'+ fileOBJ._id;

                event.target.name.value = "";
                event.target.category.value = "";
                event.target.description.value = "";
                event.target.is_featured.value = "";
            }

            Meteor.call('addProduct', name, category, description, imgLoc, is_featured);

        });


        return false;
    }
});
