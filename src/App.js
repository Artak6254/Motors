import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { CompanyPage } from './pages/CompanyPage';
import { AboutPage } from './pages/AboutPage';
import { MissionPage } from './pages/MissionPage';
import { ServicesPage } from './pages/ServicesPage';
import { Footer } from './components/Footer';
import { ArtakiPager } from './pages/ArtakiPager';
import axios from './axios';

import { PartnersPage } from './pages/PartnersPage';
import { BranchesPage } from './pages/BranchesPage';
import { BlogPage } from './pages/BlogPage';
import { PromotionPage } from './pages/PromotionPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [navbar, setNavbar] = useState([]);
  const [footer, setFooter] = useState([]);

  useEffect(() => {
    installingCurrentLang();
    loadingData();
  }, [currentLanguage])

  const installingCurrentLang = () => {
    // installing the current language in the local storage
    if (!localStorage.getItem('primeMotors_lang')) {
      localStorage.setItem('primeMotors_lang', 'en');
    }

    setCurrentLanguage(localStorage.getItem('primeMotors_lang'));
  }

  const loadingData = async () => {
    const responseNavbar = await axios.get(`navbar?lang=${currentLanguage}`);
    setNavbar(responseNavbar.data);

    const responseFooter = await axios.get(`footer?lang=${currentLanguage}`);
    setFooter(responseFooter.data[0]);
  }

  return (
    <div>
      <Header navbar={navbar} />

      <Routes>
        <Route path='/' element={<CompanyPage />} />
        <Route path='/about-us' element={<AboutPage />} />
        <Route path='/our-mission' element={<MissionPage />} />
        <Route path='/services' element={<ServicesPage />} />

        <Route path='/partners' element={<PartnersPage />} />
        <Route path='/branches' element={<BranchesPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/promotion' element={<PromotionPage />} />
        <Route path='/contact-us' element={<ContactPage />} />
      </Routes>

      <Footer footer={footer} />
    </div>
  )
}
