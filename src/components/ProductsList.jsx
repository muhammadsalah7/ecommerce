import Product from "./Product";

function ProductsList() {
  return (
    <>
      <h2 className="text-center p-3">Our Products</h2>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Product />
          </div>
          <div className="col-3">
            <Product />
          </div>
          <div className="col-3">
            <Product />
          </div>
          <div className="col-3">
            <Product />
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductsList;
