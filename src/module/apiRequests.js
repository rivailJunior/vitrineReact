class ApiRequests {
  constructor() {
    this.DefaultURL = 'http://roberval.chaordicsystems.com/challenge/challenge.json?callback=X ';
  }

  getProductData = () => {
    return new Promise((resolve, reject) => {

    });
  };

}

const apiReq = new ApiRequests();
export default apiReq;