function compareWord() {

    let bodyText = $("body > div > div > p").text();
    let inputWord = $("body > div > div > div > form > div > input").val().toUpperCase();

    let compare = bodyText.includes(inputWord);

    if (compare == true) {
        let arrBodyText = bodyText.plit(" ");

        let word = arrBodyText.indexOf(inputWord);

        

    } else {
        alert("Tu palabra no está en el texto");
    }

}

$("body > div > div > div > form > button").click(() => { compareWord() })