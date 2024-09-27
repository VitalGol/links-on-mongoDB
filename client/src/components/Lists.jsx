/* eslint-disable react/prop-types */
import axios from 'axios';

const Lists = ({
  links,
  update,
  setUpdate,
  select,
  selectedLinks,
  setSelectedLinks,
}) => {
  setSelectedLinks(links.filter((elem) => elem.select === select).length);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API}/${id}`);
      setUpdate(!update);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ul>
      {!selectedLinks && (
        <p className="text-red-500 font-bold text-xl py-2">NO Links</p>
      )}
      {links
        .sort((a, b) => a.name.localeCompare(b.name))
        .filter((elem) => elem.select === select)
        .map((elem) => (
          <div className="flex mb-1 " key={elem._id}>
            <a
              className="flex w-full px-4 py-2 mr-2 text-gray-700 bg-white border border-gray-200 rounded-md cursor-pointer hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              href={elem.link}
              target="_blank"
            >
              {elem.name}
            </a>
            <div className="flex ">
              <button
                className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
                onClick={() => handleDelete(elem._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </ul>
  );
};

export default Lists;
