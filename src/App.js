import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Users } from "./component/users/users";
import { UserDetail } from "./component/userDetail/userDetail";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/detail/:id" exact element={<UserDetail />} />
      </Routes>
    </div>
  );
}
