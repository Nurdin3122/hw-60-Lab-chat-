
import './App.css'
import MsgForm from "./components/MsgForm/MsgForm";
import {useEffect, useState} from "react";
import {Messages} from "./type";
import ShowMsg from "./components/ShowMsg/ShowMsg";

const App = () => {
    const url = 'http://146.185.154.90:8000/messages';
    const [messages, setMessages] = useState<Messages[]>([]);

    useEffect(() => {
        const getMessages = async () => {
                const response = await fetch(url);
                if (response.ok) {
                    const posts = await response.json();
                    setMessages(posts)
                } else {
                    console.error(response.status);
                }
        };
        void  getMessages();
    }, []);

  return (
    <>
      <MsgForm></MsgForm>
        <div>
            {
            messages.map(message => (
                <ShowMsg
                    author={message.author}
                    message={message.message}
                    key={message._id}
                />))
        }
        </div>


    </>
  )
};

export default App
