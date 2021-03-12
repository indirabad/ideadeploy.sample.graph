import { Redirect, Route, Switch, useHistory } from "react-router";
import LinearGraph from "../LinearGraph";
import style from "./App.module.scss";
import { Layout } from "antd";
import Navigation from "../Navigation";
import { LINEAR_GRAPH, PIE_GRAPH, SIGNIN } from "../../const/path";
import PieGraph from "../PieGraph";
import { useEffect } from "react";

const { Content, Footer } = Layout;

function App() {
  const history = useHistory();

  useEffect(() => {
    if (!window.localStorage.getItem("AUTH_TOKEN")) {
      history.push(SIGNIN);
    }
  }, []);

  return (
    <Layout className={style.App}>
      <Navigation />
      <Content>
        <Switch>
          <Route path="/" exact render={() => <Redirect to={LINEAR_GRAPH} />} />
          <Route path={LINEAR_GRAPH} exact component={LinearGraph} />
          <Route path={PIE_GRAPH} exact component={PieGraph} />
        </Switch>
      </Content>
      <Footer>footer text</Footer>
    </Layout>
  );
}

export default App;
