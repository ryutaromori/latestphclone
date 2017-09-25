import React from 'react';

import ProductDetailHeader from './product_detail_header';
import ProductDetailMedia from './product_detail_media';
import ProductDiscussionContainer from '../product_discussion/product_discussion_container';
import ProductDetailNav from './product_detail_nav';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let product = this.props.product;
    return (
      <div className="product-detail-container">
          <ProductDetailHeader product={product}/>
        <div className="product-detail-main-content-container">
          <div className="product-detail-content-bar">
            <ProductDetailMedia />
            <ProductDiscussionContainer />
          </div>
          <div className="product-detail-aside">
            <ProductDetailNav />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;