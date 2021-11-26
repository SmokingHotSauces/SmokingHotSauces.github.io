function insertProducts (productData, store) {

    console.log('inserting products');

    return new Promise((resolve, reject) => {

        const promises = [];

        for (i = 0; i < productData.length; i++) {      // create a promise for every product
          
            promises[i] = insertProduct(productData[i]);
        
        }

        Promise.all(promises).then(() => {              // when all promises are finished, resovle promise.all
        
            resolve(productData);
        
        });

        function insertProduct(product) {
            
            return new Promise((resolve) => {
            
                var addReq = store.add(product);
            
                addReq.onsuccess = function (e) {

                    console.log('added ' + product.ID);

                    resolve();

                };
            });            
        }
    });
}
