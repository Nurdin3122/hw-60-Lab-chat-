import React from 'react';
import "./block-message.css";
interface Props {
    author:string;
    message:string;
}

const ShowMsg:React.FC<Props> = ({author,message}) => {
    return (
        <div className="block-message">
            <span>Author:{author} </span> <span> Message:{message}</span>
        </div>
    );
};

export default ShowMsg;