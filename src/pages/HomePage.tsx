// rafce
const HomePage: React.FC = () => {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold text-body-emphasis">
        Welcome to My Enterprise Style React App!
      </h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          quisquam, omnis autem eligendi nostrum excepturi laborum corrupti
          doloremque fuga a odio! Delectus quo, dignissimos accusamus unde natus
          possimus impedit.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
            Browse Netflix
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-4"
          >
            Go to User Management
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
