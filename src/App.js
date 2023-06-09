import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import AuthForm from "./components/AuthForm/AuthForm";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="login" element={<Home />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
