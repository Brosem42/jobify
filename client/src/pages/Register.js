import { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo, FormRow, Alert } from "../components";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  showAlert: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  // global state and useNavigate

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  const toggleMember = () => {
    setValues({...values, isMember: !values.isMember });
  }

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{!values.isMember ? 'Register' : 'Login'}</h3>

        {values.showAlert && <Alert />}
        {/* name input */}
        {!values.isMember && (
          <FormRow
          name="name"
          type={"text"}
          value={values.name}
          handleChange={handleChange}
        />
        )}
        
        <FormRow
          name="email"
          type={"email"}
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          name="password"
          type={"password"}
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button 
            type="button"
            onClick={toggleMember}
            className="member-btn"
          >
            {values.isMember ? 'Register': 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
