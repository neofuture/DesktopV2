let app = {
  test: function (str) {
    window.angular.zone.run(() => {
      result = window.angular.test(str);
    });
    return result;
  },

  outboundCall: function(str){
    outboundCall(str);
  },

  showLoading: function() {
    window.angular.zone.run(() => {
      result = window.angular.showLoading();
    });
  },

  hideLoading: function() {
    window.angular.zone.run(() => {
      result = window.angular.hideLoading();
    });
  }
}

function test(str){
  console.log('from angular', app.test(str));
}

function outboundCall(str) {
  console.log('calling home', str);
}

function showLoading() {
  app.showLoading();
}

function hideLoading() {
  app.hideLoading();
}
