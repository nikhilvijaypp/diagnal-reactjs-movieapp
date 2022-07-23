const BASE_URL = process.env.REACT_APP_BASE_URL;
const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;
const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

let APP_URL = "";

if (process.env.NODE_ENV === "development") {
  APP_URL = BASE_URL;
} else if (process.env.NODE_ENV === "production") {
  APP_URL = SERVER_BASE_URL;
}

export { APP_URL,IMAGE_URL };
