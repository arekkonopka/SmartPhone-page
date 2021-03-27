import video from '../../video/eye.mp4'


const Video = () => {

  return (
    <div className="video">
      <video autoPlay loop muted className='videoPlay'>
        <source src={video} type='video/mp4' />
        {/* ogladaj film popup */}
      </video>
      <h1>Najlepsza jakość nagrywania</h1>
    </div>
  )
}

export default Video