import { Navbar,Welcome,Footer,Ai,Services } from "./components";

function App() {
  return (
  
        <div className="min-h-screen">
          <div className="gradient-bg-welcome">
            <Navbar/>
            <Welcome/>
            <Ai/>

          </div>
          <Services/>
          <Footer/>
        
        </div>
      )
    }


export default App
