import React, { useState , useEffect  } from 'react';
import Form from "./Form";
import axios from 'axios';
import ReactPixel from 'react-facebook-pixel';

export default function TheForm({ pixelId }) { // Accept pixelId as prop
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [nick, setNick] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true); // Состояние для определения активности кнопки отправки

  // Функция для проверки заполненности всех полей
  const isFormValid = () => {
    return name.trim() !== '' && phone.trim() !== '' ;
  };

  // Обновление состояния активности кнопки отправки при изменении любого из полей
  useEffect(() => {
    setIsSubmitDisabled(!isFormValid());
  }, [name, phone]);

  useEffect(() => {
    if (pixelId) {
      ReactPixel.init(pixelId);
      ReactPixel.track('Lead');
    }
  }, [pixelId]);

  const handleSubmit = async () => {
    setName('');
    setPhone('');
    try {
      const text = `Новая заявка по ВНЖ(1)!\nИмя: ${name}\nТелефон: ${phone}\nНик телеграма: ${nick}`;
      const response = await axios.post('https://api.telegram.org/bot7127350416:AAF5Gip0fNEGLmbJLCTsZ_lhVYq0yPgpcWM/sendMessage', {
        text,
        chat_id: '-4125616791',
      });
      ReactPixel.track('Lead');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <p className="text-white">
          Заполните форму и мы свяжемся с Вами в ближайшее время
        </p>
        <Form />
      </div>
      <div className="flex justify-center mt-44 sm:mt-20 mb-72">
        <div className="bg-white p-8 rounded-lg shadow-md lg:w-96 w-full md:w-96">
          <div>
            <label>
              <p className="text-gray-700 font-semibold">Имя</p>
            </label>
            <input
              type="text"
              placeholder="Имя"
              className="w-full border-2 border-gray-300 rounded-md px-3 py-2 mt-1 transition delay-75 duration-300 focus:outline-none focus:ring-2 ocus:ring-blue-400  focus:border-none md:w-80 "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
          <div className="mt-6">
            <label>
              <p className="text-gray-700 font-semibold">Телефон</p>
            </label>
            <input
              type="tel"
              placeholder="Телефон"
              className="w-full border-2 border-gray-300 rounded-md px-3 py-2 mt-1 transition delay-75 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-none md:w-80 "
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mt-6 flex justify-center">
            <button onClick={handleSubmit} disabled={isSubmitDisabled} className={`text-blue-400 border border-blue-400 w-full py-2 rounded ${isSubmitDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-50'}`}>
              Отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
