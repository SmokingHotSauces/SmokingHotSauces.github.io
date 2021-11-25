// set navigation button destination
function setNavButtons () {
    console.log('setting navigation buttons');

    document.getElementById('nav2products').onclick = function () {
        location.href = './products.html';
    }
    
    document.getElementById('nav2recipes').onclick = function () {
        location.href = './recipes.html';
    }
    
    document.getElementById('nav2DIY').onclick = function () {
        location.href = './DIY.html';
    }
    
    document.getElementById('nav2contact').onclick = function () {
        location.href = './contact.html';
    }

    console.log('navigation buttons set');
}