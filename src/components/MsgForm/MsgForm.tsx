import "./MsgForm.css"
import React, {FormEvent, useState} from "react";

interface Props {
    onSend: () => void;
}

const MsgForm:React.FC<Props> = ({onSend}) => {
    const [author, setAuthor] = useState("");
    const [message, setMessage] = useState("");

    const sendMsg = async (e:FormEvent) => {
        e.preventDefault();

        const url = 'http://146.185.154.90:8000/messages';
        const data = new URLSearchParams();
        data.set('message', message);
        data.set('author', author);
        onSend();

        await fetch(url, {
            method: 'post',
            body: data,
        });
    }


    return (
        <div className="container">
            <div className='form'>
                <form onSubmit={sendMsg}>
                    <input
                    type="text"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    className="input"
                    placeholder="author"
                    />
                    <input
                    type="text"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="input"
                    placeholder="message"
                    />
                    <button className="btn" type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default MsgForm;