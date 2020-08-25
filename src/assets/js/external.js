let app = {
  test: function (str) {
    window.angular.zone.run(() => {
      result = window.angular.test(str);
    });
    return result;
  },

  outboundCall: function(str){
    outboundCall(str);
  }
}

function test(str){
  console.log('from angular', app.test(str));
}

function outboundCall(str) {
  console.log('calling home', str);
}
