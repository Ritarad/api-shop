const { Types } = require('mongoose');

function updateProductValidation(id, data) {
  if (
    !data ||
    (!data.hasOwnProperty('title') && !data.hasOwnProperty('description'))
  ) {
    throw new Error('data is required. Check if it is provided and object');
  }

  if (!Types.ObjectId.isValid(id)) {
    throw new Error('id is required. Check if it is provided and string');
  }
}

module.exports = { updateProductValidation };
