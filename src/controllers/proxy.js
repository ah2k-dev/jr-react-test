const ErrorHandler = require("../utils/ErrorHandler");
const SuccessHandler = require("../utils/SuccessHandler");
const axios = require("axios");

const proxy = async (req, res, next) => {
  // #swagger.tags = ['Proxy']
  // #swagger.description = 'Junior react developer test api'
  try {
    const data = {
      header: {
        logo: `/files/logo.png`,
        sitename: `Barklyn purr meow`,
        nav: [
          { name: "Home", link: "/" },
          { name: "About", link: "/about" },
          { name: "Services", link: "/services" },
          { name: "Contact", link: "/contact" },
        ],
      },
      section1: {
        title: "More than just a walk - an experience",
        image1: `/files/section1_image.png`,
        eclipse: `/files/section1_eclipse.png`,
      },
      section2: {
        title: "Why Choose Barklyn & Purr-Meow Dog Walkers?",
        text: `Downtown Brooklyn and Park Slope's trusted dog walking service. We’re not just taking a stroll; we’re ensuring joy, exercise, 
        and quality bonding time for your furry friend.`,
        eclipse: `/files/section2_exlipse.png`,
        image1: `/files/section2_image0.png`,
        image2: `/files/section2_image1.png`,
        image3: `/files/section2_image2.png`,
        image4: `/files/section2_image3.png`,
        image5: `/files/section2_image4.png`,
        image6: `/files/section2_image5.png`,
        image7: `/files/section2_image6.png`,
      },
      section3: {
        title: "Our Dog Walking Experience",
        icon1: "/files/section3_dog_icon.png",
        icon2: "/files/section3_phone_icon.png",
        icon3: "/files/section3_security_icon.png",
        icon4: "/files/section3_camera_icon.png",
        dogbox: {
          title: "Tailored Outings",
          text: "Whether it’s a jog for the active ones or a leisurely stroll for the seniors, we customize walks to fit your dogs needs.",
        },
        phonebox: {
          title: "GPS Tracking",
          text: "Stay informed with real-time tracking, knowing exactly where and how far your dog has walked.",
        },
        securitybox: {
          title: "Safe Group Sizes",
          text: "Our group walks are limited in size, ensuring individual attention and safety",
        },
        camerabox: {
          title: "Photos & Reports",
          text: "Capture the joy! Receive photos and detailed reports of every adventure.",
        },
      },
      section4: {
        title: "Why Dog Owners Love Us",
        image1: "/files/section4_image0.png",
        eclipse1: "/files/section4_eclipse.png",
        eclipse2: "/files/section4_eclipse2.png",
        box1: {
          title: "Consistent Companions",
          text: "Your dog will have regular walkers, creating a bond of trust and familiarity.",
        },
        box2: {
          title: "Safety First",
          text: "Our walkers are insured, bonded, and first-aid-trained. Your dog's safety is our utmost priority.",
        },
        box3: {
          title: "Flexible Scheduling",
          text: "Life unpredictable? No problem. Use our app or simply text us. We’re here to fit your schedule.",
        },
        box4: {
          title: "Local Expertise",
          text: "Born and bred in Downtown Brooklyn, we know the best spots your dog will adore.",
        },
      },
      section5: {
        title: "Getting Started Is Easy",
        text: "Ready to give your dog the Barklyn & Purr-Meow walking experience? Booking is seamless through our app or a quick text message.",
        image1: "/files/section5_image0.png",
        eclipse: "/files/section5_eclipse.png",
        eclipse2: "/files/section5_eclipse2.png",
      },
    };
    return SuccessHandler(data, 200, res);
  } catch (error) {
    console.log(error);
    return ErrorHandler(error.message, 500, req, res);
  }
};

module.exports = proxy;
