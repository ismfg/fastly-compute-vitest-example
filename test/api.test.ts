import { describe, expect, test, vi, afterEach, beforeEach } from 'vitest';
import { showRoutes } from 'hono/dev'
import { testClient } from 'hono/testing'
import * as backend from '../src/backend';
import * as store from '../src/store';

import { app } from '../src/app';

vi.mock("../src/backend");
vi.mock("../src/store");

const options = {
  headers: {
    "edge-auth": "foo",
  },
};

describe('api', async () => {

  beforeEach(() => {
    vi.mocked(store.get_auth_secret).mockResolvedValue("foo");  
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
  });

  describe('current event', async () => {
    
    test('current event is null in preseason', async () => {
      const event_data = [
        { id: "1", is_current: false},
        { id: "2", is_current: false},
      ];
      vi.mocked(backend.get_events).mockResolvedValue(event_data);
      const resp = await app.request('/api/current-event/', options);
      const result = await resp.json();
      expect(result).toBeNull();
    });

  });
});
