
if (typeof gdjs.evtsExt__WithThreeJS__DistanceFrom3DObjectTo3DObject !== "undefined") {
  gdjs.evtsExt__WithThreeJS__DistanceFrom3DObjectTo3DObject.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__DistanceFrom3DObjectTo3DObject = {};


gdjs.evtsExt__WithThreeJS__DistanceFrom3DObjectTo3DObject.userFunc0x13e7f88 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
const Id1 = eventsFunctionContext.getArgument("Id1");
const Id2 = eventsFunctionContext.getArgument("Id2");
//
const Obj1 = Scene.getObjectByName(Id1);
const Obj2 = Scene.getObjectByName(Id2);
if (!Obj1) {
    console.warn("3D Object not found.");
    return;
}
if (!Obj2) {
    console.warn("3D Object not found.");
    return;
}
//
const WPos1 = new THREE.Vector3();
const WPos2 = new THREE.Vector3();
Obj1.getWorldPosition(WPos1);
Obj2.getWorldPosition(WPos2);
eventsFunctionContext.returnValue = WPos1.distanceTo(WPos2);

};
gdjs.evtsExt__WithThreeJS__DistanceFrom3DObjectTo3DObject.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__DistanceFrom3DObjectTo3DObject.userFunc0x13e7f88(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__DistanceFrom3DObjectTo3DObject.func = function(runtimeScene, Id1, Id2, parentEventsFunctionContext) {
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
if (argName === "Id1") return Id1;
if (argName === "Id2") return Id2;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__DistanceFrom3DObjectTo3DObject.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__WithThreeJS__DistanceFrom3DObjectTo3DObject.registeredGdjsCallbacks = [];