
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../NavBar/Navbar';
import Home from '../Pages/Home';
import ListPages from '../Pages/ListPages';
import DataPages from '../Pages/DataPages';

import '../App.css';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <React.Fragment>
        <Navbar />

        <main className="App__Main">
          <div className="App__Main__Row">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/course-list" exact component={CourseList} />
              <Route path="/students-data" exact component={DataStudents} />
            </Switch>
          </div>
        </main>
      </React.Fragment>
    </BrowserRouter>
  </div>
);

export default App;
