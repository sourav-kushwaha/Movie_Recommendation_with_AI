export const checkValidData = (email,password,name,number) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isNameValid =  /^[a-zA-Z\s]+$/.test(name);
  const isNumberValid = /^(\+\d{1,3}[- ]?)?\d{10}$/.test(number);
  if(!isEmailValid) return "Email is not valid";
  if(!isPasswordValid) return "Not a valid Password";
  if(!isNameValid) return "Fill correct name";
  if(!isNumberValid) return "Invalid Number";
};