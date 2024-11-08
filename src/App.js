import './App.css';

import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import Layout from "./components/Layout";
import Procedures from "./components/procedures/Procedures";

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <Layout>
        <Procedures />
      </Layout>
    </div>
  );
}

export default App;
