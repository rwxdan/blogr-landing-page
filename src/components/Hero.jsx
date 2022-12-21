const Hero = () => {
  return (
    <section className=" mt-[7.375rem] mb-[8rem]">
      <div className="article text-center pb-6">
        <h1 className="title-1 font-overpass text-[2.25rem] sm:text-[3.875rem] font-bold text-[var(--neutral-clr-400)] tracking-[-0.0325em] mx-2 sm:mx-0">
          A modern publishing platform
        </h1>
        <h2 className="title-2 text-[var(--neutral-clr-400)] text-lg sm:text-xl mx-2 sm:mx-0 opacity-80">
          Grow your audience and build your online brand
        </h2>
      </div>
      <div className="flex justify-center gap-8 items-center py-6">
        <a
          className="hero-cta px-4 py-[0.75rem] bg-[var(--neutral-clr-400)] text-[var(--primary-clr-600)] hover:bg-[var(--primary-clr-500)] hover:text-[var(--neutral-clr-400)]"
          href="#get_started"
        >
          Start for Free
        </a>
        <a
          className="hero-cta border-[var(--neutral-clr-400)] border px-6 py-3 text-[var(--neutral-clr-400)] hover:bg-[var(--neutral-clr-400)] hover:text-[var(--primary-clr-600)]"
          href="#learn_more"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
