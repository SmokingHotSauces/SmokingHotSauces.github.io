(() => {
    let loc = window.location.pathname;
    switch (loc) {
        case '/':
            insertPageBody('./snippets/pageBody/index.snippet.html');
            break;
        case '/products.html':
            insertPageBody('./snippets/pageBody/products.snippet.html');
            break;
        case '/recipes.html':
            insertPageBody('./snippets/pageBody/recipes.snippet.html');
            break;
        case '/DIY.html':
            insertPageBody('./snippets/pageBody/DIY.snippet.html');
            break;
        case '/contact.html':
            insertPageBody('./snippets/pageBody/contact.snippet.html');
            break;
        case '/cart.html':
            insertPageBody('./snippets/pageBody/cart.snippet.html');
            break;
    }
})();