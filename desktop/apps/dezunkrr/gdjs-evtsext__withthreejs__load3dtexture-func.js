
if (typeof gdjs.evtsExt__WithThreeJS__Load3DTexture !== "undefined") {
  gdjs.evtsExt__WithThreeJS__Load3DTexture.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__Load3DTexture = {};


gdjs.evtsExt__WithThreeJS__Load3DTexture.userFunc0x7168a0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
if (!gdjs.__WithThreeJS.has("Textures")) {
    gdjs.__WithThreeJS.set("Textures", new Map());
}
let Textures = gdjs.__WithThreeJS.get("Textures");
const ResourceName = eventsFunctionContext.getArgument("ResourceName");
const TextureId = eventsFunctionContext.getArgument("TextureId");
const RepeatU = eventsFunctionContext.getArgument("RepeatU");
const RepeatV = eventsFunctionContext.getArgument("RepeatV");
//
const GetResourceFileName = gdjs.__WithThreeJS.get("GetResourceFileName");
const ResourceFileName = GetResourceFileName(ResourceName, "image");
if (ResourceFileName) {
    const Loader = new THREE.TextureLoader();
    Loader.load(GetResourceFileName(ResourceName, "image"), 
        (T) => {
            T.wrapS = THREE.RepeatWrapping;
            T.wrapT = THREE.RepeatWrapping;
            T.repeat.set(RepeatU, RepeatV);
            Textures.set(TextureId, T);
        },
        undefined,
        (E) => {}
    );
}

};
gdjs.evtsExt__WithThreeJS__Load3DTexture.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__Load3DTexture.userFunc0x7168a0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__Load3DTexture.func = function(runtimeScene, ResourceName, TextureId, RepeatU, RepeatV, parentEventsFunctionContext) {
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
if (argName === "ResourceName") return ResourceName;
if (argName === "TextureId") return TextureId;
if (argName === "RepeatU") return RepeatU;
if (argName === "RepeatV") return RepeatV;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__Load3DTexture.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__WithThreeJS__Load3DTexture.registeredGdjsCallbacks = [];