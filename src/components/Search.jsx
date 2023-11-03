import React, { useState } from "react";

const Search = (props) => {
   const {
      searchMovies = Function.prototype,
   } = props;

   const [search, setSearch] = useState("");
   const [type, setType] = useState('all');

   const handleKey = (event) => {
      if (event.key === 'Enter') {
         searchMovies(search, type);
      }
   };
   const handleFilter = (event) => {
      setType(event.target.dataset.type);
      searchMovies(search, event.target.dataset.type);
   }




   return <div className="row">
      <div className="input-field">
         <input
            placeholder="validate"
            id="search"
            type="search"
            className="validate"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKey}
         />
         <button
            className="btn search-btn"
            onClick={() =>
               searchMovies(
                  search,
                  type
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
                  onChange={handleFilter}
                  cheked={type === "all"}
               />
               <span>All</span>
            </label>
            <label >
               <input
                  data-type="movie"
                  name='type'
                  type='radio'
                  onChange={handleFilter}
                  cheked={type === "movie"}
               />
               <span>movie</span>
            </label>
            <label >
               <input
                  data-type="series"
                  name='type'
                  type='radio'
                  onChange={handleFilter}
                  cheked={type === "series"}
               />
               <span>series</span>
            </label>
         </div>
      </div>
   </div>
}

export { Search };