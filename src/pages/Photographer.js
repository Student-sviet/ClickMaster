import React from 'react';
import { useState, useEffect } from 'react';
import {  AstrologerDetails} from './components/AstrologerDetails';
// import { getAstrologerDetails, sendMessage, getChatHistory } from './api/Photographer';
import './App.css';

function ChatWithAstrologer() {
  const [astrologerDetails, setAstrologerDetails] = useState({});
  const [chatHistory, setChatHistory] = useState([]);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       const astrologer = await getAstrologerDetails();
//       setAstrologerDetails(astrologer);
//       setIsLoading(false);
//     }
//     fetchData();
//   }, []);

//   useEffect(() => {
//     async function fetchData() {
//       const history = await getChatHistory();
//       setChatHistory(history);
//     }
//     fetchData();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const result = await sendMessage(message);
//     setChatHistory([...chatHistory, result]);
//     setMessage('');
//   };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="container mx-auto">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <AstrologerDetails />
          {/* <div className="flex flex-wrap">
            <ChatHistory chatHistory={chatHistory} />
            <ChatBox handleSubmit={handleSubmit} handleChange={handleChange} message={message} />
          </div>
          <ChatForm handleSubmit={handleSubmit} handleChange={handleChange} message={message} /> */}
        </div>
      )}
    </div>
  );
}

export default ChatWithAstrologer;