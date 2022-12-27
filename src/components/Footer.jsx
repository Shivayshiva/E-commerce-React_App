import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0">Made with ❤️ by {" "}
              <a  href="https://github.com/Shivayshiva" className="text-decoration-underline text-dark fs-5" target="_blank" rel="noreferrer">Prashant Kumar Madhesiya</a>
            </p>
            <a className="text-dark fs-4" href="https://github.com/Shivayshiva" target="_blank" rel="noreferrer">
              <i className="fa fa-github"></i>
            </a>
            <span>   </span>
            <a className="text-dark fs-4" href="https://www.linkedin.com/in/prashant-maddheshiya-88900b69/" target="_blank" rel="noreferrer" id="linkedinstyle">
            <i class="fa fa-linkedin" aria-hidden="true" style={{marginLeft:20}}></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
