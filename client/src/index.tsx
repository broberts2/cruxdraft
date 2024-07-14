import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "@highmountainlabs/arclight-ui";
import reportWebVitals from "./reportWebVitals";
import "./style.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App
      nopage={"http://highmountainlabs.io/cdn/arclight/media/404.jpg"}
      socketEndpoint={
        process.env.REACT_APP_ENVIRONMENT === "production"
          ? `https://highmountainlabs.io:7001`
          : `http://localhost:7001`
      }
      loader={`https://highmountainlabs.io/cdn/arclight/media/cruxdraft.png`}
      background={{
        src:
          process.env.REACT_APP_ENVIRONMENT === "production"
            ? `https://highmountainlabs.io:7001`
            : `http://localhost:7001/static/media/65867bf89797917cc725ea5c.jpg`,
        opacity: 0.05,
      }}
      pages={{
        admin: {
          Home: {
            route: "/",
            backgroundImage:
              process.env.REACT_APP_ENVIRONMENT === "production"
                ? `https://highmountainlabs.io:7001`
                : "http://localhost:7001/static/media/65ae9dd7aba9a954414b8085.jpg",
            authBackgroundImage:
              process.env.REACT_APP_ENVIRONMENT === "production"
                ? `https://highmountainlabs.io:7001`
                : "http://localhost:7001/static/media/65ae9dceaba9a954414b8078.jpg",
            noSelect:
              process.env.REACT_APP_ENVIRONMENT === "production"
                ? `https://highmountainlabs.io:7001`
                : "https://highmountainlabs.io/cdn/arclight/media/cruxdraft.png",
          },
        },
        crux: {
          Home: { route: "/", component: require("./pages/Home") },
          DraftApp: {
            route: "/cruxdraft",
            component: require("./pages/DraftApp"),
          },
        },
      }}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
