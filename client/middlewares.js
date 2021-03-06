
const errorTypes = {
    ValidationError: 422,
    UniqueViolationError: 409,
  };
  
  const errorMessages = {
    UniqueViolationError: 'Already exists.',
  };
  
  function notFound(req, res, next) {
    const error = new Error(`Not found - ${req.originalUrl}`);
    res.status(404);
    next(error);
  }
  
  // eslint-disable-next-line no-unused-vars
  function errorHandler(error, req, res, next) {
    const statusCode =
      res.statusCode === 200 ? errorTypes[error.name] || 500 : res.statusCode;
    res.status(statusCode);
    res.json({
      status: statusCode,
      message: errorMessages[error.name] || error.message,
      stack: process.env.NODE_ENV === 'production' ? '🥞' : error.stack,
      errors: error.errors || undefined,
    });
  }
  function errorHandler2(err, req, res, next) {
    /* eslint-enable no-unused-vars */
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode);
    res.json({
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
      response: err.response ? err.response.data : null,
    });
  }
  module.exports = {
    notFound,
    errorHandler,
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = titleInput.value;
    const query = `
    mutation {
      createTodo(title: "${title}", done: false) {
        id
        title
        done
      }
    }`;
  }

  
