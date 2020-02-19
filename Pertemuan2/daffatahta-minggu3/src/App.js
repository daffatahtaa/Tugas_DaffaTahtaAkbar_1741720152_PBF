import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ background: "light" }}>
        <div class="container">
          <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
              Daps
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About
                  </a>
                </li>
              </ul>
              <span class="navbar-text">Navbar</span>
            </div>
          </nav>
        </div>

        <div class="card">
          <p style={{ color: "black", marginTop: "10px" }}>Biodata</p>

          <table
            class="table table-item"
            style={{ width: "100%", height: "50%" }}
            rowspan="0"
          >
            <tbody>
              <tr>
                <td rowspan="10" align="center">
                  <img
                    src={require("../src/images.png")}
                    align-image="center"
                    width="500px"
                    height="600px"
                  ></img>
                </td>
                <td scope="row"></td>
                <th>Nama</th>
                <td>:</td>
                <td>Daffa Tahta Akbar</td>
              </tr>
              <tr>
                
                <td scope="row"></td>
                <th>TTL</th>
                <td>:</td>
                <td>Jakarta 2 Oct 1999</td>
                <td></td>
              </tr>
              <tr>
              
                <td scope="row"></td>
                <th>Jenis Kelamin</th>
                <td>:</td>
                <td>Cowo</td>
                <td></td>
              </tr>
              <tr>
              
                <td scope="row"></td>
                <th>Alamat</th>
                <td>:</td>
                <td>Malang</td>
                <td></td>
              </tr>
              <tr>
              
                <td scope="row"></td>
                <th>Status</th>
                <td>:</td>
                <td>Mahasiswa</td>
                <td></td>
              </tr>
              <tr>
              
                <td scope="row"></td>
                <th>Hobi</th>
                <td>:</td>
                <td>Basket</td>
                <td></td>
              </tr>
              <tr>
              
                <td scope="row"></td>
                <th>Email</th>
                <td>:</td>
                <td>daffatahta12@gmail.com</td>
                <td></td>
              </tr>
              <tr>
              
                <td scope="row"></td>
                <th>Github</th>
                <td>:</td>
                <td>daffatahtaa</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </header>
      <footer style={{position: "auto", backgroundColor:"white"}}>
        <p style={{ float: "left", marginLeft: "20px", marginTop: "20px" }}>
          daffatahta12@gmail.com
        </p>
      </footer>
    </div>
  );
}

export default App;
