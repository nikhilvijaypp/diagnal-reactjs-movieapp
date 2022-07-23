import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

const Header = React.lazy(() => import("./components/Header/Header"));
const Home = React.lazy(() => import("./components/Home/Home"));
const PageNotFound = React.lazy(() =>
  import("./components/PageNotFound/PageNotFound")
);

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={"Loading..."}>
                <Home />
              </React.Suspense>
            }
          />
          <Route component={PageNotFound} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
