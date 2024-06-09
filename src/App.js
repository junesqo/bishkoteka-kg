import React from 'react';
import './App.css';

function App() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/bishkoteka.apk'; // Укажите путь к вашему файлу
    link.download = 'bishkoteka.apk';
    link.click();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">БИШКОТЕКА</h1>
        <p className="description">
          Афиша мероприятий в Бишкеке. Нажми на кнопку "Скачать" ниже и начни искать мероприятия уже сейчас!
        </p>
        <button className="download-button" onClick={handleDownload}>Скачать</button>
      </header>
      <section className="photos">
        <img src="/path-to-photo1.jpg" alt="Фото 1" className="photo" />
        <img src="/path-to-photo2.jpg" alt="Фото 2" className="photo" />
        <img src="/path-to-photo3.jpg" alt="Фото 3" className="photo" />
      </section>
    </div>
  );
}

export default App;
