import React, { Component } from "react";
import WebFont from "webfontloader";
import { Row, Col } from "react-bootstrap";
import FixedTable from "./FixedTable";

WebFont.load({
  google: {
    families: ["Dosis"]
  }
});

class SubnetId extends Component {
  constructor(props) {
    super(props);
    this.print = this.print.bind(this);
    this.findClass = this.findClass.bind(this);
    this.findDefaultMask = this.findDefaultMask.bind(this);
    this.findSubnetMask = this.findSubnetMask.bind(this);
    this.findZeroPos = this.findZeroPos.bind(this);
    this.findSpace = this.findSpace.bind(this);
    this.bitCalculator = this.bitCalculator.bind(this);
  }
  print() {
    console.log(this.props.firstpart);
    console.log(this.props.secondpart);
    console.log(this.props.thirdpart);
    console.log(this.props.fourthpart);
  }

  findClass() {
    if (this.props.firstpart <= 127) {
      return "A";
    } else if (this.props.firstpart <= 191) {
      return "B";
    } else if (this.props.firstpart <= 223) {
      return "C";
    } else if (this.props.firstpart <= 239) {
      return "D";
    } else if (this.props.firstpart <= 255) {
      return "E";
    }
  }

  findDefaultMask() {
    if (this.props.firstpart <= 127) {
      return "255.0.0.0";
    }
    if (this.props.firstpart <= 191) {
      return "255.255.0.0";
    }
    if (this.props.firstpart <= 223) {
      return "255.255.255.0";
    }
  }

  findZeroPos() {
    if (this.props.fourthpart === "0") {
      if (this.props.thirdpart === "0") {
        if (this.props.secondpart === "0") {
          if (this.props.firstpart === "0") {
            return 4;
          }
          return 3;
        }
        return 2;
      }
      return 1;
    } else {
      return 0;
    }
  }

  findSpace() {
    let count = 1;
    let value = 0;
    if (this.props.networkamount !== 0 && this.props.networkamount !== "") {
      while (value < this.props.networkamount) {
        value = Math.pow(2, count);
        count++;
      }
    } else if (this.props.hostamount !== 0 && this.props.hostamount !== "") {
      while (value < this.props.hostamount) {
        value = Math.pow(2, count);
        count++;
      }
    }
    return count - 1;
  }

  bitCalculator(usingSpace, n) {
    if (usingSpace > 16 && n === 3) {
      let num = 0;
      num = Math.pow(2, usingSpace - 16 + 1);
      return "255.255.255." + num.toString();
    } else if (usingSpace > 8 && n === 3) {
      let num = 0;
      num = Math.pow(2, usingSpace - 8 + 1);
      return "255.255." + num.toString() + ".0";
    } else if (usingSpace > 8 && n === 2) {
      let num = 0;
      num = Math.pow(2, usingSpace - 8 + 1);
      return "255.255.255." + num.toString();
    } else if (usingSpace > 0 && n === 3) {
      let num = 0;
      num = Math.pow(2, usingSpace + 1);
      return "255." + num.toString() + ".0.0";
    } else if (usingSpace > 0 && n === 2) {
      let num = 0;
      num = Math.pow(2, usingSpace + 1);
      return "255.255." + num.toString() + ".0";
    } else if (usingSpace > 0 && n === 1) {
      let num = 0;
      num = Math.pow(2, usingSpace + 1);
      return "255.255.255" + num.toString();
    }
  }

  findSubnetMask() {
    if (this.props.networkamount !== 0 && this.props.networkamount !== "") {
      let n = this.findZeroPos();
      let space = 8 * n;
      if (n > 0 && n < 4 && this.props.networkamount < Math.pow(2, space)) {
        let usingSpace = this.findSpace();
        if (space === usingSpace) return "Too much Network/Machine";
        return this.bitCalculator(usingSpace, n);
      }
    } else if (this.props.hostamount !== 0 && this.props.hostamount !== "") {
      let n = this.findZeroPos();
      let space = 8 * n;
      if (n > 0 && n < 4 && this.props.hostamount < Math.pow(2, space)) {
        let usingSpace = this.findSpace();
        if (space === usingSpace) return "Too much Network/Machine";
        return this.bitCalculator(space - usingSpace, n);
      }
    }
  }

  render() {
    if (!this.props.findisclicked) {
      return (
        <div style={{ fontFamily: "Dosis", fontSize: "20px" }}>
          No Subnet ID
        </div>
      );
    } else {
      this.findSubnetMask();
      return (
        <div style={{ fontFamily: "Dosis" }}>
          <Row>
            <Col md={2} style={{ marginLeft: "40px" }}>
              <h3>Class: {this.findClass()}</h3>
            </Col>
            <Col md={4} style={{ textAlign: "left" }}>
              <h3>Default Mask: {this.findDefaultMask()}</h3>
            </Col>
            <Col md={5} style={{ textAlign: "left" }}>
              <h3>Subnet Mask: {this.findSubnetMask()}</h3>
            </Col>
          </Row>
          <Row>
            <FixedTable
              firstpart={this.props.firstpart}
              secondpart={this.props.secondpart}
              thirdpart={this.props.thirdpart}
              fourthpart={this.props.fourthpart}
              subnetMask={this.findSubnetMask()}
              n={this.findZeroPos()}
              usingSpace={this.findSpace()}
            />
          </Row>
        </div>
      );
    }
  }
}

export default SubnetId;
