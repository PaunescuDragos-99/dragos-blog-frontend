import "./App.css";
import AllPosts from "./pages/Posts/AllPosts";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./pages/Layout";
import CreatePost from "./pages/Posts/CreatePost";
import { Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";
import SinglePostPage from "./pages/Posts/SinglePostPage";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllPosts />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/create"} element={<CreatePost />} />
          <Route path={"/post/:id"} element={<SinglePostPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
