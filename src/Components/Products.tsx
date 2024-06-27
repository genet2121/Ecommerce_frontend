// src/components/Products.tsx
import React from 'react';
import styled from 'styled-components';

const ProductsWrapper = styled.section`
  padding: 50px;
  background-color: #f8f9fa;
`;

const ProductsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ProductCard = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  flex: 1 1 calc(25% - 20px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Products: React.FC = () => {
  return (
    <ProductsWrapper>
      <h2>Popular Products</h2>
      <ProductsGrid>
        <ProductCard>
          <p>Product 1</p>
        </ProductCard>
        <ProductCard>
          <p>Product 2</p>
        </ProductCard>
        <ProductCard>
          <p>Product 3</p>
        </ProductCard>
        {/* Add more products as needed */}
      </ProductsGrid>
    </ProductsWrapper>
  );
};

export default Products;
