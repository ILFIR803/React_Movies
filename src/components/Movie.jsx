export function Movie(props) {
   const {
      Title,
      Year,
      Type,
      imbdID,
      Poster,
   } = props;
   return <div className="card">
            <div className="card-image">
               <img src={Poster} />
               
            </div>
            <div className="card-content">
               <span className="card-title">{Title}</span>
            </div>
            <div className="card-action button">
               <p>{Year}</p>
               <a href="!#"> {Type}</a>
               <p>{imbdID}</p>
            </div>
         </div>


}