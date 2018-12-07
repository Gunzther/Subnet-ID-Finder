import React, { Component } from "react";
import WebFont from "webfontloader";
import { Button } from "react-bootstrap";

WebFont.load({
  google: {
    families: ["Dosis"]
  }
});

class FindButton extends Component {
  constructor(props) {
    super(props);
    this.print = this.print.bind(this);
  }
  print() {
    this.props.handleClicked();
    // console.log(this.props.firstpart);
    // console.log(this.props.secondpart);
    // console.log(this.props.thirdpart);
    // console.log(this.props.fourthpart);
    // console.log("network: " + this.props.networkamount);
    // console.log("host: " + this.props.hostamount);
    // console.log("type: " + this.props.findingtype);
    // console.log("clicked: " + this.props.findisclicked);
  }

  render() {
    return (
      <div>
        <Button
          id={"find-id-button"}
          bsStyle="link"
          bsSize="large"
          disabled={
            this.props.firstpart === "" ||
            this.props.secondpart === "" ||
            this.props.thirdpart === "" ||
            this.props.fourthpart === "" ||
            this.props.firstpart < 0 ||
            this.props.secondpart < 0 ||
            this.props.thirdpart < 0 ||
            this.props.fourthpart < 0 ||
            this.props.firstpart > 255 ||
            this.props.secondpart > 255 ||
            this.props.thirdpart > 255 ||
            this.props.fourthpart > 255 ||
            this.props.findingtype === "" ||
            (this.props.networkamount === "" && this.props.hostamount === "")
          }
          onClick={this.print}
        >
          Find Subnet ID
        </Button>
        {/* <Button
          id={"find-id-button"}
          bsStyle="link"
          bsSize="large"
          onClick={this.print}
        >
          Test State
        </Button> */}
      </div>
    );
  }
}

export default FindButton;
