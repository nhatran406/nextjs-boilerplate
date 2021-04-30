export const validEmail = email => {
  const regex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,4})+$/;
  return regex.test(email);
};
