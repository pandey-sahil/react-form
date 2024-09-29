import React from 'react';
import { useState } from 'react';


const App = () => {
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [gender, setgender] = useState("");

  const user = {
    username: username,
    email: email,
    gender: gender,
  }
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user);
  };


  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Basic Form</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Username</label>
            <input
              onChange={(e) => setusername(e.target.value)}
              type="text"
              id="username"
              name="username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              onChange={(e) => setemail(e.target.value)}
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          <div className='mb-4'>
            <input
              type="radio"
              name="gender"
              defaultValue="male"
              checked={gender === 'male' ? true : false}
              onChange={(e) => setgender(e.target.value)}
            />{' '}
            Male &nbsp;&nbsp;&nbsp;
            
            <input
              type="radio"
              name="gender"
              defaultValue="female"
              checked={gender === 'female' ? true : false}
              onChange={(e) => setgender(e.target.value)}
            />{' '}
            Female &nbsp;&nbsp;&nbsp;

            <input
              type="radio"
              name="gender"
              defaultValue="others"
              checked={gender === 'others' ? true : false}
              onChange={(e) => setgender(e.target.value)}
            />{' '}
            Others&nbsp;&nbsp;&nbsp;
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
