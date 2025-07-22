import { useState } from 'react';
import { useItinerary } from '../context/ItineraryContext';
import { toast } from 'react-toastify';

export default function AddDestinationForm() {
  const [destination, setDestination] = useState('');
  const { addDestination } = useItinerary();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!destination.trim()) return toast.error('Destination is required');
    addDestination(destination);
    setDestination('');
    toast.success('Destination added');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center mb-4">
      <input
        type="text"
        placeholder="Enter destination"
        className="border rounded px-4 py-2 w-full"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded">Add</button>
    </form>
  );
}
