import './App.scss'
import Layout from "./layout/Layout.tsx";
import 'bootstrap-icons/font/bootstrap-icons.scss';
import {Route, Routes} from "react-router";
import Home from "./pages/Home.tsx";
import Contact from "./pages/Contact.tsx";
import AddClub from "./pages/AddClub.tsx";
import MakeReq from "./pages/MakeReq.tsx";
import NotFound from "./pages/NotFound.tsx";
import Clubs from "./pages/Clubs.tsx";
import Login from "./pages/Login.tsx";
import Request from "./pages/Request.tsx";
import ClubPage from "./pages/ClubPage.tsx";
import data from '../public/data/clubs.json';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/clubs" element={<Clubs/>}/>
          {
            data.map(club => {
              return (
                <Route path={"/clubs/" + club.id} element={<ClubPage club={club.id}/>}/>
              )
            })
          }
          <Route path="/request" element={<Request/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/add" element={<AddClub/>}/>
          <Route path="/makereq" element={<MakeReq/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/reqstatus" element={<Request />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
        <Toaster />
      </Layout>
    </>
  )
}

export default App
