import React from "react";
// import {Link} from 'react-router-dom';

// FOoter

function Footer() {

  let footerStyle = {
    position: "relative", 
    top: "10vh",
    width: "100%"
  }

  const ButtonMailto = ({ mailto }) => {
    return (
        <a
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
        {/* {label} */}
        </a>
      );
    };
  return (
    <div class="pt-4" style={footerStyle}>
        <footer class="text-center bg-body-tertiary pt-4">
  {/* <!-- Grid container --> */}
  <div class="container pt-4">
    {/* <!-- Section: Social media --> */}
    <section class="mb-4">
    {/* <!-- Linkedin --> */}
      <a
        // data-mdb-ripple-init
        class="btn btn-link btn-floating btn-lg text-body m-1"
        href=""
        role="button"
        data-mdb-ripple-color="dark"
        >    <i class="fa fa-envelope" onClick={ButtonMailto}></i>
      </a>      <ButtonMailto mailto="mailto:khuranaisha00@gmail.com">
      </ButtonMailto>
      {/* <!-- Linkedin --> */}
      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-lg text-body m-1"
        href="https://www.linkedin.com/in/isha-khurana-392224210/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-linkedin"></i>
        </a>
      {/* <!-- Github --> */}
      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-lg text-body m-1"
        href="https://github.com/isha2610"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-github"></i>
        </a>
    </section>
    {/* <!-- Section: Social media --> */}
  </div>
  {/* <!-- Grid container --> */}

  {/* <!-- Copyright --> */}
  <div class="text-center p-3">
    <p>© 2020 Copyright: &nbsp;
    <a class="text-body" href="https://www.linkedin.com/in/isha-khurana-392224210/">ISHA</a></p>
  </div>
  {/* <!-- Copyright --> */}
</footer>
    </div>
    );
};
export default Footer;