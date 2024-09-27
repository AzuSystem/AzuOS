
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled = gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled || {};

/**
 * Behavior generated from 3D Box Projection from Tiled Sprite
 */
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled = class BoxProjectionFromTiled extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Id = "";
    this._behaviorData.FirstFrame = true;
    this._behaviorData.ProjectionScale = behaviorData.ProjectionScale !== undefined ? behaviorData.ProjectionScale : Number("0.01") || 0;
    this._behaviorData.ViewMode = behaviorData.ViewMode !== undefined ? behaviorData.ViewMode : "Top Down";
    this._behaviorData.Hide = behaviorData.Hide !== undefined ? behaviorData.Hide : true;
    this._behaviorData.AlphaTest = behaviorData.AlphaTest !== undefined ? behaviorData.AlphaTest : Number("0") || 0;
    this._behaviorData.AntiAliasing = behaviorData.AntiAliasing !== undefined ? behaviorData.AntiAliasing : true;
    this._behaviorData.Depth = behaviorData.Depth !== undefined ? behaviorData.Depth : Number("1") || 0;
    this._behaviorData.IsCube = false;
    this._behaviorData.TBTextureId = "";
    this._behaviorData.LRTextureId = "";
    this._behaviorData.FRTextureId = "";
    this._behaviorData.TBOffsetV = Number("0") || 0;
    this._behaviorData.LROffsetV = Number("") || 0;
    this._behaviorData.FROffsetV = Number("") || 0;
    this._behaviorData.Blend = behaviorData.Blend !== undefined ? behaviorData.Blend : "Normal";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Id !== newBehaviorData.Id)
      this._behaviorData.Id = newBehaviorData.Id;
    if (oldBehaviorData.FirstFrame !== newBehaviorData.FirstFrame)
      this._behaviorData.FirstFrame = newBehaviorData.FirstFrame;
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
    if (oldBehaviorData.Depth !== newBehaviorData.Depth)
      this._behaviorData.Depth = newBehaviorData.Depth;
    if (oldBehaviorData.IsCube !== newBehaviorData.IsCube)
      this._behaviorData.IsCube = newBehaviorData.IsCube;
    if (oldBehaviorData.TBTextureId !== newBehaviorData.TBTextureId)
      this._behaviorData.TBTextureId = newBehaviorData.TBTextureId;
    if (oldBehaviorData.LRTextureId !== newBehaviorData.LRTextureId)
      this._behaviorData.LRTextureId = newBehaviorData.LRTextureId;
    if (oldBehaviorData.FRTextureId !== newBehaviorData.FRTextureId)
      this._behaviorData.FRTextureId = newBehaviorData.FRTextureId;
    if (oldBehaviorData.TBOffsetV !== newBehaviorData.TBOffsetV)
      this._behaviorData.TBOffsetV = newBehaviorData.TBOffsetV;
    if (oldBehaviorData.LROffsetV !== newBehaviorData.LROffsetV)
      this._behaviorData.LROffsetV = newBehaviorData.LROffsetV;
    if (oldBehaviorData.FROffsetV !== newBehaviorData.FROffsetV)
      this._behaviorData.FROffsetV = newBehaviorData.FROffsetV;
    if (oldBehaviorData.Blend !== newBehaviorData.Blend)
      this._behaviorData.Blend = newBehaviorData.Blend;

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
  _getDepth() {
    return this._behaviorData.Depth !== undefined ? this._behaviorData.Depth : Number("1") || 0;
  }
  _setDepth(newValue) {
    this._behaviorData.Depth = newValue;
  }
  _getIsCube() {
    return this._behaviorData.IsCube !== undefined ? this._behaviorData.IsCube : false;
  }
  _setIsCube(newValue) {
    this._behaviorData.IsCube = newValue;
  }
  _toggleIsCube() {
    this._setIsCube(!this._getIsCube());
  }
  _getTBTextureId() {
    return this._behaviorData.TBTextureId !== undefined ? this._behaviorData.TBTextureId : "";
  }
  _setTBTextureId(newValue) {
    this._behaviorData.TBTextureId = newValue;
  }
  _getLRTextureId() {
    return this._behaviorData.LRTextureId !== undefined ? this._behaviorData.LRTextureId : "";
  }
  _setLRTextureId(newValue) {
    this._behaviorData.LRTextureId = newValue;
  }
  _getFRTextureId() {
    return this._behaviorData.FRTextureId !== undefined ? this._behaviorData.FRTextureId : "";
  }
  _setFRTextureId(newValue) {
    this._behaviorData.FRTextureId = newValue;
  }
  _getTBOffsetV() {
    return this._behaviorData.TBOffsetV !== undefined ? this._behaviorData.TBOffsetV : Number("0") || 0;
  }
  _setTBOffsetV(newValue) {
    this._behaviorData.TBOffsetV = newValue;
  }
  _getLROffsetV() {
    return this._behaviorData.LROffsetV !== undefined ? this._behaviorData.LROffsetV : Number("") || 0;
  }
  _setLROffsetV(newValue) {
    this._behaviorData.LROffsetV = newValue;
  }
  _getFROffsetV() {
    return this._behaviorData.FROffsetV !== undefined ? this._behaviorData.FROffsetV : Number("") || 0;
  }
  _setFROffsetV(newValue) {
    this._behaviorData.FROffsetV = newValue;
  }
  _getBlend() {
    return this._behaviorData.Blend !== undefined ? this._behaviorData.Blend : "Normal";
  }
  _setBlend(newValue) {
    this._behaviorData.Blend = newValue;
  }
}

