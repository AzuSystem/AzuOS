
if (typeof gdjs.evtsExt__AlignObject__ToScreenCentered !== "undefined") {
  gdjs.evtsExt__AlignObject__ToScreenCentered.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__AlignObject__ToScreenCentered = {};
gdjs.evtsExt__AlignObject__ToScreenCentered.GDObjectToCenterObjects1= [];
gdjs.evtsExt__AlignObject__ToScreenCentered.GDObjectToCenterObjects2= [];


gdjs.evtsExt__AlignObject__ToScreenCentered.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("ObjectToCenter"), gdjs.evtsExt__AlignObject__ToScreenCentered.GDObjectToCenterObjects1);
{for(var i = 0, len = gdjs.evtsExt__AlignObject__ToScreenCentered.GDObjectToCenterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AlignObject__ToScreenCentered.GDObjectToCenterObjects1[i].setPosition(gdjs.evtTools.window.getWindowInnerWidth() / 2 - (gdjs.evtsExt__AlignObject__ToScreenCentered.GDObjectToCenterObjects1[i].getWidth()) / 2,gdjs.evtTools.window.getWindowInnerHeight() / 2 - (gdjs.evtsExt__AlignObject__ToScreenCentered.GDObjectToCenterObjects1[i].getHeight()) / 2);
}
}}

}


};

gdjs.evtsExt__AlignObject__ToScreenCentered.func = function(runtimeScene, ObjectToCenter, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"ObjectToCenter": ObjectToCenter
},
  _objectArraysMap: {
"ObjectToCenter": gdjs.objectsListsToArray(ObjectToCenter)
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__AlignObject__ToScreenCentered.GDObjectToCenterObjects1.length = 0;
gdjs.evtsExt__AlignObject__ToScreenCentered.GDObjectToCenterObjects2.length = 0;

gdjs.evtsExt__AlignObject__ToScreenCentered.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__AlignObject__ToScreenCentered.registeredGdjsCallbacks = [];