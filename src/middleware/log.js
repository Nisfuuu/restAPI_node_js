const logRequest = (req, res, next) => {
  console.log("log requst ke PATH: ", req.path);
  next();
};

module.exports = logRequest;
