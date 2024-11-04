const workingHours = (req, res, next) => {
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();
  if (day >= 1 && day <= 5 && hour >= 9 && hour <= 17) {
      next();
  } else {
      res.send('Sorry, this application is only available during working hours (Monday to Friday, 9 AM to 5 PM).');
  }
};


module.exports = workingHours;
