import { render } from 'preact'
import { App } from './app'
import 'bootstrap/dist/css/bootstrap.min.css';
import {app} from './base';

app;

render(<App />, document.getElementById('app'))
