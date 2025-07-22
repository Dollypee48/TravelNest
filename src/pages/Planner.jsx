import { useContext } from 'react';
import { ItineraryContext } from '../context/ItineraryContext';
import AddDestinationForm from '../components/AddDestinationForm';
import AddActivityForm from '../components/AddActivityForm';
import DayColumn from '../components/DayColumn';
import { DragDropContext } from '@hello-pangea/dnd';

export default function Planner() {
  const {
    activities,
    moveActivity,
    deleteActivity,
    editActivity,
    clearItinerary, // ← Make sure this is added in context
  } = useContext(ItineraryContext);

  const handleDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    moveActivity(source, destination, draggableId);
  };

  return (
    <div className="min-h-screen bg-rose-50 p-6 md:p-10 space-y-10">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-amber-700 mb-2">Travel Itinerary Planner</h2>
        <p className="text-gray-600 text-lg">Add destinations and organize daily activities with ease.</p>
      </div>

      {/* Forms Section */}
      <div className="grid md:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow-md">
        <AddDestinationForm />
        <AddActivityForm />
      </div>

      {/* Itinerary Section */}
      <div>
        {Object.keys(activities).length === 0 ? (
          <p className="text-gray-500">No activities added yet. Use the form above to get started.</p>
        ) : (
          <>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-amber-600">Your Daily Itinerary</h3>
              <button
                onClick={clearItinerary}
                className="text-sm bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow"
              >
                Clear All
              </button>
            </div>

            <DragDropContext onDragEnd={handleDragEnd}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.keys(activities).map((day) => (
                  <DayColumn
                    key={day}
                    day={day}
                    activities={activities[day]}
                    deleteActivity={deleteActivity}
                    editActivity={editActivity}
                  />
                ))}
              </div>
            </DragDropContext>
          </>
        )}
      </div>
    </div>
  );
}
