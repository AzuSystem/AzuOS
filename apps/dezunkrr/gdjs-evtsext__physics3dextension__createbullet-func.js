
if (typeof gdjs.evtsExt__Physics3dExtension__CreateBullet !== "undefined") {
  gdjs.evtsExt__Physics3dExtension__CreateBullet.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Physics3dExtension__CreateBullet = {};
gdjs.evtsExt__Physics3dExtension__CreateBullet.GDSteveObjects1= [];


gdjs.evtsExt__Physics3dExtension__CreateBullet.userFunc0x13e7f88 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    return;
}

if (!window.balls) {
    window.balls = [];
}

if (!window.ballMeshes) {
    window.ballMeshes = [];
}

const Scene = gdjs.__WithThreeJS.get("Scene");
const Camera = gdjs.__WithThreeJS.get("Camera");
const Renderer = gdjs.__WithThreeJS.get("Renderer");
const World = gdjs.__Physics3DExtension.get("World");
const Size = eventsFunctionContext.getArgument("Size");
const Force = eventsFunctionContext.getArgument("Force");

var ballShape = new CANNON.Sphere(Size);
var ballGeometry = new THREE.SphereGeometry(ballShape.radius, 32, 32);
var shootDirection = new THREE.Vector3( 0,0, -1 ); // infront of the player
shootDirection.applyQuaternion( Camera.quaternion );
var shootVelo = Force;

var behaviorName = objects[0].getVariables().get("Physics3dBehavior").getAsString();
var Physics3dBehavior = objects[0].getBehavior(behaviorName);
var sphereBody = Physics3dBehavior.body;
var sphereShape = Physics3dBehavior.shape;

var x = sphereBody.position.x;
var y = sphereBody.position.y;
var z = sphereBody.position.z;
var ballBody = new CANNON.Body({ mass: 0.5 });
ballBody.addShape(ballShape);
const material = new THREE.MeshLambertMaterial( { color: 0xdddddd } );
var ballMesh = new THREE.Mesh( ballGeometry, material );
World.add(ballBody);
Scene.add(ballMesh);
ballMesh.castShadow = true;
ballMesh.receiveShadow = true;
balls.push(ballBody);
ballMeshes.push(ballMesh);

ballBody.velocity.set(  shootDirection.x * shootVelo,
                        shootDirection.y * shootVelo,
                        shootDirection.z * shootVelo);

// Move the ball outside the player sphere
x += shootDirection.x * (sphereShape.radius*1.02 + ballShape.radius);
y += shootDirection.y * (sphereShape.radius*1.02 + ballShape.radius);
z += shootDirection.z * (sphereShape.radius*1.02 + ballShape.radius);
ballBody.position.set(x,y,z);
ballMesh.position.set(x,y,z);
};
gdjs.evtsExt__Physics3dExtension__CreateBullet.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Steve"), gdjs.evtsExt__Physics3dExtension__CreateBullet.GDSteveObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3dExtension__CreateBullet.GDSteveObjects1);
gdjs.evtsExt__Physics3dExtension__CreateBullet.userFunc0x13e7f88(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3dExtension__CreateBullet.func = function(runtimeScene, Force, Size, Steve, PhysicsEnginePlayerController, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Steve": Steve
},
  _objectArraysMap: {
"Steve": gdjs.objectsListsToArray(Steve)
},
  _behaviorNamesMap: {
"PhysicsEnginePlayerController": PhysicsEnginePlayerController
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
if (argName === "Force") return Force;
if (argName === "Size") return Size;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Physics3dExtension__CreateBullet.GDSteveObjects1.length = 0;

gdjs.evtsExt__Physics3dExtension__CreateBullet.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Physics3dExtension__CreateBullet.registeredGdjsCallbacks = [];