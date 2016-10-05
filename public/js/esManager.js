/*
 *  name: esManager
 *  date : 2016-10-05
 *
 */

require({
  paths: {
    "order": "js/requirejs/order"
  }
});

require([
    "order!js/esObject.js",
    "order!js/dhtmlx/dhtmlx.js"
],function(esObject,dhtmlx){
    console.log(" EMS 啟動！ ");
    
    var esMgr = window.esManager = {};
    
    esMgr.managerView = esObject.createView("");
    

    
    
    
    return esMgr;
});




