let xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        let objJSON = {};

        objJSON = JSON.parse(xmlHttp.responseText)

        document.cookie = `token= ${objJSON["token"]}`;
    }
}
xmlHttp.open("POST", "https://reqres.in/api/register");

xmlHttp.setRequestHeader("Content-Type", "application/json")

xmlHttp.send(JSON.stringify({
    "username": "eve.holt@reqres.in", "password": "pistol"
}));


