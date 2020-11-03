import React from "react";
import SearchBox from "./Search";
import Info from "./Info"
import "./Index.css"

const key= "df1149651c8b4e1b858180020202610";



class App extends React.Component{
    constructor(){
        super()
        this.state= 
        {
            searchField: "",
            cityName:{},
            weather: {},
        }
    }

      
        
    
    
    render(){
        return (
        <div className={this.state.weather === undefined || this.state.weather.temp_c > 16  ?  "App-display-warm" : "bodyCold"} >
            <SearchBox placeholder="search" handleChange= {(e) =>this.setState({searchField: e.target.value})} 
            
            onKeyDown= 
            {
                (e)=>
                {
                    if(e.keyCode === 13)
                    {
                        this.setState({searchField: e.target.value});
                        fetch( `http://api.weatherapi.com/v1/current.json?key=${key}&q=${this.state.searchField}`)
                        .then(respose => respose.json())
                        .then(secondResponse => 
                            {
                                this.setState({cityName: secondResponse.location, weather: secondResponse.current})
                                
                            })
                    }
                }
            }
                />
            <Info cityName={this.state.cityName} weather={this.state.weather} />
        </div>
    )
    }
    
    
}

export default App;