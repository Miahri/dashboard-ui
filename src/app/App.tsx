import React from 'react';
import './App.css';
import {Layout} from "./Layout/Layout";
import {Pages} from "./Layout/Pages";
import {selectStatus} from "./features/Application/selectors";
import {useSelector} from "react-redux";

export const App = () => {
  const status = useSelector(selectStatus);

  return (
    <>
      <Layout>
        {status === 'loading' && <LinearProgress />}
        <Pages />
      </Layout>
    </>
  );
}

export default App;
