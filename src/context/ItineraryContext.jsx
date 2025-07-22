import { createContext, useContext, useState, useEffect } from "react";
import { loadFromStorage, saveToStorage } from "../utils/localStorage";

const ItineraryContext = createContext();

export const ItineraryProvider = ({ children }) => {
  const [destinations, setDestinations] = useState(loadFromStorage("destinations") || []);
  const [activities, setActivities] = useState(loadFromStorage("activities") || {});


  useEffect(() => {
    saveToStorage("destinations", destinations);
  }, [destinations]);

  useEffect(() => {
    saveToStorage("activities", activities);
  }, [activities]);


  const addDestination = (destination) => {
    setDestinations((prev) => [...prev, destination]);
  };

 
  const deleteDestination = (destinationId) => {
    setDestinations((prev) => prev.filter((d) => d.id !== destinationId));
    setActivities((prev) => {
      const updated = { ...prev };
      delete updated[destinationId];
      return updated;
    });
  };

  
  const addActivity = (day, activity) => {
    if (!activity?.id || !day) return;
    setActivities((prev) => ({
      ...prev,
      [day]: [...(prev[day] || []), activity],
    }));
  };

  
  const deleteActivity = (day, activityId) => {
    if (!day || !activityId) return;
    setActivities((prev) => ({
      ...prev,
      [day]: prev[day]?.filter((a) => a.id !== activityId) || [],
    }));
  };

 
  const updateActivity = (day, activityId, newName) => {
    if (!day || !activityId || !newName?.trim()) return;
    setActivities((prev) => ({
      ...prev,
      [day]: prev[day].map((a) =>
        a.id === activityId ? { ...a, name: newName } : a
      ),
    }));
  };

  const clearItinerary = () => {
  localStorage.removeItem('travel-itinerary');
  setActivities({});
};

  
  const resetItinerary = () => {
    setDestinations([]);
    setActivities({});
    saveToStorage("destinations", []);
    saveToStorage("activities", {});
  };

  return (
    <ItineraryContext.Provider
      value={{
        destinations,
        activities,
        addDestination,
        deleteDestination,
        addActivity,
        deleteActivity,
        updateActivity,
        setActivities,
        resetItinerary,
        clearItinerary
      }}
    >
      {children}
    </ItineraryContext.Provider>
  );
};

export const useItinerary = () => useContext(ItineraryContext);
export { ItineraryContext };
