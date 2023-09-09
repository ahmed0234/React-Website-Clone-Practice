import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Section from './components/Section_1/Section'
import Section_2 from './components/Secton_2/Section_2'
import Repertoire from './components/Repertoire_3/Repertoire'
import Section_4 from './components/Section_4/Section_4'
import Section_5 from './components/Section_5/Section_5'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Ending from './components/Ending/Ending'





function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.onload = () => {
      setTimeout(() => {
        
          setIsLoaded(true);
      }, 500);
      
    };
  }, []);
 


  return (
    <div>

    
        {isLoaded && (
          <>
            <Header />
            <Section />
            <Section_2 />
            <Repertoire />
            <Section_4 />
            <Section_5 />
            <Contact />
            <Footer />
            <Ending />
          </>
        )}
       
         
      


   

        


    </div>
  )
}

export default App
