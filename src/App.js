import "./App.css";
import {
  Carousel,
  Card,
  Header,
  PostTitle,
  Post,
  AllBlogPost,
  Footer,
} from "./components/";
import { BasicLayout } from "./Layout/BasicLayout";
import { Test } from "./components/Test";
function App() {
  return (
    <>
      <BasicLayout>
        <Carousel />
        <Header />
        <Card />
        <PostTitle />
        <Post />
        {/* <AllBlogPost /> */}
      </BasicLayout>
      <Footer />
    </>
  );
}

export default App;
