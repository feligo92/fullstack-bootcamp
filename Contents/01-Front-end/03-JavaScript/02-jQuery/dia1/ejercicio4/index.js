function compareWord() {

    let bodyText = $("body > div > div > p").html();
    let inputWord = $("body > div > div > div > form > div > input").val().toUpperCase();

    let compare = bodyText.includes(inputWord);

    if (compare == true) {
        let replWord = `<span style="color:red">${inputWord}</span>`
        let finalText = bodyText.replace(inputWord, replWord)

        $("body > div > div > p").html(finalText);
    } else {
        alert("Tu palabra no está en el texto");
    }
}

$("body > div > div > div > form > button").click(() => { compareWord() })