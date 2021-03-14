import React from "react";

import { Login } from "@/views/Login";

import { Flex } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Flex bg="#141414" color="black" h="100vh" maxW="450px" position="relative">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Login />} />
        </Switch>
      </Router>
    </Flex>
  );
}

export default App;
