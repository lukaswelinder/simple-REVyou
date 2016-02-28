Router.configure({
    layoutTemplate: 'layoutTemplate'
});

var OnBeforeActions = {
    loginRequired: function(){
        if(!Meteor.userId()){
            Router.go('/');
        } else {
            this.next();
        }
    }
}

Router.onBeforeAction(OnBeforeActions.loginRequired, {
    only: ['add_product']
})

Router.map(function(){

    //home
    this.route('home', {
        path: '/',
        template: 'home',
        data: function(){
            templateData = {
                products: Products.find({is_featured: "1"})
            };
            return templateData;
        }
    });

    // products
    this.route('products', {
               path: '/products',
               template: 'products',
               data: function(){
                   templateData = {
                       products: Products.find()
                   };
                   return templateData;
               }
    });

    // add_product
    this.route('add_product', {
        path: '/add_product',
        template: 'add_product',
        data: function(){
            templateData = {
                categories: Categories.find()
            };
            return templateData;
        }
    });

    this.route('category_products', {
        path: '/categories/:slug',
        template: 'category_products',
        data: function(){
            templateData = {
                category_products: Products.find({
                    category: this.params.slug
                })
            };
            return templateData;
        }
    });

    // new_reveiw
    this.route('new_review', {
        path: '/new-reveiw/:_id',
        template: 'new_review',
        data: function(){
            return Products.findOne(this.params._id)
        }
    });

    // product
    this.route('product', {
        path: '/product/:_id',
        template: 'product',
        data: function(){
            return Products.findOne(this.params._id)
        }
    });

});


















