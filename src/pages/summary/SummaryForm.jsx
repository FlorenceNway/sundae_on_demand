import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

function SummaryForm() {
  const [tcChecked, setTcChecked] = useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Content>
        No ice cream will actually be delivered.
      </Popover.Content>
    </Popover>
  );
  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}>Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={tcChecked}
          onChange={(e) => setTcChecked(e.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!tcChecked}>
        Confirm order
      </Button>
    </Form>
  );
  //   return (
  //     <form>
  //       <label htmlFor="t and c">{checkboxLabel}</label>
  //       <input
  //         id="t and c"
  //         type="checkbox"
  //         onChange={(e) => setTcChecked(e.target.checked)}
  //         checked={tcChecked}
  //       />
  //       <button type="submit" disabled={!tcChecked}>
  //         Confirm Order
  //       </button>
  //     </form>
  //   );
}

export default SummaryForm;
