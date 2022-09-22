import { render } from 'preact'
import { App } from './app'
import 'bootstrap/dist/css/bootstrap.min.css';
import {app} from './base';
import { Auth0Provider } from "@auth0/auth0-react";

app;

render(
    <Auth0Provider
    domain="dev-mzeosm06.us.auth0.com"
    clientId="CacC15GhtJuc82HKGRcaAoY7R23LgjrC"
    redirectUri={window.location.origin}>
        <App />
    </Auth0Provider>
    ,
    document.getElementById('app'))
