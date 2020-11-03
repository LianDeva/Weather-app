import React from "react";

class Info extends React.Component{
    
    render(){
        return(
            <div className="Main">
                <h1 className="City">{this.props.cityName !== undefined ? this.props.cityName.name : "Search region"  }</h1>
                <h1 className="exactLocation">{this.props.cityName !== undefined ? this.props.cityName.region : ""}</h1>
                <h1 className="Date">{this.props.cityName !== undefined ? this.props.cityName.name :""}</h1>
                <h1 className="weather">{this.props.weather !== undefined ? this.props.weather.temp_c : ""}</h1>
            </div>
        )
    }
}

export default Info;