const insertPageContent = (SNIPPET, ID) =>
{
    return new Promise((resolve, reject) =>
    {
        let client = new XMLHttpRequest();
        client.onload = (e) => 
        {
            document.getElementById(ID).innerHTML = client.responseText;
            console.log(SNIPPET  + ' inserted at ' + ID);
            resolve();
        }
        client.open('GET', SNIPPET);
        client.send();
    })
}