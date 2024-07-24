
if (typeof gdjs.evtsExt__WithThreeJS__RaycastResultNumber !== "undefined") {
  gdjs.evtsExt__WithThreeJS__RaycastResultNumber.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__RaycastResultNumber = {};


gdjs.evtsExt__WithThreeJS__RaycastResultNumber.userFunc0x148ede0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
if (!gdjs.__WithThreeJS.has("RaycastResult")) {
    console.warn("No raycast has been done yet.");
    return;
}
const RaycastResult = gdjs.__WithThreeJS.get("RaycastResult");
//
const Index = eventsFunctionContext.getArgument("Index");
const Item = eventsFunctionContext.getArgument("Item");
//
if (Index < 0 || RaycastResult.length <= Index) {
    // console.warn("Incorrect index.");
    eventsFunctionContext.returnValue = 0;
    return;
}
if (Item == "Distance") {
    eventsFunctionContext.returnValue = RaycastResult[Index].distance;
} else if (Item == "Point X") {
    eventsFunctionContext.returnValue = RaycastResult[Index].point.x;
} else if (Item == "Point Y") {
    eventsFunctionContext.returnValue = RaycastResult[Index].point.y;
} else if (Item == "Point Z") {
    eventsFunctionContext.returnValue = RaycastResult[Index].point.z;
}


};
gdjs.evtsExt__WithThreeJS__RaycastResultNumber.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__RaycastResultNumber.userFunc0x148ede0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__RaycastResultNumber.func = function(runtimeScene, Index, Item, parentEventsFunctionContext) {
var eventsFunctionContext = {
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
if (argName === "Index") return Index;
if (argName === "Item") return Item;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__RaycastResultNumber.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__WithThreeJS__RaycastResultNumber.registeredGdjsCallbacks = [];