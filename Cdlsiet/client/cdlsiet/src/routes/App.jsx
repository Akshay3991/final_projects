import "bootstrap/dist/css/bootstrap.min.css";
import Footer from '../components/Footer'
import Header from '../components/Header'
import PostListProvider from "../Store/post-list-store"
import { Outlet } from 'react-router-dom'
function App() {

  return (
    <PostListProvider>
      <Header></Header>
      <Outlet></Outlet>
      {/* <Enquire /> */}
      <Footer />
    </PostListProvider>
  )
}

export default App
