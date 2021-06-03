import MeetupList from "../components/meetups/MeetupList";
import React, {useState, useEffect} from "react";
import axios from "axios";


function AllMeetups() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(
        () => {
            setIsLoading(false);
            axios.get('https://react-meetup-bb26c-default-rtdb.firebaseio.com/meetups.json').then((data) => {

                const meetUps = [];
                for(const key in data.data){
                    const meetup = {
                        id: key,
                        ...data.data[key]
                    }
                    meetUps.push(meetup);
                }
                setLoadedMeetups(meetUps);
            });
        },
        []
    )

    if (isLoading){
        return <div>Loading...</div>
    }

    return (
        <section>
                <h1>All Meetups</h1>
               <MeetupList meetups={loadedMeetups} />
        </section>
    )
}
export default AllMeetups;
