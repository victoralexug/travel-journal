export default function Main (props){
    return(
        <div className="main">
            <img className="travel-photo" src={props.item.imageUrl} alt='imageUrl' />
            <div className="container">
                <div className="location">
                    <img className="location-icon" src={props.item.locationIcon} target='blank' />
                    <span className="country">{props.item.location} </span>
                    <a href={props.item.googleMapsUrl} target="blank">view on google notes</a>
                </div>

                <div className="body">
                    <p className="title">{props.item.title}</p>
                    <p className=" date">
                        <span>{props.item.startDate}</span> - <span>{props.item.endDate}</span>
                    </p>
                    <p className="description">{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}
