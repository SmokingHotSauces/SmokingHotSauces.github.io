const fetchProductData =
    new Promise ((resolve, reject) => {
        fetch('https://opensheet.vercel.app/1b5LDQwCLj7mnkKwdRnQjpYcPHkALJMAIj7HdRoBgHVY/sheet1')
        .then(res => res.json())
        .then(function(data) {
            console.log('data fetched');
            resolve(data);
        })
    })    
