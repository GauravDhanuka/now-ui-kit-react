/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <a href="https://www.creative-tim.com" target="_blank">
                  Creative Tim
                </a>
              </li>
              <li>
                <a href="http://presentation.creative-tim.com" target="_blank">
                  About Us
                </a>
              </li>
              <li>
                <a href="http://blog.creative-tim.com" target="_blank">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            ©{" "}
            <script>
              document.getElementById('copyright').appendChild(document.createTextNode(new
              Date().getFullYear()))
            </script>
            , Designed by{" "}
            <a href="https://www.invisionapp.com" target="_blank">
              Invision
            </a>
            . Coded by{" "}
            <a href="https://www.creative-tim.com" target="_blank">
              Creative Tim
            </a>
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
