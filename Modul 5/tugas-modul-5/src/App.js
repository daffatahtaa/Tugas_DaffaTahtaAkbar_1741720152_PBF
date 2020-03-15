import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

export default function Main() {
  return (
    <Router>
      <ul className="base">
        <li className="navbar">
          <Link to="/home" className="block">
            Home
          </Link>
        </li>
        <li className="navbar">
          <Link to="/kategori" className="block">
            Kategori
          </Link>
        </li>
        <li className="navbar">
          <Link to="/cart" className="block">
            Cart
          </Link>
        </li>
        <li className="navbar-login">
          <Link to="/login" className="block">
            Login
          </Link>
        </li>
        
      </ul>
      <AuthButton />
      <Switch>
        <Route path="/home">
          <Homepage />
        </Route>
        <Route path="/kategori">
          <KategoriPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <PrivateRoute path="/cart">
          <ProtectedPage />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(a) {
    fakeAuth.isAuthenticated = true;
    setTimeout(a, 100);
  },
  signout(a) {
    fakeAuth.isAuthenticated = false;
    setTimeout(a, 100);
  }
};

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
}

function ProtectedPage() {
  return (
    <div style={{marginTop : '  7%', marginLeft: '15px'}}>
      <h4>
        Cart
      </h4>
    </div>
  );
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div style={{marginTop : '  7%', marginLeft: '15px'}}>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Login</button>
    </div>
  );
}

function AuthButton() {
  let history = useHistory();
  return fakeAuth.isAuthenticated ? (
    <li className='status'>
      <p>
        Welcome!{" User "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Signout
        </button>
      </p>
    </li>
  ) : (
    <li className='status'>
        <p> You're not logged in!</p>
    </li>
      
  );
}

function Homepage() {
  return <h3>Selamat Datang di Toko Onlen</h3>;
}

function KategoriPage() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <div>
        <ul className="title ">Kategori</ul>
      </div>
      <div>
        <ul className="kategori">
          <li className='menus'>
            <Link to={`${url}/Kulkas, TV, HP`}>Elektronik</Link>
          </li>
          <li className='menus'>
            <Link to={`${url}/Meja, Kursi, Kasur`}>Furniture</Link>
          </li>
          <li className='menus'>
            <Link to={`${url}/Pulsa, Air, Listrik`}>Billing</Link>
          </li>
        </ul>
      </div>
      <div>
        <h1 style={{ marginLeft: "25%", padding: "1px" }} >
          Deskripsi
        </h1>
        <p style={{ marginLeft: "25%", padding: "1px" }} >
          Klik dari kategori untuk melihat
        </p>
      </div>
      <Switch>
        <Route exact path={path}>
          <h4 style={{ marginLeft: "25%", padding: "1px" }}>
            
          </h4>
        </Route>
        <Route path={`${path}/:kategoriId`}>
          <KategoriList />
        </Route>
      </Switch>
    </div>
  );
}

function KategoriList() {
  let { kategoriId } = useParams();

  return (
    <div>
      <h4 style={{ paddingLeft: "25%" }}>{kategoriId}</h4>
    </div>
  );
}
