// determine and assign active class to navigation bar
function setActiveNavBar(loc) {
    switch (loc) {
        case '/':
            setAttributeById('nav-home', 'class', 'active');
            break;
        case '/products.html':
            setAttributeById('nav-products', 'class', 'active');
            break;
        case '/recipes.html':
            setAttributeById('nav-recipes', 'class', 'active');
            break;
        case '/DIY.html':
            setAttributeById('nav-DIY', 'class', 'active');
            break;
        case '/contact.html':
            setAttributeById('nav-contact', 'class', 'active');
            break;
        case '/cart.html':
            setAttributeById('nav-cart', 'class', 'active');
    }
}

