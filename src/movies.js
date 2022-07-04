// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let allDirectors = moviesArray.map((eachMovie) => {
    return eachMovie.director;
  });
  return allDirectors;
}

//console.log (getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let filteredMovies = moviesArray.filter((eachMovie) => {
    if (
      eachMovie.director === 'Steven Spielberg' &&
      eachMovie.genre.includes('Drama')
    ) {
      return true;
    }
  });
  return filteredMovies.length;
}


//let spilbergMoviesTotal = howManyMovies(movies);
//console.log (spilbergMoviesTotal)

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

  let averageScore = moviesArray.reduce((acc, movie) => {
      return acc + movie.score;
  }, 0);
  let average = averageScore / moviesArray.length;
  let avg2Decimals = average.toFixed(2);
  let avg2DecimalsNumber = Number(avg2Decimals);
  return avg2DecimalsNumber;
}

//console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter((eachMovie) => {
  if (eachMovie.genre.includes('Drama')) {
      return true;
    }
  });

  let dramaScoresSum = dramaMovies.reduce((acc, movie) => {
    return acc + movie.score;
  }, 0);
  let average = dramaScoresSum / dramaMovies.length;
  let avg2Decimals = average.toFixed(2);
  let avg2DecimalsNumber = Number(avg2Decimals);
  return avg2DecimalsNumber;
}

//console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
  let orderedMovies= moviesArray.sort((elem1, elem2) => {
    if (elem1.year > elem2.year) {
      return 1;
    } else if (elem2.year > elem1.year) {
      return -1;
    } else if (elem1.year === elem2.year) {
       if (elem1.title>elem2.title){
        return 1
       }else if (elem2.title>elem1.title){
        return -1
       }
    }else {
      return 0;
    }
  });
  return orderedMovies
}

//let moviesCopy = JSON.parse(JSON.stringify(movies));
//console.log(orderByYear(moviesCopy))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))
  moviesArrayCopy.sort((elem1, elem2) => {
    if (elem1.title > elem2.title) {
      return 1;
    } else if (elem2.title > elem1.title) {
      return -1;
    } else {
      return 0;
    }
  });

  return moviesArrayCopy.splice(0,19)
}

//let moviesCopy2 = JSON.parse(JSON.stringify(movies));
//console.log(orderAlphabetically(moviesCopy2))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}

