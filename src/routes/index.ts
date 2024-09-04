import { Hono } from 'hono';

import { current_event } from './current_event';

export const routes = (app: Hono) => {

  app.route('/api/current-event/', current_event);

}
