export const errorHandlerMiddleware = async (err, req, res, next) => {
  console.log(err);
  res.status(501).send(err);
};
