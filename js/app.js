'use strict'
let score=0;
confirm("This is a gussing game .hope you will like it");

let UserName=prompt('We would like to know your name before we start')
UserName=UserName.toLowerCase()
while(UserName==''){//console.log(UserName="")
    UserName=prompt('please give us your name')}
//console.log('welcome '+ UserName + 'now we can start our game')
alert('Welcome '+  UserName + ' now we can start our game')

let age=prompt(UserName + ' can you guess my age? is it 55')

age=age.toLowerCase();
while(age==""&&age!="yes"&&age!="no"){age=prompt(UserName +' try to guess is it 55?')}
if( age =="no"||age=="n"){//console.log('right answer')
alert('right answer');score++;}


else if( age =="yes"||age=="y"){//console.log('no i am only22')
alert('no I am only 22')}
else{//console.log('you did not answer by yes or no')
    alert('you did not answer by yes or no')}

let country=prompt(UserName + ' can you guess my country? our fav dish is Mansaf. Is it jordan')

country=country.toLowerCase();
while(country==""&&country!="yes"&&country!="no"){country=prompt(UserName +' try to guess is it jordan?')}
if ( country =="no"||country=="n"){//console.log('with mansaf and u cannot guess! shame on you')
    alert('with mansaf and u cannot guess! shame on you')}
else if( country =="yes"|| country =="y"){//console.log('right answer')
    alert('right answer');score++;}
else{//console.log('you did not answer by yes or no')
    alert('you did not answer by yes or no')}


let favColor=prompt(UserName + ' what is my fav color .it is the same color as the sky. Is it blue?')
favColor=favColor.toLowerCase();

while(favColor==""&&favColor!="no"&&favColor!="yes"){favColor=prompt(UserName+' try to guess is it blue?')}
if ( favColor =="no"||favColor=="n"){//console.log(''no?! is the sky red? your answer make no sense')
    alert('no?! is the sky red? your answer make no sense')}
else if( favColor =="yes"||favColor=="y"){//console.log('right answer')
    alert('right answer');score++}
else{//console.log('you did not answer by yes or no')
    alert('you did not answer by yes or no')}



let cat=prompt(UserName + ' do i love cats')
cat=cat.toLowerCase();
while(cat==""&&cat!="yes"&&cat!="no"){age=prompt(UserName+' try to guess ?')}
if ( cat =="yes"||cat=="y"){//console.log('great')
    alert('great ');score++;}
else if( cat =="no"||cat=="n"){//console.log('bad bad bad .I do cats are the best pets ever')
    alert('bad bad bad .I do cats are the best pets ever ')}
else{//console.log('you did not answer by yes or no')
    alert('you did not answer by yes or no')}


let tall=prompt(UserName + ' do u think that i am taller than 2m')
tall=tall.toLowerCase();
while(tall==""&&tall!="yes"&&tall!="no"){tall=prompt(UserName+' try to guess ?')}
if ( tall =="yes"||tall=="y"){//console.log('ha ha ha . bad guess')
    alert('ha ha ha . bad guess ')}
else if( tall =="no"||tall=="n"){alert('thats right');score++;}
else{//console.log('you did not answer by yes or no')
    alert('you did not answer by yes or no')}
confirm('lets try something harder')


var NumbeEmployees = prompt('Our company needs to employ a number of employees in the reception department. If you know that the company receives 25 customers per day and needs one employee for every 5 customers, how many employees do we need ?').toLowerCase();var  NumbeEmployees = Number(NumbeEmployees);
if (NumbeEmployees === 5) {
  alert(' that\'s true  ');  score++;} else {
  for (var j = 0; j < 4; j++) {    NumbeEmployees = prompt('Our company needs to employ a number of employees in the reception department. If you know that the company receives 25 customers per day and needs one employee for every 5 customers, how many employees do we need ?').toLowerCase();    NumbeEmployees = Number(NumbeEmployees);    if (NumbeEmployees === 5) {
      alert(' that\'s true  ');      score++;    } else if (NumbeEmployees > 0 && NumbeEmployees <= 4) {      alert(' its too low ');    } else {      (NumbeEmployees > 5);      alert(' its  too high');    }  }  alert('we need 5 employees  ');}


    
var myFavmovies = ['the hundred','planet earth' ,'the wire','cosmos', 'avatar'];

    if (movies === myFavmovies[0]) {
      alert('thats right ');
      score++;
     
     
    } else if   (movies!=myFavmovies[0] ){for (var k = 0; k < 6; k++) {
        var movies = prompt('guess my favourite movies between  the hundred planet earth  the wire cosmos avatar ?').toLowerCase();}
         { alert ('my fav is the hundred')
  }
}
  




alert('please visit us again ' + UserName + 'your score is  ' + score +' out of 7' )
