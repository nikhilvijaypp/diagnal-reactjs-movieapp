import React from "react";
import "./App.scss";

const Header = React.lazy(() => import("./components/Header/Header"));
const Home = React.lazy(() => import("./components/Home/Home"));

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <React.Suspense fallback={"Loading..."}>
          <Home />
        </React.Suspense>
      </div>
    </div>
  );
}

export default App;
