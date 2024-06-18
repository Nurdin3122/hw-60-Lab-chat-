import React from 'react';
import "./block-message.css";
interface Props {
    author:string;
    message:string;
    dataTime:string;
}

const ShowMsg:React.FC<Props> = ({author,message,dataTime}) => {
    return (
        <div className="block-message">
            <p>Author: {author} </p> <p> Message: {message}</p>
            <p>data-time:{dataTime}</p>
        </div>
    );
};

export default ShowMsg;