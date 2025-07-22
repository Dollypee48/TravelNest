import React, { useState } from 'react';
import { Draggable } from '@hello-pangea/dnd';
import { useItinerary } from '../context/ItineraryContext';
import { FiTrash2, FiEdit2, FiCheck, FiX } from 'react-icons/fi';

export default function ActivityItem({ activity, index, day }) {
  const { deleteActivity, updateActivity } = useItinerary();
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(activity?.name || '');

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this activity?')) {
      deleteActivity(day, activity.id);
    }
  };

  const handleEdit = () => {
    const trimmed = editedName.trim();
    if (trimmed && trimmed !== activity.name) {
      updateActivity(day, activity.id, trimmed);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleEdit();
    if (e.key === 'Escape') setIsEditing(false);
  };

  return (
    <Draggable draggableId={activity.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white border p-3 rounded shadow-sm flex justify-between items-center transition-all"
        >
          <div className="flex-1">
            {isEditing ? (
              <input
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                onKeyDown={handleKeyDown}
                className="border px-2 py-1 rounded w-full text-sm"
                autoFocus
              />
            ) : (
              <p className="text-gray-800 text-sm">{activity.name}</p>
            )}
          </div>

          <div className="flex space-x-2 ml-2">
            {isEditing ? (
              <>
                <button
                  onClick={handleEdit}
                  className="text-green-600 hover:text-green-800"
                  title="Save"
                >
                  <FiCheck />
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="text-gray-500 hover:text-gray-700"
                  title="Cancel"
                >
                  <FiX />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsEditing(true)}
                  className="text-blue-500 hover:text-blue-700"
                  title="Edit"
                >
                  <FiEdit2 />
                </button>
                <button
                  onClick={handleDelete}
                  className="text-red-500 hover:text-red-700"
                  title="Delete"
                >
                  <FiTrash2 />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
}
