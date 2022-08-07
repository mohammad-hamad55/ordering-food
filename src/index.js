import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import myStore from "./store";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={myStore}>
    <App />
  </Provider>
);
