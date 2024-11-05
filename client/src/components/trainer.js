import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './footer';
import car from '../assets/car.png';
import car1 from '../assets/car1.png';
import card1 from '../assets/card1.webp';
import card2 from '../assets/card2.jpeg';

const Trainer = () => {
  const [trainers, setTrainers] = useState([
    {
      name: 'Joseph',
      experience: '23+ years',
      availableTime: 'Weekly 23 hours, Daily 3 hours',
      email: 'example@example.com',
      skills: 'Communication Skills, Motivational Skills',
      slots: [
        { time: '2:00 PM to 3:30 PM', status: 'Available' },
        { time: '4:00 AM to 5:00 AM', status: 'Available' },
        { time: '6:00 AM to 7:00 AM', status: 'Not Available' }
      ],
      isBooked: false,
      showDetails: false,
      showSlots: false,
      bookedSlot: null,
      rating: 0,
      image: card1 // Added image for Joseph
    },
    {
      name: 'Sravan',
      experience: '10+ years',
      availableTime: 'Weekly 20 hours, Daily 4 hours',
      email: 'Sravan@gmail.com',
      skills: 'Good interaction, Motivational Speaker, Perfectionalist on Work',
      slots: [
        { time: '2:00 PM to 3:30 PM', status: 'Available' },
        { time: '4:00 AM to 5:00 AM', status: 'Available' },
        { time: '6:00 AM to 7:00 AM', status: 'Not Available' }
      ],
      isBooked: false,
      showDetails: false,
      showSlots: false,
      bookedSlot: null,
      rating: 0,
      image: card2 // Added image for Sravan
    },
    // Add more trainers here
  ]);

  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const toggleDetails = (index) => {
    const updatedTrainers = trainers.map((trainer, i) => {
      if (i === index) {
        return { ...trainer, showDetails: !trainer.showDetails };
      }
      return trainer;
    });
    setTrainers(updatedTrainers);
  };

  const toggleSlots = (index) => {
    const updatedTrainers = trainers.map((trainer, i) => {
      if (i === index) {
        return { ...trainer, showSlots: !trainer.showSlots };
      }
      return trainer;
    });
    setTrainers(updatedTrainers);
  };

  const handleBookNow = (index) => {
    const updatedTrainers = trainers.map((trainer, i) => {
      if (i === index) {
        return { ...trainer, isBooked: true };
      }
      return trainer;
    });
    setTrainers(updatedTrainers);
  };

  const handleBookSlot = (index, slot) => {
    const updatedTrainers = trainers.map((trainer, i) => {
      if (i === index) {
        if (slot.status === 'Not Available') {
          alert('You cannot book this slot as it is already booked.');
        } else if (trainer.bookedSlot) {
          const confirmReplace = window.confirm('You have already booked a slot. Do you want to replace it?');
          if (confirmReplace) {
            return { ...trainer, bookedSlot: slot.time };
          }
        } else {
          return { ...trainer, bookedSlot: slot.time };
        }
      }
      return trainer;
    });
    setTrainers(updatedTrainers);
    alert('Slot booked successfully!');
  };

  const handleFeedback = (index, rating) => {
    const updatedTrainers = trainers.map((trainer, i) => {
      if (i === index) {
        return { ...trainer, rating };
      }
      return trainer;
    });
    setTrainers(updatedTrainers);
    alert('Thank you for your feedback!');
  };

  const StarRating = ({ value, onClick }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
      <span key={index} onClick={() => onClick(index + 1)}>
        {index < value ? '★' : '☆'}
      </span>
    ));
    return <div>{stars}</div>;
  };

  const handleBecomeTrainerClick = () => {
    setShowRegistrationForm(!showRegistrationForm);
  };

  const handleRegister = () => {
    // Validation checks
    // const name = document.getElementById('name').value.trim();
    // const email = document.getElementById('email').value.trim();
    // const phone = document.getElementById('phone').value.trim();
    // const skills = document.getElementById('skills').value.trim();
    // const experience = document.getElementById('experience').value.trim();

    // if (!name || !email || !phone || !skills || !experience) {
    //   alert('Please fill in all mandatory fields.');
    //   return;
    // }

    // if (!isValidEmail(email)) {
    //   alert('Please enter a valid email address.');
    //   return;
    // }

    // Additional validation checks for phone number, skills, and experience can be added here

    // Registration successful
    alert('Registered Successfully!');
    setShowRegistrationForm(false);
  };

  const isValidEmail = (email) => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="w-full p-2 flex justify-center">
          <img src={car1} alt="Our Trainer" className="h-80 w-auto rounded-md shadow-md m-2 mb-2" style={{ width: '40%' }} />
          <img src={car} alt="Our Trainers" className="h-80 w-auto rounded-md shadow-md m-2 mb-2" style={{ width: '40%' }} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {trainers.map((trainer, index) => (
            <div key={index}>
              <div className="w-full p-2">
                <div className="bg-rose-100 shadow-md rounded-lg m-4 p-4">
                  {/* Trainer Image */}
                  <img src={trainer.image} alt={trainer.name} className="h-80 w-auto rounded-md shadow-md m-2 mb-2" style={{ width: '50%' }} />
                  {/* Trainer Details */}
                  <h2 className="text-lg font-bold gap-2">{trainer.name}</h2>
                  <p className="text-black text-base">Experience: {trainer.experience}</p>
                  <p className="text-black text-base">Available Time: {trainer.availableTime}</p>
                  <div className="mt-4">
                    <button className="bg-teal-100 hover:bg-pink-500 text-black font-bold py-2 px-4 rounded-full" onClick={() => toggleSlots(index)}>
                      {trainer.showSlots ? 'Hide Slots' : 'Available Slots'}
                    </button>
                    {trainer.showSlots && (
                      <div className="mt-2">
                        {trainer.slots.map((slot, i) => (
                          <button key={i} className="bg-teal-100 hover:bg-pink-500 text-black font-bold py-2 px-4 rounded-full mt-4" onClick={() => handleBookSlot(index, slot)}>
                            {slot.time} {trainer.bookedSlot === slot.time && '(Booked)'}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <button className="bg-teal-100 hover:bg-pink-500 text-black font-bold py-2 px-4 rounded-full m-4" onClick={() => toggleDetails(index)}>
                    {trainer.showDetails ? 'Hide Details' : 'Know More'}
                  </button>
                  {trainer.showDetails && (
                    <div className="mt-4 m-2 ">
                      <p className="text-black">Name : {trainer.name}</p>
                      <p className="text-black">Email: {trainer.email}</p>
                      <p className="text-black">Skills: {trainer.skills}</p>
                    </div>
                  )}
                  <button className="bg-teal-100 hover:bg-pink-500 text-black font-bold py-2 px-4 rounded-full m-4" onClick={() => handleBookNow(index)}>
                    Book Now
                  </button>
                  {trainer.isBooked && <p className="text-green-500 mt-2">Booked Successfully!</p>}
                  <div className="mt-4">
                    <StarRating value={trainer.rating} onClick={(rating) => handleFeedback(index, rating)} />
                  </div>
                </div>
              </div>
            </div>
          ))}
          {showRegistrationForm && (
            <div>
              <div className="w-full p-2">
                <div className="bg-rose-100 shadow-md rounded-lg m-4 p-4">
                  <h2 className="text-lg font-bold gap-2">Trainer Registration</h2>
                  <p>Please enter your details to register as a trainer:</p>
                  {/* Registration Form */}
                  <form onSubmit={handleRegister}>
                  <div className="flex flex-col">
                    
                    <label className="mt-4">Name</label>
                    <input required id="name" type="text" className="border p-1" placeholder="Enter your name" />
                    <label className="mt-4">Age</label>
                    <input required id="age" type="number" className="border p-1" placeholder="Enter your age" />
                    <label className="mt-4">Email</label>
                    <input required id="email" type="email" className="border p-1" placeholder="Enter your email" />
                    <label className="mt-4">Year of Experience</label>
                    <input required id="experience" type="number" className="border p-1" placeholder="Enter your years of experience" />
                    <label className="mt-4">Available Time in a Weekly (Hourly)</label>
                    <input required id="weeklyHours" type="number" className="border p-1" placeholder="Enter your weekly available time (hours)" />
                    <label className="mt-4">Available Time in a Day (Hourly)</label>
                    <input required id="dailyHours" type="number" className="border p-1" placeholder="Enter your daily available time (hours)" />
                    <label className="mt-4">Skills</label>
                    <select required id="skills" className="border p-1">
                      <option value="">Select your skills</option>
                      <option value="Exercise Physiology">Knowledge of Exercise Physiology</option>
                      <option value="Communication Skills">Communication Skills</option>
                      <option value="Motivation Skills">Motivation Skills</option>
                      <option value="Adaptability and flexibility">Adaptability and flexibility</option>
                      <option value="Nutritional Knowledge">Nutritional Knowledge</option>
                      <option value="Empathy and Interpersonal skills">Empathy and Interpersonal skills</option>
                    </select >
                    <label className="mt-4">Your Expecting Salary</label>
                    <input required id="salary" type="text" className="border p-1" placeholder="Enter your expecting salary" />
                    <button type={'submit'}className="bg-teal-100 hover:bg-pink-500 text-black font-bold py-2 px-4 rounded-full mt-4" >
                      Register
                    </button>
                    
                  </div>
                  </form>
                </div>
              </div>
            </div>
          )}
          <div>
            <div className="w-full p-2">
              <div className="bg-rose-100 shadow-md rounded-lg m-4 p-4">
                <h2 className="text-lg font-bold gap-2">Become a Trainer</h2>
                <p>Click the button below to register as a trainer.</p>
                <button className="bg-teal-100 hover:bg-pink-500 text-black font-bold py-2 px-4 rounded-full mt-4" onClick={handleBecomeTrainerClick}>
                  {showRegistrationForm ? 'Hide Registration Form' : 'Become a Trainer'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Trainer;