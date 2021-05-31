import MeetupList from "../components/meetups/MeetupList";
import React from "react";

function AllMeetups() {
    const Dummy_data = [
        {
            id : '1',
            title: 'This is the first data',
            image: 'https://www.worldatlas.com/r/w960-q80/upload/f7/a7/ff/bonifacio-corsica.jpg',
            description: 'Anything'
        },
        {
            id : '2',
            title: 'This is the second data',
            image: 'https://www.worldatlas.com/r/w960-q80/upload/f7/a7/ff/bonifacio-corsica.jpg',
            description: 'Anything'
        },
        {
            id : '3',
            title: 'This is the third data',
            image: 'https://www.worldatlas.com/r/w960-q80/upload/f7/a7/ff/bonifacio-corsica.jpg',
            description: 'Anything'
        }
    ]
    return (
        <section>
                <h1>All Meetups</h1>
               <MeetupList meetups={Dummy_data} />
        </section>
    )
}
export default AllMeetups;
