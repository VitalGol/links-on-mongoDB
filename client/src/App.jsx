import { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './components/Form';
import Lists from './components/Lists';
import './App.css';
import { Select } from './components/Select';

function App() {
  const [links, setLinks] = useState([]);
  const [update, setUpdate] = useState(false);
  const [select, setSelect] = useState('');
  const [selectedLinks, setSelectedLinks] = useState();
  async function getFetchData() {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API}`);
      setLinks(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getFetchData();
  }, [update]);

  return (
    <>
      <Form links={links} update={update} setUpdate={setUpdate} />
      <hr className="my-3" />
      <div className="flex items-center justify-center mb-2">
        <p className="flex font-bold text-xl mr-6">Choose a theme:</p>
        <Select select={select} setSelect={setSelect} />
        <p className="flex mr-6 ">Links: &nbsp;{selectedLinks}</p>
      </div>
      <Lists
        links={links}
        update={update}
        setUpdate={setUpdate}
        select={select}
        selectedLinks={selectedLinks}
        setSelectedLinks={setSelectedLinks}
      />
    </>
  );
}

export default App;
