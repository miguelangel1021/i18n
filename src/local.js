
import React, { useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import JobsList from './components/jobslist';
import esMessages from './locales/es';
import enMessages from './locales/en';



function App() {
  const [userLanguage, setUserLanguage] = useState("es"); // Establece un idioma predeterminado

  useEffect(() => {
    // Determina el idioma del navegador
    const detectedLanguage = navigator.language.split("-")[0];
    setUserLanguage(detectedLanguage);
  }, []);

  return (
    <IntlProvider locale={userLanguage} messages= { userLanguage === 'es' ? esMessages :enMessages}>
        <JobsList color = {userLanguage === 'es' ? 'light' : 'dark'}/>
    </IntlProvider>
  );

}




  export default App;

