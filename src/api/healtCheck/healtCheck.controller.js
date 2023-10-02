const healtCheckHanlder = (req, res) => {
  res.status(200).json({ message: 'Server OK', uptime: process.uptime() });
};

module.exports = healtCheckHanlder;