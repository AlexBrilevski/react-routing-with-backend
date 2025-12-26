import { useLoaderData } from "react-router-dom";
import EventItem from '../components/EventItem';

const EventDetailPage = () => {
  const data = useLoaderData();

  return (
    <EventItem event={data.event} />
  );
};

export default EventDetailPage;

export const eventDetailLoader = async ({ pequest, params }) => {
  const id = params.eventId;

  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    // TODO: add error handling
  }

  return response;
};
