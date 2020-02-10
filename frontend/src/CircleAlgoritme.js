import React from "react";
import "./App.css";
import Lines from "./Lines";
import TextBox from "./TextBox";
import Vierkant from "./Vierkant";

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
          eenPartOfB[b].runtime === "3scale" ||
          eenPartOfB[b].runtime === "amq" ||
          eenPartOfB[b].runtime === "anglarjs" ||
          eenPartOfB[b].runtime === "ansible" ||
          eenPartOfB[b].runtime === "apache" ||
          eenPartOfB[b].runtime === "beaker" ||
          eenPartOfB[b].runtime === "capedwarf" ||
          eenPartOfB[b].runtime === "cassandra" ||
          eenPartOfB[b].runtime === "catalog-icon" ||
          eenPartOfB[b].runtime === "clojure" ||
          eenPartOfB[b].runtime === "codeigniter" ||
          eenPartOfB[b].runtime === "datagrid" ||
          eenPartOfB[b].runtime === "datavirt" ||
          eenPartOfB[b].runtime === "debian" ||
          eenPartOfB[b].runtime === "decisionserver" ||
          eenPartOfB[b].runtime === "django" ||
          eenPartOfB[b].runtime === "dotnet" ||
          eenPartOfB[b].runtime === "drupal" ||
          eenPartOfB[b].runtime === "eap" ||
          eenPartOfB[b].runtime === "elastic" ||
          eenPartOfB[b].runtime === "erlang" ||
          eenPartOfB[b].runtime === "fedora" ||
          eenPartOfB[b].runtime === "freebsd" ||
          eenPartOfB[b].runtime === "git" ||
          eenPartOfB[b].runtime === "github" ||
          eenPartOfB[b].runtime === "gitlab" ||
          eenPartOfB[b].runtime === "glassfish" ||
          eenPartOfB[b].runtime === "go-gopher" ||
          eenPartOfB[b].runtime === "grails" ||
          eenPartOfB[b].runtime === "hadoop" ||
          eenPartOfB[b].runtime === "haproxy" ||
          eenPartOfB[b].runtime === "infinispan" ||
          eenPartOfB[b].runtime === "jboss" ||
          eenPartOfB[b].runtime === "jenkins" ||
          eenPartOfB[b].runtime === "jetty" ||
          eenPartOfB[b].runtime === "joomla" ||
          eenPartOfB[b].runtime === "jruby" ||
          eenPartOfB[b].runtime === "js" ||
          eenPartOfB[b].runtime === "knative" ||
          eenPartOfB[b].runtime === "kubevirt" ||
          eenPartOfB[b].runtime === "laravel" ||
          eenPartOfB[b].runtime === "load-balancer" ||
          eenPartOfB[b].runtime === "mariadb" ||
          eenPartOfB[b].runtime === "mediawiki" ||
          eenPartOfB[b].runtime === "memcached" ||
          eenPartOfB[b].runtime === "mongodb" ||
          eenPartOfB[b].runtime === "mssql-database" ||
          eenPartOfB[b].runtime === "mssql" ||
          eenPartOfB[b].runtime === "nginx" ||
          eenPartOfB[b].runtime === "nodejs" ||
          eenPartOfB[b].runtime === "openjdk" ||
          eenPartOfB[b].runtime === "openstack" ||
          eenPartOfB[b].runtime === "other-linux" ||
          eenPartOfB[b].runtime === "other-unknown" ||
          eenPartOfB[b].runtime === "perl" ||
          eenPartOfB[b].runtime === "phalcon" ||
          eenPartOfB[b].runtime === "php" ||
          eenPartOfB[b].runtime === "play" ||
          eenPartOfB[b].runtime === "processserver" ||
          eenPartOfB[b].runtime === "python" ||
          eenPartOfB[b].runtime === "rabbitmq" ||
          eenPartOfB[b].runtime === "rails" ||
          eenPartOfB[b].runtime === "redis" ||
          eenPartOfB[b].runtime === "rh-integration" ||
          eenPartOfB[b].runtime === "rh-tomcat" ||
          eenPartOfB[b].runtime === "shadowman" ||
          eenPartOfB[b].runtime === "spring" ||
          eenPartOfB[b].runtime === "sso" ||
          eenPartOfB[b].runtime === "stackoverflow" ||
          eenPartOfB[b].runtime === "suse" ||
          eenPartOfB[b].runtime === "symfony" ||
          eenPartOfB[b].runtime === "tomcat" ||
          eenPartOfB[b].runtime === "ubuntu" ||
          eenPartOfB[b].runtime === "wildfly" ||
          eenPartOfB[b].runtime === "windows" ||
          eenPartOfB[b].runtime === "wordpress" ||
          eenPartOfB[b].runtime === "xamarin" ||
          eenPartOfB[b].runtime === "zend"
        ) {
          eenPartOfB[b].runtimeImage =
            "/logos/" + eenPartOfB[b].runtime + ".svg";
        } else if (eenPartOfB[b].runtime === "cordova") {
          eenPartOfB[b].runtimeImage =
            "/logos/" + eenPartOfB[b].runtime + ".png";
        } else {
          eenPartOfB[b].runtimeImage = "/logos/openshift.svg";
        }
      }
    }

    return (
      <React.Fragment>
        <svg viewBox="0 0 50 10000" xmlns="http://www.w3.org/2000/svg">
          {UndefinedArray.map(function undef(undefInfo, index) {
            return (
              <React.Fragment key={index}>
                {UndefinedArray.length - 3 * [index] >= 3 && (
                  <React.Fragment>
                    <Vierkant
                      x={3.5}
                      y={
                        14 +
                        OnlyPartOfArray.length * 24 +
                        (connectsToArray.length - 1) * 10 +
                        index * 18
                      }
                      zeide1={10}
                      zeide2={10}
                    />
                    <Vierkant
                      x={20}
                      y={
                        14 +
                        OnlyPartOfArray.length * 24 +
                        (connectsToArray.length - 1) * 10 +
                        index * 18
                      }
                      zeide1={10}
                      zeide2={10}
                    />
                    <Vierkant
                      x={36.5}
                      y={
                        14 +
                        OnlyPartOfArray.length * 24 +
                        (connectsToArray.length - 1) * 10 +
                        index * 18
                      }
                      zeide1={10}
                      zeide2={10}
                    />
                    <TextBox
                      x={6.7 - UndefinedArray[index * 3].name.length * 0.25}
                      y={
                        24 +
                        OnlyPartOfArray.length * 24 +
                        (connectsToArray.length - 1) * 10 +
                        index * 18
                      }
                      breedte={3 + UndefinedArray[index * 3].name.length * 0.55}
                      x1={7.9 - UndefinedArray[index * 3].name.length * 0.25}
                      y1={
                        25.5 +
                        OnlyPartOfArray.length * 24 +
                        (connectsToArray.length - 1) * 10 +
                        index * 18
                      }
                      name={UndefinedArray[index * 3].name}
                    />
                    <TextBox
                      x={
                        23.2 - UndefinedArray[index * 3 + 1].name.length * 0.25
                      }
                      y={
                        24 +
                        OnlyPartOfArray.length * 24 +
                        (connectsToArray.length - 1) * 10 +
                        index * 18
                      }
                      breedte={
                        3 + UndefinedArray[index * 3 + 1].name.length * 0.55
                      }
                      x1={
                        24.4 - UndefinedArray[index * 3 + 1].name.length * 0.25
                      }
                      y1={
                        25.5 +
                        OnlyPartOfArray.length * 24 +
                        (connectsToArray.length - 1) * 10 +
                        index * 18
                      }
                      name={UndefinedArray[index * 3 + 1].name}
                    />
                    <TextBox
                      x={
                        39.7 - UndefinedArray[index * 3 + 2].name.length * 0.25
                      }
                      y={
                        24 +
                        OnlyPartOfArray.length * 24 +
                        (connectsToArray.length - 1) * 10 +
                        index * 18
                      }
                      breedte={
                        3 + UndefinedArray[index * 3 + 2].name.length * 0.55
                      }
                      x1={
                        40.9 - UndefinedArray[index * 3 + 2].name.length * 0.25
                      }
                      y1={
                        25.5 +
                        OnlyPartOfArray.length * 24 +
                        (connectsToArray.length - 1) * 10 +
                        index * 18
                      }
                      name={UndefinedArray[index * 3 + 2].name}
                    />
                    <image
                      witdh={10}
                      height={10}
                      x={3.5}
                      y={
                        14 +
                        OnlyPartOfArray.length * 24 +
                        (connectsToArray.length - 1) * 10 +
                        index * 18
                      }
                      href={UndefinedArray[index * 3].runtimeImage}
                    />
                    <image
                      witdh={10}
                      height={10}
                      x={20}
                      y={
                        14 +
                        OnlyPartOfArray.length * 24 +
                        (connectsToArray.length - 1) * 10 +
                        index * 18
                      }
                      href={UndefinedArray[index * 3 + 1].runtimeImage}
                    />
                    <image
                      witdh={10}
                      height={10}
                      x={36.5}
                      y={
                        14 +
                        OnlyPartOfArray.length * 24 +
                        (connectsToArray.length - 1) * 10 +
                        index * 18
                      }
                      href={UndefinedArray[index * 3 + 2].runtimeImage}
                    />
                  </React.Fragment>
                )}
                {UndefinedArray.length - 3 * [index] === 2 && (
                  <React.Fragment>
                    <Vierkant
                      x={3.5}
                      y={
                        14 +
                        OnlyPartOfArray.length * 24 +
                        (connectsToArray.length - 1) * 10 +
                        index * 18
                      }
                      zeide1={10}
                      zeide2={10}
                    />
                    <Vierkant
                      x={20}
                      y={
                        14 +
                        OnlyPartOfArray.length * 24 +
                        (connectsToArray.length - 1) * 10 +
                        index * 18
                      }
                      zeide1={10}
                      zeide2={10}
                    />
                    <image
                      witdh={10}
                      height={10}
                      x={3.5}
                      y={
                        14 +
                        OnlyPartOfArray.length * 24 +
                        (connectsToArray.length - 1) * 10 +
                        index * 18
                      }
                      href={UndefinedArray[index * 3].runtimeImage}
                    />
                    <TextBox
                      x={6.7 - UndefinedArray[index * 3].name.length * 0.25}
                      y={
                        24 +
                        OnlyPartOfArray.length * 24 +
                        (connectsToArray.length - 1) * 10 +
                        index * 18
                      }
                      breedte={3 + UndefinedArray[index * 3].name.length * 0.55}
                      x1={7.9 - UndefinedArray[index * 3].name.length * 0.25}
                      y1={
                        25.5 +
                        OnlyPartOfArray.length * 24 +
                        (connectsToArray.length - 1) * 10 +
                        index * 18
                      }
                      name={UndefinedArray[index * 3].name}
                    />
                    <TextBox
                      x={
                        23.2 - UndefinedArray[index * 3 + 1].name.length * 0.25
                      }
                      y={
                        24 +
                        OnlyPartOfArray.length * 24 +
                        (connectsToArray.length - 1) * 10 +
                        index * 18
                      }
                      breedte={
                        3 + UndefinedArray[index * 3 + 1].name.length * 0.55
                      }
                      x1={
                        24.4 - UndefinedArray[index * 3 + 1].name.length * 0.25
                      }
                      y1={
                        25.5 +
                        OnlyPartOfArray.length * 24 +
                        (connectsToArray.length - 1) * 10 +
                        index * 18
                      }
                      name={UndefinedArray[index * 3 + 1].name}
                    />
                    <image
                      witdh={10}
                      height={10}
                      x={20}
                      y={
                        14 +
                        OnlyPartOfArray.length * 24 +
                        (connectsToArray.length - 1) * 10 +
                        index * 18
                      }
                      href={UndefinedArray[index * 3 + 1].runtimeImage}
                    />
                  </React.Fragment>
                )}
                {UndefinedArray.length - 3 * [index] === 1 && (
                  <React.Fragment>
                    <Vierkant
                      x={3.5}
                      y={
                        14 +
                        OnlyPartOfArray.length * 24 +
                        (connectsToArray.length - 1) * 10 +
                        index * 18
                      }
                      zeide1={10}
                      zeide2={10}
                    />
                    <image
                      witdh={10}
                      height={10}
                      x={3.5}
                      y={
                        14 +
                        OnlyPartOfArray.length * 24 +
                        (connectsToArray.length - 1) * 10 +
                        index * 18
                      }
                      href={UndefinedArray[index * 3].runtimeImage}
                    />
                    <TextBox
                      x={6.7 - UndefinedArray[index * 3].name.length * 0.25}
                      y={
                        24 +
                        OnlyPartOfArray.length * 24 +
                        (connectsToArray.length - 1) * 10 +
                        index * 18
                      }
                      breedte={3 + UndefinedArray[index * 3].name.length * 0.55}
                      x1={7.9 - UndefinedArray[index * 3].name.length * 0.25}
                      y1={
                        25.5 +
                        OnlyPartOfArray.length * 24 +
                        (connectsToArray.length - 1) * 10 +
                        index * 18
                      }
                      name={UndefinedArray[index * 3].name}
                    />
                  </React.Fragment>
                )}
              </React.Fragment>
            );
          })}
          {connectsToArray.map(function connect(connectToInfo, index) {
            return (
              <React.Fragment key={index}>
                {connectToInfo.connectsto !== undefined && (
                  <React.Fragment>
                    <Vierkant
                      x={10}
                      y={4 + OnlyPartOfArray.length * 24 + index * 10}
                      zeide1={10}
                      zeide2={10}
                    />
                    <TextBox
                      x={13.2 - connectsToArray[index].name.length * 0.25}
                      y={14 + OnlyPartOfArray.length * 24 + index * 10}
                      breedte={3 + connectsToArray[index].name.length * 0.55}
                      x1={14.8 - connectsToArray[index].name.length * 0.25}
                      y1={15.5 + OnlyPartOfArray.length * 24 + index * 10}
                      name={connectsToArray[index].name}
                    />
                    <image
                      witdh={10}
                      height={10}
                      x={10}
                      y={4 + OnlyPartOfArray.length * 24 + index * 10}
                      href={connectsToArray[index].runtimeImage}
                    />
                  </React.Fragment>
                )}
                {connectToInfo.connectsto === undefined && (
                  <React.Fragment>
                    <Vierkant
                      x={29}
                      y={4 + OnlyPartOfArray.length * 24 + (index - 1) * 10}
                      zeide1={10}
                      zeide2={10}
                    />
                    <image
                      witdh={5}
                      height={5}
                      x={22}
                      y={7 + OnlyPartOfArray.length * 24 + (index - 1) * 10}
                      href="/logos/iconmonstr-arrow-right-thin-240.png"
                    />
                    <TextBox
                      x={32.2 - connectsToArray[index].name.length * 0.25}
                      y={14 + OnlyPartOfArray.length * 24 + (index - 1) * 10}
                      breedte={3 + connectsToArray[index].name.length * 0.55}
                      x1={33.5 - connectsToArray[index].name.length * 0.25}
                      y1={15.5 + OnlyPartOfArray.length * 24 + (index - 1) * 10}
                      name={connectsToArray[index].name}
                    />
                    <image
                      witdh={10}
                      height={10}
                      x={29}
                      y={4 + OnlyPartOfArray.length * 24 + (index - 1) * 10}
                      href={connectsToArray[index].runtimeImage}
                    />
                  </React.Fragment>
                )}
              </React.Fragment>
            );
          })}
          {OnlyPartOfArray.map(function num(partOfInfo, index) {
            return (
              <React.Fragment key={index}>
                {partOfInfo.length === 2 && (
                  <React.Fragment>
                    <Vierkant
                      x={15}
                      y={4 + 24 * index}
                      zeide1={20}
                      zeide2={20}
                    />
                    ;
                    <Lines
                      x1={26.6}
                      y1={12 + index * 24}
                      x2={22}
                      y2={12 + index * 24}
                    />
                    <image
                      witdh={6.5}
                      height={6.5}
                      x={16}
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
                      x={15}
                      breedte={20}
                      y={21.5 + index * 24}
                      x1={24.7 - partOfArray[index * 2].length * 0.25}
                      y1={23.1 + index * 24}
                      name={partOfArray[index * 2]}
                    />
                    <TextBox
                      x={18.3 - OnlyPartOfArray[index][0].name.length * 0.25}
                      y={14 + index * 24}
                      breedte={
                        1.5 + OnlyPartOfArray[index][0].name.length * 0.55
                      }
                      x1={18.9 - OnlyPartOfArray[index][0].name.length * 0.27}
                      y1={15.5 + index * 24}
                      name={OnlyPartOfArray[index][0].name}
                    />
                    <TextBox
                      x={29.3 - OnlyPartOfArray[index][1].name.length * 0.25}
                      y={14 + index * 24}
                      breedte={
                        1.5 + OnlyPartOfArray[index][1].name.length * 0.55
                      }
                      x1={29.9 - OnlyPartOfArray[index][1].name.length * 0.27}
                      y1={15.5 + index * 24}
                      name={OnlyPartOfArray[index][1].name}
                    />
                  </React.Fragment>
                )}
                {partOfInfo.length === 3 && (
                  <React.Fragment>
                    <Vierkant
                      x={15}
                      y={4 + 24 * index}
                      zeide1={20}
                      zeide2={20}
                    />
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
                      x={27}
                      y={11.6 + index * 24}
                      href={OnlyPartOfArray[index][1].runtimeImage}
                    />
                    <image
                      witdh={6.5}
                      height={6.5}
                      x={16.5}
                      y={11.6 + index * 24}
                      href={OnlyPartOfArray[index][0].runtimeImage}
                    />

                    <TextBox
                      x={15}
                      breedte={20}
                      y={21.5 + index * 24}
                      x1={24.7 - partOfArray[index * 2].length * 0.21}
                      y1={23.1 + index * 24}
                      name={partOfArray[index * 2]}
                    />
                    <TextBox
                      x={18.5 - OnlyPartOfArray[index][0].name.length * 0.25}
                      y={17 + index * 24}
                      breedte={
                        1.5 + OnlyPartOfArray[index][0].name.length * 0.55
                      }
                      x1={19.5 - OnlyPartOfArray[index][0].name.length * 0.27}
                      y1={18.5 + index * 24}
                      name={OnlyPartOfArray[index][0].name}
                    />
                    <TextBox
                      x={29.3 - OnlyPartOfArray[index][1].name.length * 0.25}
                      y={17 + index * 24}
                      breedte={
                        1.5 + OnlyPartOfArray[index][1].name.length * 0.55
                      }
                      x1={30.3 - OnlyPartOfArray[index][1].name.length * 0.27}
                      y1={18.5 + index * 24}
                      name={OnlyPartOfArray[index][1].name}
                    />
                    <TextBox
                      x={24 - OnlyPartOfArray[index][2].name.length * 0.25}
                      y={8.5 + index * 24}
                      breedte={
                        1.5 + OnlyPartOfArray[index][2].name.length * 0.55
                      }
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
      </React.Fragment>
    );
  }
}

export default CircleAlgoritme;
