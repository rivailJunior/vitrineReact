import React from 'react';
import {Panel} from 'react-bootstrap';

/**
 * panel - function to render Bootstrap Panel component
 * @param props
 * @return {html}
 */
const panel = (props) => {
  return (
    <Panel>
      <Panel.Heading>
        <Panel.Title className="col-md-3"><span className="text-primary">Voce Visitou:</span></Panel.Title>
        <Panel.Title ><span className="text-primary">E talvez tenha interesse por:</span></Panel.Title>
      </Panel.Heading>
      <Panel.Body>{props.children}</Panel.Body>
    </Panel>
  )
};

export default panel;