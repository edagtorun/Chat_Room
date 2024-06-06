import { useState } from "react";
import LoginPage from "./page/LoginPage";
import RoomPage from "./page/RoomPage";
import ChatPage from "./page/ChatPage";

const App = () => {
  //kullanicinin yetkisi var mi state'i
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token"));

  //kullanicinin hangi odaya girdiginin state'i
  const [room, setRoom] = useState(null);

  //yetkisi yoksa > giris sayfasina yonlendir
  if (!isAuth) return <LoginPage setIsAuth={setIsAuth} />;

  //yetkisi varsa :
  return (
    <div className="container">
      {room ? (
        //oda secildiyse > sohbet sayfasi
        <ChatPage room={room} setRoom={setRoom} />
      ) : (
        // oda tanimsizsa > oda secme sayfasi
        <RoomPage setIsAuth={setIsAuth} setRoom={setRoom} />
      )}
    </div>
  );
};

export default App;
