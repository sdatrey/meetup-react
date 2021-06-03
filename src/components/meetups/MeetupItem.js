import classes from './MeetupItem.module.css'
import Card from '../ui/Card'
import FavoritesContext from "../../store/Favorite-Context";
import {useContext} from "react";

function MeetupItem(props) {
    const favoriteCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoriteCtx.isFavorite(props.id)

    function toggleFavoritesHandler() {
        if (itemIsFavorite){
            favoriteCtx.deleteFavorite(props.id)
        }
        else {
            favoriteCtx.addFavorite({
                id: props.id,
                title: props.title,
                image: props.image,
                description: props.description
            })
        }
    }
    return (
        <li>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt=""/>
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoritesHandler}>{itemIsFavorite ? 'Remove Favorites' : 'To Favorites'}</button>
                </div>
            </Card>

        </li>
    )
}
export default MeetupItem;
