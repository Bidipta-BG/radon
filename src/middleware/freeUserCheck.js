const freeUserCheckMW = async function (req, res, next) {
  let isFreeUser = req.header.isFreeAppUser;
  if (!isFreeUser) {
    res.send({
      Error: "Resquest is missing a mandatory header: isFreeAppUser",
    });
  } else {
    next();
  }
};


module.exports.freeUserCheckMW = freeUserCheckMW;
