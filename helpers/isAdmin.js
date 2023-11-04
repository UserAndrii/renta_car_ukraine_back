const { ADMIN } = process.env;

const isAdmin = (email, verify) => {
  return ADMIN.split(',').includes(email) && verify;
};

module.exports = isAdmin;
