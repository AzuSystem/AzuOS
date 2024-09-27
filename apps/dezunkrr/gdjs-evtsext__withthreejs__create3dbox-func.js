
if (typeof gdjs.evtsExt__WithThreeJS__Create3DBox !== "undefined") {
  gdjs.evtsExt__WithThreeJS__Create3DBox.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__Create3DBox = {};


gdjs.evtsExt__WithThreeJS__Create3DBox.userFunc0x13b7958 = function(runtimeScene, eventsFunctionContext) {
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
//
const Id = eventsFunctionContext.getArgument("Id");
const X = eventsFunctionContext.getArgument("X");
const Y = eventsFunctionContext.getArgument("Y");
const Z = eventsFunctionContext.getArgument("Z");
const AngleX = eventsFunctionContext.getArgument("AngleX");
const AngleY = eventsFunctionContext.getArgument("AngleY");
const AngleZ = eventsFunctionContext.getArgument("AngleZ");
const Width = eventsFunctionContext.getArgument("Width");
const Height = eventsFunctionContext.getArgument("Height");
const Depth = eventsFunctionContext.getArgument("Depth");
const TextureIdList = eventsFunctionContext.getArgument("TextureIdList");
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
let TextureList = [];
for (const V of TextureIdList.split("\n")) {
    if (V != "") {
        if (!Textures.has(V)) {
            console.warn("3D Texture not found.");
        } else {
            TextureList.push(Textures.get(V));
        }
    }
}
//
let Materials;
if (TextureList.length === 1) {
    Materials = new THREE.MeshBasicMaterial({map:TextureList[0], transparent:Transparent, alphaTest:AlphaTest, blending:Blend, opacity:Opacity});
} else if (TextureList.length == 6) {
    Materials = [];
    for (let i = 0; i < TextureList.length; i++) {
        Materials.push(new THREE.MeshBasicMaterial({map:TextureList[i], transparent:Transparent, alphaTest:AlphaTest, blending:Blend, opacity:Opacity}));//side:THREE.FrontSide, transparent:false, alphaTest:0, opacity:1.0
    }
} else {
    console.warn("Requires 1 or 6 Texture IDs");
    return;
}
const Geometry = new THREE.BoxGeometry(Width, Height, Depth);
const Box = new THREE.Mesh(Geometry, Materials);
Box.position.set(X, Y, Z);
Box.rotation.set(gdjs.toRad(AngleX), gdjs.toRad(AngleY), gdjs.toRad(AngleZ));
Box.name = Id;
Scene.add(Box);


};
gdjs.evtsExt__WithThreeJS__Create3DBox.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__Create3DBox.userFunc0x13b7958(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__Create3DBox.func = function(runtimeScene, Id, X, Y, Z, AngleX, AngleY, AngleZ, Width, Height, Depth, TextureIdList, AlphaTest, Opacity, Blend, parentEventsFunctionContext) {
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
if (argName === "Depth") return Depth;
if (argName === "TextureIdList") return TextureIdList;
if (argName === "AlphaTest") return AlphaTest;
if (argName === "Opacity") return Opacity;
if (argName === "Blend") return Blend;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__Create3DBox.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__WithThreeJS__Create3DBox.registeredGdjsCallbacks = [];