/**
 * Shared data generated from 3D Box Projection from Tiled Sprite
 */
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.SharedData = class BoxProjectionFromTiledSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._WithThreeJS_BoxProjectionFromTiledSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._WithThreeJS_BoxProjectionFromTiledSharedData = new gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.SharedData(
      initialData
    );
  }
  return instanceContainer._WithThreeJS_BoxProjectionFromTiledSharedData;
}

// Methods:
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEventsContext.userFunc0xc80a00 = function(runtimeScene, objects, eventsFunctionContext) {
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
const Behavior = objects[0].getBehavior("BoxProjectionFromTiled");
const Id = objects[0].name + objects[0].id;
// const X = objects[0].getCenterXInScene();
// const Y = objects[0].getCenterYInScene();
// const Z = objects[0].zOrder;
const Width = objects[0].getWidth();
const Height = objects[0].getHeight();
const Depth = Behavior.Depth();
const ProjectionScale = Behavior.ProjectionScale();
const ViewMode = Behavior.ViewMode();
const AlphaTest = Behavior.AlphaTest();
const Transparent = AlphaTest !== 0;
const AntiAliasing = Behavior.AntiAliasing();
let Blend = THREE.NormalBlending;
if (Behavior.Blend() == "Additive") {
    Blend = THREE.AdditiveBlending;
} else if (Behavior.Blend() == "Subtractive") {
    Blend = THREE.SubtractiveBlending;
} else if (Behavior.Blend() == "Multiply") {
    Blend = THREE.MultiplyBlending;
}
// const Opacity = 1.0;
//
//タイルの画像を取得
const Resource = objects[0].getRendererObject().texture.baseTexture.resource;
const TextureWidth = Resource.width;
const TextureHeight = Resource.height;
//
// インスタンスごとのマテリアルとテクスチャ生成
// FrontRear のみの1パターンか LeftRight, TopBottom, FrontRear の3パターン
// FrontRear は必須
let FRRepeatU, FRRepeatV;
if (ViewMode == "Top Down") {
    FRRepeatU = Width / TextureWidth;
    FRRepeatV = Depth / TextureHeight;
} else {
    FRRepeatU = Width / TextureWidth;
    FRRepeatV = Height / TextureHeight;
}
const FRTextureId = "_" + Id + "_" + Resource.url + "_FR";
Behavior.SetFRTextureId(FRTextureId);
Behavior.SetFROffsetV(1 - (FRRepeatV % 1));
//
const FRTexture = new THREE.Texture();
FRTexture.image = Resource.source;
FRTexture.wrapS = THREE.RepeatWrapping;
FRTexture.wrapT = THREE.RepeatWrapping;
if (!AntiAliasing) {
    FRTexture.magFilter = THREE.NearestFilter;// THREE.LinearFilter
    FRTexture.minFilter = THREE.NearestFilter;// THREE.LinearMipmapLinearFilter
}
FRTexture.repeat.set(FRRepeatU, FRRepeatV);
FRTexture.needsUpdate = true;//必須
Textures.set(FRTextureId, FRTexture);
const FRMaterial = new THREE.MeshBasicMaterial({map: FRTexture, transparent:Transparent, alphaTest:AlphaTest, blending:Blend});
//
// 正方形なら1パターン、違うなら3パターン（2パターンはありえない）
const IsCube = (Width == Height && Width == Depth);
Behavior.SetIsCube(IsCube);
// 必要なら残りのパターンを生成して Material 設定
let Material;
if (IsCube) {
    Material = FRMaterial;
} else {
    // LeftRight
    let LRRepeatU, LRRepeatV;
    if (ViewMode == "Top Down") {
        LRRepeatU = Height / TextureWidth;
        LRRepeatV = Depth / TextureHeight;
    } else {
        LRRepeatU = Depth / TextureWidth;
        LRRepeatV = Height / TextureHeight;
    }
    const LRTextureId = "_" + Id + "_" + Resource.url + "_LR";
    Behavior.SetLRTextureId(LRTextureId);
    Behavior.SetLROffsetV(1 - (LRRepeatV % 1));
    //
    const LRTexture = FRTexture.clone();
    LRTexture.repeat.set(LRRepeatU, LRRepeatV);
    LRTexture.needsUpdate = true;//必須
    Textures.set(LRTextureId, LRTexture);
    const LRMaterial = new THREE.MeshBasicMaterial({map: LRTexture, transparent:Transparent, alphaTest:AlphaTest, blending:Blend});
    //
    // TopBottom
    let TBRepeatU, TBRepeatV;
    if (ViewMode == "Top Down") {
        TBRepeatU = Width / TextureWidth;
        TBRepeatV = Height / TextureHeight;
    } else {
        TBRepeatU = Width / TextureWidth;
        TBRepeatV = Depth / TextureHeight;
    }
    const TBTextureId = "_" + Id + "_" + Resource.url + "_TB";
    Behavior.SetTBTextureId(TBTextureId);
    Behavior.SetTBOffsetV(1 - (TBRepeatV % 1));
    //
    const TBTexture = FRTexture.clone();
    TBTexture.repeat.set(TBRepeatU, TBRepeatV);
    TBTexture.needsUpdate = true;//必須
    Textures.set(TBTextureId, TBTexture);
    const TBMaterial = new THREE.MeshBasicMaterial({map: TBTexture, transparent:Transparent, alphaTest:AlphaTest, blending:Blend});
    //
    Material = [LRMaterial, LRMaterial, TBMaterial, TBMaterial, FRMaterial, FRMaterial];
}
//
let Geometry;
if (ViewMode == "Top Down") {
    Geometry = new THREE.BoxGeometry(Width * ProjectionScale, Depth * ProjectionScale, Height * ProjectionScale);
} else {
    Geometry = new THREE.BoxGeometry(Width * ProjectionScale, Height * ProjectionScale, Depth * ProjectionScale);
}
const Obj = new THREE.Mesh(Geometry, Material);
Obj.name = Id;
Obj.userData.Use3DProjectionBehavior = true;
Behavior.SetId(Id);
Scene.add(Obj);


};
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects2);


