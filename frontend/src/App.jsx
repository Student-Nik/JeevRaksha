import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Animals from "./components/Animals";
import RecentVisits from "./components/RecentVisit";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";

import BookAppointment from "./components/BookAppointment";
import DoctorVisitForm from "./components/DoctorVisitForm";
import DoctorLogin from "./components/DoctorLogin";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Animals />
      <RecentVisits />
      <WhyChooseUs />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/book-appointment"
          element={<BookAppointment />}
        />

        <Route
          path="/doctor/visits/new"
          element={<DoctorVisitForm />}
        />

        <Route
          path="/doctor/login"
          element={<DoctorLogin />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;