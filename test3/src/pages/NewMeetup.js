import { useNavigate } from "react-router-dom"
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {
const navigate = useNavigate();

function addMeetupHandler (meetupData) {
  fetch("https://test3-e13e1-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
  {
    method: "POST", 
    body: JSON.stringify(meetupData),
    headers: {
      'Content-Type': 'application/json',
    }
  }
  ).then(() => {
    navigate('/');
  });
}

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;



   /* function NewMeetupPage() {
    return <div>New Meetup Page</div>;
  }
  
  export default NewMeetupPage; */