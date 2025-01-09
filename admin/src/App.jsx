import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import { Home } from "./pages/Home";
import Post from "./pages/__Post";
import Category from "./pages/__Category";
import PostAdd from "./pages/__Post__add";
import PostEdit from "./pages/__Post__edit";
import Contact from "./pages/__Contact";
import PostComment from "./pages/__Post__comment";

function App() {
  return (
    <>
      <Routes>
        <Route path="/dang-nhap" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/posts/add" element={<PostAdd />} />
          <Route path="/posts/edit/:id" element={<PostEdit />} />
          <Route path="/posts/comment/:id" element={<PostComment />} />
          <Route path="/category" element={<Category />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
