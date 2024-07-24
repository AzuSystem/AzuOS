
if (typeof gdjs.evtsExt__WithThreeJS__ChangeScale !== "undefined") {
  gdjs.evtsExt__WithThreeJS__ChangeScale.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__ChangeScale = {};


gdjs.evtsExt__WithThreeJS__ChangeScale.userFunc0x13e7f88 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
const Id = eventsFunctionContext.getArgument("Id");
const Operator = eventsFunctionContext.getArgument("Operator");
const X = eventsFunctionContext.getArgument("X");
const Y = eventsFunctionContext.getArgument("Y");
const Z = eventsFunctionContext.getArgument("Z");
//
const Obj = Scene.getObjectByName(Id);
if (!Obj) {
    console.warn("3D Object not found.");
    return;
}
//
if (Obj.isSprite) {
    const Texture = Obj.material.map;
    const TextureWidth = Texture.image.width;
    const TextureHeight = Texture.image.height;
    if (Operator == "=") {
        Obj.scale.set(TextureWidth * X, TextureHeight * Y, 1);
    } else if (Operator == "+") {
        Obj.scale.x += TextureWidth * X;
        Obj.scale.y += TextureHeight * Y;
    } else if (Operator == "-") {
        Obj.scale.x -= TextureWidth * X;
        Obj.scale.y -= TextureHeight * Y;
    } else {
        Obj.scale.x *= TextureWidth * X;
        Obj.scale.y *= TextureHeight * Y;
    }
} else {
    if (Operator == "=") {
        Obj.scale.set(X, Y, Z);
    } else if (Operator == "+") {
        Obj.scale.x += X;
        Obj.scale.y += Y;
        Obj.scale.z += Z;
    } else if (Operator == "-") {
        Obj.scale.x -= X;
        Obj.scale.y -= Y;
        Obj.scale.z -= Z;
    } else {
        Obj.scale.x *= X;
        Obj.scale.y *= Y;
        Obj.scale.z *= Z;
    }
}


};
gdjs.evtsExt__WithThreeJS__ChangeScale.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__ChangeScale.userFunc0x13e7f88(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__ChangeScale.func = function(runtimeScene, Id, Operator, X, Y, Z, parentEventsFunctionContext) {
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
if (argName === "X") return X;
if (argName === "Y") return Y;
if (argName === "Z") return Z;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__ChangeScale.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__WithThreeJS__ChangeScale.registeredGdjsCallbacks = [];