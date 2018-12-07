import React, { Component } from "react";
import WebFont from "webfontloader";
import { Col, Jumbotron, Table } from "react-bootstrap";
import IpInput from "./IpInput";
import FindButton from "./FindButton";
import "../css/App.css";
import SubnetId from "./SubnetId";

WebFont.load({
  google: {
    families: ["Dosis"]
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstpart: "",
      secondpart: "",
      thirdpart: "",
      fourthpart: "",
      networkamount: "",
      hostamount: "",
      findingtype: "",
      findisclicked: false
    };
    this.handleChangeFirst = this.handleChangeFirst.bind(this);
    this.handleChangeSecond = this.handleChangeSecond.bind(this);
    this.handleChangeThird = this.handleChangeThird.bind(this);
    this.handleChangeFourth = this.handleChangeFourth.bind(this);
    this.handleChangeNetwork = this.handleChangeNetwork.bind(this);
    this.handleChangeValue = this.handleChangeValue.bind(this);
    this.handleClearNetwork = this.handleClearNetwork.bind(this);
    this.handleClicked = this.handleClicked.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  resetState() {
    this.setState({
      firstpart: "",
      secondpart: "",
      thirdpart: "",
      fourthpart: "",
      networkamount: "",
      hostamount: "",
      findingtype: "",
      findisclicked: false
    });
  }

  handleChangeFirst(event) {
    this.setState({
      firstpart: event.target.value
    });
    console.log("fi");
  }

  handleChangeSecond(event) {
    this.setState({
      secondpart: event.target.value
    });
    console.log("s");
  }

  handleChangeThird(event) {
    this.setState({
      thirdpart: event.target.value
    });
    console.log("t");
  }

  handleChangeFourth(event) {
    this.setState({
      fourthpart: event.target.value
    });
    console.log("fo");
  }

  handleChangeNetwork(event) {
    console.log("change network: " + event.target.value);
    if (this.state.findingtype === "subnet") {
      this.setState({ networkamount: event.target.value });
    } else {
      this.setState({ hostamount: event.target.value });
    }
  }

  handleChangeValue(newValue) {
    console.log("app: " + this.state.findingtype);
    this.setState({ findingtype: newValue });
  }

  handleClearNetwork() {
    this.setState({ networkamount: "", hostamount: "", findisclicked: false });
  }

  handleClicked() {
    this.setState({ findisclicked: true });
  }

  render() {
    return (
      <div className="App">
        <Col md={8}>
          <Jumbotron id={"result-card"}>
            <SubnetId
              firstpart={this.state.firstpart}
              secondpart={this.state.secondpart}
              thirdpart={this.state.thirdpart}
              fourthpart={this.state.fourthpart}
              networkamount={this.state.networkamount}
              hostamount={this.state.hostamount}
              findingtype={this.state.findingtype}
              findisclicked={this.state.findisclicked}
            />
            <Table
              striped
              bordered
              condensed
              hover
              style={{ marginTop: "30px", fontFamily: "Dosis" }}
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Subnet ID</th>
                  <th>First ID</th>
                  <th>Broadcast</th>
                </tr>
              </thead>
              <tbody id="subnet-table" style={{ fontSize: "11px" }} />
            </Table>
          </Jumbotron>
        </Col>
        <Col md={4}>
          <Jumbotron id={"control-card"}>
            <header className="App-header">SUBNET . ID . FINDER</header>
            <div className="credits">by -bualoy-</div>
            <IpInput
              firstpart={this.state.firstpart}
              secondpart={this.state.secondpart}
              thirdpart={this.state.thirdpart}
              fourthpart={this.state.fourthpart}
              handleChangeFirst={this.handleChangeFirst}
              handleChangeSecond={this.handleChangeSecond}
              handleChangeThird={this.handleChangeThird}
              handleChangeFourth={this.handleChangeFourth}
              handleChangeNetwork={this.handleChangeNetwork}
              handleChangeValue={this.handleChangeValue}
              handleClearNetwork={this.handleClearNetwork}
              resetState={this.resetState}
            />
            <FindButton
              firstpart={this.state.firstpart}
              secondpart={this.state.secondpart}
              thirdpart={this.state.thirdpart}
              fourthpart={this.state.fourthpart}
              networkamount={this.state.networkamount}
              hostamount={this.state.hostamount}
              findingtype={this.state.findingtype}
              findisclicked={this.state.findisclicked}
              handleClicked={this.handleClicked}
            />
          </Jumbotron>
        </Col>
      </div>
    );
  }
}

export default App;
