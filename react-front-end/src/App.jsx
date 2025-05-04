import Home from './pages/Home.jsx'
import Header from './layouts/Header.jsx'
import Footer from './layouts/Footer.jsx'
import WebProduction from './pages/WebProduction.jsx'
import Internet from './web-production/Internet.jsx'
import HTTP from './web-production/HTTP.jsx'
import DNS from './web-production/DNS.jsx'
import Hosting from './web-production/Hosting.jsx'
import Browser from './web-production/Browser.jsx'
import { Routes, Route } from "react-router-dom";

function App() {
    return (
      <>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/web-production" element={<WebProduction />}>
                <Route path="internet" element={<Internet />} />
                <Route path="http" element={<HTTP />} />
                <Route path="dns" element={<DNS />} />
                <Route path="hosting" element={<Hosting />} />
                <Route path="browser" element={<Browser />} />
            </Route>
        </Routes>
        <Footer />
      </>
    );
  }
  
export default App;