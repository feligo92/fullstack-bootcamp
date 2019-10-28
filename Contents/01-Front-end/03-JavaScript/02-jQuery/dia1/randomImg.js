function setImg() {

    const memes = [
        "http://devhumor.com/content/uploads/images/March2019/developers_projects.jpg",
        "http://devhumor.com/content/uploads/images/February2019/valentine's-day.png",
        "http://devhumor.com/content/uploads/images/February2019/dev_code.jpg",
        "http://devhumor.com/content/uploads/images/February2019/department_standards.jpg",
        "http://devhumor.com/content/uploads/images/February2019/aD12jbK_460s.jpg",
        "http://devhumor.com/content/uploads/images/January2019/race-car.png",
        "http://devhumor.com/content/uploads/images/January2019/code_fix.jpg",
        "http://devhumor.com/content/uploads/images/January2019/parachute.png",
        "http://devhumor.com/content/uploads/images/December2018/code_mess.jpg",
        "http://devhumor.com/content/uploads/images/December2018/code_push.jpg",
        "http://devhumor.com/content/uploads/images/December2018/css.png",
        "http://devhumor.com/content/uploads/images/December2018/surprise.png",
        "http://devhumor.com/content/uploads/images/November2018/javascript.jpg",
        "http://devhumor.com/content/uploads/images/November2018/revert-commit.jpg",
        "http://devhumor.com/content/uploads/images/October2018/if.png",
        "http://devhumor.com/content/uploads/images/October2018/names.png",
        "http://devhumor.com/content/uploads/images/October2018/developer_stress.png",
        "http://devhumor.com/content/uploads/images/October2018/git.jpg"
    ]


    if (window.location.search != 0) {

        $("#imagen > img").attr("src", memes[window.location.search.replace("?", "").split("=")[1]])

        $("#urlNueva").val(`file:///C:/Users/Hecto/Desktop/neoland/fork/fullstack-bootcamp/Contents/01-Front-end/03-JavaScript/02-jQuery/dia1/randomImg.html?img=${window.location.search.replace("?", "").split("=")[1]}`)
    } else {
        let randomNumber = getRandom(memes.length)
        $("#imagen > img").attr("src", memes[randomNumber]);
        $("#urlNueva").val(`file:///C:/Users/Hecto/Desktop/neoland/fork/fullstack-bootcamp/Contents/01-Front-end/03-JavaScript/02-jQuery/dia1/randomImg.html?img=${randomNumber}`)

    }

}

function getRandom(top){
    return Math.floor(Math.random() * (top - 1)) + 1
}



function copyUrl(){

    $("#urlNueva")[0].select()
    document.execCommand("copy")
    alert("Copied the text: " + $("#urlNueva").val())
}

$("#imagen > button:nth-child(4)").click(() => { setImg() })

$("#imagen > button:nth-child(3)").click(() => { copyUrl() })

$(window).ready(() => { setImg() })


