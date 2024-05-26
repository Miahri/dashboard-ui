import React from 'react';
import './App.css';
import {Layout} from "../layout/Layout";
import {Pages} from "../layout/Pages";
import {selectStatus} from "../features/application/selectors";
import {useSelector} from "react-redux";
import {LinearProgress} from "@mui/material";

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
