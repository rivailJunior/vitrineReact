import Axios from 'axios';
class ApiRequests {
  constructor() {
    this.DefaultURL = 'http://roberval.chaordicsystems.com/challenge/challenge.json?callback=X ';
  }

  getProductData() {
    return new Promise((resolve, reject) => {
      Axios.get(this.DefaultURL).then(res => {
        console.log('res', res);
      });
    });
  };

}

const apiReq = new ApiRequests();
export default apiReq;