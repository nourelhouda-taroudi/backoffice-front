import { KeycloakService } from 'keycloak-angular';

export const initializeKeycloak = (keycloak: KeycloakService)=> {
  return () =>
    keycloak.init({
      config: {
        url: 'http://ec2-44-202-143-82.compute-1.amazonaws.com:8089/',
        realm: 'EDB_TRANSFERS',
        clientId: 'backoffice',
      },
      initOptions: {
        // checkLoginIframe: false,
        onLoad: 'login-required',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',
      },
    });
}
