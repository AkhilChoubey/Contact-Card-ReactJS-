import React from "react";

function Details(detailsProps){
    return <div>
         <p className="info">{detailsProps.Phone}</p>
          <p className="info">{detailsProps.email}</p>
    </div>
}

export default Details;