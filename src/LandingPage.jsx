State.init({ isDebug: true, showMonitor: true });

const buildUrl = (componentPath) => {
  return `/${componentPath}?isDebug=${state.isDebug}&showMonitor=${state.showMonitor}`;
};

return (
  <div className="col-lg-8 mx-auto p-3 py-md-5">
    <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
      <a
        href="/"
        className="d-flex align-items-center text-dark text-decoration-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100px"
          height="100px"
          className="me-2"
          viewBox="0 0 30 20"
          role="img"
        >
          <title>Bootstrap</title>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.5528 1.01528L12.3722 7.22222C12.3127 7.31161 12.2875 7.41954 12.3014 7.52604C12.3153 7.63254 12.3673 7.73042 12.4477 7.80156C12.5282 7.87271 12.6317 7.91231 12.7391 7.91305C12.8465 7.91378 12.9505 7.87559 13.0319 7.80556L17.1472 4.23611C17.1713 4.21453 17.2012 4.20045 17.2332 4.19557C17.2652 4.19068 17.2979 4.19522 17.3274 4.20862C17.3568 4.22203 17.3817 4.24371 17.3991 4.27104C17.4164 4.29836 17.4254 4.33014 17.425 4.3625V15.5375C17.425 15.5717 17.4144 15.6051 17.3948 15.6331C17.3752 15.6611 17.3474 15.6824 17.3152 15.6941C17.2831 15.7058 17.2481 15.7073 17.2151 15.6984C17.182 15.6895 17.1525 15.6707 17.1306 15.6444L4.69167 0.754167C4.49159 0.51791 4.24246 0.328063 3.9616 0.197824C3.68073 0.067585 3.37487 7.92977e-05 3.06528 7.36094e-08H2.63056C2.0655 7.36094e-08 1.52358 0.224469 1.12403 0.624025C0.724468 1.02358 0.5 1.5655 0.5 2.13056V17.8694C0.5 18.4345 0.724468 18.9764 1.12403 19.376C1.52358 19.7755 2.0655 20 2.63056 20C2.99488 20.0001 3.35316 19.9068 3.67119 19.7291C3.98922 19.5513 4.2564 19.2951 4.44722 18.9847L8.62778 12.7778C8.68732 12.6884 8.71248 12.5805 8.6986 12.474C8.68472 12.3675 8.63274 12.2696 8.55228 12.1984C8.47182 12.1273 8.36832 12.0877 8.26092 12.087C8.15352 12.0862 8.04948 12.1244 7.96806 12.1944L3.85278 15.7639C3.82866 15.7855 3.79878 15.7996 3.76679 15.8044C3.7348 15.8093 3.70208 15.8048 3.67263 15.7914C3.64317 15.778 3.61826 15.7563 3.60092 15.729C3.58358 15.7016 3.57458 15.6699 3.575 15.6375V4.45972C3.57501 4.42551 3.58555 4.39213 3.60519 4.36412C3.62483 4.3361 3.65261 4.31481 3.68477 4.30313C3.71693 4.29145 3.7519 4.28995 3.78494 4.29883C3.81797 4.30772 3.84748 4.32655 3.86944 4.35278L16.3069 19.2458C16.507 19.4821 16.7562 19.6719 17.037 19.8022C17.3179 19.9324 17.6237 19.9999 17.9333 20H18.3681C18.648 20.0002 18.9252 19.9452 19.1838 19.8382C19.4425 19.7312 19.6775 19.5743 19.8755 19.3765C20.0735 19.1786 20.2305 18.9437 20.3377 18.6851C20.4448 18.4265 20.5 18.1494 20.5 17.8694V2.13056C20.5 1.5655 20.2755 1.02358 19.876 0.624025C19.4764 0.224469 18.9345 7.36094e-08 18.3694 7.36094e-08C18.0051 -9.56524e-05 17.6468 0.093176 17.3288 0.270914C17.0108 0.448651 16.7436 0.704924 16.5528 1.01528Z"
            fill="currentColor"
          ></path>
        </svg>
        <span className="fs-4">BOS Web Engine</span>
      </a>
    </header>
    <div>
      <h1>Get Started</h1>
      <p className="fs-5 col-md-8">
        Click the links below to try out demo components
      </p>

      <hr className="col-3 col-md-2 mb-5" />

      <div className="row g-5">
        <div className="col-md-12"></div>

        <div className="col-md-12">
          <h2>Components</h2>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              checked={state.isDebug}
              onChange={() => State.update({ isDebug: !state.isDebug })}
            />
            <label className="form-check-label" for="flexCheckDefault">
              Enable debug mode
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked={state.showMonitor}
              onChange={() => State.update({ showMonitor: !state.showMonitor })}
            />
            <label className="form-check-label" for="flexCheckChecked">
              Display Component monitor
            </label>
          </div>
          <ul className="icon-list">
            <li>
              <a href={buildUrl("bwe-demos.near/widget/StateAndTrust.Root")}>
                Sandboxed and Trusted State
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
