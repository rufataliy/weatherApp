import React from "react";

const Form = props => (
      <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="City . . ."/>
        <input type="text" name="country" placeholder="Country . . ."/>
        <div className="buttons">
          <button>Get Weather</button>
          <a href="#" onClick={props.clear}>Clear</a>
        </div>
      </form>
      )

export default Form
