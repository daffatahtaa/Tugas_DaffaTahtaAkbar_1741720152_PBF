import React from "react";
import "./Login.css";

const LoginMenu_Pertemuan3 = () => {
  return (
    <div className="app">
      <header>
        <h2 className="titleTop">Form Login</h2>
      </header>

      <body>
        <div class="col-md-offset-3">
          <div class="row">
            <div class="col-md-4">
              <div class="card">
                <h2 className="title-card">Tugas Pertemuan Ketiga</h2>
                <div class="card-body" align="center">
                  <form className="login-input">
                    <tr>
                      <th>
                        <label for="username">Username </label>
                      </th>
                      <td>
                        <input
                          type="text"
                          id="username"
                          name="username"
                          hint="Masukkan Username"
                          title="Masukkan Username"
                        ></input>
                        <br></br>
                      </td>
                    </tr>

                    <tr>
                      <th>
                        <label for="password">Password </label>
                      </th>
                      <td>
                        <input
                          type="password"
                          id="passwd"
                          name="passwd"
                          title="Masukkan Password"
                        ></input>
                        <br></br>
                      </td>
                    </tr>

                    <input
                      type="submit"
                      value="Submit"
                      className="submit"
                    ></input>
                    <br></br>
                  </form>
                </div>
                <tr>
                  <th>
                    <input type="checkbox" value="RememberMe"></input>
                  </th>
                  <td>
                    <label className="remember">Remember Me</label>
                  </td>
                </tr>

                <div class="cancel">
                  <tr>
                    <button class="cancelBtn">Cancel</button>
                  </tr>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default LoginMenu_Pertemuan3;
