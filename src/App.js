import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import { LoginCnt } from "./layout/logincnt/LoginCnt";
// import { AuthProvider, AuthConsumer } from "./context/Auth";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container pt-4">
        <h1>Заголовок</h1>
        <p>
          Не забывайте, что консультация экстрасенса онлайн может подарить ключ к пониманию
          самых сложных ситуаций. Попробуйте прямо сейчас! Просто выберите эксперта и нажмите
          кнопку «Позвонить» рядом с его фотографией.
        </p>
      </div>
    </BrowserRouter>
  );
};

export default App;


