import React from "react";
import PageHeading from "../common/PageHeading";
import "./Blog.css"; 
const blogPosts = [
  {
    id: 1,
    title: "Best Furniture for Small Apartments",
    description:
      "Discover space-saving furniture ideas that are perfect for small apartments. From compact sofas to foldable tables, learn how to maximize your living space.",
    date: "January 5, 2025",
    link: "/blog/best-furniture-small-apartments",
  },
  {
    id: 2,
    title: "How to Choose Sustainable Furniture",
    description:
      "Learn how to make eco-friendly choices when selecting furniture. This guide covers sustainable materials, brands, and tips for reducing your carbon footprint.",
    date: "December 15, 2024",
    link: "/blog/sustainable-furniture",
  },
  {
    id: 3,
    title: "Latest Trends in Living Room Furniture",
    description:
      "Explore the latest trends in living room furniture, including minimalist designs, multifunctional pieces, and color schemes that are taking over 2025.",
    date: "November 30, 2024",
    link: "/blog/living-room-furniture-trends",
  },
  {
    id: 4,
    title: "The Ultimate Guide to Mid-Century Modern Furniture",
    description:
      "Mid-century modern furniture is making a comeback. Discover the best pieces, the history behind this iconic style, and how to incorporate it into your home.",
    date: "October 25, 2024",
    link: "/blog/mid-century-modern-furniture",
  },
  {
    id: 5,
    title: "DIY Furniture Projects for Beginners",
    description:
      "Looking for a fun DIY project? Check out these simple and affordable furniture-making ideas that you can build on your own, from bookshelves to coffee tables.",
    date: "September 15, 2024",
    link: "/blog/diy-furniture-projects",
  },
];

const Blog = () => {
  return (
    <div>
      <PageHeading home={"home"} pagename={"Furniture Blog"} />

      <div className="blog-container">
        <div className="blog-title">Furniture Blog</div>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-post">
              <h2 className="blog-post-title">{post.title}</h2>
              <p className="blog-post-date">{post.date}</p>
              <p className="blog-post-description">{post.description}</p>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
