'use strict';

let score = 0;
confirm("This is a gussing game .hope you will like it");
var UserName = prompt('We would like to know your name before we start').toLowerCase();;


function Q0(UserName) {

    while (!UserName) {
        //console.log(UserName="")
        UserName = prompt('please give us your name').toLowerCase();
    }

    console.log('welcome ' + UserName + 'now we can start our game')
    alert('Welcome ' + UserName + ' now we can start our game');
}

Q0(UserName);




//***************************************************************************************************** *
/*
function Q1() {

    let age = prompt(UserName + ' can you guess my age? is it 55').toLowerCase();


    while (age !== 'yes' && age !== 'y' && age !== 'n' && age !== 'no') {
        age = prompt(UserName + ' try to guess is it 55?').toLowerCase();;
    }


    if (age == "no" || age == "n") {
        //console.log('right answer')
        alert('right answer');
        score++;
    }  else if (age == "yes" || age == "y") {
        //console.log('no i am only22')
        alert('no I am only 22')

    }else {
        //console.log('you did not answer by yes or no')
        alert('you did not answer by yes or no')
    }

}

Q1();

//***************************************************************************************************** *


function Q2() {


    let country = prompt(UserName + ' can you guess my country? our fav dish is Mansaf. Is it jordan').toLowerCase();


    while (country !== 'yes' && country !== 'y' && country !== 'no' && country !== 'n') {

        country = prompt(UserName + ' try to guess is it jordan?').toLowerCase();
    }

    if (country == "no" || country == "n") {
        //console.log('with mansaf and u cannot guess! shame on you')
        alert('with mansaf and u cannot guess! shame on you');
    }
    else if (country == "yes" || country == "y") {
        //console.log('right answer')
        alert('right answer');
        score++;
    }
    else {
        //console.log('you did not answer by yes or no')
        alert('you did not answer by yes or no');
    }

}
 Q2();



//******************************************************************************************************************** *


function Q3(){

    let favColor = prompt(UserName + ' what is my fav color .it is the same color as the sky. Is it blue?').toLowerCase();

    while (favColor!== 'yes' && favColor !== 'y' && favColor !== 'no' && favColor !== 'n') { 

       favColor = prompt(UserName + ' try to guess is it blue?').toLowerCase();
    }

    if (favColor == "no" || favColor == "n") {
        console.log('no?! is the sky red? your answer make no sense');
        alert('no?! is the sky red? your answer make no sense');
    }
    else if (favColor == "yes" || favColor == "y") {
        //console.log('right answer')
        alert('right answer');
         score++
    }
    else {
        console.log('you did not answer by yes or no');
        alert('you did not answer by yes or no');
    }



}

Q3();

///******************************************************************************************************************* *

function Q4(){

let cat = prompt(UserName + ' do i love cats').toLowerCase();


while (cat !== "yes" && cat!=="y" && cat !== "no"&& cat!=="n")
 { 
    cat = prompt(UserName + 'do i love cats try to guess ?').toLowerCase();
 }
if (cat == "yes" || cat == "y") {
    //console.log('great')
    alert('great ');
     score++;
}else if (cat == "no" || cat == "n") {
    //console.log('bad bad bad .I do cats are the best pets ever');
    alert('bad bad bad .I do cats are the best pets ever ');
}
else {
    //console.log('you did not answer by yes or no');
    alert('you did not answer by yes or no');
}
}



Q4();


function Q5() {

    let tall = prompt(UserName + ' do u think that i am taller than 2m').toLowerCase();

    while (tall !== "yes" && tall !== "y" && tall !== "no" && tall !== "n") {
        tall = prompt('do u think that i am taller than 2m , try to guess ?').toLowerCase();
    }
    if (tall == "yes" || tall == "y") {
        //console.log('ha ha ha . bad guess');
        alert('ha ha ha . bad guess ');
    } else if (tall == "no" || tall == "n") {
        alert('thats right');
        score++;
    }
    else {
        //console.log('you did not answer by yes or no');
        alert('you did not answer by yes or no');
    }
}

Q5();
*/


confirm('lets try something harder');

function Q6() {

    var NumbeEmployees ;

       var attempt=4;
        for (var j = 0; j < 4; j++) {
            NumbeEmployees = prompt('Our company needs to employ a number of employees in the reception department. If you know that the company receives 25 customers per day and needs one employee for every 5 customers, how many employees do we need ?').toLowerCase();
            NumbeEmployees = Number(NumbeEmployees);


            while (!NumbeEmployees) 
            {  NumbeEmployees = prompt('Our company needs to employ a number of employees in the reception department. If you know that the company receives 25 customers per day and needs one employee for every 5 customers, how many employees do we need ?').toLowerCase();
               NumbeEmployees = Number(NumbeEmployees);
             }
           
            if (NumbeEmployees === 5) {
                alert(' that\'s true  ');
                 score++;
                 break;
            } else if (NumbeEmployees > 0 && NumbeEmployees <= 4) {
                alert(' its too low ');
                attempt--;
            } else if (NumbeEmployees > 5) {
                alert(' its  too high');
                attempt--;
            };
             if (attempt===0) {
               alert('we need 5 employees  ');
             }



        }
      
    }

Q6();

/*



var myFavmovies = ['the hundred', 'planet earth', 'the wire', 'cosmos', 'avatar'];
for (var k = 0; k < 6; k++) {
    var movies = prompt('guess my favourite movies between  the hundred planet earth  the wire cosmos avatar ?').toLowerCase();
    {
        if (movies === myFavmovies[0]) {
            alert('thats right ');
            score++;

            k = 6;
        }

    }
}





alert('please visit us again  ' + UserName + ' your score is  ' + score + ' out of 7');*/