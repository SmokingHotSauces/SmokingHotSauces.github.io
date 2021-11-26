function startTxn (dbObj, db) {
    
    return new Promise ((resolve, reject) => {

        console.log('starting transaction');

        let txn = db.transaction(dbObj, 'readwrite');
        store = txn.objectStore(dbObj);

        resolve(store);

    });

}