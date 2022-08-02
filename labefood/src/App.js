import GlobalState from "./GlobalStateContext/GlobalState";
import GlobalStyles from "./GlobalStyles/GlobalStyles";
import Layout from "./screens/Layout";


function App() {
  return (
    <div>
      <GlobalState>
        <Layout/>
        <GlobalStyles/>
      </GlobalState>
    </div>
  );
}

export default App;
