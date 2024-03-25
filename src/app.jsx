import { Route, Routes, useParams, useLocation } from 'react-router-dom';
import TheForm from '@/pages/form/TheForm.jsx';
import Home from '@/pages/home/Home.jsx';
import ReactPixel from 'react-facebook-pixel';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<FormWithPixel />} />
        </Routes>
    );
}

function FormWithPixel() {
    const location = useLocation();
    let { px } = useParams(); // Извлечение значения px из строки запроса URL

    React.useEffect(() => {
        if (px) {
            ReactPixel.init(px);
            ReactPixel.track('ViewContent');
        }
    }, [px]);

    return <TheForm pixelId={px} />;
}
