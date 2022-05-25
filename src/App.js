import CardDetails from "./components/CardDetails/CardDetails";
import { Grid } from "@material-ui/core";
import Main from "./components/Main/Main";
import useStyles from "./styles";
import {SpeechState, useSpeechContext} from '@speechly/react-client'

import {
  PushToTalkButton,
  PushToTalkButtonContainer,
  ErrorPanel
} from "@speechly/react-ui";

import React, {useEffect, useRef} from "react";
import { expenseCategories } from "./constants/categories";

function App() {
  const classes = useStyles();
  const {speechState} = useSpeechContext();
  // const main = useRef(null)


  // const executeScroll = () => main.current.scrollIntoView();

  // useEffect(()=>{
  //   if(SpeechState){
  //     executeScroll();
  //   }

  // },[speechState])

  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={3} className={classes.mobile}>
          <CardDetails title="Income" />
        </Grid>

        <Grid item xs={12} sm={4} className={classes.main}>
          <Main />
        </Grid>

        <Grid item xs={12} sm={3} className={classes.desktop}>
          <CardDetails title="Income" />
        </Grid>


        <Grid item xs={12} sm={3} className={classes.last}>
          <CardDetails title="Expense" />
        </Grid>
      </Grid>

      <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel/>
      </PushToTalkButtonContainer>
    </div>
  );
}

export default App;
