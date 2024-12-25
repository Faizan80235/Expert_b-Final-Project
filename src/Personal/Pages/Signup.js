import React from 'react'
import { Link } from 'react-router-dom'
function Signup() {
  return (
    <div>



<div className="col-lg-4 col-md-6 col-12 order-lg-2 offset-lg-1 order-1 " style={{marginleft:"50%"}}>

<div className="mb-lg-9 mb-5">
  <h1 className="mb-1 h2 fw-bold">Sign up to FreshCart</h1>
  <p>Welcome back to FreshCart! Enter your email to get started.</p>
</div>
<form className="needs-validation">
  <div className="g-3 row">
    <div className="col-12">
      <label className="visually-hidden form-label" htmlFor="formSigninEmail">
        Email address
      </label>
      <input
        placeholder="Email"
        type="email"
        id="formSigninEmail"
        className="form-control"
        name="email"
      />
    </div>
    <div className="col-12">
      <div className="password-field position-relative">
        <label
          className="visually-hidden form-label"
          htmlFor="formSigninPassword"
        >
          Password
        </label>
        <div className="password-field position-relative">
          <input
            placeholder="*****"
            type="password"
            id="formSigninPassword"
            className="fakePassword form-control"
            name="password"
          />
          <br />
             <label className="visually-hidden form-label" htmlFor="formSigninEmail">
        Contact Number
      </label>
      <input
        placeholder="Contact"
        type="text"
        id="formSigninEmail"
        className="form-control"
        name="email"
      />
      <br />
         <label className="visually-hidden form-label" htmlFor="formSigninEmail">
        Country Name
      </label>
      <input
        placeholder="Country Name"
        type="email"
        id="formSigninEmail"
        className="form-control"
        name="email"
      />
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="1em"
              height="1em"
              fill="currentColor"
              className="bi bi-eye-slash passwordToggler"
            >
              <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
              <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
              <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-between">
      <div className="form-check">
        <input
          type="checkbox"
          id="flexCheckDefault"
          className="form-check-input"
          defaultValue=""
        />
        <label htmlFor="flexCheckDefault" className="form-check-label">
          Remember me
        </label>
      </div>
      <div>
        Forgot password?<a > Reset It</a>
      </div>
    </div>
    <div className="d-grid col-12">
      <button type="submit" className="btn btn-primary">
        Sign In
      </button>
    </div>
    <div>
      Don’t have an account?<Link to="/Contact"> Sign In</Link>
    </div>
  </div>
</form>
</div>
    </div>
  )
}

export default Signup