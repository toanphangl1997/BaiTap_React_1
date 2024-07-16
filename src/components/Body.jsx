import React from "react";

const Body = () => {
  return (
    <div className="my-5">
      <div className="container px-lg-5">
        <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
          <div className="m-4 m-lg-5">
            <h1 className="text-5xl fw-bold mb-3">A warm welcome!</h1>
            <p className="fs-4 mb-3">
              Bootstrap utility classes are used to create this jumbotron since
              the old component has been removed from the framework. Why create
              custom CSS when you can use utilities?
            </p>
            <button className="btn btn-primary btn-lg">Call to action</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
