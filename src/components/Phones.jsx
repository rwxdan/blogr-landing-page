import IllustrationPhones from "/src/assets/static/images/illustration-phones.svg";
const Phones = () => {
  return (
    <section className="phones">
      <div className="article flex flex-col sm:flex-row items-center px-5 justify-between sm:max-h-[25.5rem] sm:mt-6 text-center sm:text-left">
        <div>
          <img
            className="illustration-phones"
            src={IllustrationPhones}
            alt="Illustration of two phones displaying the Blogr app"
          />
        </div>
        <div className="sm:ml-12 pb-24 sm:pb-0">
          <h3 className="title-3 font-bold font-overpass tracking-[-1px] text-[var(--neutral-clr-400)]  text-3xl sm:text-[2.425rem] my-1">
            State of the Art Infrastructure
          </h3>
          <p className="font-normal font-overpass tracking-[0.0325em] text-[var(--neutral-clr-400)] font-base leading-7 max-w-[56ch] pt-3">
            With reliability and speed in mind. worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Phones;
