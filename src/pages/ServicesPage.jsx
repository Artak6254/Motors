import { useState, useEffect } from 'react';
import { ServicesContent } from '../components/ServicesContent';
import axios from '../axios';

export function ServicesPage() {
    const [currentLanguage, setCurrentLanguage] = useState('en');
    const [servicesLabel, setSevicesLabel] = useState([]);
    const [services, setServices] = useState([]);

    useEffect(() => {
        loadingData();
    }, [currentLanguage])

    const loadingData = async () => {
        setCurrentLanguage(localStorage.getItem('primeMotors_lang'));

        const responseServicesLabel = await axios.get(`services_page_label?lang=${currentLanguage}`);
        setSevicesLabel(responseServicesLabel.data[0]);

        const responseServices = await axios.get(`services?lang=${currentLanguage}`);
        setServices(responseServices.data);
    }

    return (
        <div>
            <ServicesContent servicesLabel={servicesLabel} services={services} />
        </div>
    );
}

