import Counter from "../../components/counter";
import Welcome from "../../components/welcome";
import Greeting from "../../components/greeting";

import "./home-page.css";

function HomePage(props) {
  return (
    <div className="row">
      <Greeting
        title="Davaleba 1"
        description="ravi"
      />
      <Welcome message="Hello" color="carminePink" />
      <hr />
      <Counter />
    </div>
  );
}

export default HomePage;
