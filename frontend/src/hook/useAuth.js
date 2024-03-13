const useAuth = () => {
  const authUser = localStorage.getItem("auth");
  const user = JSON.parse(authUser)?.user;
  return user;
};
export default useAuth;