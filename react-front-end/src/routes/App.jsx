import Header from '../layouts/Header.jsx'
import Footer from '../layouts/Footer.jsx'


import Home from '../pages/navigation/Home.jsx'
import MachineLearning from '../pages/navigation/MachineLearning.jsx'
import DeepLearning from '../pages/navigation/DeepLearning.jsx'
import WebDevelopment from '../pages/navigation/WebDevelopment.jsx'


import Internet from '../web-production/Internet.jsx'
import HTTP from '../web-production/HTTP.jsx'
import DNS from '../web-production/DNS.jsx'
import Hosting from '../web-production/Hosting.jsx'
import Browser from '../web-production/Browser.jsx'
import { Routes, Route } from "react-router-dom";
import Default from '../web-production/Default.jsx'
import HTMLBasic from '../pages/document-html/HTMLBasic.jsx'

function App() {
    return (
      <>
        {/* Header */}
        <Header />

        {/* Main */}
        <Routes>

          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Machine Learning */}
          <Route path="/machine-learning" element={<MachineLearning />} />

          {/* Deep Learning */}
          <Route path="/deep-learning" element={<DeepLearning />} />

          {/* Website Product */}
          <Route path="/web-development" element={<WebDevelopment />}>
            <Route path="default" element={<Default />} />
            <Route path="internet" element={<Internet />} />
            <Route path="http" element={<HTTP />} />
            <Route path="dns" element={<DNS />} />
            <Route path="hosting" element={<Hosting />} />
            <Route path="browser" element={<Browser />} />
            <Route path="html-basic" element={<HTMLBasic />} />
          </Route>
          
        </Routes>

        {/* Footer */}
        <Footer />
      </>
    );
  }
  
export default App;