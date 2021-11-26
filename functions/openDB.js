const openDB = (dbName, dbVer, dbObj, db, store) => {

    console.log('openDB...');

    return new Promise((resolve, reject) => {
    
        // productData contains arrayList with all the data of the products

        let reqDB = indexedDB.open(dbName, dbVer);

        reqDB.onsuccess = (e) => {  // resolve resulting database
            
            db = reqDB.result;
            
            console.log('openDB DONE');

            resolve(db);
                        
        };

        reqDB.onerror = (e) => {

            console.error('openDB:', this.errorCode);

        };

        reqDB.onupgradeneeded = (e) => {

            console.log('openDb.onupgradeneeded');            

            db = e.target.result;

            if (e.oldVersion == 0) {

                store = db.createObjectStore(dbObj, { keyPath: 'ID' }, 'autoincrement');

            } else if (e.oldVersion < dbVer) {

                alert('a new database version is available, please close this browser window');
                closeDB(db);
            }

        };

    })

}