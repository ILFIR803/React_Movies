import React, { Component } from "react";

class Search extends Component {
   state = {
      search: '',
      type: 'all',
   }

   handleKey = (event) => {
      if (event.key === 'Enter') {
         this.props.searchMovies(this.state.search, this.state.type);
      }
   };
   handleFilter = (event) => {
      this.setState(() => ({ type: event.target.dataset.type }), () => {
         this.props.searchMovies(this.state.search, this.state.type);
      });


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
               onChange={(e) => this.setState(({ search: e.target.value }))}
               onKeyDown={this.handleKey}
            />
            <button
               className="btn search-btn"
               onClick={() =>
                  this.props.searchMovies(
                     this.state.search,
                     this.state.type
                  )
               }
            >
               Поиск
            </button>
            <div className="filter">
               <label >
                  <input
                     selected data-type="all"
                     name='type'
                     type='radio'
                     onChange={this.handleFilter}
                     cheked={this.state.type === "all"}
                  />
                  <span>All</span>
               </label>
               <label >
                  <input
                     data-type="movie"
                     name='type'
                     type='radio'
                     onChange={this.handleFilter}
                     cheked={this.state.type === "movie"}
                  />
                  <span>movie</span>
               </label>
               <label >
                  <input
                     data-type="series"
                     name='type'
                     type='radio'
                     onChange={this.handleFilter}
                     cheked={this.state.type === "series"}
                  />
                  <span>series</span>
               </label>
            </div>
         </div>
      </div>

   }
}

export { Search };