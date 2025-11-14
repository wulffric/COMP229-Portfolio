// App.jsx
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PageWrapper from "./components/PageWrapper";

export default function App() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <PageWrapper>
        <NavBar />
      </PageWrapper>

      <main
        style={{
          flex: 1,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0",
          marginTop: "20px"
        }}
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}