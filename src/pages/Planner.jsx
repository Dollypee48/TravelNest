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
    clearItinerary,
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

  const isEmpty = Object.keys(activities).length === 0;

  return (
    <div className="min-h-screen bg-rose-50 p-6 md:p-10 space-y-10">

      {/* Title and Intro */}
      <header className="text-center">
        <h1 className="text-4xl font-extrabold text-amber-700 mb-2">
          Travel Itinerary Planner
        </h1>
        <p className="text-gray-600 text-lg">
          Add destinations and organize daily activities with drag-and-drop ease.
        </p>
      </header>

      {/* Input Forms */}
      <section className="grid md:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow">
        <AddDestinationForm />
        <AddActivityForm />
      </section>

      {/* Itinerary Display */}
      <section>
        {isEmpty ? (
          <p className="text-gray-500 mt-4 text-center">
            No activities added yet. Use the forms above to get started.
          </p>
        ) : (
          <>
            {/* Itinerary Header */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
              <h2 className="text-2xl font-bold text-amber-600">
                Your Daily Itinerary
              </h2>
              <button
                onClick={clearItinerary}
                className="text-sm bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow"
              >
                Clear All
              </button>
            </div>

            {/* Day Columns with Activities */}
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
      </section>
    </div>
  );
}
