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
      nopage={"http://highmountainlabs.io/arclight/cdn/media/404.jpg"}
      socketEndpoint={`http://localhost:7001`}
      loader={`https://highmountainlabs.io/arclight/cdn/media/cruxdraft.png`}
      background={{
        src: `http://localhost:7001/static/media/65867bf89797917cc725ea5c.jpg`,
        opacity: 0.05,
      }}
      pages={{
        admin: {
          Home: {
            route: "/",
            backgroundImage:
              "http://localhost:7001/static/media/65ae9dd7aba9a954414b8085.jpg",
            authBackgroundImage:
              "http://localhost:7001/static/media/65ae9dceaba9a954414b8078.jpg",
            noSelect:
              "https://highmountainlabs.io/arclight/cdn/media/cruxdraft.png",
          },
        },
        _root_: {
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
