const service = require("./service");

const getResult = (req, res) => {
  const { mode } = req.query;
  try {
    const results = service.getResult({ mode });
    res.send({ status: "OK", data: results });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getResult,
};
