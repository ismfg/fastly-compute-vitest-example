import { ConfigStore } from "fastly:config-store";

async function get_auth_secret() {
  const authStore = new ConfigStore("auth_store_link");
  const secret = authStore.get("auth_secret");
  return secret;
}

export { get_auth_secret };

