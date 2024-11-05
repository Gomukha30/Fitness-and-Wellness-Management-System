import React, { useState } from "react";
import image from  '../assets/image.png';
import { IoIosFitness } from "react-icons/io";
import { IoFitness } from "react-icons/io5";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!firstName) {
      newErrors.firstName = "Please enter your first name";
    }
    if (!lastName) {
      newErrors.lastName = "Please enter your last name";
    }
    if (!email || !validateEmail(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!password) {
      newErrors.password = "Please enter a password";
    }
    if (!dob) {
      newErrors.dob = "Please enter your date of birth";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Reset form and show success message
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setDob("");
      setErrors({});
      alert("Registered Successfully!");
    }
  };

  return (
    <div
      className="login-container bg-cover bg-center  h-[100vh] w-full"
      style={{ backgroundImage: `url(${image})` }}
    >
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center gap-2">
            <div>
              <IoIosFitness className="text-xl" />
              <IoFitness />
            </div>
            <div className="ml-1">
              <h1 className=" text-xl text-bold">Fitflex</h1>
            </div>
          </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 mt-2" htmlFor="firstName">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.firstName ? 'border-red-500' : ''}`}
            id="firstName"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors.firstName && <p className="text-red-500 text-xs italic">{errors.firstName}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.lastName ? 'border-red-500' : ''}`}
            id="lastName"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors.lastName && <p className="text-red-500 text-xs italic">{errors.lastName}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
            id="email"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''}`}
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.dob ? 'border-red-500' : ''}`}
            id="dob"
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          {errors.dob && <p className="text-red-500 text-xs italic">{errors.dob}</p>}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Register;
