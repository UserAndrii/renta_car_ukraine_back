const transformStringFields = req => {
  if (req.body.accessories) {
    req.body.accessories = req.body.accessories.includes(', ')
      ? req.body.accessories.split(', ')
      : [req.body.accessories];
  }

  if (req.body.functionalities) {
    req.body.functionalities = req.body.functionalities.includes(', ')
      ? req.body.functionalities.split(', ')
      : [req.body.functionalities];
  }
};

module.exports = transformStringFields;
