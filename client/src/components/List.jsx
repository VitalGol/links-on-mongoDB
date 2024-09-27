/* eslint-disable react/prop-types */
import axios from 'axios';
// <List key={elem.id} name={elem.name} id={elem._id} />
const List = ({ name, id }) => {
  // const handleEdit = (id) => {
  //   console.log('first', id);
  //   axios
  //     .put(`${process.env.VITE_API}/${id}`)
  //     // .then((res) => setLinks(res.data))
  //     .then((res) => console.log('first', res.data))
  //     .catch((error) => console.error('error', error));
  // };
  const handleDelete = (id) => {
    console.log('----------', id);
    axios
      .delete(`${process.env.VITE_API}/${id}`)
      .then((res) => console.log('first', res.data))
      .catch((error) => console.error('error', error));
  };
  return (
    <div className="flex mb-1 ">
      <p className="flex w-full px-4 py-2 mr-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
        {name}
      </p>

      {/* <div className="flex fl ">
        <button
          className="mr-2 px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-sky-700 rounded-md hover:bg-sky-600 focus:outline-none focus:bg-sky-600"
          onClick={() => handleEdit(id)}
        >
          Edit
        </button>
      </div> */}
      <div className="flex ">
        <button
          className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default List;
