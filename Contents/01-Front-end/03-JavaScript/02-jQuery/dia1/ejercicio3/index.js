let arrMovies = [];


function addMovie() {
    let movieTitle = $("body > div > div:nth-child(1) > div > form > div:nth-child(2) > input").val();
    let movieRating = $("body > div > div:nth-child(1) > div > form > div:nth-child(4) > input").val();

    if (movieTitle !== "") {
        $("body > div > div.row.mt-5 > div > table > tbody").append(`<tr>
    <th class="text-center trMovie" scope="row">${movieTitle}</th>
   
    <td class="text-center">${movieRating}</td>
    <td class="text-center"><button type="button" class="btn btn-danger mb-2 deleteButton">Delete</button></td>
    </tr>`)

        arrMovies.push({ title: movieTitle, rating: movieRating })
    }
    $(".deleteButton").off();
    $(".deleteButton").click((event) => {
        deleteMovie($(event.target));
    })

}


$("body > div > div:nth-child(1) > div > form > button").click(() => { addMovie() });


function deleteMovie(thisButton) {

    let tr = thisButton.parent().parent();
    console.log(tr.index());
    arrMovies.splice(tr.index(), 1);

    tr.remove();


}






