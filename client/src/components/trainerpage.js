import React, { useState } from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import Navbar from './Navbar';
import Footer from './footer';

function TrainerPage() {
  const [clients, setClients] = useState([
    { id: 1, name: 'John Doe', age: 30, weight: 70, height: 170, slot: '10:00 AM - 11:00 AM', status: '' },
    { id: 2, name: 'Sravan', age: 25, weight: 60, height: 165, slot: '12:00 PM - 1:00 PM', status: '' },
    { id: 1, name: 'John Doe', age: 30, weight: 70, height: 170, slot: '10:00 AM - 11:00 AM', status: '' },
    { id: 2, name: 'Sravan', age: 25, weight: 60, height: 165, slot: '11:00 AM - 12:00 PM', status: '' },
    { id: 2, name: 'Sravan', age: 25, weight: 60, height: 165, slot: '7:00 AM - 8:00 AM', status: '' },
    { id: 1, name: 'John Doe', age: 30, weight: 70, height: 170, slot: '5:00 AM - 6:00 AM', status: '' },
    // Add more clients here
  ]);

  const [chatMessages, setChatMessages] = useState([]);
  const [notificationMessages, setNotificationMessages] = useState([
    { id: 1, message: 'From Admin: Your salary is credited to you.', from: 'admin', replied: false },
    { id: 2, message: 'From client: I could not attend tomorrow\'s session. Can we continue day after tomorrow?', from: 'client', replied: false },
    // Add more notification messages here
  ]);

  const [showChat, setShowChat] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [replyMessage, setReplyMessage] = useState('');

  const handleEnroll = (id) => {
    setClients((prevClients) =>
      prevClients.map((client) =>
        client.id === id ? { ...client, status: 'Enrolled' } : client
      )
    );
    window.alert('Client is enrolled');
  };

  const handleDecline = (id) => {
    setClients((prevClients) =>
      prevClients.map((client) =>
        client.id === id ? { ...client, status: 'Declined' } : client
      )
    );
    window.alert('Client is declined');
  };

  const handleDelete = (id) => {
    setClients((prevClients) =>
      prevClients.filter((client) => client.id !== id)
    );
    window.alert('Client is deleted');
  };

  const handleChatMessage = (message) => {
    setChatMessages([...chatMessages, message]);
  };

  const handleNotificationReply = (id, message) => {
    setNotificationMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === id ? { ...msg, replied: true, reply: message } : msg
      )
    );
    setReplyMessage('');
    window.alert('Message sent');
  };

  const closeChat = () => {
    setShowChat(false);
  };

  const closeNotifications = () => {
    setShowNotifications(false);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto m-9 px-4">
        <h2 className="text-2xl font-bold mt-8 mb-4">Joseph</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {clients.map((client) => (
            <div key={client.id} className="bg-indigo-100 p-4 rounded shadow-md">
              <h3 className="text-xl text-black font-semibold mb-2">{client.name}</h3>
              <p>Age: {client.age}</p>
              <p>Weight: {client.weight}</p>
              <p>Height: {client.height}</p>
              <p>Slot: {client.slot}</p>
              <p>Status: {client.status}</p>
              <div className="flex justify-between mt-4">
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleEnroll(client.id)}
                  disabled={client.status === 'Enrolled' || client.status === 'Declined'}
                >
                  Enroll
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDecline(client.id)}
                  disabled={client.status === 'Enrolled' || client.status === 'Declined'}
                >
                  Decline
                </button>
                <button
                  className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDelete(client.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="fixed top-2 right-2 flex flex-col items-end">
        <div className="bg-gray-200 p-4 rounded-md mb-4">
          <BsFillChatDotsFill onClick={() => setShowNotifications(!showNotifications)} className="text-xl text-gray-600 cursor-pointer" />
        </div>
        {showNotifications && (
          <div className="bg-gray-200 p-4 rounded-md mb-4 w-80">
            {notificationMessages.map((message) => (
              <div key={message.id} className="mb-2">
                <p className="font-semibold">{message.message}</p>
                {!message.replied ? (
                  <>
                    <textarea name={message.id} id={message.id}
                      className="border rounded p-1 w-full mt-1"
                      placeholder="Type your reply..."
                      onChange={(e) => setReplyMessage(e.target.value)}
                    />
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded mt-1"
                      onClick={() => handleNotificationReply(message.id, replyMessage)}
                    >
                      Reply
                    </button>
                  </>
                ) : (
                  <p className="text-gray-500">Message sent</p>
                )}
              </div>
            ))}
          </div>
        )}
        <div className="bg-gray-200 p-4 rounded-md">
          <AiOutlineMessage onClick={() => setShowChat(!showChat)} className="text-xl text-gray-600 cursor-pointer" />
        </div>
        {showChat && (
          <div className="bg-gray-200 p-4 rounded-md mt-4 w-80">
            <div className="mb-2">
              {chatMessages.map((message, index) => (
                <div key={index} className="mb-1">
                  <p>{message}</p>
                </div>
              ))}
            </div>
            <input
              type="text"
              className="border rounded p-1 w-full"
              placeholder="Type a message..."
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleChatMessage(e.target.value);
                  e.target.value = '';
                }
              }}
            />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default TrainerPage;
