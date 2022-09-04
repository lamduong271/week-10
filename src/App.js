import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import MyContainer from "./components/MyContainer";
import { withTranslation } from "react-i18next";

function App({ t }) {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<MyContainer />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default withTranslation()(App);
