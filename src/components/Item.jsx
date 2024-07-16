import React from "react";

const Item = () => {
  const cardIcon =
    "card-icon bg-primary text-white rounded-3 mb-4 w-16 h-16 text-3xl position-absolute top-2 start-50 translate-middle";
  const cardTitle = "fs-4 fw-bold mt-2";
  const backGroundItem = "card bg-light border-0 h-100 pt-5";

  return (
    <div className="">
      <div className="container px-lg-5">
        <div className="row gx-lg-5">
          <div className="col-xxl-4 col-lg-6 mb-5">
            <div className={backGroundItem}>
              <div className="card-item text-center p-lg-5 pt-0 pt-lg-0">
                <div className={cardIcon}>
                  <i class="fa-solid fa-ethernet"></i>
                </div>
                <h2 className={cardTitle}>Fresh new layout</h2>
                <p className="mt-3">
                  With Bootstrap 5, we've created a fresh new layout for this
                  template!
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-6 mb-5">
            <div className={backGroundItem}>
              <div className="card-item text-center p-4 p-lg-5 pt-0 pt-lg-0">
                <div className={cardIcon}>
                  <i class="fa-solid fa-cloud-arrow-down"></i>
                </div>
                <h2 className={cardTitle}>Free to download</h2>
                <p className="mt-3">
                  As always, Start Bootstrap has a powerful collectin of free
                  templates.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-6 mb-5">
            <div className={backGroundItem}>
              <div className="card-item text-center p-4 p-lg-5 pt-0 pt-lg-0">
                <div className={cardIcon}>
                  <i class="fa-solid fa-book-open"></i>
                </div>
                <h2 className={cardTitle}>Jumbotron hero header</h2>
                <p className="mt-3">
                  The heroic part of this template is the jumbotron hero header!
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-6 mb-5">
            <div className={backGroundItem}>
              <div className="card-item text-center p-4 p-lg-5 pt-0 pt-lg-0">
                <div className={cardIcon}>
                  <i class="fa-brands fa-bootstrap"></i>
                </div>
                <h2 className={cardTitle}>Feature boxes</h2>
                <p className="mt-3">
                  We've created some custom feature boxes using Bootstrap icons!
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-6 mb-5">
            <div className={backGroundItem}>
              <div className="card-item text-center p-4 p-lg-5 pt-0 pt-lg-0">
                <div className={cardIcon}>
                  <i class="fa-solid fa-code"></i>
                </div>
                <h2 className={cardTitle}>Simple clean code</h2>
                <p className="mt-3">
                  We keep our dependencies up to date and squash bugs as they
                  come!
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-6 mb-5">
            <div className={backGroundItem}>
              <div className="card-item text-center p-4 p-lg-5 pt-0 pt-lg-0">
                <div className={cardIcon}>
                  <i class="fa-regular fa-square-check"></i>
                </div>
                <h2 className={cardTitle}>A name you trust</h2>
                <p className="mt-3">
                  Start Bootstrap has been the leader in free Bootstrap
                  templates since 2013!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
