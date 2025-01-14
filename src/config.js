const config = {
  development: {
    apiBaseUrl: process.env.REACT_APP_API_BASE_URL,
  },
  production: {
    apiBaseUrl: process.env.REACT_APP_API_BASE_URL,
  },
};

const env = process.env.NODE_ENV || "development";
export default config[env];
