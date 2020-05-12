import React from "react";
import "./Home2.css";
import "./Home2.scss";
import fire from "../firebase/firebase";

const insertDb = fire.database();
const ttlWorkout = ["Easy", "Medium", "Hard"];
const ttlMeal = ["Healthy", "Low Carbo", "Diet"];

class Home2 extends React.Component {
  logout() {
    fire.auth().signOut();
  }

  card() {
    insertDb
      .ref("users/" + fire.auth().currentUser.uid)
      .child("user-workout")
      .set({
        Workout: ttlWorkout[0],
        MealPlan: "",
      });
    window.alert(
      "Successfully choose " + " " + ttlWorkout[0] + " " + "Workout Plan"
    );
  }

  card1() {
    insertDb
      .ref("users/" + fire.auth().currentUser.uid)
      .child("user-workout")
      .set({
        Workout: ttlWorkout[1],
        MealPlan: "",
      });
    window.alert(
      "Successfully choose " + " " + ttlWorkout[1] + " " + "Workout Plan"
    );
  }

  card2() {
    insertDb
      .ref("users/" + fire.auth().currentUser.uid)
      .child("user-workout")
      .set({
        Workout: ttlWorkout[2],
        MealPlan: "",
      });
    window.alert(
      "Successfully choose " + " " + ttlWorkout[2] + " " + "Workout Plan"
    );
  }

  cardMeal() {
    insertDb
      .ref("users/" + fire.auth().currentUser.uid)
      .child("user-workout")
      .update({
        MealPlan: ttlMeal[0],
      });
    window.alert("Successfully choose " + " " + ttlMeal[0] + " " + "Meal Plan");
  }

  cardMeal1() {
    insertDb
      .ref("users/" + fire.auth().currentUser.uid)
      .child("user-workout")
      .update({
        MealPlan: ttlMeal[1],
      });
    window.alert("Successfully choose " + " " + ttlMeal[1] + " " + "Meal Plan");
  }

  cardMeal2() {
    insertDb
      .ref("users/" + fire.auth().currentUser.uid)
      .child("user-workout")
      .update({
        MealPlan: ttlMeal[2],
      });
    window.alert("Successfully choose " + " " + ttlMeal[2] + " " + "Meal Plan");
  }

  consoledebug() {
    console.log(fire.auth().currentUser.email);
    console.log(fire.database().ref("/users/").once("username"));
  }

  getData() {
    //let username = document.getElementById('pemail')
    fire
      .database()
      .ref("users/" + fire.auth().currentUser.uid)
      .once("value")
      .then(function (snapshot) {
        var email = snapshot.child("/user-data/email").val();
        var username = snapshot.child("/user-data/username").val();
        var workoutPlan = snapshot.child("user-workout/Workout").val();
        var mealPlan = snapshot.child("user-workout/MealPlan").val();

        console.log(email);
        console.log(username);
        console.log(workoutPlan);
        console.log(mealPlan);

        document.getElementById("readEmail").innerHTML = email;
        document.getElementById("readUsername").innerHTML = username;
        document.getElementById("readWorkout").innerHTML = workoutPlan;
        document.getElementById("readMealplan").innerHTML = mealPlan;
      });
  }

