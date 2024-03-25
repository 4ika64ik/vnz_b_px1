import { Route, Routes, useLocation } from 'react-router-dom';
import { FacebookPixel } from 'react-facebook-pixel';
import TheForm from '@/pages/form/TheForm.jsx';
import Home from '@/pages/home/Home.jsx';

export default function App() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const pixelId = params.get('px');

    const initializeFacebookPixel = () => {
        if (document.readyState === 'complete') {
            if (pixelId) {
                try {
                    const fbPixel = FacebookPixel.init(pixelId);
                    if (fbPixel) {
                        fbPixel.pageView();
                    }
                } catch (error) {
                    console.error('Ошибка инициализации FacebookPixel:', error);
                }
            } else if (location.pathname === '/') {
                try {
                    const fbPixel = FacebookPixel.init(); // без идентификатора пикселя
                    if (fbPixel) {
                        fbPixel.pageView();
                    }
                } catch (error) {
                    console.error('Ошибка отслеживания просмотра страницы с помощью FacebookPixel:', error);
                }
            }
        }
    };

    // Используем событие deviceready Cordova для инициализации FacebookPixel
    document.addEventListener('deviceready', initializeFacebookPixel);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<TheForm pixelId={pixelId} />} />
        </Routes>
    );
}
