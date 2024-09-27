
if (typeof gdjs.evtsExt__WithThreeJS__Raycast !== "undefined") {
  gdjs.evtsExt__WithThreeJS__Raycast.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__Raycast = {};


gdjs.evtsExt__WithThreeJS__Raycast.userFunc0x1517328 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
if (!gdjs.__WithThreeJS.has("Raycaster")) {
    gdjs.__WithThreeJS.set("Raycaster", new THREE.Raycaster());
    gdjs.__WithThreeJS.set("RaycastResult", new Array());
}
const Scene = gdjs.__WithThreeJS.get("Scene");
const Camera = gdjs.__WithThreeJS.get("Camera");
const Raycaster = gdjs.__WithThreeJS.get("Raycaster");
//
const FromX = eventsFunctionContext.getArgument("FromX");
const FromY = eventsFunctionContext.getArgument("FromY");
const FromZ = eventsFunctionContext.getArgument("FromZ");
const ToX = eventsFunctionContext.getArgument("ToX");
const ToY = eventsFunctionContext.getArgument("ToY");
const ToZ = eventsFunctionContext.getArgument("ToZ");
//
const From = new THREE.Vector3(FromX, FromY, FromZ);
const To = new THREE.Vector3(ToX, ToY, ToZ);
const Distance = From.distanceTo(To);
const Direction = new THREE.Vector3().subVectors(To, From).normalize();
//
Raycaster.camera = Camera;
Raycaster.set(From, Direction);
Raycaster.far = Distance;
gdjs.__WithThreeJS.set("RaycastResult", Raycaster.intersectObjects(Scene.children, true));


};
gdjs.evtsExt__WithThreeJS__Raycast.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__Raycast.userFunc0x1517328(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__Raycast.func = function(runtimeScene, FromX, FromY, FromZ, ToX, ToY, ToZ, parentEventsFunctionContext) {
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
if (argName === "FromX") return FromX;
if (argName === "FromY") return FromY;
if (argName === "FromZ") return FromZ;
if (argName === "ToX") return ToX;
if (argName === "ToY") return ToY;
if (argName === "ToZ") return ToZ;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__Raycast.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__WithThreeJS__Raycast.registeredGdjsCallbacks = [];