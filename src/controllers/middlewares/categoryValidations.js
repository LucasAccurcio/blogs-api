module.exports = (req, res, next) => {
  try {
    const bodyKeys = Object.keys(req.body);
    if (bodyKeys[0] !== 'name') return res.status(400).json({ message: '"name" is required' });

    const { name } = req.body;
    if (!name || name === '') return res.status(400).json({ message: '"name" is required' });

    next();
  } catch (err) {
    next(err);
  }
};