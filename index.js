// instagram object 
const instagramPost =[
    authorhandle= "justin bieber",
    contentpost= "new music out tomorrow by 2pm w.a.t",
    imagepost = url('img/wizkid.jpg'),
    viewsnumber = 12300,
    likesnumber= 500000
];
// 2. create 2 instagram post objects
console.log(instagramPost[2]);
console.log(instagramPost[0]);

function createPerson(musaName, musaAge, musaLocation){
    return{
        musaName: musaName,
        musaAge: musaAge,
        musaLocation: musaLocation,
        getFullDetails(){
            return musaName + '' + musaAge+ '' + musaLocation
        },
    };
}
 let person1 = createPerson('musa', 19, 'lekki, lagos state');
 console.log(person1.getFullDetails());

//  3b
function createJambScores(Eng, Govt, Lit, Crk){
    return{
        Eng: Eng,
        Govt: Govt,
        Lit: Lit,
        Crk: Crk,
        getFullScores(){
            return Eng + ',' + Govt + ',' + Lit + ',' + Crk
        },
    };
}
 let jambScores= createJambScores(70, 85, 82, 94);
 console.log(jambScores.getFullScores());

//  no 4
//  By using JSON parsing
//  By calling the object.assign() function

//  no 5; for in and for of
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 };
 
 for (const value in presidentialCandidates){
   console.log(presidentialCandidates.forEach(myFunction) + "is the presidential candidate of" + value)
 }
 