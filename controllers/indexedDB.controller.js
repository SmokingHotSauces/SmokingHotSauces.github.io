// fetch productdata as JSON, put in 'data'
fetchProductData
.then(data => { 
    
    var productData = data;
    var db;
    var store;
    var current_view_pub_key;
    const dbName = 'SHS-database';
    const dbVer = 1;
    const dbObj = 'products';
        
    // open indexedDB
    openDB(dbName, dbVer, dbObj, db, store, productData).then((db) => {

        // start transaction
        startTxn(dbObj, db, productData).then((store) => {

            // insert products into indexedDB
            insertProducts(productData, store).then((productData) => {

                closeDB(db);

            });                

        });

    });

})
