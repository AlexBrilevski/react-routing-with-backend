import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/Home';
import EventsLayout from './pages/EventsLayout';
import EventsPage, { eventsLoader } from './pages/Events';
import EventDetailPage, { eventDetailLoader, deleteEventAction } from './pages/EventDetail';
import NewEventPage, { newEventAction } from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              { path: 'edit', element: <EditEventPage /> },
            ],
          },
          { path: 'new', element: <NewEventPage />, action: newEventAction },
        ]
      },
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
