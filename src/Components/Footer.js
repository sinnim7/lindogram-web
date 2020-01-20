import React, { useState } from "react";
import styled from "styled-components";

const sharp = "#";

const FooterDiv = styled.footer`
  margin: 0 auto;
  display:flex; 
  justify-content: space-around;
  max-width: 980px;
  min-height:100%
  font-size: 100%;
  font-weight: bold;
  color: #003569;
  padding: 20px;
`;

const Footer = () => {
  //initial value set to react
  const [framework, setFramework] = useState("react");

  function handleChange(e) {
    setFramework(e.target.value);
  }

  return (
    <div name="footer" style={{ flex: 1 }}>
      <FooterDiv>
        <a href={sharp} target="_blank" rel="noopener noreferrer">
          Terms
        </a>
        <a href={sharp} target="_blank" rel="noopener noreferrer">
          Privacy policy
        </a>
        <a href={sharp} target="_blank" rel="noopener noreferrer">
          Cookies
        </a>
        <a href={sharp} target="_blank" rel="noopener noreferrer">
          Ads info
        </a>
        <div class="dropdown">
          <select
            onChange={handleChange}
            value={framework}
            style={{
              border: "0px",
              fontSize: "100%",
              color: "#003569;"
            }}
          >
            <option value="react">About</option>
            <option value="angular">Status</option>
            <option value="vue">Businesses</option>
            <option value="vue">Developers</option>
          </select>
          <div></div>
        </div>
        <span>© {new Date().getFullYear()} Lindo, Inc.</span>
      </FooterDiv>
    </div>
  );
};

export default Footer;
