var Pinger={
  init: function(){
    $(document).ready(function(){
      Parse.initialize("VkqwtjlpDR6Lspd9x8TytzyoIXd3EdjIR9XCx6PT", "YQYW2sJMXNDZtsE7tVZAOw0Y4zLyMNgWKfjE26B9");

      var Ping = Parse.Object.extend("Ping");
      var pingObj = new Ping();
      pingObj.save({foo: "bar"}).then(function(object) {
        console.log("yay! it worked");
      });
    });
  }
}