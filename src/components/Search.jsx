import React, { Component } from "react";

class Search extends Component {
   state = {
      search: ''
   }
   render() {
      return <div className="row">
            <div className="input-field">
               <input 
                  placeholder="validate" 
                  id="search" 
                  type="search" 
                  className="validate" 
                  value={this.setState.search}
                  onChange={ (e) => this.setState(({search: e.target.value}))}
                  />
            </div>
         </div>
      
   }
}

export { Search };