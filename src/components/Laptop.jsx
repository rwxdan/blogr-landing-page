import LaptopDesktop from "/src/assets/static/images/illustration-laptop-desktop.svg";
import LaptopMobile from "/src/assets/static/images/illustration-laptop-mobile.svg";
const Laptop = () => {
  return (
    <section className="article sm:my-24">
      <div className="flex flex-col sm:flex-row text-center sm:text-left py-16 sm:pt-20 sm:pb-32 items-center">
        <div className="illustration-laptop-container flex-1">
          <picture>
            <source srcSet={LaptopDesktop} media="(min-width: 768px)" />
            <img
              src={LaptopMobile}
              alt="Illustration of a Laptop. The laptop displays empty social media and RSS feeds"
            />
          </picture>
        </div>
        <div className="px-5 flex flex-col gap-10">
          <div>
            <h3>Free, open, simple</h3>
            <p className="purpose">
              Bloqr is a free and open source application backed bv a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration.
              third-party commenting tools. and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </div>
          <div>
            <h3>Powerful tooling</h3>
            <p className="purpose">
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable Of
              producing even the most complicated sites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Laptop;
