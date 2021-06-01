import Card from "../ui/Card";
import classes from "./MeetupForm.module.css"

function MeetupFrom() {
    return(
        <Card>
            <form className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id="title"/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Title</label>
                    <input type="url" required id="image"/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Meetup Title</label>
                    <textarea name="description" id="description" cols="30" rows="10"></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}
export default MeetupFrom;
