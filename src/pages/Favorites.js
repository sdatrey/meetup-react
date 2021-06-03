import FavoritesContext from "../store/Favorite-Context";
import {useContext} from "react";
import MeetupList from "../components/meetups/MeetupList";

function Favorites() {
    const favoriteCtx = useContext(FavoritesContext);

    let content;
    if(favoriteCtx.totalFavorites === 0){
        content = <p>There are no favorites</p>
    }
    else{
        content = <MeetupList meetups={favoriteCtx.favorites} />
    }
    return (
        <section>
            <h1>My favorites</h1>
            {content}
        </section>
    )
}
export default Favorites;
