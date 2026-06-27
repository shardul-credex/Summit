import Hero from "./components/Hero";
import ComingSoon from "./components/ComingSoon";
import Footer from "./components/Footer";
import MouseGlow from "./components/MouseGlow";

function App() {
  return (
    <div className="bg-[#F7F3EB] text-[#1F1F1F] overflow-x-hidden">
      <MouseGlow />
      <Hero />
      <ComingSoon />
      <Footer />
    </div>
  );
}

export default App;
