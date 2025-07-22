import { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ItineraryContext } from '../context/ItineraryContext';

export default function AddActivityForm() {
  const { addActivity } = useContext(ItineraryContext);
  const [name, setName] = useState('');
  const [day, setDay] = useState('Monday');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newActivity = {
      id: uuidv4(),
      name,
    };

    addActivity(day, newActivity);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-xl font-semibold text-amber-600">Add Activity</h3>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Activity Name"
        className="w-full p-2 border rounded"
      />

      <select
        value={day}
        onChange={(e) => setDay(e.target.value)}
        className="w-full p-2 border rounded"
      >
        <option>Monday</option>
        <option>Tuesday</option>
        <option>Wednesday</option>
        <option>Thursday</option>
        <option>Friday</option>
        <option>Saturday</option>
        <option>Sunday</option>
      </select>

      <button
        type="submit"
        className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700"
      >
        Add Activity
      </button>
    </form>
  );
}
