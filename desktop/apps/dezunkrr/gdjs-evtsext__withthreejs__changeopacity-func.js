
if (typeof gdjs.evtsExt__WithThreeJS__ChangeOpacity !== "undefined") {
  gdjs.evtsExt__WithThreeJS__ChangeOpacity.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__ChangeOpacity = {};


gdjs.evtsExt__WithThreeJS__ChangeOpacity.userFunc0x13e7f88 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
//
const Id = eventsFunctionContext.getArgument("Id");
const Operator = eventsFunctionContext.getArgument("Operator");
const Opacity = eventsFunctionContext.getArgument("Opacity");
//
const Obj = Scene.getObjectByName(Id);
if (!Obj) {
    console.warn("3D Object not found.");
    return;
}
//
if (Array.isArray(Obj.material)) {
    for (let i = 0; i < Obj.material.length; i++) {
        // Obj.material[i].transparent = (Obj.material[i].alphaTest !== 0 || Opacity !== 1);
        if (!Obj.material[i].transparent) {
            Obj.material[i].transparent = true;
            Obj.material[i].needsUpdate = true;
        }
        if (Operator == "=") {
            Obj.material[i].opacity = Opacity;
        } else if (Operator == "+") {
            Obj.material[i].opacity += Opacity;
        } else {
            Obj.material[i].opacity -= Opacity;
        }
        if (Obj.material[i].opacity < 0) Obj.material[i].opacity = 0;
        if (Obj.material[i].opacity > 1) Obj.material[i].opacity = 1;
    }
} else {
    // Obj.material.transparent = (Obj.material.alphaTest !== 0 || Opacity !== 1);
    if (!Obj.material.transparent) {
        Obj.material.transparent = true;
        Obj.material.needsUpdate = true;
    }
    if (Operator == "=") {
        Obj.material.opacity = Opacity;
    } else if (Operator == "+") {
        Obj.material.opacity += Opacity;
    } else {
        Obj.material.opacity -= Opacity;
    }
    if (Obj.material.opacity < 0) Obj.material.opacity = 0;
    if (Obj.material.opacity > 1) Obj.material.opacity = 1;
}


};
gdjs.evtsExt__WithThreeJS__ChangeOpacity.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__ChangeOpacity.userFunc0x13e7f88(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__ChangeOpacity.func = function(runtimeScene, Id, Operator, Opacity, parentEventsFunctionContext) {
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
if (argName === "Id") return Id;
if (argName === "Operator") return Operator;
if (argName === "Opacity") return Opacity;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__ChangeOpacity.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__WithThreeJS__ChangeOpacity.registeredGdjsCallbacks = [];