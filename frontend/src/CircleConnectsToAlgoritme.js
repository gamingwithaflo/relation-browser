import React from "react";
import "./App.css";
import Test from "./Test";
import ApiFetch from "./APIfetch";
import Circles from "./Circles";
import Lines from "./Lines";
import TextBox from "./TextBox";

class CircleAlgoritme extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let partOfArray = this.props.partofarr;
    let connectsToArray = this.props.connectarr;
    let UndefinedArray = this.props.undefinedarr;
    let OnlyPartOfArray = this.props.onlypartofarr;
    let a;
    let b;

    for (a = 0; a < OnlyPartOfArray.length; a++) {
      let eenPartOfB = OnlyPartOfArray[a];
      for (b = 0; b < eenPartOfB.length; b++) {
        if (
          eenPartOfB[b].runtime !== undefined &&
          eenPartOfB[b].runtime !== "cordova"
        ) {
          eenPartOfB[b].runtimeImage =
            "/logos/" + eenPartOfB[b].runtime + ".svg";
        } else if (eenPartOfB[b].runtime === "cordova") {
          eenPartOfB[b].runtimeImage =
            "/logos/" + eenPartOfB[b].runtime + ".png";
        } else if (eenPartOfB[b].runtime === undefined) {
          eenPartOfB[b].runtimeImage = "/logos/openshift.svg";
        }
      }
    }
    return (
      <svg viewBox="0 0 50 100" xmlns="http://www.w3.org/2000/svg">
        {OnlyPartOfArray.map(function num(partOfInfo, index) {
          return (
            <React.Fragment>
              {partOfInfo.length === 2 && (
                <React.Fragment>
                  <Circles cx={25} cy={12 + index * 24} r={10} />;
                  <Circles cx={30} cy={12 + index * 24} r={3} />;
                  <Circles cx={20} cy={12 + index * 24} r={3} />;
                  <Lines
                    x1={27}
                    y1={12 + index * 24}
                    x2={23}
                    y2={12 + index * 24}
                  />
                  <image
                    witdh={6.5}
                    height={6.5}
                    x={16.6}
                    y={8.7 + index * 24}
                    href={OnlyPartOfArray[index][0].runtimeImage}
                  />
                  <image
                    witdh={6.5}
                    height={6.5}
                    x={26.6}
                    y={8.7 + index * 24}
                    href={OnlyPartOfArray[index][1].runtimeImage}
                  />
                  <TextBox
                    x={18}
                    breedte={14}
                    y={20 + index * 24}
                    x1={24.7 - partOfArray[index * 2].length * 0.21}
                    y1={21.6 + index * 24}
                    name={partOfArray[index * 2]}
                  />
                  <TextBox
                    x={19.3 - OnlyPartOfArray[index][0].name.length * 0.25}
                    y={14 + index * 24}
                    breedte={1.5 + OnlyPartOfArray[index][0].name.length * 0.55}
                    x1={19.9 - OnlyPartOfArray[index][0].name.length * 0.27}
                    y1={15.5 + index * 24}
                    name={OnlyPartOfArray[index][0].name}
                  />
                  <TextBox
                    x={29.3 - OnlyPartOfArray[index][1].name.length * 0.25}
                    y={14 + index * 24}
                    breedte={1.5 + OnlyPartOfArray[index][1].name.length * 0.55}
                    x1={29.9 - OnlyPartOfArray[index][1].name.length * 0.27}
                    y1={15.5 + index * 24}
                    name={OnlyPartOfArray[index][1].name}
                  />
                  {console.log(OnlyPartOfArray)}
                </React.Fragment>
              )}
              {partOfInfo.length === 3 && (
                <React.Fragment>
                  <Circles cx={25} cy={12 + index * 24} r={10} />
                  <Circles cx={25} cy={7 + index * 24} r={3} />
                  <Circles cx={30} cy={15 + index * 24} r={3} />
                  <Circles cx={20} cy={15 + index * 24} r={3} />
                  <Lines
                    x1={27.4}
                    y1={13.5 + index * 24}
                    x2={25}
                    y2={12 + index * 24}
                  />
                  <Lines
                    x1={25}
                    y1={10 + index * 24}
                    x2={25}
                    y2={12 + index * 24}
                  />
                  <Lines
                    x1={22.5}
                    y1={13.5 + index * 24}
                    x2={25}
                    y2={12 + index * 24}
                  />
                  <image
                    witdh={6.5}
                    height={6.5}
                    x={21.6}
                    y={3.8 + index * 24}
                    href={OnlyPartOfArray[index][2].runtimeImage}
                  />
                  <image
                    witdh={6.5}
                    height={6.5}
                    x={26.6}
                    y={11.6 + index * 24}
                    href={OnlyPartOfArray[index][1].runtimeImage}
                  />
                  <image
                    witdh={6.5}
                    height={6.5}
                    x={16.6}
                    y={11.6 + index * 24}
                    href={OnlyPartOfArray[index][0].runtimeImage}
                  />

                  <TextBox
                    x={18}
                    y={20 + index * 24}
                    breedte={14}
                    x1={24.7 - partOfArray[index * 2].length * 0.21}
                    y1={21.6 + index * 24}
                    name={partOfArray[index * 2]}
                  />
                  <TextBox
                    x={18.5 - OnlyPartOfArray[index][0].name.length * 0.25}
                    y={17 + index * 24}
                    breedte={1.5 + OnlyPartOfArray[index][0].name.length * 0.55}
                    x1={19.5 - OnlyPartOfArray[index][0].name.length * 0.27}
                    y1={18.5 + index * 24}
                    name={OnlyPartOfArray[index][0].name}
                  />
                  <TextBox
                    x={29.3 - OnlyPartOfArray[index][1].name.length * 0.25}
                    y={17 + index * 24}
                    breedte={1.5 + OnlyPartOfArray[index][1].name.length * 0.55}
                    x1={30.3 - OnlyPartOfArray[index][1].name.length * 0.27}
                    y1={18.5 + index * 24}
                    name={OnlyPartOfArray[index][1].name}
                  />
                  <TextBox
                    x={24 - OnlyPartOfArray[index][2].name.length * 0.25}
                    y={8.5 + index * 24}
                    breedte={1.5 + OnlyPartOfArray[index][2].name.length * 0.55}
                    x1={25 - OnlyPartOfArray[index][2].name.length * 0.27}
                    y1={10 + index * 24}
                    name={OnlyPartOfArray[index][2].name}
                  />
                </React.Fragment>
              )}
            </React.Fragment>
          );
        })}
      </svg>
    );
  }
}

export default CircleAlgoritme;
