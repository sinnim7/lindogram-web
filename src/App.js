import React, { Component } from "react";
import Header from "./Components/Header";
import Post from "./Components/Post";
import Footer from "./Components/Footer";
import styled from "styled-components";

const Main = styled.main``;

const Section = styled.section``;

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main>
          <Section>
            {/* <h1>Timeline</h1> */}
            <ol>
              <li>
                <Post></Post>
              </li>
            </ol>
          </Section>
        </Main>
        <Footer />
      </>
    );
  }
}

export default App;
