// src/components/Categories.tsx
import React from 'react';
import styled from 'styled-components';

const CategoriesWrapper = styled.section`
  padding: 50px;
  background-color: #fff;
`;

const CategoriesGrid = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: scroll;
`;

const CategoryCard = styled.div`
  padding: 20px;
  background-color: #f3f4f6;
  border-radius: 10px;
  text-align: center;
  min-width: 150px;
`;

const Categories: React.FC = () => {
  return (
    <CategoriesWrapper>
      <h2>Top Categories</h2>
      <CategoriesGrid>
        <CategoryCard>
          <p>Category 1</p>
        </CategoryCard>
        <CategoryCard>
          <p>Category 2</p>
        </CategoryCard>
        <CategoryCard>
          <p>Category 3</p>
        </CategoryCard>
        {/* Add more categories as needed */}
      </CategoriesGrid>
    </CategoriesWrapper>
  );
};

export default Categories;
