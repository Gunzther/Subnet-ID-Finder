import React, { Component } from "react";
import WebFont from "webfontloader";
import {
  Row,
  Col,
  Button,
  ButtonToolbar,
  ToggleButtonGroup,
  ToggleButton
} from "react-bootstrap";

WebFont.load({
  google: {
    families: ["Dosis"]
  }
});

class IpInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      isClicked: false
    };
    this.clearInput = this.clearInput.bind(this);
    this.handClickNetwork = this.handClickNetwork.bind(this);
    this.handClickMachine = this.handClickMachine.bind(this);
    this.handleChangeNetwork = this.handleChangeNetwork.bind(this);
  }

  clearInput() {
    document.getElementById("my-input1").reset();
    document.getElementById("my-input2").reset();
    document.getElementById("my-input3").reset();
    document.getElementById("my-input4").reset();
    document.getElementById("network-input").reset();
    document.getElementById("choose-button1").style.color = "black";
    document.getElementById("choose-button2").style.color = "black";
    document.getElementById("choose-button1").style.backgroundColor = "#e9b443";
    document.getElementById("choose-button2").style.backgroundColor = "#e9b443";
    this.setState({
      amount: ""
    });
    this.props.resetState();
    window.location.reload();
  }

  handClickNetwork() {
    document.getElementById("network-input").reset();
    this.props.handleClearNetwork();
    this.setState({ isClicked: true });
    this.props.handleChangeValue("subnet");
    document.getElementById("choose-button1").style.color = "#e9b443";
    document.getElementById("choose-button2").style.color = "black";
    document.getElementById("choose-button1").style.backgroundColor = "black";
    document.getElementById("choose-button2").style.backgroundColor = "#e9b443";
  }

  handClickMachine() {
    document.getElementById("network-input").reset();
    this.props.handleClearNetwork();
    this.setState({ isClicked: true });
    this.props.handleChangeValue("host");
    document.getElementById("choose-button1").style.color = "black";
    document.getElementById("choose-button2").style.color = "#e9b443";
    document.getElementById("choose-button1").style.backgroundColor = "#e9b443";
    document.getElementById("choose-button2").style.backgroundColor = "black";
  }

  handleChangeNetwork(event) {
    this.setState({
      amount: event.target.value
    });
    this.props.handleChangeNetwork(event);
  }

  render() {
    return (
      <div style={{ fontFamily: "Dosis" }}>
        <p style={{ fontSize: "19px" }}>Please input IP Address</p>
        <Row style={{ width: "400px" }}>
          <Col md={1} style={{ marginLeft: "93px" }}>
            <form id={"my-input1"}>
              <input
                id="text-field"
                type="number"
                firstpart={this.props.firstpart}
                onChange={this.props.handleChangeFirst}
                required
              />
            </form>
          </Col>
          <Col md={1} style={{ marginLeft: "20px" }}>
            <form id={"my-input2"}>
              <input
                id="text-field"
                type="number"
                secondpart={this.props.secondpart}
                onChange={this.props.handleChangeSecond}
                required
              />
            </form>
          </Col>
          <Col md={1} style={{ marginLeft: "20px" }}>
            <form id={"my-input3"}>
              <input
                id="text-field"
                type="number"
                thirdpart={this.props.thirdpart}
                onChange={this.props.handleChangeThird}
                required
              />
            </form>
          </Col>
          <Col md={1} style={{ marginLeft: "20px" }}>
            <form id={"my-input4"}>
              <input
                id="text-field"
                type="number"
                fourthpart={this.props.fourthpart}
                onChange={this.props.handleChangeFourth}
                required
              />
            </form>
          </Col>
        </Row>
        <p style={{ fontSize: "19px", marginTop: "40px" }}>
          Please input amount of network/machine
        </p>
        <Row>
          <Col md={5} style={{ marginLeft: "20px" }}>
            <ButtonToolbar style={{ width: "180px" }}>
              <ToggleButtonGroup
                type="radio"
                name="options"
                defaultValue={1}
                style={{ marginLeft: "35px" }}
              >
                <ToggleButton
                  id="choose-button1"
                  bsStyle="link"
                  value={1}
                  onClick={this.handClickNetwork}
                >
                  Network
                </ToggleButton>
                <ToggleButton
                  id="choose-button2"
                  bsStyle="link"
                  value={2}
                  onClick={this.handClickMachine}
                >
                  Machine
                </ToggleButton>
              </ToggleButtonGroup>
            </ButtonToolbar>
          </Col>
          <Col md={4}>
            <form id={"network-input"}>
              <input
                id="network-field"
                type="number"
                onChange={this.handleChangeNetwork}
                required
                disabled={!this.state.isClicked}
              />
            </form>
          </Col>
        </Row>
        <Button
          id={"clear-button"}
          bsStyle="link"
          bsSize="large"
          disabled={
            this.props.firstpart === "" &&
            this.props.secondpart === "" &&
            this.props.thirdpart === "" &&
            this.props.fourthpart === "" &&
            this.state.amount === ""
          }
          onClick={this.clearInput}
        >
          Clear All
        </Button>
      </div>
    );
  }
}

export default IpInput;
