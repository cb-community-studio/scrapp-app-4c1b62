const { Driver } = require('./driver.class');
const createModel = require('../../models/driver.model');
const hooks = require('./driver.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/driver', new Driver(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('driver');

  service.hooks(hooks);
};