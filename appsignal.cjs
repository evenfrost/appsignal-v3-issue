const { Appsignal } = require('@appsignal/nodejs');

new Appsignal({
  active: true,
  name: 'Pythia',
  environment: 'development',
  pushApiKey: '',
});
