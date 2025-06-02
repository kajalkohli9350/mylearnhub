import "./signup.css";
export default function Signup() {
    return(
        <div class="signupcontainer">
        <form class="signup-box">
      <h2 class="logo">LearnHub</h2>
      <h2>Create an Account</h2>
      <p>Join LearnHub to start your learning journey.</p>

      <label for="name">Full Name</label>
      <div class="input-group">
        <span ><i class="fa-solid fa-person"></i></span>
        <input type="text" id="name" placeholder="John Doe"/>
      </div>

      <label for="email">Email Address</label>
      <div class="input-group">
        <span ><i class="fa-solid fa-Email"></i></span>
        <input type="email" id="email" placeholder="you@example.com"/>
      </div>

      <label for="password">Password</label>
      <div class="input-group">
        <span><i class="fa-solid fa-lock"></i></span>
        <input type="password" id="password" placeholder="********"/>
        <span><i class="fa-solid fa-eye"></i></span>
      </div>

      <label for="confirm-password">Confirm Password</label>
      <div class="input-group">
        <span><i class="fa-solid fa-lock"></i></span>
        <input type="password" id="confirm-password" placeholder="********"/>
        <span><i class="fa-solid fa-eye"></i></span>
      </div>

      <button type="submit" class="signup-button">Sign Up</button>

      <div class="links">
        <p>Already have an account? <a href="#">Log In</a></p>
      </div>
    </form>
  </div>
    );
}