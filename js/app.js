'use strict'

alert('This is a gussing game .hope you will like it ')
let UserName=prompt('We would like to know your name before we start')
UserName=UserName.toLowerCase()
while(UserName==''){//console.log(UserName="")
    UserName=prompt('please give us your name')}
//console.log('welcome '+ UserName + 'now we can start our game')
alert('Welcome '+  UserName + ' now we can start our game')

let age=prompt(UserName + ' can you guess my age? is it 55')

age=age.toLowerCase();
while(age==""&&age!="yes"&&age!="no"){age=prompt(UserName +' try to guess is it 55?')}
if ( age =="yes"){//console.log('no i am only22')
    alert('no I am only 22')}
else if( age =="no"){//console.log('right answer')
    alert('right answer')}
else{//console.log('you did not answer by yes or no')
    alert('you did not answer by yes or no')}

let country=prompt(UserName + ' can you guess my country? our fav dish is Mansaf. Is it jordan')

country=country.toLowerCase();
while(country==""&&country!="yes"&&country!="no"){country=prompt(UserName +' try to guess is it jordan?')}
if ( country =="no"){//console.log('with mansaf and u cannot guess! shame on you')
    alert('with mansaf and u cannot guess! shame on you')}
else if( country =="yes"){//console.log('right answer')
    alert('right answer')}
else{//console.log('you did not answer by yes or no')
    alert('you did not answer by yes or no')}


let favColor=prompt(UserName + ' it is the same color as the sky. Is it blue?')
favColor=favColor.toLowerCase();

while(favColor==""&&favColor!="no"&&favColor!="yes"){favColor=prompt(UserName+' try to guess is it blue?')}
if ( favColor =="no"){//console.log(''no?! is the sky red? your answer make no sense')
    alert('no?! is the sky red? your answer make no sense')}
else if( favColor =="yes"){//console.log('right answer')
    alert('right answer')}
else{//console.log('you did not answer by yes or no')
    alert('you did not answer by yes or no')}



let cat=prompt(UserName + ' do i love cats')
cat=cat.toLowerCase();
while(cat==""&&cat!="yes"&&cat!="no"){age=prompt(UserName+' try to guess ?')}
if ( cat =="yes"){//console.log('great')
    alert('great ')}
else if( cat =="no"){//console.log('bad bad bad .I do cats are the best pets ever')
    alert('bad bad bad .I do cats are the best pets ever ')}
else{//console.log('you did not answer by yes or no')
    alert('you did not answer by yes or no')}


let tall=prompt(UserName + ' do u think that i am taller than 2m')
tall=tall.toLowerCase();
while(tall==""&&tall!="yes"&&tall!="no"){tall=prompt(UserName+' try to guess ?')}
if ( tall =="yes"){//console.log('ha ha ha . bad guess')
    alert('ha ha ha . bad guess ')}
else if( tall =="no"){alert('thats right')}
else{//console.log('you did not answer by yes or no')
    alert('you did not answer by yes or no')}


alert('please visit us again ' + UserName)
