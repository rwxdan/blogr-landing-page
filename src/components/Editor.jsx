import EditorDesktop from "/src/assets/static/images/illustration-editor-desktop.svg";
import EditorMobile from "/src/assets/static/images/illustration-editor-mobile.svg";

const Editor = () => {
  return (
    <section className="overflow-hidden">
      <div className="article pt-16 sm:pt-[9.5rem]">
        <h3 className="title-2 text-3xl sm:text-[2.425rem] font-overpass font-bold text-[var(--neutral-clr-700)] tracking-tight text-center">
          Designed for the future
        </h3>
        <div className="flex flex-col-reverse sm:flex-row py-10">
          <div className="p-6 flex flex-shrink-0 flex-col gap-10 text-center sm:text-start sm:items-center">
            <div>
              <h4 className="title-4">Introducing an extensible editor</h4>
              <p className="purpose">
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images. videos, and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of a blog.
              </p>
            </div>
            <div>
              <h4 className="title-4">Robust content management</h4>
              <p className="purpose">
                Flexible content management enables users to easily move through
                posts. Increase the usability of your blog by adding customized
                categories. sections. format. or flow. With this functionality.
                you're in full control,
              </p>
            </div>
          </div>
          <div className="illustration-editor-container">
            <picture>
              <source srcSet={EditorDesktop} media="(min-width: 768px)" />
              <img
                src={EditorMobile}
                alt="Illustration of Blogr's editor. There are two squares of different sizes inside of the editor, the smaller one has a circle inside of it, and the larger one has a curved line running through it."
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Editor;
