import React from "react";
import Head from "next/head";
import Navigation from "../components/Navigation";
import '../styles/globals.css'
import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

class App extends React.Component {

  render() {

    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Merican | Commercial Kitchen Equipment or Appliance Kenya</title>
        </Head>
        <Navigation />
        <div className="container">

        </div>
      </React.Fragment>
    );
  }
}

export default App;
