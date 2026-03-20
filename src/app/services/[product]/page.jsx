//src/app/services/[product]/page.jsx
import { notFound } from 'next/navigation';
import React from 'react';
import ProductHero from './components/ProductHero';
import ProductDescription from './components/ProductDescription';
import { productData, getAllProductIds } from './data/productData';
import ProductKeyFeatures from './components/ProductKeyFeatures';
import ProductCTA from './components/ProductCTA';

// Import special components for xsonx-wound-hygiene
import XsonxKeyBenefits from './components/xsonx/XsonxKeyBenefits';
import XsonxWhyChoose from './components/xsonx/XsonxWhyChoose';
import XsonxTestimonials from './components/xsonx/XsonxTestimonials';
import XsonxFutureWoundCare from './components/xsonx/XsonxFutureWoundCare';
import ProductAvailableSize from './components/ProductAvilableSize';
import XsonxInfoBanner from './components/xsonx/XsonxInfoBanner';
import ProductVideoSection from './components/ProductVideoSection';

export async function generateStaticParams() {
  const productIds = getAllProductIds();
  return productIds.map((product) => ({
    product: product,
  }));
}

export default async function ProductPage({ params }) {
  const { product: productId } = await params;
  const productEntry = productData[productId];
  const product = productEntry ? { id: productId, ...productEntry } : null;

  if (!product) {
    notFound();
  }

  // Check if it's the special xsonx product
  const isXsonxProduct = productId === 'xsonx-wound-hygiene';

  return (
    <div className="min-h-screen bg-gray-50">
      <ProductHero product={product} />
      
      {/* Conditional Rendering */}
      {isXsonxProduct ? (
        // XSONX SPECIAL LAYOUT
        <>
          <XsonxInfoBanner />
          <XsonxKeyBenefits product={product} />
          <XsonxWhyChoose product={product} />
          <XsonxTestimonials product={product} />
          <XsonxFutureWoundCare product={product} />
          {/* <ProductCTA product={product} /> */}
        </>
      ) : (
        // STANDARD PRODUCT LAYOUT
        <>
          <ProductDescription product={product} />
          {productId === 'endolumik' && <ProductVideoSection />}
          <ProductKeyFeatures product={product} />
          <ProductAvailableSize product={product} />
          {/* <ProductCTA product={product} /> */}
        </>
      )}
    </div>
  );
}

export async function generateMetadata({ params }) {
  const { product: productId } = await params;
  const product = productData[productId];
  
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }
  
  return {
    title: `${product.title} | Your Company`,
    description: product.descriptionContent?.[0] || product.title,
  };
}
