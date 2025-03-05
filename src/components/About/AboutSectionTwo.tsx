import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "../Features/SingleFeature";
import aboutUsData from "../Features/aboutUsData";

const AboutSectionTwo = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Meet Our Team"
            paragraph="We are a group of highly motivated individuals currently working towards our MBA at UMD.  We are excited to work with you!"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {aboutUsData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSectionTwo;
