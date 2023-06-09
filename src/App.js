import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./components/About/About";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<h1>first page</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
