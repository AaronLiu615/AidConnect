import React from "react";
import ReactDOM from "react-dom/client";
import MapContainer from "./MapContainer";
import NewsContainer from "./NewsContainer";

ReactDOM.createRoot(document.getElementById("root")).render(
    <div>
        <MapContainer />
        <NewsContainer />
    </div>
);