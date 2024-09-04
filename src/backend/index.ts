const BACKEND = "backend_a";


interface IOptions {
  backend: string,
  fastly: {
    decompressGzip: boolean,
  },
  headers?: Headers,
}

async function fetch_decompress(path: string) {
  const options: IOptions = {
    backend: BACKEND,
    fastly: {decompressGzip: true },
  };
  const resp = await fetch(path, options);
  const body = await resp.json();
  return body;
}


async function get_events () {
  const events_path = "/api/events/";
  return await fetch_decompress(events_path);
}


export { get_events };
