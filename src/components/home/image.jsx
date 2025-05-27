import './image.css';

export default function Image() {
  return (
    <div className="image-wrapper">
    <div className="image-container">
      <img src="https://i.pinimg.com/originals/e5/c8/03/e5c803a1f390a8bfb5f45abd8a055ba5.jpg" alt="desc"  />
      <div className='image-text'>
        <div className='icon'>
            <i class ="fa solid fa-plus"></i> 
        </div>
        <div class="lines">
        <p>Join 1000+ users</p><br></br>
        <p>Achieve your learning goals</p>
        </div>
    </div>
    </div>
    
    </div>
  );
}