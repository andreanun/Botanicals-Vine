import SessionContext from "contexts/SessionContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectToPlantsIfSignedIn = (props) => {
  //if signed in, redirect to plants list page otherwise render children

  const { username } = useContext(SessionContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (username !== null) {
      navigate("/plants");
    }
  }, [username]);

  return props.children;
};

export default RedirectToPlantsIfSignedIn;
