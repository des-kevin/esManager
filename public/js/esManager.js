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
    
    esMgr.funcList=[
        {id: "recent",          text: "人員管理", icon: "recent.png",},
        {id: "desktop",      text: "事件管理", icon: "desktop.png"},
        {id: "downloads", text: "工作管理", icon: "downloads.png"},
        {id: "documents", text: "專案管理", icon: "documents.png"},
        {id: "music",           text: "場地管理", icon: "music.png"},
        {id: "pictures",       text: "系統設定", icon: "pictures.png"},
    ];
    
    esMgr.managerView.cells("a").setWidth(200);
    esMgr.managerView.cells("a").attachSidebar({
				parent: "esSidebar",
				icons_path: "images/",
				width: 200,
				items: esMgr.funcList
			});

    esMgr.contentWin = new dhtmlXWindows();
    esMgr.contentWin.attachViewportTo("esContentWin");
    esMgr.wins=[];
    for(var i=0;i< esMgr.funcList.length;i++)
    {
        var win = esMgr.contentWin.createWindow("win_"+esMgr.funcList[i].id, 0, 0, 320, 200);
        win.button("close").hide();
        win.button("park").disable();
        esMgr.wins.push(win);
    }
    
    return esMgr;
});




