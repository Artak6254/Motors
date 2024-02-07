import { useEffect, useState } from 'react';
import { Slider } from '../components/Slider';
import { AboutUsContent } from '../components/AboutUsContent';
import { ScrollTop } from '../components/ScrollTop';
import axios from '../axios';

export function CompanyPage() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [slider, setSlider] = useState([]);
  const [aboutUsLabel, setAboutUsLabel] = useState({});
  const [aboutUs, setAboutUs] = useState([]);

  useEffect(() => {
    setCurrentLanguage(localStorage.getItem('primeMotors_lang'));
    loadingData();
  }, [])

  const loadingData = async () => {
    const responseSlider = await axios.get(`slider?lang=${currentLanguage}`);
    setSlider(responseSlider.data);

    const responseAboutUsLabel = await axios.get(`about_us_label?lang=${currentLanguage}`);
    setAboutUsLabel(responseAboutUsLabel.data[0]);

    const responseAboutUs = await axios.get(`about_us?lang=${currentLanguage}`);
    setAboutUs(responseAboutUs.data);
  }

  return (
    <div>
      <Slider slider={slider} />
      <AboutUsContent aboutUs={aboutUs} aboutUsLabel={aboutUsLabel} />
      <ScrollTop />
    </div>
  )
}
