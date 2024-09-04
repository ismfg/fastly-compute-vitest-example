import path from 'path'
import { defineConfig } from 'vitest/config'

import fastlyCompute from 'vite-plugin-fastly-js-compute'

export default defineConfig({
  plugins: [fastlyCompute()],
  test: {
    globals: true,
    include: ['./test/*.+(ts|tsx|js)'],
    exclude: ['./vitest.config.ts', './test/data/*'],
  },
})
