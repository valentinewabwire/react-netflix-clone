import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../firebase";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";
import "./Login.css";
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    var audio = new Audio(
      "https://netflixclone254.000webhostapp.com/audio.mp3"
    );
    audio.play();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  const tabItems = document.querySelectorAll(".tab-item");
  const tabContentItems = document.querySelectorAll(".tab-content-item");

  function removeBorder() {
    tabItems.forEach((item) => item.classList.remove("tab-border"));
  }

  function removeShowClass() {
    tabContentItems.forEach((item) => item.classList.remove("show"));
  }

  // This function is called when a tab is clicked
  function selectItem(e) {
    // Remove previous border
    removeBorder();
    removeShowClass();
    // Add border to clicked tab
    this.classList.add("tab-border");
    // Get tab id
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // Show tab content of said id
    tabContentItem.classList.add("show");
  }

  // Listen for click
  tabItems.forEach((item) => item.addEventListener("click", selectItem));

  return (
    <div className="login">
      <header class="showcase">
        <div class="showcase-top">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
            alt="Netflix Logo"
          />
          <a href="#" class="btn btn-rounded" type="submit" onClick={signIn}>
            Sign In
          </a>
        </div>
        <div class="showcase-content">
          <h1>See what's next.</h1>
          <p>Watch anywhere. Cancel at anytime.</p>
          <a
            href="#"
            class="btn btn-xl"
            type="submit"
            // onclick="play()"
            onClick={signIn}
          >
            Try 30 days free <i class="fas fa-chevron-right btn-icon"></i>
          </a>
        </div>
      </header>
      <section class="tabs">
        <div class="container">
          <div id="tab-1" class="tab-item tab-border">
            <i class="fas fa-door-open fa-3x"></i>
            <p class="hide-sm">
              No commitments
              <br />
              Cancel online at anytime
            </p>
          </div>
          <div id="tab-2" class="tab-item">
            <i class="fas fa-tablet-alt fa-3x"></i>
            <p class="hide-sm">Watch anywhere</p>
          </div>
          <div id="tab-3" class="tab-item">
            <i class="fas fa-tags fa-3x"></i>
            <p class="hide-sm">Pick your price</p>
          </div>
        </div>
      </section>
      <section class="tab-content">
        <div class="container">
          <div id="tab-1-content" class="tab-content-item show">
            <div id="tab-3-content-top" class="text-center text-white">
              <p class="text-lg">
                Choose one plan and watch everything on Netflix.
              </p>
              <a
                href="#"
                class="btn btn-l text-upper"
                type="submit"
                onClick={signIn}
              >
                Try 30 Days Free
              </a>
            </div>
            <table class="table">
              <thead>
                <tbody>
                  <tr class="text-white">
                    <th></th>
                    <th class="text-upper">Basic</th>
                    <th class="text-upper">Standard</th>
                    <th class="text-upper">Premium</th>
                  </tr>
                  <tr>
                    <td>Monthly price after free month ends on 7/9/19</td>
                    <td>$8.99</td>
                    <td>$12.99</td>
                    <td>$15.99</td>
                  </tr>
                  <tr>
                    <td>HD available</td>
                    <td>
                      <i class="fas fa-times">
                        <ClearIcon />
                      </i>
                    </td>
                    <td>
                      <i class="fas fa-check">
                        <CheckIcon />
                      </i>
                    </td>
                    <td>
                      <i class="fas fa-check">
                        <CheckIcon />
                      </i>
                    </td>
                  </tr>
                  <tr>
                    <td>Ultra HD available</td>
                    <td>
                      <i class="fas fa-times">
                        <ClearIcon />
                      </i>
                    </td>
                    <td>
                      <i class="fas fa-times">
                        <ClearIcon />
                      </i>
                    </td>
                    <td>
                      <i class="fas fa-check">
                        <CheckIcon />
                      </i>
                    </td>
                  </tr>
                  <tr>
                    <td>Screens you can watch on at the same time</td>
                    <td>1</td>
                    <td>2</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>Watch on your laptop, TV, phone and tablet</td>
                    <td>
                      <i class="fas fa-check">
                        <CheckIcon />
                      </i>
                    </td>
                    <td>
                      <i class="fas fa-check">
                        <CheckIcon />
                      </i>
                    </td>
                    <td>
                      <i class="fas fa-check">
                        <CheckIcon />
                      </i>
                    </td>
                  </tr>
                  <tr>
                    <td>Unlimited films and TV programmes</td>
                    <td>
                      <i class="fas fa-check">
                        <CheckIcon />
                      </i>
                    </td>
                    <td>
                      <i class="fas fa-check">
                        <CheckIcon />
                      </i>
                    </td>
                    <td>
                      <i class="fas fa-check">
                        <CheckIcon />
                      </i>
                    </td>
                  </tr>
                  <tr>
                    <td>Cancel at any time</td>
                    <td>
                      <i class="fas fa-check">
                        <CheckIcon />
                      </i>
                    </td>
                    <td>
                      <i class="fas fa-check">
                        <CheckIcon />
                      </i>
                    </td>
                    <td>
                      <i class="fas fa-check">
                        <CheckIcon />
                      </i>
                    </td>
                  </tr>
                  <tr>
                    <td>First month free</td>
                    <td>
                      <i class="fas fa-check">
                        <CheckIcon />
                      </i>
                    </td>
                    <td>
                      <i class="fas fa-check">
                        <CheckIcon />
                      </i>
                    </td>
                    <td>
                      <i class="fas fa-check">
                        <CheckIcon />
                      </i>
                    </td>
                  </tr>
                </tbody>
              </thead>
            </table>
          </div>
          <div id="tab-3-content" class="tab-content-item">
            <div id="tab-1-content-inner">
              <div>
                <p class="text-lg text-white">
                  If you decide Netflix isn't for you – no problem. No
                  commitment. Cancel online at any time.
                </p>
                <a href="#" class="btn btn-lg">
                  Try 30 days free
                </a>
              </div>
              <img src="img/tab-1-Cancel.png" alt="" />
            </div>
          </div>
          <div id="tab-2-content" class="tab-content-item">
            <div class="tab-2-content-top">
              <p class="text-lg text-white">
                Watch TV programmes and films at any time, anywhere –
                personalised for you.
              </p>
              <a href="#" class="btn btn-lg">
                Try 30 days free
              </a>
            </div>
            <div class="tab-2-content-bottom">
              <div>
                <img src="img/tab-2-TV.png" alt="Netflix on TV" />
                <p class="text-white text-md text-bold">Watch on your TV</p>
                <p>
                  Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
                  players and more.
                </p>
              </div>
              <div>
                <img src="img/tab-2-Mobile.png" alt="Netflix on mobile" />
                <p class="text-white text-md text-bold">
                  Watch instantly or download for later.
                </p>
                <p>Available on phone and tablet, wherever you go.</p>
              </div>
              <div>
                <img src="img/tab-2-Computer.png" alt="Netflix on computer" />
                <p class="text-white text-md text-bold">Use any computer</p>
                <p>Watch on Netflix.com.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
