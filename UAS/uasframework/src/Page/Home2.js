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
        <h4 className="info">Scroll ke samping untuk halaman berikutnya</h4>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap');
        </style>
        <div id="home2">
          <section>
            <div className="page1">
              <h1>Menu</h1>
              <p className='title-sm'>Pilih Paket Workout :</p>
              <div class="quotes">
                <div class="card">
                  <div class="box box1">
                    <p>
                        <div className='inside'>
                            <li>
                                Push up x10
                            </li>
                            <li>
                                Sit up x 15
                            </li>
                            <li>
                                Plank 30 s
                            </li>
                        </div>
                      {" "}
                    </p>
                    <h2>Easy</h2>
                  </div>
                  <div class="bg"></div>
                </div>
                <div class="card">
                  <div class="box box2">
                    <p>
                      Your smile will give you a positive countenance that will
                      make people feel comfortable around you.{" "}
                    </p>
                    <h2>Medium</h2>
                  </div>
                  <div class="bg"></div>
                </div>
                <div class="card">
                  <div class="box box3">
                    <p>
                      Before anything else, preparation is the key to success.{" "}
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
          </section>
        </div>
      </div>
    );
  }
}

export default Home2;
