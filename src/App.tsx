import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./utils/PrivateRoute";
import Administrador from "./components/Administrador";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

require('react-bootstrap-table-next/dist/react-bootstrap-table2.min.css');

function App() {

  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", height: "100%", backgroundColor: 'gray' }}
    >
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="colored"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<Administrador />} />
        <Route
          path="adms"
          element={
            <PrivateRoute
              roles={["ADMIN", "COSTUMER"]}
              component={Administrador}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
