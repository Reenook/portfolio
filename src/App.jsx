import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Technologies from "./components/Technologies.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
    return (
       <div className={"overflow-x-hidden text-white antialiased"}>
           <div className={"fixed inset-0 -z-10"}>
               <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
           </div>
           <div className={"container mx-auto px-8"}></div>
           <Navbar/>
           <Hero/>
           <Technologies/>
           <Projects/>
           <Contact/>

       </div>
    )
}