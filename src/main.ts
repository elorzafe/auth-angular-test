import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Amplify from 'aws-amplify';

Amplify.configure({
  Auth: {
    identityPoolId: "config.aws_cognito_identity_pool_id",
    region: "config.aws_project_region",
    identityPoolRegion: "config.aws_cognito_region",
    userPoolId: "config.aws_user_pools_id",
    userPoolWebClientId: "config.aws_user_pools_web_client_id",
    authenticationFlowType: 'USER_PASSWORD_AUTH'
  },
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
