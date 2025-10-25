import heroVideo from '../assets/hero-bg.mp4'

export default function Hero() {
  return (
    <section 
    id="hero"
    className="relative w-full h-screen overflow-hidden bg-white flex items-center justify-center">
  <div className="aspect-square w-full max-h-screen">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
      src={heroVideo}
    />
  </div>
</section>

  );
}
