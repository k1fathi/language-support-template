const config = {
  development: {
    apiBaseUrl:
      process.env.REACT_APP_API_BASE_URL || "http://localhost:3001/api/v1",
  },
  production: {
    apiBaseUrl: process.env.REACT_APP_API_BASE_URL || "http://www.vibte.online:3001/api/v1",
  },
};

// Use the environment variable set by Create React App
const env = process.env.NODE_ENV || "development";

export default config[env];
