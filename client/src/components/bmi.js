import React, { useState } from 'react';

const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');

  const calculateBmi = () => {
    // const weightKg = parseFloat(weight);
    const heightM = parseFloat(height) / 100;
    if (weight > 0 && heightM > 0) {
      const bmiValue = weight / (heightM * heightM);
      setBmi(bmiValue.toFixed(2));

      if (bmiValue < 18.5) {
        setBmiCategory('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setBmiCategory('Normal weight');
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setBmiCategory('Overweight');
      } else {
        setBmiCategory('Obesity');
      }
    } else {
      setBmi(null);
      setBmiCategory('');
    }
  };

  return (
    <div className="bg-red-200 shadow-md rounded-lg p-6 m-4">
      <h2 className="text-2xl font-bold mb-4">Calculate Your BMI</h2>
      <div className="mb-4">
      <label htmlFor="weight" className="block text-gray-700 font-bold gap-2 mb-2">Enter your weight and height below:</label>
        <label htmlFor="weight" className="block text-gray-700 font-bold mb-2">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="height" className="block text-gray-700 font-bold mb-2">Height (cm):</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        onClick={calculateBmi}
        className=" bg-teal-100 hover:bg-pink-500 text-black font-bold py-2 px-4 rounded-full mt-4"
      >
        Calculate BMI
      </button>
      {bmi && (
        <div className="mt-4">
          <p className="text-black font-bold">Your BMI is: {bmi}</p>
          <p className="text-blackfont-bold">Category: {bmiCategory}</p>
        </div>
      )}
    </div>
  );
};

export default BmiCalculator;



