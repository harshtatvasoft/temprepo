import missionImage from '../../assets/mission.jpg';
import visionImage from '../../assets/vision.jpg';
import '../About/About.css';

const About = () => {
  return (
    <div className="about-container container">
      <div className="vision-section row align-items-start">
        <div className="col-md-6 p-0 vision-title">
          <h2 className="section-title">Our Vision</h2>
          <p className="section-text">
            Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa
            eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut aliquam sem et tortor consequat
            id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim
            neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque
            felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero i
          </p>
        </div>
        <div className="col-md-6 p-0">
          <div className="image-container">
            <img src={visionImage} alt="Our Vision" className="img-fluid rounded vision-image" />
          </div>
        </div>
      </div>
      <div className="mission-section row align-items-start">
        <div className="col-md-6 order-md-2 ps-3 mision-title">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-text">
            Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare
            massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut aliquam sem et tortor
            consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum
            integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate
            eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero i
          </p>
        </div>
        <div className="col-md-6 order-md-1 p-0">
          <div className="image-container">
            <img src={missionImage} alt="Our Mission" className="img-fluid rounded mission-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
