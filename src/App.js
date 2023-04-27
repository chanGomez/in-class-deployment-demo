import "./App.css";

function App() {
  console.log(process.env);

  return (
    <div className="App">
      Simple React App
      <div>Current Env: {process.env.NODE_ENV}</div>
      <div>
        Current API KEY:{" "}
        {process.env.NODE_ENV === "development"
          ? process.env.REACT_APP_DEPLOYMENT_API_KEY
          : process.env.REACT_APP_PRODUCTION}
      </div>
    </div>
  );
}

export default App;