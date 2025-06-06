import './content.css';

export default function Content() {
  return ( 
    
        <div class="pricingcontent">
        <h1>Simple, Transparent Pricing</h1>
        <p>Choose the plan that's right for you and start your learning journey today.</p>

        <div class="toggle">
            <button class="active">Monthly</button>
            <button>Annual (Save up to 20%)</button>
        </div>

        <div class="pricing-cards">
            
            <div class="card">
                <h2>Basic</h2>
                <p class="subtitle">Perfect for individual learners</p>
                <p class="price">$9<span>/month</span></p>
                <ul>
                    <li>Access to 100+ basic courses</li>
                    <li>Basic progress tracking</li>
                    <li>Mobile access</li>
                    <li>Course completion certificates</li>
                    <li>24/7 email support</li>
                    <li class="disabled">No advanced courses</li>
                    <li class="disabled">No downloadable resources</li>
                    <li class="disabled">No mentor support</li>
                </ul>
                <button class="btn">Start Basic</button>
            </div>

          
            <div class="card most-popular">
                <div class="badge">Most Popular</div>
                <h2>Pro</h2>
                <p class="subtitle">Ideal for serious learners</p>
                <p class="price">$19<span>/month</span></p>
                <ul>
                    <li>Access to 500+ courses including advanced</li>
                    <li>Advanced progress analytics</li>
                    <li>Downloadable resources</li>
                    <li>Priority email support</li>
                    <li>Group learning sessions</li>
                    <li>Offline viewing</li>
                </ul>
                <button class="btn primary">Start Pro</button>
            </div>

          
            <div class="card">
                <h2>Enterprise</h2>
                <p class="subtitle">For teams and organizations</p>
                <p class="price">$49<span>/month</span></p>
                <ul>
                    <li>Unlimited access to all courses</li>
                    <li>Dedicated account manager</li>
                    <li>Custom learning paths</li>
                    <li>Team analytics dashboard</li>
                    <li>API access</li>
                    <li>SSO integration</li>
                    <li>Bulk enrollment</li>
                    <li>Custom branding</li>
                </ul>
                <button class="btn">Contact Sales</button>
            </div>
        </div>
        
    </div>
    
  );
}