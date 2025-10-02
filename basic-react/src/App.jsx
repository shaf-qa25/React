const NetflixSeries = () => {
  const name = "Queen of Tears"
  const Rating = 8.2
  const summary = "Queen of Tears is a K-drama about a chaebol heiress, Hong Hae-in, and her lawyer husband, Baek Hyun-woo, whose marriage is on the rocks. After discovering Hae-in has a brain tumor and only months to live, Hyun-woo initially sees it as a chance to avoid a difficult divorce, but their journey ultimately leads to a miraculous rekindling of their love and a fight against family rivals who are scheming to take over her company, the Queens Group."
  let age =56;

  const returnGenre = () => {
    const genre = "Romcom"
    return genre;
  };

  const canWatch = () => {
    // let age=prompt("enter your age please");
    if (age > 18) 
      return "Watch Now"
    else
      return "Not Available"
  }


  // let canWatch="Not Available";
  // if(age>18)canWatch="Watch Now"



  // if(age<18){
  //   return(
  //     <div>
  //     <img src="qot.png" alt="qot.png" width="40%" height="40%" />
  //     <h2>Name:{name}</h2>
  //     <h3>Rating:{5+3.3}</h3>
  //     <p>Summary:{summary}
  //     </p>
  //     <p>Genre: {returnGenre()}</p>
  //     <button>Not Available</button>
  //   </div>
  //   )
  // }
  return (
    <div>
      <img src="qot.png" alt="qot.png" width="40%" height="40%" />
      <h2>Name:{name}</h2>
      <h3>Rating:{5 + 3.3}</h3>
      <p>Summary:{summary}
      </p>
      <p>Genre: {returnGenre()}</p>
      {/* <button>{age<18?"Not Available":"Watch Now"}</button> */}
      {/* <button>{canWatch}</button> */}
      <button>{canWatch()}</button>
    </div>
  )
};

const App = () => {
  return (
    <>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />

    </>
  );
};



export default App