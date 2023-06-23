const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const moduleFederationConfig = module.exports = withModuleFederationPlugin({
  name: 'mfsimasc-conciliacion',
  exposes: {
    './ConciliacionModule': './src/app/conciliacion/conciliacion.module.ts',
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});

moduleFederationConfig.output.publicPath = "http://localhost:4202/";
module.exports = moduleFederationConfig;
