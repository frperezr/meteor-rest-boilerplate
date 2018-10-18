import { setupApi } from './express-server';

Meteor.startup(() => {
  setupApi();
});
