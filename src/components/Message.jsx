import { auth } from "../firebase/config";

const Message = ({ data }) => {
  // data ve data.sender'ın geçerli olup olmadığını kontrol edin
  if (!data || !data.author) {
    console.error("Invalid data or data.sender", data);
    return null;
  }

  console.log(data);

  // Oturumu açık olan kullanıcının id'si mesajı atan kullanıcının id'sine eşitse mesajın yazısını ekrana bas.
  if (auth.currentUser?.uid === data.author.id) {
    return <p className="msg-user">{data.text}</p>;
  }

  // Eşit değilse kullanıcı bilgisi + mesaj içeriğini ekrana bas
  return (
    <div className="msg-other">
      <div>
        <img src={data.author.photo} />
        <span>{data.author.name}</span>
      </div>
      <p>{data.text}</p>
    </div>
  );
};

export default Message;
