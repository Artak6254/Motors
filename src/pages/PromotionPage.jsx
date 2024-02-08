import { useState, useEffect } from 'react';
import { PromotionContent } from '../components/PromotionContent';
import axios from '../axios';

export function PromotionPage() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [promotionLabel, setPromotionLabel] = useState({});
  const [promotion, setPromotion] = useState([]);

  useEffect(() => {
    setCurrentLanguage(localStorage.getItem('primeMotors_lang'));
    loadingData();
  }, [currentLanguage])

  const loadingData = async () => {
    const responsePromotionLabel = await axios.get(`promotion_page_label?lang=${currentLanguage}`);
    setPromotionLabel(responsePromotionLabel.data[0])

    const responsePromotion = await axios.get(`promotion?lang=${currentLanguage}`);
    setPromotion(responsePromotion.data)
  }

  return (
    <div>
      <PromotionContent promotionLabel={promotionLabel} promotion={promotion} />
    </div>
  );
}
