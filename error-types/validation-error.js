// Your code here
class ValidationError extends Error{
  constructor(message, ...par){
    super(...par)
    this.name = 'ValidationError';
    this.message = message;
  
  if(typeof this.message !== 'string'){
    this.message = "Invalid input"
  }
  if(Error.captureStackTrace){
    Error.captureStackTrace(this, ValidationError);}
  
  }

}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = ValidationError;
} catch {
  module.exports = null;
}