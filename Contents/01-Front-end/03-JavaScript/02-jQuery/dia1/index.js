$("body > div:nth-child(2) > form > button").click(() => {
    let promoCode = $("#promoCode").val();


    if (promoCode === "primavera") {

        $("body > div.container > div > div:nth-child(2) > div.card-body > h1").text("12$");
        $("body > div.container > div > div:nth-child(3) > div.card-body > h1").text("24$");

    } else {
        alert("Código inválido")
    }

})