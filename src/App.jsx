import FloatingWhatsapp from './components/FloatingWhatsapp.jsx'
import WhoWeAre from './screens/WhoWeAre.jsx'
import Home from './screens/Home.jsx'
import Faq from './screens/Faq/Faq.jsx'
import Footer from './screens/Footer/Footer.jsx'
import CustomerOpinions from './screens/CustomerOpinions.jsx'
import Samples from './screens/Samples.jsx'
import ContactUs from './screens/ContactUs/ContactUs.jsx'

function App() {
  return (
    <>
      {/* <Home/> */}
      <WhoWeAre text={"Consectetur adipisicing deserunt deserunt dolore cillum elit dolor amet labore deserunt consequat nisi magna aliqua.Mollit esse dolore amet minim duis reprehenderit incididunt."}/>
      <Faq/>
      <ContactUs/>
      <Footer/>
      <FloatingWhatsapp/>

      {/* <Samples/> 
      <CustomerOpinions/>*/}
    </>
  )
}

export default App
