import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App"; 
import "./assets/index.css";
import { useNavigate } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>
);


const handleClickFunction = (text,index) => {
  const navigate = useNavigate();
  const itemName = text.replace(/ /g, '-');
  navigate(`/Sub-category/${itemName}`, { state: {text, index}});
  console.log(text);
  displayFirstDropdown();
};
export default handleClickFunction;