  render() {
    return (
      <div>
        <h4 className="info">Slide to change page</h4>
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
                <div class="card" onClick={this.card}>
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
                <div class="card" onClick={this.card1}>
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
                <div class="card" onClick={this.card2}>
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
                  <div class="card" onClick={this.cardMeal}>
                    <div class="box box3">
                      <p>
                        <div className="inside" onClick="this.disabled">
                          <h5>Food Options :</h5>
                          <li>
                            Shrimp and Avocado Salad from{" "}
                            <a
                              target="_blank"
                              href="https://damndelicious.net/2018/01/13/shrimp-and-avocado-salad/"
                            >
                              Damn Delicious
                            </a>
                          </li>
                          <li>
                            Vegetarian Crunch Wrap Supreme from{" "}
                            <a
                              target="_blank"
                              href="https://abeautifulmess.com/2014/02/vegetarian-crunch-wrap-supreme.html"
                            >
                              {" "}
                              A Beautiful Mess{" "}
                            </a>
                          </li>
                          <li>
                            Kale Pesto Avocado Grilled Cheese from{" "}
                            <a
                              target="_blank"
                              href="https://damndelicious.net/2017/01/01/kale-pesto-avocado-grilled-cheese/"
                            >
                              Damn Delicious
                            </a>
                          </li>
                        </div>{" "}
                      </p>
                      <h2>Healthy</h2>
                    </div>
                    <div class="bg"></div>
                  </div>
                  <div class="card" onClick={this.cardMeal1}>
                    <div class="box box3">
                      <p>
                        <div className="inside" onClick="this.disabled">
                          <h5>Food Options :</h5>
                          <li>
                            Bruschetta Chicken Stuffed Avocados{" "}
                            <a
                              target="_blank"
                              href="https://www.delish.com/cooking/recipe-ideas/a22110065/bruschetta-chicken-stuffed-avocados-recipe/"
                            >
                              by MAKINZE GORE
                            </a>
                          </li>
                          <li>
                            Bacon, Egg, and Cheese Roll-Ups{" "}
                            <a
                              target="_blank"
                              href="https://www.delish.com/cooking/recipe-ideas/recipes/a52582/bacon-egg-and-cheese-roll-ups-recipe/"
                            >
                              by LINDSAY FUNSTON
                            </a>
                          </li>
                          <li>
                            Ham & Cheese Egg Cups{" "}
                            <a
                              target="_blank"
                              href="https://www.delish.com/cooking/recipe-ideas/recipes/a50901/ham-cheese-egg-cups-recipe/"
                            >
                              by LINDSAY FUNSTON
                            </a>
                          </li>
                        </div>
                      </p>
                      <h2>Low Carbo</h2>
                    </div>
                    <div class="bg"></div>
                  </div>
                  <div class="card" onClick={this.cardMeal2}>
                    <div class="box box3">
                      <p>
                        <div className="inside" onClick="this.disabled">
                          <h5>Food Options :</h5>
                          <li>
                            Zucchini Noodles with Avocado Pesto & Shrimp{" "}
                            <a
                              target="_blank"
                              href="http://www.eatingwell.com/recipe/257004/zucchini-noodles-with-avocado-pesto-shrimp/"
                            >
                              by Breana Killeen
                            </a>
                          </li>
                          <li>
                            Rainbow Veggie Spring Roll Bowl{" "}
                            <a
                              target="_blank"
                              href="http://www.eatingwell.com/recipe/255570/rainbow-veggie-spring-roll-bowl/"
                            >
                              by Breana Killeen
                            </a>
                          </li>
                          <li>
                            Loaded Sweet Potato Nacho Fries{" "}
                            <a
                              target="_blank"
                              href="http://www.eatingwell.com/recipe/255216/loaded-sweet-potato-nacho-fries/"
                            >
                              by Hilary Meyer
                            </a>
                          </li>
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
                <li>
                  <a className="logout refresh" onClick={this.getData}>
                    Refresh
                  </a>
                  <a onClick={this.logout} className="logout">
                    LOGOUT
                  </a>
                </li>
              </div>
              <div>
                <div className="profile-card">
                  <div className="pic"></div>
                  <table>
                    <tr>
                      <th>
                        <h3>EMAIL</h3>
                      </th>
                      <th>
                        <h3>USERNAME</h3>
                      </th>
                      <th>
                        <h3>WORKOUT PLAN</h3>
                      </th>
                      <th>
                        <h3>MEAL PLAN</h3>
                      </th>
                    </tr>
                    <tr>
                      <td>
                        <p id="readEmail" />
                      </td>
                      <td>
                        <p id="readUsername" />
                      </td>
                      <td>
                        <p id="readWorkout"></p>
                      </td>
                      <td>
                        <p id="readMealplan"></p>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Home2;

/*                <ul>
                    <h3>EMAIL</h3>
                  </ul>
                  <ul></ul>
                  <ul>
                    <h3>USERNAME</h3>
                    <p id="readUsername" />
                  </ul>
                  <ul>
                    <h3>WORKOUT PLAN</h3>
                    <p id="readWorkout"></p>
                  </ul>
                  <ul>
                    <h3>MEAL PLAN</h3>
                    <p id="readMealplan"></p>
                  </ul>
                  */
