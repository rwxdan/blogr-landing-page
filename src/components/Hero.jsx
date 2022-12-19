const Hero = () => {
  return (
    <section className=" mt-[7.375rem] mb-[8rem]">
      <div className="text-center pb-6">
        <h1 className="font-overpass text-[3.875rem] font-bold text-[var(--neutral-clr-400)] tracking-tight">
          A modern publishing platform
        </h1>
        <h2 className="text-[var(--neutral-clr-400)] text-xl">
          Grow your audience and build your online brand
        </h2>
      </div>
      <div className="flex justify-center gap-8 items-center py-6">
        <a
          className="block px-4 py-[0.75rem] mr-[-0.5rem] rounded-full bg-[var(--neutral-clr-400)] text-[var(--primary-clr-600)] font-ubuntu font-bold text-base hover:bg-[var(--primary-clr-500)] hover:text-[var(--neutral-clr-400)] ease-in-out duration-200"
          href="#start"
        >
          Start for Free
        </a>
        <a
          className="block border-[var(--neutral-clr-400)] border px-6 py-3 mr-[-0.5rem] rounded-full font-ubuntu font-bold text-base text-[var(--neutral-clr-400)] hover:bg-[var(--neutral-clr-400)] hover:text-[var(--primary-clr-600)]
          ease-in-out duration-200"
          href="#learn_more"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
