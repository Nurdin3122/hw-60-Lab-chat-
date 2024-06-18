
import './App.css'
import MsgForm from "./components/MsgForm/MsgForm";
import {useEffect, useState} from "react";
import {Messages} from "./type";
import ShowMsg from "./components/ShowMsg/ShowMsg";

const App = () => {
    const [messages, setMessages] = useState<Messages[]>([]);
    const [timeMsg, setTimeMsg] = useState<string>("");

    const getMessages = async (time = "") => {
        const response = await fetch(`http://146.185.154.90:8000/messages${time ? `?datetime=${time}` : ''}`);
        if (response.ok) {
            const posts = await response.json();
            setMessages(posts)
            setTimeMsg(posts[0].datetime);
        } else {
            console.error("Ошибка",response.status);
        }
    };


    useEffect(() => {
      getMessages();
        const interval = setInterval(() => getMessages(timeMsg),3000)
        return () => clearInterval(interval);
    }, [timeMsg]);


    const sendMessage = () => {
        getMessages();
        const interval = setInterval(() => getMessages(timeMsg), 3000);
        return () => clearInterval(interval);
    }

  return (
    <>
        <MsgForm onSend={sendMessage}></MsgForm>
        <div className="block-Msg">
            {
            messages.map(message => (
                <ShowMsg
                    author={message.author}
                    message={message.message}
                    key={message._id}
                    dataTime={message.datetime}
                />))
        }
        </div>
    </>
  )
};

export default App
