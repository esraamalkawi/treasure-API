// import { useState } from "react";
// import { useDispatch } from "react-redux";

// import { useHistory } from "react-router-dom";
// //actions
// import { signup } from "../../store/actions/authActions";

// const Signup = () => {
//   const [user, SetUser] = useState({
//     username: "",
//     password: "",
//   });
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const handleChange = (event) => {
//     SetUser({ ...user, [event.target.name]: event.target.value });
//   };
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     dispatch(signup(user, history));
//     // history.push("/");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       form
//       <div class="mb-3">
//         <label for="formGroupExampleInput" class="form-label">
//           Username
//         </label>
//         <input
//           type="text"
//           class="form-control"
//           id="formGroupExampleInput"
//           placeholder="Enter your username"
//           name="username"
//           onChange={handleChange}
//           value={user.username}
//         />
//       </div>
//       <div class="mb-3">
//         <label for="formGroupExampleInput2" class="form-label">
//           password
//         </label>
//         <input
//           type="password"
//           class="form-control"
//           id="formGroupExampleInput2"
//           placeholder="Enter your password"
//           name="password"
//           onChange={handleChange}
//           value={user.password}
//         />
//       </div>
//       <button type="submit">Signup</button>
//     </form>
//   );
// };

// export default Signup;

import { useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";
//actions
import { signup } from "../../store/actions/authActions";

import React from "react";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";

const Signup = () => {
  const [user, setUser] = React.useState({
    username: "",
    password: "",
    showPassword: false,
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleClickShowPassword = () => {
    setUser({ ...user, showPassword: !user.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setUser({ ...user, [prop]: event.target.value });
  };

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(user, history));
    // history.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          marginLeft: "30%",
        }}
      >
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">
            Username
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Enter your username"
            name="username"
            onChange={handleChange}
            value={user.username}
          />
        </div>
        <InputLabel htmlFor="standard-adornment-password">
          Enter your Password
        </InputLabel>
        <Input
          type={user.showPassword ? "text" : "password"}
          onChange={handlePasswordChange("password")}
          value={user.password}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {user.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </div>
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
