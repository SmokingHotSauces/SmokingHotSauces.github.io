function insertPageBody (SNIPPET) {
    let client = new XMLHttpRequest();
    client.open('GET', SNIPPET, false);
    client.send();
    document.getElementById('page-content').innerHTML = client.responseText;
};