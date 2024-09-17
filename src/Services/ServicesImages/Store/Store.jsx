import React from "react";
import "./Store.css";

// Sample data for digital products with example icons
const products = [
  { name: "PDF Guide", type: "pdf", link: "https://example.com/guide.pdf", imageUrl: "https://img.icons8.com/ios-filled/150/000000/pdf-2.png" },
  { name: "Software App", type: "software", link: "https://example.com/software", imageUrl: "https://img.icons8.com/ios-filled/150/000000/laptop.png" },
  { name: "Excel Template", type: "excel", link: "https://example.com/template.xlsx", imageUrl: "https://img.icons8.com/ios-filled/150/000000/microsoft-excel-2019.png" },
  { name: "3D Model", type: "3d", link: "https://example.com/model", imageUrl: "https://img.icons8.com/ios-filled/150/000000/3d.png" },
  { name: "Data Analysis", type: "data", link: "https://example.com/model", imageUrl: "https://img.icons8.com/ios-filled/150/000000/data-configuration.png" },
  { name: "Mobile Apps", type: "apps", link: "https://example.com/model", imageUrl: "https://img.icons8.com/ios-filled/150/000000/android.png" },
  // Add more products as needed
];

// ProductCard Component
const ProductCard = ({ name, link, imageUrl }) => (
  <div className="product-card">
    <img src={imageUrl} alt={name} className="product-image" />
    <div className="product-info">
      <h3 className="product-name">{name}</h3>
      {/* <a href={link} className="product-link" target="_blank" rel="noopener noreferrer">
        View Product
      </a> */}
    </div>
  </div>
);

export default function Store() {
  return (
    <div className="store-gallery">
      <h1>Things I work with...</h1>
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            // link={product.link}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
