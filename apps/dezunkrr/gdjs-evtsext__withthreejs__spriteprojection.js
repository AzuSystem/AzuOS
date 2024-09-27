
gdjs.evtsExt__WithThreeJS__SpriteProjection = gdjs.evtsExt__WithThreeJS__SpriteProjection || {};

/**
 * Behavior generated from 3D Sprite Projection
 */
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection = class SpriteProjection extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Id = "";
    this._behaviorData.FirstFrame = true;
    this._behaviorData.CurrentTextureId = "";
    this._behaviorData.ProjectionScale = behaviorData.ProjectionScale !== undefined ? behaviorData.ProjectionScale : Number("0.01") || 0;
    this._behaviorData.ViewMode = behaviorData.ViewMode !== undefined ? behaviorData.ViewMode : "Top Down";
    this._behaviorData.Hide = behaviorData.Hide !== undefined ? behaviorData.Hide : true;
    this._behaviorData.AlphaTest = behaviorData.AlphaTest !== undefined ? behaviorData.AlphaTest : Number("0") || 0;
    this._behaviorData.AntiAliasing = behaviorData.AntiAliasing !== undefined ? behaviorData.AntiAliasing : true;
    this._behaviorData.CollisionX = Number("0") || 0;
    this._behaviorData.CollisionY = Number("0") || 0;
    this._behaviorData.CollisionIndex = Number("0") || 0;
    this._behaviorData.IsHit = false;
    this._behaviorData.CollisionDirection = "left";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Id !== newBehaviorData.Id)
      this._behaviorData.Id = newBehaviorData.Id;
    if (oldBehaviorData.FirstFrame !== newBehaviorData.FirstFrame)
      this._behaviorData.FirstFrame = newBehaviorData.FirstFrame;
    if (oldBehaviorData.CurrentTextureId !== newBehaviorData.CurrentTextureId)
      this._behaviorData.CurrentTextureId = newBehaviorData.CurrentTextureId;
    if (oldBehaviorData.ProjectionScale !== newBehaviorData.ProjectionScale)
      this._behaviorData.ProjectionScale = newBehaviorData.ProjectionScale;
    if (oldBehaviorData.ViewMode !== newBehaviorData.ViewMode)
      this._behaviorData.ViewMode = newBehaviorData.ViewMode;
    if (oldBehaviorData.Hide !== newBehaviorData.Hide)
      this._behaviorData.Hide = newBehaviorData.Hide;
    if (oldBehaviorData.AlphaTest !== newBehaviorData.AlphaTest)
      this._behaviorData.AlphaTest = newBehaviorData.AlphaTest;
    if (oldBehaviorData.AntiAliasing !== newBehaviorData.AntiAliasing)
      this._behaviorData.AntiAliasing = newBehaviorData.AntiAliasing;
    if (oldBehaviorData.CollisionX !== newBehaviorData.CollisionX)
      this._behaviorData.CollisionX = newBehaviorData.CollisionX;
    if (oldBehaviorData.CollisionY !== newBehaviorData.CollisionY)
      this._behaviorData.CollisionY = newBehaviorData.CollisionY;
    if (oldBehaviorData.CollisionIndex !== newBehaviorData.CollisionIndex)
      this._behaviorData.CollisionIndex = newBehaviorData.CollisionIndex;
    if (oldBehaviorData.IsHit !== newBehaviorData.IsHit)
      this._behaviorData.IsHit = newBehaviorData.IsHit;
    if (oldBehaviorData.CollisionDirection !== newBehaviorData.CollisionDirection)
      this._behaviorData.CollisionDirection = newBehaviorData.CollisionDirection;

    return true;
  }

  // Properties:
  
  _getId() {
    return this._behaviorData.Id !== undefined ? this._behaviorData.Id : "";
  }
  _setId(newValue) {
    this._behaviorData.Id = newValue;
  }
  _getFirstFrame() {
    return this._behaviorData.FirstFrame !== undefined ? this._behaviorData.FirstFrame : true;
  }
  _setFirstFrame(newValue) {
    this._behaviorData.FirstFrame = newValue;
  }
  _toggleFirstFrame() {
    this._setFirstFrame(!this._getFirstFrame());
  }
  _getCurrentTextureId() {
    return this._behaviorData.CurrentTextureId !== undefined ? this._behaviorData.CurrentTextureId : "";
  }
  _setCurrentTextureId(newValue) {
    this._behaviorData.CurrentTextureId = newValue;
  }
  _getProjectionScale() {
    return this._behaviorData.ProjectionScale !== undefined ? this._behaviorData.ProjectionScale : Number("0.01") || 0;
  }
  _setProjectionScale(newValue) {
    this._behaviorData.ProjectionScale = newValue;
  }
  _getViewMode() {
    return this._behaviorData.ViewMode !== undefined ? this._behaviorData.ViewMode : "Top Down";
  }
  _setViewMode(newValue) {
    this._behaviorData.ViewMode = newValue;
  }
  _getHide() {
    return this._behaviorData.Hide !== undefined ? this._behaviorData.Hide : true;
  }
  _setHide(newValue) {
    this._behaviorData.Hide = newValue;
  }
  _toggleHide() {
    this._setHide(!this._getHide());
  }
  _getAlphaTest() {
    return this._behaviorData.AlphaTest !== undefined ? this._behaviorData.AlphaTest : Number("0") || 0;
  }
  _setAlphaTest(newValue) {
    this._behaviorData.AlphaTest = newValue;
  }
  _getAntiAliasing() {
    return this._behaviorData.AntiAliasing !== undefined ? this._behaviorData.AntiAliasing : true;
  }
  _setAntiAliasing(newValue) {
    this._behaviorData.AntiAliasing = newValue;
  }
  _toggleAntiAliasing() {
    this._setAntiAliasing(!this._getAntiAliasing());
  }
  _getCollisionX() {
    return this._behaviorData.CollisionX !== undefined ? this._behaviorData.CollisionX : Number("0") || 0;
  }
  _setCollisionX(newValue) {
    this._behaviorData.CollisionX = newValue;
  }
  _getCollisionY() {
    return this._behaviorData.CollisionY !== undefined ? this._behaviorData.CollisionY : Number("0") || 0;
  }
  _setCollisionY(newValue) {
    this._behaviorData.CollisionY = newValue;
  }
  _getCollisionIndex() {
    return this._behaviorData.CollisionIndex !== undefined ? this._behaviorData.CollisionIndex : Number("0") || 0;
  }
  _setCollisionIndex(newValue) {
    this._behaviorData.CollisionIndex = newValue;
  }
  _getIsHit() {
    return this._behaviorData.IsHit !== undefined ? this._behaviorData.IsHit : false;
  }
  _setIsHit(newValue) {
    this._behaviorData.IsHit = newValue;
  }
  _toggleIsHit() {
    this._setIsHit(!this._getIsHit());
  }
  _getCollisionDirection() {
    return this._behaviorData.CollisionDirection !== undefined ? this._behaviorData.CollisionDirection : "left";
  }
  _setCollisionDirection(newValue) {
    this._behaviorData.CollisionDirection = newValue;
  }
}

