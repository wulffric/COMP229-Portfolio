import { createBrowserRouter } from "react-router-dom";
import App from "./App";

// Public pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

// Auth pages
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import NotAuthorized from "./pages/NotAuthorized";

// Route guards
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

// Admin pages
import AdminDashboard from "./pages/AdminDashboard";
import AdminContacts from "./pages/AdminContacts";
import AdminQualifications from "./pages/AdminQualifications";
import AdminQualificationCreate from "./pages/AdminQualificationCreate";
import AdminProjects from "./pages/AdminProjects";
import AdminProjectCreate from "./pages/AdminProjectCreate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      //
      // PUBLIC ROUTES
      //
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
      { path: "education", element: <Education /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },

      //
      // AUTH ROUTES
      //
      { path: "signin", element: <SigninPage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "not-authorized", element: <NotAuthorized /> },

      //
      // USER PROTECTED ROUTE (example)
      //
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <div style={{ padding: "40px" }}>USER DASHBOARD</div>
          </ProtectedRoute>
        )
      },

      //
      // ADMIN ROUTES
      //
      {
        path: "admin",
        element: (
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        )
      },

      {
        path: "admin/contacts",
        element: (
          <AdminRoute>
            <AdminContacts />
          </AdminRoute>
        )
      },

      {
        path: "admin/qualifications",
        element: (
          <AdminRoute>
            <AdminQualifications />
          </AdminRoute>
        )
      },

      {
        path: "admin/qualifications/create",
        element: (
          <AdminRoute>
            <AdminQualificationCreate />
          </AdminRoute>
        )
      },

      {
        path: "admin/projects",
        element: (
          <AdminRoute>
            <AdminProjects />
          </AdminRoute>
        )
      },

      {
        path: "admin/projects/create",
        element: (
          <AdminRoute>
            <AdminProjectCreate />
          </AdminRoute>
        )
      }
    ]
  }
]);

export default router;
