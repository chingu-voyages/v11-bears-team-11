import Validator from "validator";
import isEmpty from "is-empty";

function validateMessageInput(data) {
  const errors = {};
  /**
   * convert empty fields to an empty string so we can use validator
   */

  data.body = !isEmpty(data.body) ? data.body : "";
  data.author = !isEmpty(data.author) ? data.author : "";

  // check empty fields

  if (Validator.isEmpty(data.body)) {
    errors.noteBody = "Note body  field is Required";
  }

  if (Validator.isEmpty(data.author)) {
    errors.noteAuthor = "Note author  field is Required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

export default validateMessageInput;