/**
 * Shared data generated from 3D Sprite Projection
 */
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.SharedData = class SpriteProjectionSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._WithThreeJS_SpriteProjectionSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._WithThreeJS_SpriteProjectionSharedData = new gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.SharedData(
      initialData
    );
  }
  return instanceContainer._WithThreeJS_SpriteProjectionSharedData;
}

// Methods:
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.userFunc0x12c0368 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
if (!gdjs.__WithThreeJS.has("Textures")) {
    gdjs.__WithThreeJS.set("Textures", new Map());
}
const Scene = gdjs.__WithThreeJS.get("Scene");
let Textures = gdjs.__WithThreeJS.get("Textures");
//
const Behavior = objects[0].getBehavior("SpriteProjection");
const Id = objects[0].name + objects[0].id;
// const X = objects[0].x;
// const Y = objects[0].y;
// const Z = objects[0].zOrder;
const ProjectionScale = Behavior.ProjectionScale();
const ViewMode = Behavior.ViewMode();
const AlphaTest = Behavior.AlphaTest();
const Transparent = AlphaTest !== 0;
const AntiAliasing = Behavior.AntiAliasing();
// const Blend = THREE.NormalBlending;
// const Opacity = 1.0;
//
//スプライトのすべてのアニメーション画像を取得
let AllAnimationSources = [];
for(const V of objects[0]._animations) {
    for(const VV of V.directions[0].frames) {
        AllAnimationSources.push(VV.texture.baseTexture.resource);
    }
}
//その画像がTexturesに登録されているか確認。未登録の場合は作成。
for(const V of AllAnimationSources) {
    const TexId = "_" + V.url;
    if (!Textures.has(TexId)) {
        const T = new THREE.Texture();
        T.image = V.source;
        T.wrapS = THREE.MirroredRepeatWrapping;
        T.wrapT = THREE.MirroredRepeatWrapping;
        if (!AntiAliasing) {
            T.magFilter = THREE.NearestFilter;// THREE.LinearFilter
            T.minFilter = THREE.NearestFilter;// THREE.LinearMipmapLinearFilter
        }
        T.needsUpdate = true;//必須
        Textures.set(TexId, T);
        //FlipX
        const T_FlipX = T.clone();
        T_FlipX.offset.x = 1;
        Textures.set(TexId + "_FlipX", T_FlipX);
        //FlipY
        const T_FlipY = T.clone();
        T_FlipY.offset.y = 1;
        Textures.set(TexId + "_FlipY", T_FlipY);
        //FlipXY
        const T_FlipXY = T.clone();
        T_FlipXY.offset.x = 1;
        T_FlipXY.offset.y = 1;
        Textures.set(TexId + "_FlipX_FlipY", T_FlipXY);
    }
}
//
const TextureId = "_" + objects[0].getRendererObject().texture.baseTexture.resource.url;
Behavior.SetCurrentTextureId(TextureId);
const Texture = Textures.get(TextureId);
const TextureWidth = Texture.image.width;
const TextureHeight = Texture.image.height;
const Material = new THREE.SpriteMaterial({map:Texture, transparent:Transparent, alphaTest:AlphaTest});// blendingとopacityは2D依存
const Sprite = new THREE.Sprite(Material);
Sprite.name = Id;
Sprite.userData.Use3DProjectionBehavior = true;
Sprite.scale.set(TextureWidth * ProjectionScale, TextureHeight * ProjectionScale, 1);
Behavior.SetId(Id);
Scene.add(Sprite);


};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects2);


