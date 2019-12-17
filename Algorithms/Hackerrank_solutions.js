// ******************************
// Fizz Buzz
// ******************************

for (let i=1; i <= 100; i++) {
    switch(0) {
      case i%15 === 0: 
        console.log('FizzBuzz')
        break;
  
      case i%5 === 0:
        console.log('Fuzz')
        break;
  
      case i%3 === 0:
        console.log('Fizz')
        break;
  
      default:
        console.log(i)
        break;
    }    
  }
  
// *****************************
  
  for (var n = 1; n <= 100; n++) {
    var output = "";  
    if (n % 3 == 0)
      output = "Fizz";
    if (n % 5 == 0)
      output += "Buzz";
    console.log(output || n);
  }


// ******************************
// Anagram
// ******************************
function anagram(s) {
    
  // return -1 if s.length equal to odd number
  // divide given string into 2 strings
  // loop over s1 and check if it includes in s2
  // create var count to store the numbers of changes
  
  let len = s.length
  
  if(len % 2 !== 0){return -1} 
  
  let s1 = s.substring(0, len/2)
  let s2 = s.substring(len/2, len)
  // console.log(s1=aaa, s2=bbb)
  let count = 0;
  
  for(let i = 0; i < len/2; i++){
      s2.includes(s1[i]) ? s2=s2.replace(s1[i],"") : count++;
  }
  return  count;
}

// ******************************
// Drawing Book
// ******************************
function pageCount(n, p) {
 
    const Turns = Math.floor(p / 2);
    const maxTurns = Math.floor(n / 2);

    return Math.min(Turns, maxTurns - Turns);

}

// ******************************
// Electronics Shop
// ******************************
function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let costs = [];
    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            costs[costs.length] = keyboards[i] + drives[j];
        }
    }

    if (costs.filter(cost => (cost <= b)).length != 0) {
        return  Math.max.apply(Math, costs.filter(cost => (cost <= b)));
    } else {
        return -1;
    }

}
// ******************************
// Picking Numbers
// ******************************
function pickingNumbers(a) {
    // Write your code here
    
    const newArray = new Array(100);
    newArray.fill(0);
    
    if(!a || a.length == 0) { 
        return 0; 
    }
 
    const arrayLength = a.length;
  
    for(let i=0; i< arrayLength; i++) {
      newArray[a[i]] += 1;
    }
  
    let max = 0;
    for(let j=1; j< 100; j++) {
      let newVal = newArray[j];
      let oldVal = newArray[j - 1];
      if(oldVal != 0 && oldVal + newVal > max) {
        max = oldVal + newVal
      };
    }
  
    return max;
}

// ******************************
// The Hurdle Race
// ******************************
function hurdleRace(k, height) {
    //minD represent minimum dose
    let minD = 0;
    let max = Math.max(...height);
    
    if(k > max){minD = 0}
    
    if(k < max){minD = max - k}
    
    return minD;
}

// ******************************
//Angry Professor
// ******************************
function angryProfessor(k, a) {
    let earlyArray = [];
    let lateArray = [];
    for (let i = 0; i < a.length; i++){
        if(a[i] <= 0){
            earlyArray.push(i);
        }
        if(a[i] > 0){
            lateArray.push(i);
        }
    }
    let yes = earlyArray.length;
    let no = lateArray.length;
    if(yes < k){
        return "YES";
    }else {return "NO";}
}

// ******************************
// Cavity Map
// ******************************
// Complete the cavityMap function below.
function cavityMap(grid) {
    for (let i = 1; i < grid.length - 1; i++) {
        for (let j = 1; j < grid[i].length - 1; j++) {
            if (grid[i][j] > grid[i][j + 1] && grid[i][j] > grid[i][j - 1] &&
                grid[i][j] > grid[i - 1][j] && grid[i][j] > grid[i + 1][j]) {
                    
                let toString = grid[i].split('');
                toString.splice(j, 1, 'X');
                toString = toString.join('');
                grid[i] = toString;
            }
        }
    }
    return grid;
}

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************

// ******************************
// Linked LIst
// ******************************