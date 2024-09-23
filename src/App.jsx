import './App.css'
import UserInfoContext from "./context/UserInfoContext.js";
import BlogPage from "./components/BlogPage.jsx";

function App() {

    const userInfo = {
        username: "Admin",
        isAdmin: true
    }

  return (
     <UserInfoContext.Provider value={userInfo}>
         <BlogPage></BlogPage>
     </UserInfoContext.Provider>
  )
}

export default App
