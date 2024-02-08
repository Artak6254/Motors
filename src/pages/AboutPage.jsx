import { useState, useEffect } from 'react';
import { AboutPageContent } from '../components/AboutPageContent';
import axios from '../axios';

export function AboutPage() {
    const [currentLanguage, setCurrentLanguage] = useState('en');
    const [aboutLabel, setAboutLabel] = useState([]);
    const [aboutUs, setAboutUs] = useState([]);

    useEffect(() => {
        loadingData();
    }, [currentLanguage])

    const loadingData = async () => {
        setCurrentLanguage(localStorage.getItem('primeMotors_lang'));

        const responseAboutLabel = await axios.get(`about_page_label?lang=${currentLanguage}`);
        setAboutLabel(responseAboutLabel.data[0]);

        const responseAboutUs = await axios.get(`about_us?lang=${currentLanguage}`);
        setAboutUs(responseAboutUs.data);
    }

    return (
        <div>
            <AboutPageContent aboutLabel={aboutLabel} aboutUs={aboutUs} />
        </div>
    );
}

