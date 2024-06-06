import { useEffect, useState } from "react";
import { auth, db } from "../firebase/config";
import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import Message from "../components/Message";

const ChatPage = ({ room, setRoom }) => {
  const [messages, setMessages] = useState([]);

  //form gonderilmesi
  const handleSubmit = async (e) => {
    e.preventDefault();

    //kolleksiyonun referansini alma
    const messagesCol = collection(db, "messages");

    //kolleksiyona yeni belge kaydet
    await addDoc(messagesCol, {
      text: e.target[0].value,
      room,
      author: {
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        photo: auth.currentUser.photoURL,
      },
      createdAt: serverTimestamp(),
    });

    //formu sifirl

    e.target.reset();
  };

  //mecvut odada gonderilen mesajlarin verisini anlik olarak al
  useEffect(() => {
    //hangi koleksiyondaki verileri istiyorsak o koleksiyonun referansini aliriz.
    const messagesCol = collection(db, "messages");

    //sorgu olustur
    const q = query(
      messagesCol,
      where("room", "==", room), // mevcut odadaki mesajlari filtrele
      orderBy("createdAt", "asc") //en eskiden yeni sirala
    );

    onSnapshot(q, (snapshot) => {
      //verilerin gecici olarak tutlacagi dizi
      const tempMsg = [];
      //dokumanlari don, verilere eris
      snapshot.docs.forEach((doc) => {
        tempMsg.push(doc.data());
      });

      //guncel mesajlari state aktar
      setMessages(tempMsg);
    });
  }, []);

  return (
    <div className="chat-page">
      <header>
        <p>{auth.currentUser?.displayName}</p>
        <p>{room}</p>
        <button onClick={() => setRoom(null)}> Change Room</button>
      </header>

      <main>
        {messages.map((data, i) => (
          <Message key={i} data={data} />
        ))}
      </main>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Write your message..." />
        <button>Send</button>
      </form>
    </div>
  );
};

export default ChatPage;
