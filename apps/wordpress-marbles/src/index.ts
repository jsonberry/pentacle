import { createServer } from 'http';
import { app } from './app';

createServer(app).listen(8080); // TODO get port from process
