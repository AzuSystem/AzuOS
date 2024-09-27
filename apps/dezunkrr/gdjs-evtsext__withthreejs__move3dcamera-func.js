
if (typeof gdjs.evtsExt__WithThreeJS__Move3DCamera !== "undefined") {
  gdjs.evtsExt__WithThreeJS__Move3DCamera.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__Move3DCamera = {};


gdjs.evtsExt__WithThreeJS__Move3DCamera.userFunc0x13b7958 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Camera = gdjs.__WithThreeJS.get("Camera");
const Operator = eventsFunctionContext.getArgument("Operator");
const X = eventsFunctionContext.getArgument("X");
const Y = eventsFunctionContext.getArgument("Y");
const Z = eventsFunctionContext.getArgument("Z");
//
if (Operator == "=") {
    Camera.position.set(X, Y, Z);
} else if (Operator == "+") {
    Camera.translateX(X);
    Camera.translateY(Y);
    Camera.translateZ(Z);
} else {
    Camera.translateX(-X);
    Camera.translateY(-Y);
    Camera.translateZ(-Z);
}


};
gdjs.evtsExt__WithThreeJS__Move3DCamera.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__Move3DCamera.userFunc0x13b7958(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__Move3DCamera.func = function(runtimeScene, Operator, X, Y, Z, parentEventsFunctionContext) {
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
if (argName === "Operator") return Operator;
if (argName === "X") return X;
if (argName === "Y") return Y;
if (argName === "Z") return Z;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__Move3DCamera.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__WithThreeJS__Move3DCamera.registeredGdjsCallbacks = [];