
if (typeof gdjs.evtsExt__WithThreeJS__Load3DModelFromOBJ !== "undefined") {
  gdjs.evtsExt__WithThreeJS__Load3DModelFromOBJ.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__Load3DModelFromOBJ = {};


gdjs.evtsExt__WithThreeJS__Load3DModelFromOBJ.userFunc0x12b6c40 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
if (!gdjs.__WithThreeJS.has("Models")) {
    gdjs.__WithThreeJS.set("Models", new Map());
}
let Models = gdjs.__WithThreeJS.get("Models");
const OBJ = eventsFunctionContext.getArgument("OBJ");
const ModelId = eventsFunctionContext.getArgument("ModelId");
//
const OBJLoader = new THREE.OBJLoader();
const Model = OBJLoader.parse(OBJ);
Models.set(ModelId, Model);

};
gdjs.evtsExt__WithThreeJS__Load3DModelFromOBJ.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__Load3DModelFromOBJ.userFunc0x12b6c40(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__Load3DModelFromOBJ.func = function(runtimeScene, OBJ, ModelId, parentEventsFunctionContext) {
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
if (argName === "OBJ") return OBJ;
if (argName === "ModelId") return ModelId;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__Load3DModelFromOBJ.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__WithThreeJS__Load3DModelFromOBJ.registeredGdjsCallbacks = [];