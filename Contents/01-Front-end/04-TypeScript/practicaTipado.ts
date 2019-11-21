//Funcion random number
function getRng(numMax: number): number {


    return Math.round(Math.random() * (numMax - 1));
}
//Funcion nombre hombre
function randomManName(event: object): string {

    let arrMale: string[] = ["Boy", "Man", "Man", "Man", "Man", "Guy", "Mr.", "Doctor", "El", "Professor", "Captain", "Agent", "The", "The", "The", "The", "Lord", "Sgt.", "General"];
    let arrAdj: string[] = ["Imperial", "Amazing", "Spectular", "Dino", "Massive", "Fantastic", "Wonder", "Techno", "Electro", "Hydro", "Giant", "Super", "Incredi", "Daring", "Mega", "Tiny", "Red", "Dark", "Orange", "Screaming", "Green", "Teal", "Blue", "Golden", "Fearless", "Great", "Ameri", "Pyro", "Robo", "American", "Cyber", "Frozen"];
    let arrNames: string[] = ["Spider", "Laser", "Microbe", "Spectre", "Scan", "Badger", "Lighting", "Thunder", "Eagle", "Hurricane", "Storm", "Typhoon", "Fire", "Flame", "Flash", "Night", "Whirlwind", "Wind", "Dawn", "Light", "Dragon", "Wolf", "Vemon", "Cobra", "Viper", "Condor", "Stalker", "Panther", "Puma", "Shadow", "Freeze", "Night", "Hammer", "Mist", "Tulip", "Octopus", "Inferno", "Magma", "Patriot", "Stag", "Rhino", "Mole", "Sloth"];
    let resultado: string = `${arrMale[getRng(arrMale.length)]} ${arrAdj[getRng(arrAdj.length)]} ${arrNames[getRng(arrNames.length)]}`;

    return resultado;
}
//Funcion nombre mujer
function randomWomanName(event: object): string {

    let arrFemale: string[] = ["Girl", "Woman", "Woman", "Woman", "Woman", "Gal", "Miss", "Doctor", "Professor", "Captain", "Agent", "The", "The", "The", "Sgt.", "General"];
    let arrAdj: string[] = ["Imperial", "Amazing", "Spectular", "Dino", "Massive", "Fantastic", "Wonder", "Techno", "Electro", "Hydro", "Giant", "Super", "Incredi", "Daring", "Mega", "Tiny", "Red", "Dark", "Orange", "Screaming", "Green", "Teal", "Blue", "Golden", "Fearless", "Great", "Ameri", "Pyro", "Robo", "American", "Cyber", "Frozen"];
    let arrNames: string[] = ["Spider", "Laser", "Microbe", "Spectre", "Scan", "Badger", "Lighting", "Thunder", "Eagle", "Hurricane", "Storm", "Typhoon", "Fire", "Flame", "Flash", "Night", "Whirlwind", "Wind", "Dawn", "Light", "Dragon", "Wolf", "Vemon", "Cobra", "Viper", "Condor", "Stalker", "Panther", "Puma", "Shadow", "Freeze", "Night", "Hammer", "Mist", "Tulip", "Octopus", "Inferno", "Magma", "Patriot", "Stag", "Rhino", "Mole", "Sloth"];
    let resultado: string = `${arrFemale[getRng(arrFemale.length)]} ${arrAdj[getRng(arrAdj.length)]} ${arrNames[getRng(arrNames.length)]}`;
    return resultado;

}

//Selectores del banner y los botones
let banner: Element = document.querySelectorAll(".banner")[0];
let miBoton0: Element = document.querySelectorAll("button")[0];
let miBoton1: Element = document.querySelectorAll("button")[1];

//LastName Si se generó
let myCookie: string = document.cookie;
let lastGeneratedName: string = myCookie.split('=')[1]


//Funcion on click del boton 0
miBoton0.addEventListener(`click`, (): void => {

    let manName: string = randomManName(event);

    document.cookie = `lastGeneratedName=${manName}`
    banner.innerHTML = `<h1>${manName}</h1> <button type="button" class="btn btn-primary px-4 btn-lg returnButton">Return</button>`;
    let returnButton: Element = document.querySelectorAll(".returnButton")[0];
    returnButton.addEventListener(`click`, (): void => { window.location.reload(true) });

});


//Funcion on click del boton 1
miBoton1.addEventListener(`click`, (): void => {

    let womanName: string = randomWomanName(event);
    document.cookie = `lastGeneratedName=${womanName}`
    banner.innerHTML = `<h1>${womanName}</h1> <button type="button" class="btn btn-primary px-4 btn-lg returnButton ">Return</button>`;
    let returnButton: Element = document.querySelectorAll(".returnButton")[0];
    returnButton.addEventListener(`click`, (): void => { window.location.reload(true) });
});
