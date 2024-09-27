
if (typeof gdjs.evtsExt__WithThreeJS__CameraAngle !== "undefined") {
  gdjs.evtsExt__WithThreeJS__CameraAngle.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__CameraAngle = {};


gdjs.evtsExt__WithThreeJS__CameraAngle.userFunc0x13f3a20 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Camera = gdjs.__WithThreeJS.get("Camera");
const Axis = eventsFunctionContext.getArgument("Axis");
if (Axis == "X") {
    // カメラの視点方向ベクトルと上方向ベクトルを作成
    let LDir = new THREE.Vector3(0, 0, -1);
    LDir.applyQuaternion(Camera.quaternion);
    const LUpA = new THREE.Vector3(0, 1, 0);
    LUpA.applyQuaternion(Camera.quaternion);
    // カメラの視点方向ベクトルを向いているM4を作成
    const M4 = new THREE.Matrix4();
    M4.lookAt(new THREE.Vector3(), LDir, new THREE.Vector3(0, 1, 0));
    // M4からQuaを作成し、さらに上方向ベクトルを作成
    const Qua = new THREE.Quaternion();
    Qua.setFromRotationMatrix(M4);
    const LUpB = new THREE.Vector3(0, 1, 0);
    LUpB.applyQuaternion(Qua);
    // 角度
    let LZ = LDir.clone();
    LZ.y = 0;// LZ.projectOnPlane(new THREE.Vector3(0, 1, 0));// y=0のほうが単純
    let Deg = gdjs.toDegrees(LZ.angleTo(LDir));
    // 上方向ベクトルの角度差で+-を判断
    // console.log(gdjs.toDegrees(LUpA.angleTo(LUpB)));
    if (LUpA.angleTo(LUpB) >= 1.57) {// Pi / 2
        Deg = 90 + (90 - Deg);
    }
    //
    if (LDir.y >= 0) {
        Deg *= -1;
    }
    eventsFunctionContext.returnValue = Deg;
} else if (Axis == "Y") {
    let LDir = new THREE.Vector3(0, 0, -1);
    LDir.applyQuaternion(Camera.quaternion);
    LDir.y = 0;
    LDir.normalize();
    let Deg = gdjs.toDegrees(new THREE.Vector3(0, 0, -1).angleTo(LDir));
    if (LDir.x < 0) {
        Deg *= -1;
    }
    eventsFunctionContext.returnValue = Deg;
} else {
    // カメラの視点方向ベクトルと上方向ベクトルを作成
    const LDir = new THREE.Vector3(0, 0, -1);
    LDir.applyQuaternion(Camera.quaternion);
    const LUpA = new THREE.Vector3(0, 1, 0);
    LUpA.applyQuaternion(Camera.quaternion);
    // カメラの視点方向ベクトルを向いているM4を作成
    const M4 = new THREE.Matrix4();
    M4.lookAt(new THREE.Vector3(), LDir, new THREE.Vector3(0, 1, 0));
    // M4からQuaを作成し、さらに上方向ベクトルを作成
    const Qua = new THREE.Quaternion();
    Qua.setFromRotationMatrix(M4);
    const LUpB = new THREE.Vector3(0, 1, 0);
    LUpB.applyQuaternion(Qua);
    // 角度
    let Deg = gdjs.toDegrees(LUpA.angleTo(LUpB));
    // 外積と視点の角度差で+-を判断
    const Cross = new THREE.Vector3();
    Cross.crossVectors(LUpA, LUpB);
    if (LDir.angleTo(Cross) >= 1.57) {// Pi / 2
        Deg *= -1;
    }
    //
    eventsFunctionContext.returnValue = Deg;
}


};
gdjs.evtsExt__WithThreeJS__CameraAngle.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__CameraAngle.userFunc0x13f3a20(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__CameraAngle.func = function(runtimeScene, Axis, parentEventsFunctionContext) {
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
if (argName === "Axis") return Axis;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__CameraAngle.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__WithThreeJS__CameraAngle.registeredGdjsCallbacks = [];