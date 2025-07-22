import AddActivityForm from './AddActivityForm';
import ActivityItem from './ActivityItem';

export default function DestinationCard({ destination, activities }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="mb-2">
        <h2 className="text-xl font-semibold text-teal-700">
          {destination.name}
        </h2>
        <p className="text-sm text-gray-500">
          Added by: <span className="font-medium">{destination.addedBy}</span>
        </p>
      </div>

      <AddActivityForm destination={destination.name} />
      
      <ul className="space-y-1 mt-2">
        {activities.map((act, index) => (
          <ActivityItem key={act.id} activity={act} index={index} day={destination.name} />
        ))}
      </ul>
    </div>
  );
}
