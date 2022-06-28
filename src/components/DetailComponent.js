import { useLocation } from "react-router-dom";

export default function DetailCompnent(props) {
  const location = useLocation();
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td className="name">Name</td>
            <td className="email">Email</td>
            <td className="intro">Introduce</td>
          </tr>
          {location.state && (
            <tr className="parent" key={location.state.key}>
              <td className="name">{location.state.name}</td>
              <td className="email">{location.state.email}</td>
              <td className="intro">{location.state.body}</td>
            </tr>
          )}
          ;
        </tbody>
      </table>
      )
    </>
  );
}
