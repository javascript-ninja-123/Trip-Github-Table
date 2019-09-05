import React from 'react';
import {  Dimmer, Loader,Segment } from 'semantic-ui-react'
import "./Loader.css"
//Components
export const Load = React.memo(({text = "loading"}) => (
  <Segment>
  <Dimmer active inverted>
    <Loader inverted>{text}</Loader>
  </Dimmer>
  </Segment>
))

