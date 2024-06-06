import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./../firebase/config";

const LoginPage = ({ setIsAuth }) => {
  //butona tiklaninca calisir
  const handleLogin = () => {
    //kullanicinin Google hesabi ile kimligini dogrula
    signInWithPopup(auth, provider)
      //basariyla giris yaparsa burasi calisir.
      .then((data) => {
        //yetki state'ini guncelle
        setIsAuth(true);

        //locale'e kullanici bilgilerini kaydet
        localStorage.setItem("token", data.user.refreshToken);
      });
  };

  return (
    <div className="container">
      <div className="login">
        <h1>Chat Room</h1>
        <p>Sign In</p>
        <button onClick={handleLogin}>
          <img src="/g-logo.png" />
          <span>Sign In With Google </span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
