import React from "react";
import CircleAlgoritme from "./CircleAlgoritme";

class Test extends React.Component {
  constructor() {
    super();
  }
  render() {
    const Map = this.props.mapping;
    const connectarray = [];
    const undefinedarray = [];
    const partofarray = [];
    const onlypartofarray = [];
    let i;
    let q;
    let r;
    let s;
    let d;
    const opdeling = Map.get(undefined);

    for (i = 0; i < opdeling.length; i++) {
      if (opdeling[i].connectsto !== undefined) {
        const value1 = opdeling[i].connectsto;
        connectarray.push(opdeling[i]);
        for (q = 0; q < opdeling.length; q++) {
          if (value1 === opdeling[q].name) {
            const value2 = opdeling[q];
            connectarray.push(value2);
          } else;
        }
      } else undefinedarray.push(opdeling[i]);
    }

    for (r = connectarray.length; r >= 0; --r) {
      const value3 = connectarray[r];
      for (s = undefinedarray.length; s >= 0; --s) {
        if (value3 === undefinedarray[s]) {
          undefinedarray.splice(s, 1);
        } else;
      }
    }

    for (d = 0; d < opdeling.length; d++) {
      let eenPartOfD = opdeling[d];
      if (
        eenPartOfD.runtime === "3scale" ||
        eenPartOfD.runtime === "amq" ||
        eenPartOfD.runtime === "anglarjs" ||
        eenPartOfD.runtime === "ansible" ||
        eenPartOfD.runtime === "apache" ||
        eenPartOfD.runtime === "capedwarf" ||
        eenPartOfD.runtime === "cassandra" ||
        eenPartOfD.runtime === "catalog-icon" ||
        eenPartOfD.runtime === "clojure" ||
        eenPartOfD.runtime === "codeigniter" ||
        eenPartOfD.runtime === "datagrid" ||
        eenPartOfD.runtime === "datavirt" ||
        eenPartOfD.runtime === "debian" ||
        eenPartOfD.runtime === "decisionserver" ||
        eenPartOfD.runtime === "django" ||
        eenPartOfD.runtime === "dotnet" ||
        eenPartOfD.runtime === "drupal" ||
        eenPartOfD.runtime === "eap" ||
        eenPartOfD.runtime === "elastic" ||
        eenPartOfD.runtime === "erlang" ||
        eenPartOfD.runtime === "fedora" ||
        eenPartOfD.runtime === "freebsd" ||
        eenPartOfD.runtime === "git" ||
        eenPartOfD.runtime === "github" ||
        eenPartOfD.runtime === "gitlab" ||
        eenPartOfD.runtime === "glassfish" ||
        eenPartOfD.runtime === "go-gopher" ||
        eenPartOfD.runtime === "grails" ||
        eenPartOfD.runtime === "hadoop" ||
        eenPartOfD.runtime === "haproxy" ||
        eenPartOfD.runtime === "infinispan" ||
        eenPartOfD.runtime === "jboss" ||
        eenPartOfD.runtime === "jenkins" ||
        eenPartOfD.runtime === "jetty" ||
        eenPartOfD.runtime === "joomla" ||
        eenPartOfD.runtime === "jruby" ||
        eenPartOfD.runtime === "js" ||
        eenPartOfD.runtime === "knative" ||
        eenPartOfD.runtime === "kubevirt" ||
        eenPartOfD.runtime === "laravel" ||
        eenPartOfD.runtime === "load-balancer" ||
        eenPartOfD.runtime === "mariadb" ||
        eenPartOfD.runtime === "mediawiki" ||
        eenPartOfD.runtime === "memcached" ||
        eenPartOfD.runtime === "mongodb" ||
        eenPartOfD.runtime === "mssql-database" ||
        eenPartOfD.runtime === "mssql" ||
        eenPartOfD.runtime === "nginx" ||
        eenPartOfD.runtime === "nodejs" ||
        eenPartOfD.runtime === "openjdk" ||
        eenPartOfD.runtime === "openstack" ||
        eenPartOfD.runtime === "other-linux" ||
        eenPartOfD.runtime === "other-unknown" ||
        eenPartOfD.runtime === "perl" ||
        eenPartOfD.runtime === "phalcon" ||
        eenPartOfD.runtime === "php" ||
        eenPartOfD.runtime === "play" ||
        eenPartOfD.runtime === "processserver" ||
        eenPartOfD.runtime === "python" ||
        eenPartOfD.runtime === "rabbitmq" ||
        eenPartOfD.runtime === "rails" ||
        eenPartOfD.runtime === "redis" ||
        eenPartOfD.runtime === "rh-integration" ||
        eenPartOfD.runtime === "rh-tomcat" ||
        eenPartOfD.runtime === "shadowman" ||
        eenPartOfD.runtime === "spring" ||
        eenPartOfD.runtime === "sso" ||
        eenPartOfD.runtime === "stackoverflow" ||
        eenPartOfD.runtime === "suse" ||
        eenPartOfD.runtime === "symfony" ||
        eenPartOfD.runtime === "tomcat" ||
        eenPartOfD.runtime === "ubuntu" ||
        eenPartOfD.runtime === "wildfly" ||
        eenPartOfD.runtime === "windows" ||
        eenPartOfD.runtime === "wordpress" ||
        eenPartOfD.runtime === "xamarin"
      ) {
        eenPartOfD.runtimeImage = "/logos/" + eenPartOfD.runtime + ".svg";
      } else if (eenPartOfD.runtime === "cordova") {
        eenPartOfD.runtimeImage = "/logos/" + eenPartOfD.runtime + ".png";
      } else {
        eenPartOfD.runtimeImage = "/logos/openshift.svg";
      }
    }

    Map.forEach((value, key, map) => {
      if (key !== undefined) {
        partofarray.push(`${key}`, value);
      } else;
    });

    Map.forEach((value, key, map) => {
      if (key !== undefined) {
        onlypartofarray.push(value);
      } else;
    });

    return (
      <React.Fragment>
        <CircleAlgoritme
          partofarr={partofarray}
          connectarr={connectarray}
          undefinedarr={undefinedarray}
          onlypartofarr={onlypartofarray}
        />
      </React.Fragment>
    );
  }
}

export default Test;
