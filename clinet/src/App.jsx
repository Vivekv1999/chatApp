// @ts-nocheck
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Suspense, lazy } from "react";
import ProtectedRoute from "./Components/auth/ProtectedRoute";
import LayoutLoader from "./Components/layOut/LayoutLoader";
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));
const Page404 = lazy(() => import("./pages/PageNotFound"));
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const UsersManagement = lazy(() => import("./pages/admin/UserManagement"));
const MessagesManagement = lazy(() => import("./pages/admin/MessageManagement"));
const ChatsManagement = lazy(() => import("./pages/admin/ChatManagement"));

function App() {
  const user = true;
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<LayoutLoader />}>
          <Routes>
            <Route element={<ProtectedRoute user={user} />}>
              <Route path="/" element={<Home />} />
              <Route path="/chat/:chatId?" element={<Chat />} />
              <Route path="/groups" element={<Groups />} />
            </Route>
            <Route
              path="/login"
              element={
                <ProtectedRoute user={!user} redirect="/">
                  <Login />
                </ProtectedRoute>
              }
            />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/users" element={<UsersManagement />} />
            <Route path="/admin/messages" element={<MessagesManagement />} />
            <Route path="/admin/chats" element={<ChatsManagement />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
