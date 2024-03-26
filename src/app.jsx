import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TheForm from '@/pages/form/TheForm.jsx';
import Home from '@/pages/home/Home.jsx';

export default function App() {
    const location = useLocation();

    useEffect(() => {
        // Загрузка скрипта пикселя Facebook
        const loadFacebookPixel = () => {
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            // Инициализация пикселя Facebook
            fbq('init', '780236750696814');
            // Отслеживание события "PageView" при загрузке страницы
            fbq('track', 'PageView');
        };

        loadFacebookPixel();
    }, [location]);

    const pixelId = '780236750696814'; // Установите здесь ваш ID пикселя Facebook

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<TheForm pixelId={pixelId} />} /> {/* Передача пропса pixelId */}
        </Routes>
    );
}
