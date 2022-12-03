const element = (
  // Write your code here.
  <div className="bgContainer">
    <h1 class="heading">Congratulations</h1>
    <div className="containerCard">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profile"
      />
      <h1 className="name">Kiran V</h1>
      <p class="description">
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="watch"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
