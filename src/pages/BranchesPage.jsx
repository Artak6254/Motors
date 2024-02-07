import { useState, useEffect } from 'react';
import { BranchesContent } from '../components/BranchesContent';
import axios from '../axios';

export function BranchesPage() {
    const [currentLanguage, setCurrentLanguage] = useState('en');
    const [branchesLabel, setBranchesLabel] = useState([]);
    const [branches, setBranches] = useState([]);

    useEffect(() => {
        loadingData();
    }, [currentLanguage])

    const loadingData = async () => {
        setCurrentLanguage(localStorage.getItem('primeMotors_lang'));

        const responseBranchesLabel = await axios.get(`branches_label?lang=${currentLanguage}`);
        setBranchesLabel(responseBranchesLabel.data[0]);

        const responseBranches = await axios.get(`branches?lang=${currentLanguage}`);
        setBranches(responseBranches.data);
    }

    return (
        <div>
            <BranchesContent branchesLabel={branchesLabel} branches={branches} />
        </div>
    );
}

