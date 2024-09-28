import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import All from "./Components/All";
import FullStackDevelopment from "./Components/FullStackDevelopment";
import DataScience from "./Components/DataScience";
import CyberSecurity from "./Components/CyberSecurity";
import Career from "./Components/Career";



function App() {
  
    return (
          
          <>
          <BrowserRouter>
           <Navbar />
           <Routes >
            <Route path="/" element={<All/>}></Route>
            <Route path="/fullstackdevelopment" element={<FullStackDevelopment/>}></Route>
            <Route path="/datascience" element={<DataScience/>}></Route>
            <Route path="/cybersecurity" element={<CyberSecurity/>}></Route>
            <Route path="/career" element={<Career/>}></Route>
           </Routes>
          </BrowserRouter>
          
          </>
          )

        }

        export default App;