// PageWrapper.jsx: centers all page content horizontally
export default function PageWrapper({ children }) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",  // horizontal centering
      width: "100%",
      padding: "40px 20px",
      textAlign: "center",
      boxSizing: "border-box"
    }}>
      {children}
    </div>
  );
}
