import React from "react";

const Weather = (props)=>(
  <div className="result">
    {props.city && <div className="result-item"><span className="key">City:</span>  <span className="value">{props.city}</span> </div>}
    {props.country && <div className="result-item"><span className="key">Country:</span>  <span className="value">{props.country}</span> </div>}
    {props.description && <div className="result-item"><span className="key">Description:</span>  <span className="value">{props.description}</span> </div>}
    {props.temperature && <div className="result-item"><span className="key">Temperature:</span>  <span className="value">{props.temperature} {'\u00b0'}</span> </div>}
    {props.humidity && <div className="result-item"><span className="key">Humidity:</span>  <span className="value">{props.humidity}</span> </div>}
    {props.error && <div className="result-item">{props.error}</div>}
  </div>
)



export default Weather