var objects = [];
objects.push.apply(objects,gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects2);
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.userFunc0x12c0368(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{

/* Reuse gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHide() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1[i].hide();
}
}}

}


};gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.userFunc0x1401508 = function(runtimeScene, objects, eventsFunctionContext) {
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
let Textures = gdjs.__WithThreeJS.get("Textures");
//
const Behavior = objects[0].getBehavior("SpriteProjection");
const Id = Behavior.Id();
const X = objects[0].getCenterXInScene();
const Y = objects[0].getCenterYInScene();
const Z = objects[0].zOrder;
const ProjectionScale = Behavior.ProjectionScale();
const ViewMode = Behavior.ViewMode();
//
const Sprite = Scene.getObjectByName(Id);
let TextureId = "_" + objects[0].getRendererObject().texture.baseTexture.resource.url;
// Flip
if (objects[0].isFlippedX()) {
    TextureId += "_FlipX";
}
if (objects[0].isFlippedY()) {
    TextureId += "_FlipY";
}
// Animation
const Texture = Textures.get(TextureId);
if (TextureId !== Behavior.CurrentTextureId()) {
    Sprite.material.map = Texture;
    Behavior.SetCurrentTextureId(TextureId);
}
// Blend
Sprite.material.blending = gdjs.__WithThreeJS.get("Blend2Dto3D")[objects[0].getBlendMode()];
// Opacity
const Opacity = objects[0].getOpacity() / 255;
if (!Sprite.material.transparent) {
    if (Sprite.material.alphaTest !== 0 || Opacity !== 1) {
        Sprite.material.transparent = true;
        Sprite.material.needsUpdate = true;
    }
}
Sprite.material.opacity = Opacity;
// Scale
const TextureWidth = Texture.image.width;
const TextureHeight = Texture.image.height;
Sprite.scale.set(TextureWidth * ProjectionScale * objects[0].getScaleX(), TextureHeight * ProjectionScale * objects[0].getScaleY(), 1);
// Move
if (ViewMode == "Top Down") {
    Sprite.position.set(X * ProjectionScale, Z * ProjectionScale, Y * ProjectionScale);
} else {
    Sprite.position.set(X * ProjectionScale, -Y * ProjectionScale, Z * ProjectionScale);
}


};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFirstFrame() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFirstFrame(false);
}
}
{ //Subevents
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1);
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.userFunc0x1401508(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.onDestroyContext = {};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.onDestroyContext.userFunc0x13d6b60 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
// 生成と同時に削除された場合、3D化されていないので回避
// FirstFrame == true のほうが理想的だが取得がめんどくさいので Id を利用。
const Behavior = objects[0].getBehavior("SpriteProjection");
const Id = Behavior.Id();
if (Id === "") {
    return;
}
//
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
const Sprite = Scene.getObjectByName(Id);
//
Sprite.material.dispose();
Sprite.removeFromParent();
};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.onDestroyContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.onDestroyContext.GDObjectObjects1);
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.onDestroyContext.userFunc0x13d6b60(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.onDestroy = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ProjectionScaleContext = {};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ProjectionScaleContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ProjectionScaleContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ProjectionScaleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ProjectionScaleContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ProjectionScaleContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ProjectionScaleContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProjectionScale()); }}}

}


};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ProjectionScale = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ProjectionScaleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ProjectionScaleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ProjectionScaleContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ViewModeContext = {};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ViewModeContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ViewModeContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ViewModeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ViewModeContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ViewModeContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ViewModeContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getViewMode()); }}}

}


};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ViewMode = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ViewModeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ViewModeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.ViewModeContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.IdContext = {};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.IdContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.IdContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.IdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.IdContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.IdContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.IdContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getId()); }}}

}


};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.Id = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.IdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.IdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.IdContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AlphaTestContext = {};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AlphaTestContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AlphaTestContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AlphaTestContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AlphaTestContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AlphaTestContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AlphaTestContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAlphaTest()); }}}

}


};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AlphaTest = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AlphaTestContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AlphaTestContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AlphaTestContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasingContext = {};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasingContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasingContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAntiAliasing() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasingContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasingContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAntiAliasing()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasingContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasing = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.AntiAliasingContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CurrentTextureIdContext = {};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CurrentTextureIdContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CurrentTextureIdContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CurrentTextureIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CurrentTextureIdContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CurrentTextureIdContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CurrentTextureIdContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentTextureId()); }}}

}


};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CurrentTextureId = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CurrentTextureIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CurrentTextureIdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CurrentTextureIdContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetIdContext = {};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetIdContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetIdContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetIdContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetIdContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetIdContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setId((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Id") : ""));
}
}}

}


};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetId = function(Id, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetIdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetIdContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCurrentTextureIdContext = {};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCurrentTextureIdContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCurrentTextureIdContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCurrentTextureIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCurrentTextureIdContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCurrentTextureIdContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCurrentTextureIdContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentTextureId((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Id") : ""));
}
}}

}


};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCurrentTextureId = function(Id, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCurrentTextureIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCurrentTextureIdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCurrentTextureIdContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext = {};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects3= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects4= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects5= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects6= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDCameraObjects1= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDCameraObjects2= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDCameraObjects3= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDCameraObjects4= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDCameraObjects5= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDCameraObjects6= [];


gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects4, gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((gdjs.evtsExt__WithThreeJS__RaycastResultNumber.func(runtimeScene, 0, "Point Z", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) / 0.01) > (( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects5[0].getCenterYInScene()));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects5[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetCollisionDirection("left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

/* Reuse gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((gdjs.evtsExt__WithThreeJS__RaycastResultNumber.func(runtimeScene, 0, "Point Z", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) / 0.01) < (( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects4[0].getCenterYInScene()));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetCollisionDirection("right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects3, gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((gdjs.evtsExt__WithThreeJS__RaycastResultNumber.func(runtimeScene, 0, "Point Z", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) / 0.01) > (( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects4[0].getCenterYInScene()));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetCollisionDirection("right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

/* Reuse gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((gdjs.evtsExt__WithThreeJS__RaycastResultNumber.func(runtimeScene, 0, "Point Z", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) / 0.01) < (( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects3[0].getCenterYInScene()));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetCollisionDirection("left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDCameraObjects3, gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDCameraObjects4);

gdjs.copyArray(gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects3, gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDCameraObjects4.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDCameraObjects4[0].getCenterXInScene()) > (( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects4[0].getCenterXInScene()));
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

/* Reuse gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects3[0].getCenterXInScene()) < 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects3, gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((gdjs.evtsExt__WithThreeJS__RaycastResultNumber.func(runtimeScene, 0, "Point X", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) / 0.01) > (( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects4[0].getCenterXInScene()));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetCollisionDirection("right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

/* Reuse gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((gdjs.evtsExt__WithThreeJS__RaycastResultNumber.func(runtimeScene, 0, "Point X", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) / 0.01) < (( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects3[0].getCenterXInScene()));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetCollisionDirection("left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2, gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((gdjs.evtsExt__WithThreeJS__RaycastResultNumber.func(runtimeScene, 0, "Point X", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) / 0.01) > (( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects3[0].getCenterXInScene()));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetCollisionDirection("left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

/* Reuse gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((gdjs.evtsExt__WithThreeJS__RaycastResultNumber.func(runtimeScene, 0, "Point X", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) / 0.01) < (( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2[0].getCenterXInScene()));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetCollisionDirection("right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.eventsList7(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDCameraObjects2, gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDCameraObjects3);

gdjs.copyArray(gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2, gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDCameraObjects3.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDCameraObjects3[0].getCenterYInScene()) > (( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects3[0].getCenterYInScene()));
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

/* Reuse gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDCameraObjects2 */
/* Reuse gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDCameraObjects2.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDCameraObjects2[0].getCenterYInScene()) < (( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2[0].getCenterYInScene()));
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.eventsList8(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Camera"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDCameraObjects3);
gdjs.copyArray(gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects1, gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs((( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDCameraObjects3.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDCameraObjects3[0].getCenterYInScene()) - (( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects3[0].getCenterYInScene())) < Math.abs((( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDCameraObjects3.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDCameraObjects3[0].getCenterXInScene()) - (( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects3[0].getCenterXInScene())));
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Camera"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDCameraObjects2);
gdjs.copyArray(gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects1, gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs((( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDCameraObjects2.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDCameraObjects2[0].getCenterYInScene()) - (( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2[0].getCenterYInScene())) > Math.abs((( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDCameraObjects2.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDCameraObjects2[0].getCenterXInScene()) - (( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2[0].getCenterXInScene())));
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.eventsList9(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.userFunc0x1409030 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if(objects.length == 0) return;

const SpriteBehavior = objects[0].getBehavior("SpriteProjection");
const Collision = runtimeScene.getVariables().get("Collision").toJSObject();
const SpriteObject = objects[0];

function insidePolygon(point, vs) {
    // ray-casting algorithm based on
    // https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html/pnpoly.html
    
    var x = point[0], y = point[1];
    
    var inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i][0], yi = vs[i][1];
        var xj = vs[j][0], yj = vs[j][1];
        
        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    
    return inside;
};

function GetRelativeVerticesfromArray(Vertices, SpriteObject) {
    const relativeVertices = [];

    Vertices.forEach((vertix) => {
        relativeVertices.push([
            vertix[0]-SpriteObject.getX(),
            vertix[1]-SpriteObject.getY()
        ])
    });

    return relativeVertices;
}


const HitBoxes = [];

let IsHit = false;

SpriteObject.getHitBoxes().forEach((Hitbox, Index)=>{
    const polygon = GetRelativeVerticesfromArray(Hitbox.vertices, SpriteObject);
    const point = [
        SpriteBehavior.CollisionX(),
        SpriteBehavior.CollisionY()
    ];

    const result = insidePolygon(point,polygon);

    if(result) {
        SpriteBehavior.SetCollisionIndex(Index);
        IsHit = true;
    }
})

SpriteBehavior.SetIsHit(IsHit);


};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects1 */

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects1);
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.userFunc0x1409030(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects1, gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetCollisionYAction(((gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2[i].getHeight()) + (gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2[i].getZOrder()) - (gdjs.evtsExt__WithThreeJS__RaycastResultNumber.func(runtimeScene, 0, "Point Y", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) / 0.01) - ((gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2[i].getHeight()) / 2)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.eventsList10(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects1, gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CollisionDirection((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) == "left");
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetCollisionXAction(((gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2[i].getWidth()) / 2) - (gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CollisionX((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects1, gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CollisionDirection((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) == "right");
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetCollisionXAction((gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CollisionX((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) + ((gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2[i].getWidth()) / 2), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.eventsList11(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.eventsList13 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetCollisionXAction(gdjs.evtTools.common.distanceBetweenPositions((gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects1[i].getCenterXInScene()), (gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects1[i].getCenterYInScene()), (gdjs.evtsExt__WithThreeJS__RaycastResultNumber.func(runtimeScene, 0, "Point X", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) / 0.01), (gdjs.evtsExt__WithThreeJS__RaycastResultNumber.func(runtimeScene, 0, "Point Z", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) / 0.01)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.eventsList12(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsHit((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollision = function(Camera, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Camera": Camera
},
  _objectArraysMap: {
"Object": thisObjectList
, "Camera": gdjs.objectsListsToArray(Camera)
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects5.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDObjectObjects6.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDCameraObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDCameraObjects2.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDCameraObjects3.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDCameraObjects4.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDCameraObjects5.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.GDCameraObjects6.length = 0;

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CheckFor3dCollisionContext.eventsList13(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionXContext = {};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionXContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionXContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionXContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCollisionX()); }}}

}


};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionXContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionXContext = {};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionXContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionXContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionXContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionXContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionXContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCollisionX((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionX = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionXContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionXActionContext = {};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionXActionContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionXActionContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionXActionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionXActionContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionXActionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionXActionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCollisionX((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionXAction = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionXActionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionXActionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionXActionContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionYContext = {};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionYContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionYContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionYContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCollisionY()); }}}

}


};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionYContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionYContext = {};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionYContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionYContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionYContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionYContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionYContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCollisionY((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionY = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionYContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionYActionContext = {};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionYActionContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionYActionContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionYActionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionYActionContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionYActionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionYActionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCollisionY((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionYAction = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionYActionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionYActionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionYActionContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionIndexContext = {};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionIndexContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionIndexContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionIndexContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionIndexContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionIndexContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionIndexContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCollisionIndex()); }}}

}


};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionIndex = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionIndexContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionIndexContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionIndexContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionIndexContext = {};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionIndexContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionIndexContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionIndexContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionIndexContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionIndexContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionIndexContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCollisionIndex((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionIndex = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionIndexContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionIndexContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionIndexContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.IsHitContext = {};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.IsHitContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.IsHitContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.IsHitContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.IsHitContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.IsHitContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.IsHitContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsHit() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.IsHitContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.IsHitContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.IsHitContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.IsHit = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.IsHitContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.IsHitContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.IsHitContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetIsHitContext = {};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetIsHitContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetIsHitContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetIsHitContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetIsHitContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetIsHitContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetIsHitContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsHit(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetIsHitContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetIsHitContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetIsHitContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsHit(true);
}
}}

}


};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetIsHit = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetIsHitContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetIsHitContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetIsHitContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionDirectionContext = {};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionDirectionContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionDirectionContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionDirectionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionDirectionContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionDirectionContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionDirectionContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCollisionDirection()); }}}

}


};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionDirection = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionDirectionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionDirectionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.CollisionDirectionContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionDirectionContext = {};
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionDirectionContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionDirectionContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionDirectionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionDirectionContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCollisionDirection((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Value") : ""));
}
}}

}


};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionDirection = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionDirectionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionDirectionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.SetCollisionDirectionContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("WithThreeJS::SpriteProjection", gdjs.evtsExt__WithThreeJS__SpriteProjection.SpriteProjection);
