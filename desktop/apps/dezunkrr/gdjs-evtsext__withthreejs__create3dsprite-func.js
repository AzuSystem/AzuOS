
if (typeof gdjs.evtsExt__WithThreeJS__Create3DSprite !== "undefined") {
  gdjs.evtsExt__WithThreeJS__Create3DSprite.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__Create3DSprite = {};


gdjs.evtsExt__WithThreeJS__Create3DSprite.userFunc0x15341d0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
if (!gdjs.__WithThreeJS.has("Textures")) {
    console.warn("!");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
const Textures = gdjs.__WithThreeJS.get("Textures");
const TextureId = eventsFunctionContext.getArgument("TextureId");
if (!Textures.has(TextureId)) {
    console.warn("3D Texture not found.");
    return;
}
const Id = eventsFunctionContext.getArgument("Id");
const X = eventsFunctionContext.getArgument("X");
const Y = eventsFunctionContext.getArgument("Y");
const Z = eventsFunctionContext.getArgument("Z");
const Scale = eventsFunctionContext.getArgument("Scale");
const AlphaTest = eventsFunctionContext.getArgument("AlphaTest");
const Opacity = eventsFunctionContext.getArgument("Opacity");
const Transparent = (AlphaTest !== 0 || Opacity !== 1);
let Blend = THREE.NormalBlending;
if (eventsFunctionContext.getArgument("Blend") == "Additive") {
    Blend = THREE.AdditiveBlending;
} else if (eventsFunctionContext.getArgument("Blend") == "Subtractive") {
    Blend = THREE.SubtractiveBlending;
} else if (eventsFunctionContext.getArgument("Blend") == "Multiply") {
    Blend = THREE.MultiplyBlending;
}
//
const Texture = Textures.get(TextureId);
const TextureWidth = Texture.image.width;
const TextureHeight = Texture.image.height;
const Material = new THREE.SpriteMaterial({map:Texture, transparent:Transparent, alphaTest:AlphaTest, blending:Blend, opacity:Opacity});
const Sprite = new THREE.Sprite(Material);
Sprite.position.set(X, Y, Z);
Sprite.scale.set(TextureWidth * Scale, TextureHeight * Scale, 1);
Sprite.name = Id;
Scene.add(Sprite);


};
gdjs.evtsExt__WithThreeJS__Create3DSprite.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__Create3DSprite.userFunc0x15341d0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__Create3DSprite.func = function(runtimeScene, Id, X, Y, Z, Scale, TextureId, AlphaTest, Opacity, Blend, parentEventsFunctionContext) {
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
if (argName === "X") return X;
if (argName === "Y") return Y;
if (argName === "Z") return Z;
if (argName === "Scale") return Scale;
if (argName === "TextureId") return TextureId;
if (argName === "AlphaTest") return AlphaTest;
if (argName === "Opacity") return Opacity;
if (argName === "Blend") return Blend;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__Create3DSprite.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__WithThreeJS__Create3DSprite.registeredGdjsCallbacks = [];