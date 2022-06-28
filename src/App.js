import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Users } from "./component/users/users";
import { UserDetail } from "./component/userDetail/userDetail";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/detail/:id" exact element={<UserDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
