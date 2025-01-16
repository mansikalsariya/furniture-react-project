import React from "react";

const Footer = () => {
  const footer = [
    {
      id: 1,
      header: "Our Store",
      content1:
        "Miniture is one of the biggest international fashion companies, one of the world’s largest distribution groups.",
    },
    {
      id: 2,
      header: "Quick Links",
      content1: "My Account",
      content2: "Shopping Cart",
      content3: "Wishlist",
      content4: "Product Compare",
    },
    {
      id: 3,
      header: "Information",
      content1: "Privacy Policy",
      content2: "Refund Policy",
      content3: "Shipping & Return",
      content4: "Terms & Condition",
    },
    {
      id: 4,
      header: "Let's Get In Touch",
      content1: "Sign Up For Our newsletter and receive 10% off your first order.",
    },
  ];

  return (
    <div className="bg-gray-900 text-white">
      <div className="w-10/12 m-auto py-14">
        <div className="flex justify-between gap-8">
          {footer.map((item, key) => (
            <div className="text-gray-500 w-2/6" key={key}>
              <h1 className="text-2xl mb-5">{item.header}</h1>
              <p>{item.content1}</p>
              {item.content2 && <p>{item.content2}</p>}
              {item.content3 && <p>{item.content3}</p>}
              {item.content4 && <p>{item.content4}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
