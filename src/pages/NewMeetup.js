import MeetupFrom from "../components/meetups/MeetupForm";
import { useHistory } from 'react-router-dom';
import axios from "axios";

function NewMeetup() {
    const history = useHistory();
function addMeetupHandler(meetupData) {
    axios.post('https://react-meetup-bb26c-default-rtdb.firebaseio.com/meetups.json', JSON.stringify(meetupData), {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(() => {
        history.replace('/');
    });
}
    return (
        <section>
            <h3>Add New Meetup here</h3>
            <MeetupFrom onAddMeetup={addMeetupHandler} />
        </section>
    )
}
export default NewMeetup;
