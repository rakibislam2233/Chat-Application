export const globalErrorHandler = (error, req, res, next) => {
  const statusCode = 500;
  const success = false;
  let message = error.message || "Something went wrong!";
  res.status(statusCode).json({
    success,
    message,
    error,
  });
};
