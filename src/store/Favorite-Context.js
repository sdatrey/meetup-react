import React, { createContext, useState} from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite : (favoriteMeetup) => {},
    deleteFavorite : (meetupId) => {},
    isFavorite : (meetupId) => {},
})

export function FavoriteContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);
    function addFavoriteHandler(favoriteMeetup) {
        setUserFavorites(prevFavorites => {
            return prevFavorites.concat(favoriteMeetup)
        })
    }
    function deleteFavoriteHandler(meetupId) {
        setUserFavorites(prevFavorite => {
            return prevFavorite.filter(meetup => meetup.id !== meetupId)
        })
    }
    function isFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId)
    }
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        deleteFavorite: deleteFavoriteHandler,
        isFavorite: isFavoriteHandler
    }
    
    return(
        <FavoritesContext.Provider className="Provider" value={context}>
            {props.children}
        </FavoritesContext.Provider>
    )
}
export default FavoritesContext;
