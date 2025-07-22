import React from 'react';
import { Droppable } from '@hello-pangea/dnd';
import ActivityItem from './ActivityItem';

const DayColumn = ({ day, activities }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 w-64 min-h-[300px]">
      <h3 className="text-xl font-semibold mb-2 text-center">{day}</h3>
      <Droppable droppableId={day}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`space-y-2 p-2 rounded transition-all duration-200 ${
              snapshot.isDraggingOver ? 'bg-blue-50' : 'bg-gray-50'
            }`}
          >
            {activities
              .filter((activity) => activity && activity.id)
              .map((activity, index) => (
                <ActivityItem
                  key={activity.id}
                  activity={activity}
                  index={index}
                  day={day}
                />
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default DayColumn;
