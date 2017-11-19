const { NoteValidationError } = require('../../errors');


module.exports = (_, params) => {
  if (!params.text) {
    throw new NoteValidationError({
      message: 'Note text should not be empty',
    });
  }
};
