const express = require('express');
const lodash = require('lodash');

const router = express.Router();

router.get('/hello', function (req, res) {

    //using chunk function
    let months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    let mChunk = lodash.chunk(months, 4)
    console.log(mChunk)
    res.send('My first ever api!')


    //using tail function
    let odd = []
    for (i = 0; odd.length < 10; i++) {
        if (i % 2 !== 0) {
            odd.push(i)
        }
    }
    let firstTenOdd = lodash.tail(odd)
    console.log(firstTenOdd)


    //using union function
    let a1 = [1, 2, 3 ]
    let a2 = [2, 3, 4]
    let a3 = [4, 5, 6, 7]
    let a4 = [5, 3, 6]
    let a5 = [7, 8, 9]
    let combinedArray = lodash.union(a1, a2, a3, a4, a5)
    console.log(combinedArray)


    //using fromPairs function
    let arr = [
        ['horror', 'The Shining'],
        ['drama', 'Titanic'],
        ['thriller', 'Shutter Island'],
        ['fantasy', 'Pans Labyrinth']
    ]
    let objArr = lodash.fromPairs(arr);
    console.log(objArr)
});



// API Assignment

let moviesList = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']

// 1. API for GET/movies
router.get('/movies', function (req, res) {
    res.send(moviesList)
})

// 2/3. API for GET /movies/:indexNumber and handling
router.get('/movies/:indexNumber', function (req, res) {
    if (req.params.indexNumber < moviesList.length) {
        var returnValue = moviesList[req.params.indexNumber]
    } else {
        returnValue = "Please enter a valid index number only between 0 and " + (moviesList.length - 1)
    }
    res.send(returnValue)

})




// API assignment

var moviesObj = [{
    'id': 1,
    'name': 'The Shining'
}, {
    'id': 2,
    'name': 'Incendies'
}, {
    'id': 3,
    'name': 'Rang de Basanti'
}, {
    'id': 4,
    'name': 'Finding Nemo'
}]

// 4. API for GET/films
router.get('/films', function (req, res) {
    res.send(moviesObj)
})

// 5. API for GET/films/:filmId and handling
router.get('/films/:filmId', function (req, res) {
    function movieInfo() {
        for (var i = 0; i < moviesObj.length; i++) {
            if (moviesObj[i].id === parseInt(req.params.filmId)) {
                return moviesObj[i]
            }
        }
        return "No movie exists with this id"
    }
    res.send(movieInfo())
})




//Pritesh sir assignment

//1.API to find missing number in the array [1,2,3,5,6,7]
router.get("/sol1", function (req, res) {
   let arr= [1,2,3,5,6,7]
 
   let total = 0;
   for (var i in arr) {
       total += arr[i];
   }
 
   let lastDigit= arr.pop()
   let consecutiveSum= lastDigit * (lastDigit+1) / 2
   let missingNumber= consecutiveSum - total
 
   res.send('The missing number is: '+ missingNumber);
 });


//2.API to find missing number in the array
router.get("/sol2", function (req, res) {
   let arr= [33, 34, 35, 37, 38]
   let len= arr.length
 
   let total = 0;
   for (var i in arr) {
       total += arr[i];
   }
 
   let firstDigit= arr[0]
   let lastDigit= arr.pop()
   let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
   let missingNumber= consecutiveSum - total
  
   res.send('The missing number is: '+ missingNumber);
 });



module.exports = router;