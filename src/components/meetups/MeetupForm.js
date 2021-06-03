import Card from "../ui/Card";
import classes from "./MeetupForm.module.css"
import {useRef} from "react";

function MeetupFrom(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            description: enteredDescription
        }
        props.onAddMeetup(meetupData);

    }
    return(
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id="title" ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Image</label>
                    <input type="url" required id="image" ref={imageInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea required name="description" id="description" cols="30" rows="10" ref={descriptionInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button type="submit" >Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}
export default MeetupFrom;
