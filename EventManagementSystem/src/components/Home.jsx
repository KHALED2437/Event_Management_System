import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home({eventsToRender = []}) {
  const navigate = useNavigate();
  const availableEvents = eventsToRender
  .filter(event => 
    event.toDisplay === true
  );
  return (
    <div className='min-h-screen bg-gray-900 text-gray-100 py-8 px-4'>
      <div className="w-full">
        <h1 className="text-3xl font-bold text-indigo-400 mb-8">Upcoming Events</h1>
        
        {availableEvents.length === 0 ? (
          <div className="text-center py-16 bg-gray-800 rounded-xl border border-gray-700">
            <p className="text-gray-400 text-xl">No events available</p>
            <p className="text-gray-500 mt-2">Check back later for exciting events</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mx-4">
            {availableEvents.map((event, index) => (
              <div 
                key={index} 
                onClick={() => navigate(`/events/${event.eventCreater}/${event.eventId}`)} 
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-indigo-500 transition-all duration-200 hover:shadow-xl hover:shadow-indigo-900/20 cursor-pointer h-full flex flex-col"
              >
                <div className="relative w-full h-64">
                  <img 
                    src={event.imageUrl} 
                    alt={event.eventName}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-6">
                    <h3 className="text-2xl font-semibold text-white">{event.eventName}</h3>
                  </div>
                </div>
                
                <div className="p-6 flex-grow">
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-300 text-lg">
                      <span className="font-medium text-white">By:</span> {event.organiserName}
                    </p>
                  </div>
                  
                  {event.venue && (
                    <div className="flex items-start space-x-3 mb-3">
                      <div className="flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-300 text-lg">{event.venue}</p>
                    </div>
                  )}
                  
                  {event.dateTime && (
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-300 text-lg">{event.dateTime}</p>
                    </div>
                  )}
                </div>
                
                <div className="px-6 py-4 bg-gray-700/50 text-right">
                  <span className="text-indigo-300 font-medium text-lg">View Details →</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Home