let firstnum = 0
let secondnum = 0


function luck_check(string) {
 if (string === NaN) {
   return "Enter a valid number:"}
 else {
  let digits = string.split('')
  for (i = 0 ; i < (digits.length / 2); i++) {
    firstnum += parseInt(digits[i])
    console.log(digits[i])
  }
  console.log('-----')
  for (i = (digits.length / 2); i<digits.length ; i++) {
             secondnum += parseInt(digits[i])
             console.log(digits[i])

         }
     return (firstnum === secondnum)
     }
   }

  console.log(luck_check('003111'))
console.log(luck_check('5673111'))
