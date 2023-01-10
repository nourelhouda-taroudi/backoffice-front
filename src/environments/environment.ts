// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BASE_URL_BACKOFFICE:'http://localhost:9000',
  KC_URL:'http://localhost:8089/',
  KC_REALM:'EDB_TRANSFERS',
  KC_CLIENT_ID:'backoffice',
  BASE_URL_BACKOFFICE_SETTINGS:'http://ec2-18-205-161-102.compute-1.amazonaws.com:3000/api/v1',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
