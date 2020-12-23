import React, { useState, useEffect } from "react";
import Typical from "react-typical";
import Switch from "react-switch";
import "../scss/bg.scss";

const Header = ({ sharedData }) => {
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState(sharedData);
  const [title, setTitle] = useState(sharedData);

  const onThemeSwitchChange = (checked) => {
    setChecked(checked);
    setTheme();
  }

  useEffect(() => {
    if (sharedData) {
      setName(sharedData.name)
      setTitle(sharedData.title)
    }
  }, [sharedData])

  const setTheme = () => {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }
  return (
    <div className="row aligner bg-image" style={{ height: '100%' }}>
      <header id="home" style={{ height: window.innerHeight - 140, display: 'block' }}>
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div className="col-md-12">
          <div>
            <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
            <br />
            <h1 className="mb-0">
              <Typical steps={[name]} wrapper="p" />
            </h1>
            <Typical className="title-styles" steps={[title]} wrapper="p" />
            <Switch
              checked={checked}
              onChange={onThemeSwitchChange}
              offColor="#629a82"
              onColor="#353535"
              className="react-switch mx-auto"
              width={90}
              height={40}
              uncheckedIcon={
                <span
                  className="iconify"
                  data-icon="twemoji:owl"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "20px",
                    color: "#353239",
                  }}
                ></span>
              }
              checkedIcon={
                <span
                  className="iconify"
                  data-icon="noto-v1:sun-with-face"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "10px",
                    color: "#353239",
                  }}
                ></span>
              }
              id="icon-switch"
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
