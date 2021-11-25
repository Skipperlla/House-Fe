import { useAuth } from "context/authContext";
import React from "react";
import { ToastContainer } from "react-toastify";

const ToasterContainer = () => {
  const { isShow } = useAuth();

  return (
    <>
      {isShow && (
        <ToastContainer
          position="bottom-center"
          autoClose={10000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover={false}
          limit={10}
          theme={"colored"}
        />
      )}
    </>
  );
};

export default ToasterContainer;
