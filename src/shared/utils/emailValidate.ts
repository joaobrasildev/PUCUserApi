export function validateEmail(email) {
  const response = /\S+@\S+\.\S+/;
  return response.test(email);
}