var objects = [];
objects.push.apply(objects,gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects2);
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEventsContext.userFunc0xc80a00(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{

/* Reuse gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHide() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1[i].hide();
}
}}

}


};gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEventsContext.userFunc0xc81800 = function(runtimeScene, objects, eventsFunctionContext) {
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
const Behavior = objects[0].getBehavior("BoxProjectionFromTiled");
const Id = Behavior.Id();
const X = objects[0].getCenterXInScene();
const Y = objects[0].getCenterYInScene();
const Z = objects[0].zOrder;
const ProjectionScale = Behavior.ProjectionScale();
const ViewMode = Behavior.ViewMode();
const IsCube = Behavior.IsCube();
//
const Obj = Scene.getObjectByName(Id);

console.log(Obj.visible);
// Move & Rotate
const Angle = objects[0].angle;
if (ViewMode == "Top Down") {
    Obj.position.set(X * ProjectionScale, Z * ProjectionScale, Y * ProjectionScale);
    Obj.rotation.set(gdjs.toRad(0), gdjs.toRad(Angle * -1), gdjs.toRad(0));
} else {
    Obj.position.set(X * ProjectionScale, -Y * ProjectionScale, Z * ProjectionScale);
    Obj.rotation.set(gdjs.toRad(0), gdjs.toRad(0), gdjs.toRad(Angle * -1));
}
// Opacity
const Opacity = objects[0].getOpacity() / 255;
if (Array.isArray(Obj.material)) {
    for (let i = 0; i < Obj.material.length; i++) {
        if (!Obj.material[i].transparent) {
            if (Obj.material[i].alphaTest !== 0 || Opacity !== 1) {
                Obj.material[i].transparent = true;
                Obj.material[i].needsUpdate = true;
            }
        }
        Obj.material[i].opacity = Opacity;
    }
} else {
    if (!Obj.material.transparent) {
        if (Obj.material.alphaTest !== 0 || Opacity !== 1) {
            Obj.material.transparent = true;
            Obj.material.needsUpdate = true;
        }
    }
    Obj.material.opacity = Opacity;
}
// Offset
const FRTexture = Textures.get(Behavior.FRTextureId());
const TextureWidth = FRTexture.image.width;
const TextureHeight = FRTexture.image.height;

FRTexture.offset.set(objects[0].getXOffset() / TextureWidth, -(objects[0].getYOffset() / TextureHeight) + Behavior.FROffsetV());
if (!IsCube) {
    const LRTexture = Textures.get(Behavior.LRTextureId());
    const TBTexture = Textures.get(Behavior.TBTextureId());
    LRTexture.offset.set(objects[0].getXOffset() / TextureWidth, -(objects[0].getYOffset() / TextureHeight) + Behavior.LROffsetV());
    TBTexture.offset.set(objects[0].getXOffset() / TextureWidth, -(objects[0].getYOffset() / TextureHeight) + Behavior.TBOffsetV());
}



};
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1);
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEventsContext.userFunc0xc81800(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFirstFrame() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFirstFrame(false);
}
}
{ //Subevents
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(23126124);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.onDestroyContext = {};
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.onDestroyContext.userFunc0xc82438 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
// 生成と同時に削除された場合、3D化されていないので回避
// FirstFrame == true のほうが理想的だが取得がめんどくさいので Id を利用。
const Behavior = objects[0].getBehavior("BoxProjectionFromTiled");
const Id = Behavior.Id();
if (Id === "") {
    return;
}
//
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
if (!gdjs.__WithThreeJS.has("Textures")) {
    gdjs.__WithThreeJS.set("Textures", new Map());
}
const Scene = gdjs.__WithThreeJS.get("Scene");
const Textures = gdjs.__WithThreeJS.get("Textures");
const Obj = Scene.getObjectByName(Id);
if (!Obj) {
    console.warn("3D Object not found.");
    return;
}
//
const IsCube = Behavior.IsCube();
const FRTextureId = Behavior.FRTextureId();
const FRTexture = Textures.get(FRTextureId);
// インスタンスごとなので全て削除
FRTexture.dispose();
Textures.delete(FRTextureId);
if (!IsCube) {
    const LRTextureId = Behavior.LRTextureId();
    const TBTextureId = Behavior.TBTextureId();
    const LRTexture = Textures.get(LRTextureId);
    const TBTexture = Textures.get(TBTextureId);
    LRTexture.dispose();
    TBTexture.dispose();
    Textures.delete(LRTextureId);
    Textures.delete(TBTextureId);
}
//
if (Array.isArray(Obj.material)) {
    for (let i = Obj.material.length - 1; i >= 0; i--){
        Obj.material[i].dispose();
    }
} else {
    Obj.material.dispose();
}
Obj.removeFromParent();


};
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.onDestroyContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.onDestroyContext.GDObjectObjects1);
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.onDestroyContext.userFunc0xc82438(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.onDestroy = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.ProjectionScaleContext = {};
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.ProjectionScaleContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.ProjectionScaleContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.ProjectionScaleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.ProjectionScaleContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.ProjectionScaleContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.ProjectionScaleContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProjectionScale()); }}}

}


};

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.ProjectionScale = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.ProjectionScaleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.ProjectionScaleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.ProjectionScaleContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.ViewModeContext = {};
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.ViewModeContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.ViewModeContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.ViewModeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.ViewModeContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.ViewModeContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.ViewModeContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getViewMode()); }}}

}


};

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.ViewMode = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.ViewModeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.ViewModeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.ViewModeContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.IdContext = {};
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.IdContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.IdContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.IdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.IdContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.IdContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.IdContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getId()); }}}

}


};

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.Id = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.IdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.IdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.IdContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.AlphaTestContext = {};
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.AlphaTestContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.AlphaTestContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.AlphaTestContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.AlphaTestContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.AlphaTestContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.AlphaTestContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAlphaTest()); }}}

}


};

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.AlphaTest = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.AlphaTestContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.AlphaTestContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.AlphaTestContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.BlendContext = {};
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.BlendContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.BlendContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.BlendContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.BlendContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.BlendContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.BlendContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBlend()); }}}

}


};

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.Blend = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.BlendContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.BlendContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.BlendContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.AntiAliasingContext = {};
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.AntiAliasingContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.AntiAliasingContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.AntiAliasingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.AntiAliasingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.AntiAliasingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.AntiAliasingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAntiAliasing() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.AntiAliasingContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.AntiAliasingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.AntiAliasingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.AntiAliasingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.AntiAliasingContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.AntiAliasingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAntiAliasing()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.AntiAliasingContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.AntiAliasingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.AntiAliasingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


};

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.AntiAliasing = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.AntiAliasingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.AntiAliasingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.AntiAliasingContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.IsCubeContext = {};
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.IsCubeContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.IsCubeContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.IsCubeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.IsCubeContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.IsCubeContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.IsCubeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsCube() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.IsCubeContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.IsCubeContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.IsCubeContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.IsCubeContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.IsCubeContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.IsCubeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsCube()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.IsCubeContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.IsCubeContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.IsCubeContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


};

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.IsCube = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.IsCubeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.IsCubeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.IsCubeContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.TBTextureIdContext = {};
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.TBTextureIdContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.TBTextureIdContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.TBTextureIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.TBTextureIdContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.TBTextureIdContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.TBTextureIdContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTBTextureId()); }}}

}


};

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.TBTextureId = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.TBTextureIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.TBTextureIdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.TBTextureIdContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.LRTextureIdContext = {};
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.LRTextureIdContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.LRTextureIdContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.LRTextureIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.LRTextureIdContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.LRTextureIdContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.LRTextureIdContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLRTextureId()); }}}

}


};

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.LRTextureId = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.LRTextureIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.LRTextureIdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.LRTextureIdContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.FRTextureIdContext = {};
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.FRTextureIdContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.FRTextureIdContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.FRTextureIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.FRTextureIdContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.FRTextureIdContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.FRTextureIdContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFRTextureId()); }}}

}


};

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.FRTextureId = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.FRTextureIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.FRTextureIdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.FRTextureIdContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.TBOffsetVContext = {};
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.TBOffsetVContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.TBOffsetVContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.TBOffsetVContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.TBOffsetVContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.TBOffsetVContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.TBOffsetVContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTBOffsetV()); }}}

}


};

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.TBOffsetV = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.TBOffsetVContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.TBOffsetVContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.TBOffsetVContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.LROffsetVContext = {};
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.LROffsetVContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.LROffsetVContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.LROffsetVContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.LROffsetVContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.LROffsetVContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.LROffsetVContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLROffsetV()); }}}

}


};

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.LROffsetV = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.LROffsetVContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.LROffsetVContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.LROffsetVContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.FROffsetVContext = {};
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.FROffsetVContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.FROffsetVContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.FROffsetVContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.FROffsetVContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.FROffsetVContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.FROffsetVContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFROffsetV()); }}}

}


};

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.FROffsetV = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.FROffsetVContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.FROffsetVContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.FROffsetVContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.DepthContext = {};
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.DepthContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.DepthContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.DepthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.DepthContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.DepthContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.DepthContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDepth()); }}}

}


};

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.Depth = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.DepthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.DepthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.DepthContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetIdContext = {};
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetIdContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetIdContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetIdContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetIdContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetIdContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setId((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Id") : ""));
}
}}

}


};

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetId = function(Id, parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetIdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetIdContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetIsCubeContext = {};
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetIsCubeContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetIsCubeContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetIsCubeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Cube") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetIsCubeContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetIsCubeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetIsCubeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsCube(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Cube") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetIsCubeContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetIsCubeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetIsCubeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsCube(false);
}
}}

}


};

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetIsCube = function(Cube, parentEventsFunctionContext) {

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
if (argName === "Cube") return Cube;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetIsCubeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetIsCubeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetIsCubeContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetTBTextureIdContext = {};
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetTBTextureIdContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetTBTextureIdContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetTBTextureIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetTBTextureIdContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetTBTextureIdContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetTBTextureIdContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTBTextureId((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Id") : ""));
}
}}

}


};

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetTBTextureId = function(Id, parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetTBTextureIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetTBTextureIdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetTBTextureIdContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetLRTextureIdContext = {};
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetLRTextureIdContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetLRTextureIdContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetLRTextureIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetLRTextureIdContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetLRTextureIdContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetLRTextureIdContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLRTextureId((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Id") : ""));
}
}}

}


};

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetLRTextureId = function(Id, parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetLRTextureIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetLRTextureIdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetLRTextureIdContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetFRTextureIdContext = {};
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetFRTextureIdContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetFRTextureIdContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetFRTextureIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetFRTextureIdContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetFRTextureIdContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetFRTextureIdContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFRTextureId((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Id") : ""));
}
}}

}


};

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetFRTextureId = function(Id, parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetFRTextureIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetFRTextureIdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetFRTextureIdContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetTBOffsetVContext = {};
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetTBOffsetVContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetTBOffsetVContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetTBOffsetVContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetTBOffsetVContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetTBOffsetVContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetTBOffsetVContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTBOffsetV((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetTBOffsetV = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetTBOffsetVContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetTBOffsetVContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetTBOffsetVContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetLROffsetVContext = {};
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetLROffsetVContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetLROffsetVContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetLROffsetVContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetLROffsetVContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetLROffsetVContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetLROffsetVContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLROffsetV((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetLROffsetV = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetLROffsetVContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetLROffsetVContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetLROffsetVContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetFROffsetVContext = {};
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetFROffsetVContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetFROffsetVContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetFROffsetVContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetFROffsetVContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetFROffsetVContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetFROffsetVContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFROffsetV((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetFROffsetV = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetFROffsetVContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetFROffsetVContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.SetFROffsetVContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("WithThreeJS::BoxProjectionFromTiled", gdjs.evtsExt__WithThreeJS__BoxProjectionFromTiled.BoxProjectionFromTiled);
