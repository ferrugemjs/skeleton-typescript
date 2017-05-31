requirejs.config({
  baseUrl: '.',
  paths: {
    "tslib":"node_modules/tslib/tslib"
    ,"es6-shim":"node_modules/es6-shim/es6-shim.min"
    ,"jquery":"node_modules/jquery/dist/jquery.min"
    ,"page":"node_modules/page/page"
    ,"event-emitter-lite":"node_modules/event-emitter-lite/dist/amd/EventEmitter"
    ,"incremental-dom":"node_modules/incremental-dom/dist/incremental-dom-min"
    ,"ferrugemjs":"node_modules/ferrugemjs/dist/core"
    ,"ferrugemjs-router":"node_modules/ferrugemjs-router/dist/router"
    ,"apps":"dist/example"
  }
  ,map: {
    '*': {
      'css': 'node_modules/require-css/css.min' // or whatever the path to require-css is
    }
  }
});
window.onload=function(){
  require(["es6-shim","jquery","ferrugemjs/bootstrapper"]);
}