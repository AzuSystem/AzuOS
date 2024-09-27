
if (typeof gdjs.evtsExt__WithThreeJS__Create3DScene !== "undefined") {
  gdjs.evtsExt__WithThreeJS__Create3DScene.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__Create3DScene = {};


gdjs.evtsExt__WithThreeJS__Create3DScene.userFunc0x7168a0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
// console.log("Three.js create scene");
// GDの背景を黒くした上で透明にする
runtimeScene.setBackgroundColor(0,0,0);
runtimeScene.getRenderer().getPIXIRenderer().backgroundAlpha = 0;
//
// if (gdjs.__WithThreeJS.has("Renderer")) {
//   console.warn("!");
//   return;
// }
//
const Canvas2D = document.getElementsByTagName("canvas")[0];
const Rect = Canvas2D.getBoundingClientRect();
let Scene;
if (gdjs.__WithThreeJS.has("Scene")) {
  Scene = gdjs.__WithThreeJS.get("Scene");
} else {
  Scene = new THREE.Scene();
}
Scene.name ="Scene";
//
const Fov = eventsFunctionContext.getArgument("Fov") || 50;
const BG_RGB = eventsFunctionContext.getArgument("BackGroundColor") || "0;0;0";
const BG_Img = eventsFunctionContext.getArgument("BackGroundImage") || "";
const FogColor = eventsFunctionContext.getArgument("FogColor") || "";
const FogNear = eventsFunctionContext.getArgument("FogNear") || 1;
const FogFar = eventsFunctionContext.getArgument("FogFar") || 1000;
//
if (Scene.background) {
  if (Scene.background.isTexture) {
    Scene.background.dispose();
    Scene.background = null;
  }
}
//
if (BG_Img !== "") {
  const Resource = runtimeScene.getGame().getImageManager().getPIXITexture(BG_Img).baseTexture.resource;
  const ResourceWidth = Resource.width;
  const ResourceHeight = Resource.height;
  const BGTexture = new THREE.Texture();
  BGTexture.image = Resource.source;
  if (ResourceWidth == ResourceHeight * 2) {
    BGTexture.mapping = THREE.EquirectangularReflectionMapping;
  }
  BGTexture.needsUpdate = true;//必須
  Scene.background = BGTexture;
} else {
  const RGB = BG_RGB.split(";");
  Scene.background = new THREE.Color(`rgb(${RGB[0]}, ${RGB[1]}, ${RGB[2]})`);
}
//
if (FogColor === "") {
  Scene.fog = null;
} else {
  const RGB = FogColor.split(";");
  Scene.fog = new THREE.Fog(`rgb(${RGB[0]}, ${RGB[1]}, ${RGB[2]})`, FogNear, FogFar);
  // Scene.fog = new THREE.FogExp2("rgb(0,0,0)", 0.005);
}
gdjs.__WithThreeJS.set("Scene", Scene);
//
let Camera;
if (gdjs.__WithThreeJS.has("Camera")) {
  Camera = gdjs.__WithThreeJS.get("Camera");
} else {
  Camera = new THREE.PerspectiveCamera();
}
Camera.name ="Camera";
Camera.fov = Fov;
// Camera.aspect = window.innerWidth / window.innerHeight;
Camera.aspect = Rect.width / Rect.height;
Camera.near = 0.1;
Camera.far = 1000;
Camera.position.set(0, 0, 0);
Camera.rotation.set(0, 0, 0);
Camera.updateProjectionMatrix();//必須
gdjs.__WithThreeJS.set("Camera", Camera);
//
let Renderer;
if (gdjs.__WithThreeJS.has("Renderer")) {
  Renderer = gdjs.__WithThreeJS.get("Renderer");
} else {
  Renderer = new THREE.WebGLRenderer();
  document.body.appendChild( Renderer.domElement );
}
Renderer.setPixelRatio(window.devicePixelRatio);
// Renderer.setSize( window.innerWidth, window.innerHeight );
Renderer.setSize(Rect.width, Rect.height);
Renderer.domElement.style.position = "absolute";
Renderer.domElement.style.zIndex = -99;
Renderer.domElement.style.left = Rect.left + "px";
Renderer.domElement.style.top = Rect.top + "px";
gdjs.__WithThreeJS.set("Renderer", Renderer);

// Resize
window.addEventListener('resize', () => {
  // const width = window.innerWidth;
  // const height = window.innerHeight;
  // Renderer.setPixelRatio(window.devicePixelRatio);
  // Renderer.setSize(width, height);
  // Camera.aspect = width / height;
  // Camera.updateProjectionMatrix();

  const Rect = Canvas2D.getBoundingClientRect();

  // レンダラーのサイズを調整する
  Renderer.setPixelRatio(window.devicePixelRatio);
  Renderer.setSize(Rect.width, Rect.height);

  // カメラのアスペクト比を正す
  Camera.aspect = Rect.width / Rect.height;
  Camera.updateProjectionMatrix();

  // CSS
  Renderer.domElement.style.position = "absolute";
  Renderer.domElement.style.zIndex = -99;
  Renderer.domElement.style.left = Rect.left + "px";
  Renderer.domElement.style.top = Rect.top + "px";

});



};
gdjs.evtsExt__WithThreeJS__Create3DScene.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__Create3DScene.userFunc0x7168a0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__Create3DScene.func = function(runtimeScene, Fov, BackGroundColor, BackGroundImage, FogColor, FogNear, FogFar, parentEventsFunctionContext) {
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
if (argName === "Fov") return Fov;
if (argName === "BackGroundColor") return BackGroundColor;
if (argName === "BackGroundImage") return BackGroundImage;
if (argName === "FogColor") return FogColor;
if (argName === "FogNear") return FogNear;
if (argName === "FogFar") return FogFar;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__Create3DScene.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__WithThreeJS__Create3DScene.registeredGdjsCallbacks = [];