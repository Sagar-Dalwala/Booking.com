class apiError extends Error {
  constructor(
    status,
    message = "Internal Server Error",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.status = status;
    this.message = message;
    this.data = null;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { apiError };
