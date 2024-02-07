import { useState, useEffect } from 'react';
import { PartnersContent } from '../components/PartnersContent';
import axios from '../axios';

export function PartnersPage() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [partnersLabel, setPartnersLabel] = useState({});
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    setCurrentLanguage(localStorage.getItem('primeMotors_lang'));
    loadingData();
  }, [currentLanguage])

  const loadingData = async () => {
    const responsePartnersLabel = await axios.get(`partners_label?lang=${currentLanguage}`);
    setPartnersLabel(responsePartnersLabel.data[0]);

    const responsePartners = await axios.get(`partners?lang=${currentLanguage}`);
    setPartners(responsePartners.data);
  }

  return (
    <div>
      <PartnersContent partnersLabel={partnersLabel} partners={partners} />
    </div>
  );
}
