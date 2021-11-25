(() => {

    let navbarSnip = './snippets/navBar.snippet.html';
    let navbarID = 'navBar';
    let footerSnip = './snippets/footer.snippet.html';
    let footerID = 'footer';
    let bodySnip;
    let contentSnip;
    let contentID;

    let loc = window.location.pathname;
    switch (loc) {
        case '/':
            bodySnip = './snippets/pageBody/index.snippet.html';
            contentSnip = './snippets/homePageTitle.snippet.html';
            contentID = 'homePageTitle';
            break;
        case '/products.html':
            bodySnip = './snippets/pageBody/products.snippet.html'
            contentSnip = '';
            contentID = 'products';
            break;
        case '/recipes.html':
            bodySnip = './snippets/pageBody/recipes.snippet.html';
            contentSnip = '';
            contentID = 'recipes';
            break;
        case '/DIY.html':
            bodySnip = './snippets/pageBody/DIY.snippet.html';
            contentSnip = '';
            contentID = 'DIY';
            break;
        case '/contact.html':
            bodySnip = './snippets/pageBody/contact.snippet.html';
            contentSnip = '';
            contentID = 'contact';
            break;
        case '/cart.html':
            bodySnip = './snippets/pageBody/cart.snippet.html';
            contentSnip = '';
            contentID = 'cart';
            break;
    }
    insertPageBody(bodySnip)
    .then(() => 
    {
        // insert navigation bar
        insertPageContent(navbarSnip, navbarID)
        .then(() => 
        { 
            let loc = window.location.pathname;
            setActiveNavBar(loc);
        });

        // insert page content
        insertPageContent(contentSnip, contentID)
        .then(() => 
        {
            //  set navigation buttons if on home page
            if (loc == '/') { setNavButtons(); };
            
        });

        // insert footer
        insertPageContent(footerSnip, footerID);
    });
})();
