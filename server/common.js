Meteor.publish('categories', function(){
    return Categories.find();
})

Meteor.publish('products', function(){
    return Products.find();
});

Meteor.publish('ProductsIMG', function(){
    return ProductsIMG.find();
})
