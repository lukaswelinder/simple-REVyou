// Categories
Categories = new Mongo.Collection("categories");
/*
Categories.allow({
    insert:function(userId,doc) {
        return true;
    },
    update:function(userId,doc,fields,modifier) {
        return true;
    }
});
*/

// Products
Products = new Mongo.Collection("products");
// Product Images
ProductsIMG = new FS.Collection("ProductsIMG", {
    stores: [new FS.Store.GridFS("ProductsIMG")]
});

ProductsIMG.allow({
    insert:function(userId,doc) {
        return true;
    },
    update:function(userId,doc,fields,modifier) {
        return true;
    },
    download:function() {
        return true;
    }
});
