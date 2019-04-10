const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  for(let i = 0; i < array.length; i++){
    let object = array.find(object => object.result === "W");
    if(object){
      return object.year;
    }else{
      return undefined;
    }
  }
}