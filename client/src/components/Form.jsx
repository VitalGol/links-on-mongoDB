/* eslint-disable react/prop-types */
import { useState } from 'react';
import axios from 'axios';
import { Select } from './Select';

const Form = ({ links, update, setUpdate }) => {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [select, setSelect] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSelect();
    try {
      await axios.post(`${import.meta.env.VITE_API}`, { name, link, select });
      setUpdate(!update);
      setName('');
      setLink('');
      setSelect('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col ">
      <label
        htmlFor="name"
        className="relative block mb-3 border border-gray-200 rounded-md shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
      >
        <input
          type="text"
          id="name"
          className="flex w-full py-2 ml-3 placeholder-transparent bg-transparent border-none peer focus:border-transparent focus:outline-none focus:ring-0"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
          Name
        </span>
      </label>
      <label
        htmlFor="link"
        className="relative block mb-3 border border-gray-200 rounded-md shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
      >
        <input
          type="text"
          id="link"
          className="flex w-full py-2 ml-3 placeholder-transparent bg-transparent border-none peer focus:border-transparent focus:outline-none focus:ring-0"
          placeholder="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
          Link
        </span>
      </label>
      <div className="flex justify-end ">
        <p className="flex items-center justify-center mr-6 text-sky-950">
          Links: &nbsp;{links.length}
        </p>
        <Select select={select} setSelect={setSelect} />
        <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
          Save
        </button>
      </div>
    </form>
  );
};

export default Form;
