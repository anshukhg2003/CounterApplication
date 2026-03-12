import React, { useState } from "react";
import CounterApp from "./Components/CounterApp";
import LoginPage from "../src/Components/LoginPage";

function App() {

  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      {isLogin ? (
        <CounterApp />
      ) : (
        <LoginPage setIsLogin={setIsLogin} />
      )}
    </>
  );
}

export default App;