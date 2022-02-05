import { NavLink, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AboutIconLink from "./components/AboutIconLink";
import AboutPage from "./pages/AboutPage";
import Card from "./components/shared/Card";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import { FeedbackProvider } from "./context/FeedbackContext";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import Post from "./components/Post";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
            {/* <Route path="/post/:id" element={<Post />} /> */}
            <Route path="/post/*" element={<Post />} />
          </Routes>
          <Card>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
              About
            </NavLink>
          </Card>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
