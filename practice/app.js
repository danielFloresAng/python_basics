
var expect = function(val) {
  let objeto = {
    toBe: function (valB){
        if(val === valB){
          return true
        } else{
          console.lerror('Not Equal')
        }
      },
      notToBe: function (valC){
        if(val !== valC){
          return true
        } else{
          console.error('Equal')
        }
      }
  }
  return objeto
};

console.log(expect(4).notToBe(4))
