const ValidationError = require('./validation-error');


class MaximumLengthExceededError extends ValidationError{
  constructor(excessLength, maxLength = null, ...par){
    super(...par);
    this.name = 'MaximumLengthExceededError',
    this.maxLength = maxLength;
    this.excessLength = excessLength;


    if(this.maxLength !== 'number'){
    this.message = "Maximum length exceeded"
  } 
  if (this.excessLength){
    this.message = `Maximum length exceeded by ${this.excessLength}`;
  }

  }


}
// Your code here

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}