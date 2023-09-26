//write a test case for code which willc.
function CheckCharTwice(str){
    let duplicatesChar = [];
    let mapStrChar = {};
    
    //counting char occurrence
    for(let i=0;i<str.length;i++){
        if(!(mapStrChar[str[i]])){
            mapStrChar[str[i]] = 1
        }else{
            mapStrChar[str[i]] += 1
        }
    }
    //finding duplicates
    for(let el in mapStrChar){
        if(mapStrChar[el]===2){
            duplicatesChar.push(el)
        }
    }

    return duplicatesChar;
}

function testCheckCharTwice() {
    // Test case 1: No duplicates
    const result1 = CheckCharTwice('abcdefg');
    if (JSON.stringify(result1) === JSON.stringify([])) {
      console.log('Test case 1: Passed');
    } else {
      console.error('Test case 1: Failed');
    }
  
    // Test case 2: Single duplicate
    const result2 = CheckCharTwice('hello');
    if (JSON.stringify(result2) === JSON.stringify(['l'])) {
      console.log('Test case 2: Passed');
    } else {
      console.error('Test case 2: Failed');
    }
  
    // Test case 3: Multiple duplicates
    const result3 = CheckCharTwice('programming');
    //console.log(result3)
    if (JSON.stringify(result3) === JSON.stringify(['r', 'g', 'm'])) {
      console.log('Test case 3: Passed');
    } else {
      console.error('Test case 3: Failed');
    }
  
    // Test case 4: Empty string
    const result4 = CheckCharTwice('');
    if (JSON.stringify(result4) === JSON.stringify([])) {
      console.log('Test case 4: Passed');
    } else {
      console.error('Test case 4: Failed');
    }
  
    // Test case 5: Whitespace
    const result5 = CheckCharTwice('   ');
    if (JSON.stringify(result5) === JSON.stringify([' '])) {
      console.log('Test case 5: Passed');
    } else {
      console.error('Test case 5: Failed');
    }
  }
  
  // Run the test cases
  testCheckCharTwice();