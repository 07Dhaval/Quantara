// Replace these paths with your actual local blog thumbnail images
import blog1 from "../../assets/images/b1.png";
import blog2 from "../../assets/images/b2.png";
import blog3 from "../../assets/images/b3.png";
import blog4 from "../../assets/images/b4.png";
import blog5 from "../../assets/images/b5.png";
import blog6 from "../../assets/images/b6.png";

const posts = [
  {
    image: blog1,
    date: "April 27, 2026",
    category: "Automation",
    title: "The Algorithmic Pulse: Real-Time Market Intelligence",
  },
  {
    image: blog2,
    date: "April 27, 2026",
    category: "Infrastructure",
    title: "Core Synchronicity: Scaling Institutional Data Grids",
  },
  {
    image: blog3,
    date: "April 27, 2026",
    category: "Velocity",
    title: "Sub-Second Finality: The Science of High-Velocity Engines",
  },
  {
    image: blog4,
    date: "April 27, 2026",
    category: "Scalability",
    title: "Bridging the Gap: Cross-Chain Deployment Strategies",
  },
  {
    image: blog5,
    date: "April 27, 2026",
    category: "Architecture",
    title: "Mapping the Mesh: Decentralized Node Optimization",
  },
  {
    image: blog6,
    date: "April 24, 2026",
    category: "Security",
    title: "Hardening the Perimeter: Institutional Shield Protocols",
  },
];

const BlogCard = ({ image, date, category, title }) => (
  <a href="#" className="group block">
    <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div className="mt-3 flex items-center gap-3 text-white/40 text-xs">
      <span>{date}</span>
      <span className="w-px h-3.5 bg-white/20" />
      <span>{category}</span>
    </div>

    <h3 className="mt-2 text-white text-base sm:text-lg font-medium leading-snug max-w-[420px]">
      {title}
    </h3>
  </a>
);

const BlogGrid = () => {
  return (
    <section className="w-full bg-[#050B14] px-5 py-12 sm:py-16 lg:py-20">
      <div className="max-w-[980px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 sm:gap-y-12">
        {posts.map((post, i) => (
          <BlogCard key={i} {...post} />
        ))}
      </div>
    </section>
  );
};

export default BlogGrid;
