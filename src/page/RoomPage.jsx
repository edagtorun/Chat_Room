const RoomPage = ({ setIsAuth, setRoom }) => {
  // oturumu kapat
  const logout = () => {
    //state'ini guncelle
    setIsAuth(false);

    // locali temizle
    localStorage.removeItem("token");
  };

  //oda ismini kaydet
  const handleSubmit = (e) => {
    //sayfa yenilenmesini engelle
    e.preventDefault();

    //inputtaki degeri al

    const room = e.target[0].value.trim().toLowerCase();

    //girilecek odanin state'ini guncellendik
    setRoom(room);
  };

  return (
    <form onSubmit={handleSubmit} className="room-from">
      <h1>Chat Room</h1>
      <p>Choice Your Room</p>

      <input type="text" placeholder="Weekend..." required />

      <button type="submit">Sign In</button>
      <button type="button" onClick={logout}>
        Exit
      </button>
    </form>
  );
};

export default RoomPage;
