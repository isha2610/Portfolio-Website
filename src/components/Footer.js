import React from "react";

function Footer() {
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
    <div class="pt-4">
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
    © 2020 Copyright: 
    <a class="text-body" href="https://google.com">ISHA</a>
  </div>
  {/* <!-- Copyright --> */}
</footer>
    </div>
    );
};
export default Footer;