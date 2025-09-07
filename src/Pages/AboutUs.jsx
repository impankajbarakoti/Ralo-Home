import AboutHero from "./AboutHero";
import AboutSection from "./AboutSection";
import AboutTeams from "./AboutTeam";



const AboutUs = () => {
  return (
    <div>
      <section>
        {/* <AboutHero/> */}
        <AboutHero
          breadcrumb={[
            { label: "Home", isActive: true },
            { label: "About" },
            // { label: 'Real Estate' },
          ]}
          heading={
            <>
              Redefining Homeownership:
              <br /> Real Estate Mortgages
              <br /> Tailored to Your Ambitions
            </>
          }
          paragraph="We truly care about what is best for you! From pre-approval to closing, our goal is to provide you with the best service while saving you money. We provide a completely customized experience, and will find the right loan program and best terms for you."
          ctaText="Explore More"
          ctaOnClick={() => alert("CTA Clicked!")}
          mainImageSrc="https://themes.envytheme.com/ralo/wp-content/uploads/2024/02/banner-img-5.jpg"
          topLeftShapeSrc="https://themes.envytheme.com/ralo/wp-content/uploads/2024/02/shape-7.png"
          bottomRightShapeSrc="https://themes.envytheme.com/ralo/wp-content/uploads/2024/02/shape-8.png"
        />
      </section>
      <section>
        <AboutSection />
      </section>
      <section>
        <AboutTeams />
      </section>
    </div>
  );
};

export default AboutUs;




