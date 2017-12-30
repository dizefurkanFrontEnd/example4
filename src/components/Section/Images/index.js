import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './index.css';
import pic1 from '../../../media/pic1.png';
import pic2 from '../../../media/pic2.png';
import pic3 from '../../../media/pic3.png';

class Images extends Component {
  render() {
    return (
      <div className="Images">
        <div className="box">
          <h5 className="title">Images</h5>
          <div className="row no-margin">
            <div className="col-xs-4 ImagesBox">
              <img src={pic1} alt="" className="ImagesBox__img img-responsive"/>
            </div>
            <div className="col-xs-4 ImagesBox">
              <img src={pic2} alt="" className="ImagesBox__img img-responsive"/>
            </div>
            <div className="col-xs-4 ImagesBox">
              <img src={pic3} alt="" className="ImagesBox__img img-responsive"/>
            </div>
            <div className="col-xs-4 ImagesBox">
              <img src={pic3} alt="" className="ImagesBox__img img-responsive"/>
            </div>
            <div className="col-xs-4 ImagesBox">
              <img src={pic2} alt="" className="ImagesBox__img img-responsive"/>
            </div>
            <div className="col-xs-4 ImagesBox">
              <img src={pic1} alt="" className="ImagesBox__img img-responsive"/>
            </div>
            <div className="col-xs-4 ImagesBox">
              <img src={pic1} alt="" className="ImagesBox__img img-responsive"/>
            </div>
            <div className="col-xs-4 ImagesBox">
              <img src={pic2} alt="" className="ImagesBox__img img-responsive"/>
            </div>
            <div className="col-xs-4 ImagesBox">
              <img src={pic3} alt="" className="ImagesBox__img img-responsive"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Images;
