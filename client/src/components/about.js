import React, { useState } from 'react';
import medi from "../assets/medi.png";
import { AiOutlineMessage } from 'react-icons/ai';
import { BsFillChatDotsFill } from 'react-icons/bs';
import Navbar from './Navbar';
import Footer from './footer';

const AboutUs = () => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const [chatMessages, setChatMessages] = useState([]);
  const [notificationMessages, setNotificationMessages] = useState([
    { id: 1, message: 'From Admin: You are Inactive these days.... become active .', from: 'client', replied: false },
    { id: 2, message: 'From Trainer: You have been inactive from past days.', from: 'Trainer', replied: false },
    // Add more notification messages here
  ]);

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

  const handleNotificationDismiss = (id) => {
    setNotificationMessages((prevMessages) =>
      prevMessages.filter((msg) => msg.id !== id)
    );
  };

  const [showChat, setShowChat] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [replyMessage, setReplyMessage] = useState('');

  return (
    <>
      <Navbar />
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
                      // value={replyMessage}
                      onChange={(e) => setReplyMessage(e.target.value)}
                    />
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded mt-1 mr-2"
                      onClick={() => handleNotificationReply(message.id, replyMessage)}
                    >
                      Reply
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded mt-1"
                      onClick={() => handleNotificationDismiss(message.id)}
                    >
                      Dismiss
                    </button>
                  </>
                ) : (
                  <p className="text-black">Message sent</p>
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
      <div className="flex bg-rose-100 shadow-md rounded-lg p-6 m-4">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-green-400 mb-4">About Us...</h2>
          <p className="text-black font-bold">
            Our fitness coaches can enable you to meet your wellness objectives. They can turn into your instructor, your helper, your mentor and your companion.
          </p>
          <p className="text-black">
            Our fitness tracker website offers comprehensive services to enhance your wellness journey. Track your daily activity, monitor heart rate, and analyze sleep patterns with cutting-edge technology. Access personalized workout plans, set goals, and receive real-time feedback for optimal progress. Sync seamlessly with mobile apps for a holistic approach to health. Explore a user-friendly interface that prioritizes your fitness goals, making every step towards a healthier lifestyle effortless and enjoyable.
          </p>
          <div className="flex-1 flex justify-center p-4 items-center">
            <img
              src={medi}
              alt="medi"
              className="h-80 w-auto rounded-md shadow-xl"
            />
          </div>
          <button
            className="bg-teal-100 hover:bg-pink-500 text-black font-bold py-2 px-4 rounded-full mt-4"
            onClick={toggleExpanded}
          >
            Learn More About Us
          </button>
        </div>
      </div>
      {expanded && (
        <div className="flex-1">
          <div className=" bg-rose-100 shadow-md rounded-lg p-6 m-4">
            <h3 className="text-xl font-bold mb-2">Wellness Diet Matter</h3>
            <p className="text-black">
              wellness aspect typically refers to a holistic approach to health that goes beyond just physical fitness. It encompasses mental, emotional, and spiritual well-being, emphasizing balance and overall quality of life.
              A wellness program on a fitness website might offer perfect plans that include not only exercise routines but also guidance on nutrition, stress management, mindfulness techniques, and other lifestyle factors. It aims to help individuals achieve optimal health and vitality, not just through physical fitness but also by addressing mental and emotional aspects.
              The wellness section of a fitness website might describe the benefits of a holistic approach to health, how it can improve overall well-being, and how the website's services and programs can support users in achieving their wellness goals. It may also highlight success stories, testimonials, and expert advice to inspire and motivate users on their wellness journey.
            </p>
          </div>
          <div className=" bg-rose-100 shadow-md rounded-lg p-6 m-4">
            <h3 className="text-xl font-bold mb-2">Fitness Trainers Matter</h3>
            <p className="text-black">
              "Our fitness trainers are certified professionals with extensive experience in helping individuals achieve their fitness goals. They are experts in designing personalized workout plans tailored to your specific needs and fitness level. With a deep understanding of exercise science and nutrition, our trainers provide guidance on effective workouts, proper form, and healthy eating habits.
              Beyond their technical skills, our trainers are passionate about helping you succeed. They serve as motivators, mentors, and coaches, providing support and encouragement every step of the way. Whether you're looking to lose weight, build muscle, or improve your overall health, our trainers are committed to helping you reach your full potential. Join our fitness community and let our trainers inspire and guide you on your fitness journey."
            </p>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default AboutUs;
