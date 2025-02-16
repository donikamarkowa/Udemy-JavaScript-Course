'use strict';

const scoreDolphins1 = 44;
const scoreDolphins2 = 23;
const scoreDolphins3 = 71;

const scoreKoalas1 = 65;
const scoreKoalas2 = 54;
const scoreKoalas3 = 49;

const calcAverage = (firstScore, secondScore, thirdScore) => (firstScore + secondScore + thirdScore) / 3;

const scoreDolphins = calcAverage(scoreDolphins1, scoreDolphins2, scoreDolphins3);
const scoreKoalas = calcAverage(scoreKoalas1, scoreKoalas2, scoreKoalas3);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  }
  else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  }
  else {
    console.log('No team wins...');
  }
}

checkWinner(scoreDolphins, scoreKoalas);
