const PageTextContent = {
  aboutMeSection: {
    aboutMe: `My name is Marius Solheim and I am specialized in web development using React. I am about to graduate from Noroff Vocational School with good results and a lot of practical experience to show for due to their practical pedagogical approach.

    I love doing things that challenge my creativity, be it music, coding, design, concept creation, etc. In web design, I strive for clean and modern design and I am conscious of the relationship between information accessibility and information overload.
    
    Lately, I've been working with Tailwind and tailwind-styled-components. which I really love.
    `,
    myServices:
      "I work for Apidari, a company who is specializing in developing web sites and web apps of excellent quality for a price that is hard to compete with.",
  },
  projectsSection: [
    {
      title: `Semester Project 2`,
      text: `The essence of the brief was to create an e-commerce website, being free to choose any theme. Well, I went for something a bit futuristic (for now at least...) - human cybernetic augmentations.

      The store page is very minimalistic at first glance; it doesn't have a traditional interface but a body figure where you can click around on the body to access available products for that specific category of body parts. Basically, a fancy filter.
      
      The augmentation concept, textual content, product images and logo are taken from Deus Ex: Human Revolution; the PNGs I had to make myself.
      `,
      image: "semesterproject2.png",
      links: {
        gitHub: "#",
        liveSite: "#",
      },
    },
    {
      title: `Project Exam 2`,
      text: `This project was my first major experience with React on a larger scale. The design is simple and modern. The interface is very modal heavy for a lot of user actions. The main navigation is based on a Bootstrap carousel component, something I haven't seen that much, but in my opinion, it works really well.`,
      image: "linkuplive.png",
      links: {
        gitHub: "#",
        liveSite: "#",
      },
    },
    {
      title: `JS Frameworks Course Assignment`,
      text: `A small NextJS app for checking the electricity prices for different areas in Norway. For the colors in the graph, I had to code the RGB values to change according to the price level. A lot of fun!`,
      image: "nextjs.png",
      links: {
        gitHub: "#",
        liveSite: "#",
      },
    },
  ],
  responsiveDesignSection: {
    intro:
      "Responsive web design is an approach to web development that aims to create websites that adapt to different screen sizes and device types. Here are some benefits of using responsive design in web development:",
    benefits: [
      "Improved User Experience: With responsive design, your website will provide a seamless and consistent user experience across all devices.",
      "Better SEO: Responsive design can improve your website's search engine rankings because search engines prefer mobile-friendly websites.",
      "Increased Conversion Rates: A responsive website can increase conversion rates because users are more likely to engage with a site that is easy to use on any device.",
      "Cost-Effective: Responsive design can be cost-effective because you only need to create and maintain one website that works across all devices.",
      "Future-Proof: Responsive design is future-proof because it can adapt to new devices and screen sizes that may be introduced in the future.",
    ],
    summary:
      "Overall, responsive design is essential in today's world of multiple devices and screen sizes. By creating a website that is responsive, you can provide a seamless user experience, improve SEO, increase conversion rates, and save money in the long run.",
    stats:
      "Desktop and laptop traffic accounted for 46.7% of all website traffic in 2021, down from 47.8% in the previous year. This trend is expected to continue, as mobile devices become even more advanced and affordable, and as internet connectivity continues to improve around the world.",
  },
};

export default PageTextContent;
