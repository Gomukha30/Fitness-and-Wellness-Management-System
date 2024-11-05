import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './footer';
import { AiOutlineSend } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import medi from "../assets/medi.png";

const Admin = () => {
  const [selected, setSelected] = useState(null);
  const [trainersList, setTrainersList] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    // Add more trainers here
  ]);
  const [clientsList, setClientsList] = useState([
    { id: 1, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
    { id: 2, name: 'Bob Smith', email: 'bob.smith@example.com' },
    // Add more clients here
  ]);
  const [messages, setMessages] = useState({});

  const handleSelect = (item) => {
    setSelected(item);
  };

  const handleClose = () => {
    setSelected(null);
  };

  const handleDelete = (id, type) => {
    if (type === 'trainers') {
      setTrainersList(trainersList.filter((trainer) => trainer.id !== id));
    } else if (type === 'clients') {
      setClientsList(clientsList.filter((client) => client.id !== id));
    }
  };

  const handleMessageChange = (id, value) => {
    setMessages({ ...messages, [id]: value });
  };

  const handleSendMessage = (type, id) => {
    const message = messages[id] || '';
    alert(`Message sent to ${type} with ID ${id}: ${message}`);
  };

  const handleEnroll = (id) => {
    alert('Trainer is enrolled');
  };

  const handleDecline = (id) => {
    alert('Trainer is declined');
  };

  return (
    <>
      <div style={{ backgroundImage: `url(${medi})`, backgroundSize: "cover", minHeight: '100vh' }}>
        <Navbar />
        <div className="flex justify-center h-96 w-96 m-6 items-center">
          <div className="flex space-x-4">
            <div className="bg-black p-4 rounded-lg shadow-md cursor-pointer" onClick={() => handleSelect('trainers')}>
              <h1 className="text-xl text-white font-semibold mb-2">Trainers</h1>
              <p className="text-white">Click to view trainers</p>
            </div>
            <div className="bg-black p-4 rounded-lg shadow-md cursor-pointer" onClick={() => handleSelect('clients')}>
              <h1 className="text-xl text-white font-semibold mb-2">Clients</h1>
              <p className="text-white">Click to view clients</p>
            </div>
          </div>
        </div>
        {selected && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white  bg-opacity-50">
            <div className="bg-black p-8 rounded-lg shadow-lg">
              <h1 className="text-2xl text-white font-semibold mb-4">{selected === 'trainers' ? 'Trainers' : 'Clients'}</h1>
              <div>
                {selected === 'trainers' &&
                  trainersList.map((trainer) => (
                    <div key={trainer.id} className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-lg text-white font-semibold">{trainer.name}</p>
                        <p className="text-white">{trainer.email}</p>
                      </div>
                      <div className="flex items-center">
                        <button className="text-red-500 mr-2" onClick={() => handleDelete(trainer.id, 'trainers')}>
                          Delete
                        </button>
                        <div className="flex items-center">
                          <input type="text" className="border rounded-l px-2 py-1 focus:outline-none" placeholder="Type a message..."  onChange={(e) => handleMessageChange(trainer.id, e.target.value)} />
                          <button className="bg-blue-500 text-white rounded-r px-2 py-1 ml-1" onClick={() => handleSendMessage('trainer', trainer.id)}>
                            <AiOutlineSend />
                          </button>
                        </div>
                        <div className="flex items-center">
                          <button className="bg-green-500 text-white rounded-l px-2 py-1 ml-2" onClick={() => handleEnroll(trainer.id)}>
                            Enroll
                          </button>
                          <button className="bg-red-500 text-white rounded-r px-2 py-1 ml-1" onClick={() => handleDecline(trainer.id)}>
                            Decline
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                {selected === 'clients' &&
                  clientsList.map((client) => (
                    <div key={client.id} className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-lg text-white font-semibold">{client.name}</p>
                        <p className="text-white ">{client.email}</p>
                      </div>
                      <div className="flex items-center">
                        <button className="text-red-500 mr-2" onClick={() => handleDelete(client.id, 'clients')}>
                          Delete
                        </button>
                        <div className="flex items-center">
                          <input type="text" className="border rounded-l px-2 py-1 focus:outline-none" placeholder="Type a message..." onChange={(e) => handleMessageChange(client.id, e.target.value)} />
                          <button className="bg-blue-500 text-white rounded-r px-2 py-1 ml-1" onClick={() => handleSendMessage('client', client.id)}>
                            <AiOutlineSend />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4" onClick={handleClose}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Admin;


