import './image.css';

export default function Image() {
  return (
    
    <div className="image-container">
      <img src="https://images.unsplash.com/photo-1650661926447-9efb2610f64c?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  />
      <div className='image-text'>
        <div className='icon'>
            <i class ="fa solid fa-plus"></i> 
        </div>
        <div class="lines">
        <p>Join 1000+ users
          <br/>
        </p>
        <p style={{color:'rgba(188, 187, 192, 0.8)'}} >Achieve your learning goals</p>
        </div>
    </div>
    </div>
    
    
  );
}