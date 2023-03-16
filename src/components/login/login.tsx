const Login = ()=>{
  return (
    <div className="center" id="login-id">
      <form action="">
        <h2>Sign In</h2>
        <input type="text" placeholder="Username" required />
        <i className="far fa-user"></i>
        <input type="password" placeholder="Password" />
        <i className="fas fa-lock"></i>
        <input type="submit" value="Sign in" />
        <a href="#">Forgot Password?</a>
    </form>
  </div>
  
    );
}
export default Login;