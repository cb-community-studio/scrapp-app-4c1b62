const users = require("./users/users.service.js");
const driver = require("./driver/driver.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    app.configure(users);
  app.configure(driver);
    // ~cb-add-configure-service-name~
};
