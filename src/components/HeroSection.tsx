import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile-placeholder.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-lilac-dark/60 via-lilac/40 to-background/90" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <img
          src={profileImg}
          alt="Tshilidzi Mphadzha"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 border-4 border-primary-foreground/80 shadow-xl"
          width={512}
          height={512}
        />
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-4">
          Tshilidzi Mphadzha
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 font-sans font-light max-w-2xl mx-auto mb-8">
          Data Science, Business Intelligence, Analytics &amp; Insights Professional
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a href="#about" className="px-6 py-3 bg-primary-foreground text-lilac-dark font-medium rounded-lg hover:bg-primary-foreground/90 transition-all shadow-md">
            About Me
          </a>
          <a href="#contact" className="px-6 py-3 border-2 border-primary-foreground text-primary-foreground font-medium rounded-lg hover:bg-primary-foreground/10 transition-all">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
