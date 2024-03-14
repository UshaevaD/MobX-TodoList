import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>

      <div>
        Welcome!
        <br />
        You can <Link to="/login">login</Link> if you already have account or you
        can <Link to="/register">register</Link>.
        {/* <TodoList /> */}
      </div>
    </div>
  );
};

export default Home;