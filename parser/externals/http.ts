import { Result } from "./../values";
const fetch = require("sync-fetch");

function HttpFetch(
  url: Result,
  method: Result = {
    type: "string",
    value: "GET",
  },
  data?: Result
): Result {
  if (data) {
    return {
      type: "string",
      value: fetch(url.value, {
        method: method.value,
        body: data.value,
      }).text(),
    };
  } else {
    return {
      type: "string",
      value: fetch(url.value, {
        method: method.value,
      }).text(),
    };
  }
}

export default {
  HttpFetch,
};
