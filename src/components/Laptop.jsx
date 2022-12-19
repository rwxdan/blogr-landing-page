import LaptopDesktop from "/src/assets/static/images/illustration-laptop-desktop.svg";
import LaptopMobile from "/src/assets/static/images/illustration-laptop-mobile.svg";
const Laptop = () => {
  return (
    <section className="article flex flex-col sm:flex-row text-center sm:text-left py-16 sm:py-[9.5rem] items-center sm:my-24">
      <div className="illustration-laptop-container flex-1">
        <picture>
          <source srcSet={LaptopDesktop} media="(min-width: 768px)" />
          <img
            src={LaptopMobile}
            alt="Illustration of a Laptop. The laptop displays empty social media and RSS feeds"
          />
        </picture>
      </div>
      <div className="px-5 py-4 flex flex-col gap-10">
        <div>
          <h3 className="text-[1.75rem] font-bold font-overpass text-[var(--neutral-clr-700)] pt-8 pb-[1.45rem] tracking-[-0.0075em]">
            Free, open, simple
          </h3>
          <p className="text-base font-normal font-overpass text-[var(--neutral-clr-700)] leading-7 max-w-[52.5ch] tracking-wide">
            Bloqr is a free and open source application backed bv a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration.
            third-party commenting tools. and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
        </div>
        <div>
          <h3 className="text-[1.75rem] font-bold font-overpass text-[var(--neutral-clr-700)] pt-8 pb-[1.45rem] tracking-[-0.0075em]">
            Powerful tooling
          </h3>
          <p className="text-base font-normal font-overpass text-[var(--neutral-clr-700)] leading-7 max-w-[52.5ch] tracking-wide">
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable Of
            producing even the most complicated sites.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Laptop;
