export const checkValidData = (email, password, name, isSignInForm) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

  if (!isSignInForm) {
    const isNameValid = /^[a-zA-Z]+[\s]?[a-zA-Z ]+$/.test(name);
    if (!isNameValid) return "Name is not valid";
  }

  if (!isEmailValid) return "Email Id is not valid";

  if (!isPasswordValid) return "Password is not valid";

  return null;
};
