import { useState, useEffect } from 'react';
import { MissionContent } from '../components/MissionContent';
import axios from '../axios';

export function MissionPage() {
    const [currentLanguage, setCurrentLanguage] = useState('en');
    const [missionLabel, setMissionLabel] = useState([]);
    const [mission, setMission] = useState([]);

    useEffect(() => {
        loadingData();
    }, [currentLanguage])

    const loadingData = async () => {
        setCurrentLanguage(localStorage.getItem('primeMotors_lang'));

        const responseMissionLabel = await axios.get(`mission_page_label?lang=${currentLanguage}`);
        setMissionLabel(responseMissionLabel.data[0]);

        const responseMission = await axios.get(`mission?lang=${currentLanguage}`);
        setMission(responseMission.data);
    }

    return (
        <div>
            <MissionContent missionLabel={missionLabel} mission={mission} />
        </div>
    );
}

