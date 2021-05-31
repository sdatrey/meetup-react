function AllMeetups() {
    const Dummy_data = [
        {
            id : '1',
            title: 'This is the first data',
            image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fblogs.loc.gov%2Ffolklife%2F2014%2F11%2Fcorsican-language-and-expressive-culture%2F&psig=AOvVaw0KiwVr0NKHHAyehCrS2uZ3&ust=1622559821002000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDZ8sGY9PACFQAAAAAdAAAAABAD',
            content: 'Anything'
        },
        {
            id : '2',
            title: 'This is the second data',
            image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fblogs.loc.gov%2Ffolklife%2F2014%2F11%2Fcorsican-language-and-expressive-culture%2F&psig=AOvVaw0KiwVr0NKHHAyehCrS2uZ3&ust=1622559821002000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDZ8sGY9PACFQAAAAAdAAAAABAD',
            content: 'Anything'
        },
        {
            id : '3',
            title: 'This is the third data',
            image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fblogs.loc.gov%2Ffolklife%2F2014%2F11%2Fcorsican-language-and-expressive-culture%2F&psig=AOvVaw0KiwVr0NKHHAyehCrS2uZ3&ust=1622559821002000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDZ8sGY9PACFQAAAAAdAAAAABAD',
            content: 'Anything'
        }
    ]
    return (
        <section>
            <ul>
                {Dummy_data.map((meetup) => {
                    return(
                        <li key={meetup.id}>
                            {meetup.title}
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}
export default AllMeetups;
