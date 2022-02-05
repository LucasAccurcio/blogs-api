module.exports = (err, _req, res, _next) => {
  console.error(err);
  res
    .status(500)
    .json({ code: 500, message: 'error de processamento nos dados' });
};