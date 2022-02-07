module.exports = (req, res, next) => {
  const bodyKeys = Object.keys(req.body);
  if (bodyKeys[0] !== 'email') {
    return res.status(400).json({ message: '"email" is required' });
  }
  if (bodyKeys[1] !== 'password') {
    return res.status(400).json({ message: '"password" is required' });
  }
  if (req.body.email === '') {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }
  if (req.body.password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }
  return next();
};