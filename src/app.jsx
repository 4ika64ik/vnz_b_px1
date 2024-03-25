import { Route, Routes, useLocation } from 'react-router-dom';
import { FacebookPixel } from 'react-facebook-pixel';
import TheForm from '@/pages/form/TheForm.jsx';
import Home from '@/pages/home/Home.jsx';

export default function App() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const pixelId = params.get('px');

    // Используем событие deviceready Cordova для инициализации FacebookPixel
    document.addEventListener('deviceready', () => {
        // Проверяем, есть ли идентификатор пикселя
        if (pixelId) {
            try {
                // Пытаемся инициализировать FacebookPixel
                FacebookPixel.init(pixelId);
                FacebookPixel.pageView();
            } catch (error) {
                // Обрабатываем ошибку инициализации
                console.error('Ошибка инициализации FacebookPixel:', error);
            }
        } else if (location.pathname === '/') {
            try {
                // Пытаемся отследить просмотр страницы, если идентификатор пикселя отсутствует на главной странице
                FacebookPixel.pageView();
            } catch (error) {
                // Обрабатываем ошибку отслеживания
                console.error('Ошибка отслеживания просмотра страницы с помощью FacebookPixel:', error);
            }
        }
    });

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<TheForm pixelId={pixelId} />} />
        </Routes>
    );
}
