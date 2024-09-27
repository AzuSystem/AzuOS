
if (typeof gdjs.evtsExt__GamejoltAPI__CallGamejolt !== "undefined") {
  gdjs.evtsExt__GamejoltAPI__CallGamejolt.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__GamejoltAPI__CallGamejolt = {};


gdjs.evtsExt__GamejoltAPI__CallGamejolt.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isPreview(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__GamejoltAPI__TestMode.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
{gdjs.evtTools.debuggerTools.log(gdjs.evtsExt__GamejoltAPI__URL.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), "", "");
}}

}


};gdjs.evtsExt__GamejoltAPI__CallGamejolt.userFunc0x1965688 = function(runtimeScene, eventsFunctionContext) {
"use strict";
    let global = runtimeScene.getGame().getVariables().get("__GamejoltAPI");

    let url = global.getChild("Url").getAsString();
    let callback = eventsFunctionContext.getArgument("Callback");
    let http = new XMLHttpRequest();

    http.addEventListener("load", onComplete);
    http.addEventListener("error", onFail);

    http.open("GET", url, true);

    global.getChild("Success").setBoolean(false);
    global.getChild("ErrorMessage").setString("");
    global.getChild("Response").setString("");
    global.getChild("Parameters").clearChildren();
    
    http.send(null);

    function onComplete(evt)
    {
        let json = JSON.parse(http.responseText);
        let success = json.response.success == "true";

        changeStatus(global, callback, success, 
        json.response.hasOwnProperty('message') ? json.response.message : "", 
        JSON.stringify(json.response));

        eventsFunctionContext.task.resolve();
    }

    function onFail(evt)
    {
        changeStatus(global, callback, false, "Unknown error", "");
        
        eventsFunctionContext.task.resolve();
    }

    function changeStatus(global, callback, success, message, response)
    {
        // save last content for Async behavior
        global.getChild("Success").setBoolean(success);
        if (success)
        {
            global.getChild("Response").setString(response);
        }
        else
        {
            global.getChild("ErrorMessage").setString(message);
        }

        // if callback set, for later use
        if (callback.length > 0)
        {
            let stack = global.getChild("CompleteStack").getChild(callback);
            stack.getChild("Success").setBoolean(success);

            if (success)
            {
                stack.getChild("Response").setString(response);
            }
            else
            {
                stack.getChild("ErrorMessage").setString(message);
            }
        }
    }

};
gdjs.evtsExt__GamejoltAPI__CallGamejolt.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__GamejoltAPI__PrepareURL.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Endpoint") : ""), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__GamejoltAPI__SetURL.func(runtimeScene, gdjs.evtsExt__GamejoltAPI__URL.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + ("&signature=" + gdjs.evtsExt__GamejoltAPI__SHA1.func(runtimeScene, gdjs.evtsExt__GamejoltAPI__URL.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + gdjs.evtsExt__GamejoltAPI__GameKey.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + "#" + gdjs.evtTools.common.toString(gdjs.randomFloat(9999))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.evtsExt__GamejoltAPI__CallGamejolt.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__GamejoltAPI__CallGamejolt.userFunc0x1965688(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__GamejoltAPI__CallGamejolt.func = function(runtimeScene, Endpoint, Callback, parentEventsFunctionContext) {
var eventsFunctionContext = {
  task: new gdjs.ManuallyResolvableTask(),
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Endpoint") return Endpoint;
if (argName === "Callback") return Callback;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__GamejoltAPI__CallGamejolt.eventsList1(runtimeScene, eventsFunctionContext);

return eventsFunctionContext.task
}

gdjs.evtsExt__GamejoltAPI__CallGamejolt.registeredGdjsCallbacks = [];