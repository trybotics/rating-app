import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import RatingList from './containers/RatingList'
import RatingDetails from './containers/RatingDetails'
import HeaderFooterMenu from './containers/HeaderFooterMenu'
import { Layout } from 'antd';
import 'antd/dist/antd.css';

function App() {
  return (
    <div>
      <Router>
        {/* <HeaderFooterMenu /> */}
        <Layout.Header title="Rating App" style={{ position: 'fixed', zIndex: 1, width: '100%' }}><h1 style={{color:'white'}}>Rating App</h1></Layout.Header>
        <Switch>
          <Route exact path="/" component={RatingList} />
          <Route exact path="/rating" component={RatingList} />
          <Route exact path="/rating/:id" component={RatingDetails} />
        </Switch>
      </Router>
      <Layout.Footer style={{ textAlign: 'center', marginTop: window.innerHeight<window.screen.height? window.screen.height- window.innerHeight : 0 }}>Rating App ©2021 Created by Karan Shaw</Layout.Footer>
    </div>
  );
}

export default App;
