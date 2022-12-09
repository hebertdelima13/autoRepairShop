// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiURL: 'http://localhost:3000/',
  apiURLServices: 'http://localhost:3000/services',
  apiURLServicesCount: 'http://localhost:3000/servicescount',
  apiURLServicesFinCount: 'http://localhost:3000/servfinishedcount',
  apiURLServicesUnfCount: 'http://localhost:3000/servunfinishedcount',
  apiURLServicesTotalPrice: 'http://localhost:3000/servicestotalprice',
  apiURLClients: 'http://localhost:3000/clients',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
