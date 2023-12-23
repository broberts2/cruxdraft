const server = require("@highmountainlabs/arclight-server");

server({
  rootDirectory: __dirname,
  database: "cruxdraft",
  publicURI: `https://crux.highmountainlabs.org/arclight`,
  port: 7000,
  cert: {
    key: `${root}/privkey.pem`,
    cert: `${root}/cert.pem`,
    ca: `${root}/chain.pem`,
  },
});
