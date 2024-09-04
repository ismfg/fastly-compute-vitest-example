/// <reference types="@fastly/js-compute" />
// import { CacheOverride } from "fastly:cache-override";
// import { Logger } from "fastly:logger";

import { Hono, Context } from 'hono';
import { HTTPException } from 'hono/http-exception'

import { routes } from '../routes'
import { get_auth_secret } from '../store';

const app = new Hono();

async function auth_middleware(c: Context,  next: () => any) {
  const key = c.req.header("Edge-Auth");
  if (key) {
    c.req.raw.headers.delete("Edge-Auth");
    const secret = await get_auth_secret();
    if (key != secret) {
      throw new HTTPException(401, {message: 'Not Authorized'});
    }
  } else {
    throw new HTTPException(401, {message: 'Not Authorized'});
  }
  await next();
};

app.use('*', auth_middleware);

routes(app);

export { app };
