
if (typeof gdjs.evtsExt__WithThreeJS__Create3DPlane !== "undefined") {
  gdjs.evtsExt__WithThreeJS__Create3DPlane.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__Create3DPlane = {};


gdjs.evtsExt__WithThreeJS__Create3DPlane.userFunc0x13b7958 = function(runtimeScene, eventsFunctionContext) {
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
const AngleX = eventsFunctionContext.getArgument("AngleX");
const AngleY = eventsFunctionContext.getArgument("AngleY");
const AngleZ = eventsFunctionContext.getArgument("AngleZ");
const Width = eventsFunctionContext.getArgument("Width");
const Height = eventsFunctionContext.getArgument("Height");
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
const Material = new THREE.MeshBasicMaterial({map: Texture, side: THREE.DoubleSide, transparent:Transparent, alphaTest:AlphaTest, blending:Blend, opacity:Opacity});//transparent:false, alphaTest:0, opacity:1.0
const Geometry = new THREE.PlaneGeometry(Width, Height, 1, 1);
const Plane = new THREE.Mesh(Geometry, Material);
Plane.position.set(X, Y, Z);
Plane.rotation.set(gdjs.toRad(AngleX), gdjs.toRad(AngleY), gdjs.toRad(AngleZ));
Plane.name = Id;
Scene.add(Plane);


};
gdjs.evtsExt__WithThreeJS__Create3DPlane.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__Create3DPlane.userFunc0x13b7958(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__Create3DPlane.func = function(runtimeScene, Id, X, Y, Z, AngleX, AngleY, AngleZ, Width, Height, TextureId, AlphaTest, Opacity, Blend, parentEventsFunctionContext) {
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
if (argName === "AngleX") return AngleX;
if (argName === "AngleY") return AngleY;
if (argName === "AngleZ") return AngleZ;
if (argName === "Width") return Width;
if (argName === "Height") return Height;
if (argName === "TextureId") return TextureId;
if (argName === "AlphaTest") return AlphaTest;
if (argName === "Opacity") return Opacity;
if (argName === "Blend") return Blend;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__Create3DPlane.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__WithThreeJS__Create3DPlane.registeredGdjsCallbacks = [];