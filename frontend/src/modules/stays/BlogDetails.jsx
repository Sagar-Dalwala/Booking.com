import { useRef } from "react";

const BlogDetails = () => {
  const blog = [
    {
      id: 1,
      title: "Discover Hidden Gems in Italy",
      image: "https://via.placeholder.com/600x400?text=Italy",
      description:
        "Explore the best off-the-beaten-path destinations in Italy.",
    },
    {
      id: 2,
      title: "Top 10 Beaches in the World",
      image: "https://via.placeholder.com/600x400?text=Beaches",
      description:
        "Find out which beaches made it to the ultimate top 10 list.",
    },
    {
      id: 3,
      title: "A Guide to Culinary Adventures",
      image: "https://via.placeholder.com/600x400?text=Food",
      description: "Savor the finest culinary experiences across the globe.",
    },
    {
      id: 4,
      title: "Hiking Trails You Must Explore",
      image: "https://via.placeholder.com/600x400?text=Hiking",
      description: "Discover breathtaking hiking trails around the world.",
    },
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-screen-xl mx-auto px-4 relative">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">
            Get Inspiration for Your Next Trip
          </h2>
          <a
            href="#"
            className="text-blue-600 font-medium hover:underline text-sm md:text-base"
          >
            See All Blogs
          </a>
        </div>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hidden md:block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hidden md:block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Blog Section */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hidden scroll-snap-x snap-mandatory"
        >
          {blog.map((post, index) => (
            <div
              key={post.id}
              className="relative flex-shrink-0 rounded-lg overflow-hidden shadow-lg snap-start w-[300px] md:w-[400px] lg:w-[500px]"
            >
              {/* Image */}
              <img
                src={post.image}
                alt={post.title}
                className={`w-full ${
                  index === 0
                    ? "h-[400px] object-cover hover:scale-105 transform transition-transform duration-300"
                    : "h-64 object-cover"
                }`}
              />
              {/* Content */}
              <div
                className={`absolute bottom-2 left-2 text-white p-4 rounded-md ${
                  index === 0 ? "bg-none" : ""
                }`}
              >
                <h3
                  className={`text-lg font-bold ${
                    index === 0 ? "text-white" : "text-gray-800"
                  }`}
                >
                  {post.title}
                </h3>
                <p
                  className={`text-sm mt-2 ${
                    index === 0 ? "text-gray-200" : "text-gray-600"
                  }`}
                >
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
