import { useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Apple-iPhone-13-pro-smartphone",
      description:
        "15 cm (6.1-inch) Super Retina XDR display with ProMotion for a faster, more responsive feel.\n      Cinematic mode adds shallow depth....",
      price: 84900,
      quantity: 30,
    },
    {
      id: 2,
      name: "Samsung Galaxy S21 FE 5G",
      description:
        "Samsung Galaxy S21 5G supports frequency bands GSM , CDMA , HSPA , EVDO , LTE , 5G. Official\n      announcement date is January 14 2021.",
      price: 54600,
      quantity: 20,
    },
    {
      id: 3,
      name: "LG UHD TV",
      description: "some random description..",
      price: 25000,
      quantity: 8,
    },
  ]);

  const handleAddToCart = (product: Product) => {
    console.log(product);
  };

  return (
    <>
      <h1>Shop Our Products</h1>
      <div className="row">
        {products.map((product) => {
          return (
            <div className="col-md-4" key={product.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p>Rs. {product.price}</p>
                </div>
                <div className="card-footer">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <button
                    type="button"
                    className="ms-2 btn btn-outline-danger btn-sm"
                  >
                    Favorite
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductsPage;
