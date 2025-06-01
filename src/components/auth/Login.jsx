import "./login.css";
export default function Login() {
    return(
      <div class="logincontainer">
    <form class="login-box">
      <h1 class="logo">LearnHub</h1>
      <h2>Welcome Back</h2>
      <p>Log in to continue your learning.</p>

      <label for="email">Email Address</label>
      <div class="input-group">
        <span> <i class="fa-solid fa-Mail"></i></span>
        <input type="email" id="email" placeholder="you@example.com" required />
      </div>

      <label for="password">Password</label>
      <div class="input-group">
        <span ><i class="fa-solid fa-lock"></i></span>
        <input type="password" id="password" placeholder="********" required />
        <span><i class="fa-solid fa-eye"></i></span>
      </div>

      <button type="submit" class="login-button">Log In</button>

      <div class="links">
        <p>Don't have an account? <a href="#">Sign Up</a></p>
        <a href="#">Forgot password?</a>
      </div>
    </form>
  </div>
    );
}
