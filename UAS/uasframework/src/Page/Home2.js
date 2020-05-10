import React from "react";
import "./Home2.css";
import "./Home2.scss";
import fire from "../firebase/firebase";

class Home2 extends React.Component {
  logout() {
    fire.auth().signOut();
  }
  render() {
    return (
      <div>
        <h4 className="info">Slide for next page</h4>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap');
        </style>
        <div id="home2">
          <section>
            <div className="page1">
              <h1>Menu</h1>
              <p className="title-sm">Choose Workout Plan :</p>
              <div class="quotes">
                <div class="card">
                  <div class="box box2">
                    <p>
                      <div className="inside">
                        <h4>5 Rounds :</h4>
                        <li>Jumping Jacks x60</li>
                        <li>Lunges x40</li>
                        <li>Burpees x20</li>
                        <li>Break 30sec</li>
                      </div>{" "}
                    </p>
                    <h2>Easy</h2>
                  </div>
                  <div class="bg"></div>
                </div>
                <div class="card">
                  <div class="box box2">
                    <p>
                      <div>
                        <h4>5 Rounds :</h4>
                        <li>Run 7 Min (No Rep)</li>
                        <li>Plank 30s</li>
                        <li>Crunch x10</li>
                        <li>Push Up x10</li>
                        <li>Break 1 Min</li>
                      </div>
                    </p>
                    <h2>Medium</h2>
                  </div>
                  <div class="bg"></div>
                </div>
                <div class="card">
                  <div class="box box2">
                    <p>
                      <div>
                        <h4>8 Rounds :</h4>
                        <li>Run 10 Min (No Rep)</li>
                        <li>Plank 30s</li>
                        <li>Sit up x15</li>
                        <li>Crunch x10</li>
                        <li>Push Up x10</li>
                        <li>Tap Shoulder x15</li>
                        <li>Break 2 Min</li>
                      </div>
                    </p>
                    <h2>Hard</h2>
                  </div>
                  <div class="bg"></div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="page2">
              <div className="atas">
                <li>
                  <a>
                    <h1>Meal</h1>
                  </a>
                </li>
                <p className="title-sm">Choose Meal Plan :</p>

                <div class="quotes">
                  <div class="card">
                    <div class="box box3">
                      <p>
                        <div className="inside">
                          <h5>Breakfast :</h5>
                          <li>Wheat Bread</li>
                        </div>{" "}
                      </p>
                      <h2>Healthy</h2>
                    </div>
                    <div class="bg"></div>
                  </div>
                  <div class="card">
                    <div class="box box3">
                      <p>
                        <div className="inside">
                          <h5>Breakfast :</h5>

                        </div>
                      </p>
                      <h2>Low Carbo</h2>
                    </div>
                    <div class="bg"></div>
                  </div>
                  <div class="card">
                    <div class="box box3">
                      <p>
                        <div className="inside">
                          <h5>Breakfast :</h5>

                        </div>
                      </p>
                      <h2>Diet</h2>
                    </div>
                    <div class="bg"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="page2">
              <div className="atas">
                <li>
                  <a>
                    <h1>Profile</h1>
                  </a>
                </li>
              </div>
            </div>
            <footer>
                <a>
                    logout
                </a>
            </footer>
          </section>
        </div>
      </div>
    );
  }
}

export default Home2;
