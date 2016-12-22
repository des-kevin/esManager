/*
 *  name: esManager
 *  date : 2016-10-05
 *
 */

define([
    "order!js/jquery/jquery.js",
    'order!js/underscore/wrapper.js',
     "order!js/dhtmlx/dhtmlx.js"
], function ($, _,dhtmlx){
        var esObject=window.esObject= {};
        
        esObject._ = _;
    
        esObject.set = function(k,v){
                if(esObject.hasOwnProperty(k) && typeof esObject != "function")
                    esObject[k]=v;
            };
        esObject.get=function(k){
            if(esObject.hasOwnProperty(k)  && typeof esObject != "function")
                return esObject[k];
        };            
        esObject.createView=function(d){
            var view = new dhtmlXLayoutObject({
                parent:     "esBody",    
                pattern:    "3L",          
            });

            return view;
        };

        return esObject;
});