import React from 'react';

const ModalLogin = () => {
    return (
        <div
        className="modal fade rtl text-right"
        id="LoginModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="LoginModalCenterTitle"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-center" id="LoginModalLongTitle">ورود به سایت</h5>
            </div>
            <div className="modal-body d-flex justify-content-around align-content-center flex-column">
              <form>
                <div className="form-group">
                  <label for="LoginInputEmail1">ایمیل</label>
                  <input
                    type="email"
                    className="form-control"
                    id="LoginInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="ایمیل خود را وارد کنید"/>
                </div>
                <div className="form-group">
                  <label for="LoginInputPassword1">پسورد</label>
                  <input
                    type="password"
                    className="form-control"
                    id="LoginInputPassword1"
                    placeholder="پسورد خود را وارد کنید"/></div>
                  <div className="form-check">                    
                    <p>
                    <label className="form-check-label" for="LoginCheck1">مرا به خاطر بسپار</label>
                    <input type="checkbox" className="form-check-input left" id="LoginCheck1"/>
                    </p>
                  </div>
                  <p><a href="/">فراموشی رمز عبور</a></p>
                  <button type="submit" className="btn btn-success">ورود</button>
                </form>
              </div>

            </div>
          </div>
        </div>
    );
}

export default ModalLogin;
