const CardList =({itemCards})=>{
    return(
        <div className="card-list">
        {itemCards.map((item) => {
          const info = item.card.info;
          const price = (info.price ?? info.defaultPrice) / 100;
          return (
            <div className="item-card" key={info.id || info.name}>
              <img
                src={
                  info.imageId
                    ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/${info.imageId}`
                    : "https://via.placeholder.com/300x180"
                }
                alt={info.name}
              />

              <div className="description">
                <h3>{info.name}</h3>
                <h4>{info.category}</h4>
                <h4>₹{price}</h4>
              </div>
              <div>
                <button className="menu-button">Add</button>
              </div>
            </div>
          );
        })}
      </div>
    )
}

export default CardList;