import classes from './MeetupList.module.css'
import MeetupItem from "./MeetupItem";
import React from "react";
function MeetupList(props) {
    return(
        <ul className={classes.list}>
            {props.meetups.map((meetup) => {
              return  <MeetupItem
                    key = {meetup.id}
                    title = {meetup.title}
                    image = {meetup.image}
                    description = {meetup.description}
                />
            })}
        </ul>
    )
}
export default MeetupList;
