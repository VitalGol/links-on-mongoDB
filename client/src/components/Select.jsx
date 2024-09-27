/* eslint-disable react/prop-types */
export const Select = ({ select, setSelect }) => {
  return (
    <select
      value={select}
      onChange={(e) => setSelect(e.target.value)}
      name="theme"
      className="p-2 mr-8 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400"
    >
      <option value="current">Current</option>
      <option value="react">React.js</option>
      <option value="next">Next.js</option>
      <option value="nextSupabase">Next.js Supabase</option>
      <option value="mongoDB">MongoDB</option>
      <option value="mern">MERN</option>
      <option value="shadcn">Shadcn UI</option>
      <option value="interview">Cобеседованиe</option>
      <option value="other">Other</option>
    </select>
  );
};
