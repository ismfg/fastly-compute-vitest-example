import { Hono } from 'hono'

import { get_events } from '../backend';

function isCurrentEvent(event: { is_current: boolean; }) {
  return event.is_current;
}

const current_event = new Hono()
  .get('/', async context => {
    const body = await get_events();
    let current = body.find(isCurrentEvent);
    if (current === undefined) {
      current = null;
    };
    let res = context.json(current);
    return res;
  });

export { current_event };
