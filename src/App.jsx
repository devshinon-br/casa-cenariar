import FloatingWhatsapp from './components/FloatingWhatsapp.jsx'
import WhoWeAre from './screens/WhoWeAre/WhoWeAre.jsx'
import Home from './screens/Home/Home.jsx'
import Faq from './screens/Faq/Faq.jsx'
import Footer from './screens/Footer/Footer.jsx'
import CustomerOpinions from './screens/CustomerOpinions/CustomerOpinions.jsx'
import Samples from './screens/Samples/Samples.jsx'
import ContactUs from './screens/ContactUs/ContactUs.jsx'


function App() {
  return (
    <>
      <Home/>
      <WhoWeAre/>
      <Samples/> 
      <Faq/>
      <CustomerOpinions/>
      <ContactUs/>
      <Footer/>
      <FloatingWhatsapp/>
    </>
  )
}

export default App
