import { Link } from "react-router-dom";

const EVENTS_DATA = [
  { id: 'e1', title: 'Event 1' },
  { id: 'e2', title: 'Event 2' },
  { id: 'e3', title: 'Event 3' },
  { id: 'e4', title: 'Event 4' },
];

const EventsPage = () => {
  return (
    <>
      <h1>The Events Page</h1>
      <ul>
        {EVENTS_DATA.map(event => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;
