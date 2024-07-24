
if (typeof gdjs.evtsExt__WithThreeJS__OutputAllIdsToConsole !== "undefined") {
  gdjs.evtsExt__WithThreeJS__OutputAllIdsToConsole.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__OutputAllIdsToConsole = {};


gdjs.evtsExt__WithThreeJS__OutputAllIdsToConsole.userFunc0x1385690 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
const Type = eventsFunctionContext.getArgument("Type");
let Res = "";
//
if (Type == "3D Object") {
    Res = gdjs.__WithThreeJS.get("GetAllObjectsName")(Scene, Res, 0);
} else if (Type == "3D Texture") {
    if (!gdjs.__WithThreeJS.has("Textures")) {
        console.warn("3D Texture not found.");
        return;
    }
    const Textures = gdjs.__WithThreeJS.get("Textures");
    for (let K of Textures.keys()) {
        Res += "ID: " + K + "\n";
    }
} else if (Type == "3D Model") {
    if (!gdjs.__WithThreeJS.has("Models")) {
        console.warn("3D Model not found.");
        return;
    }
    const Models = gdjs.__WithThreeJS.get("Models");
    for (let K of Models.keys()) {
        Res += "ID: " + K + "\n";
    }
}
//
console.log(Res);


};
gdjs.evtsExt__WithThreeJS__OutputAllIdsToConsole.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__OutputAllIdsToConsole.userFunc0x1385690(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__OutputAllIdsToConsole.func = function(runtimeScene, Type, parentEventsFunctionContext) {
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
if (argName === "Type") return Type;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__OutputAllIdsToConsole.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__WithThreeJS__OutputAllIdsToConsole.registeredGdjsCallbacks = [];