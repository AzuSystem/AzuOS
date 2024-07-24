
if (typeof gdjs.evtsExt__Physics3dExtension__ExplosionAtPosition !== "undefined") {
  gdjs.evtsExt__Physics3dExtension__ExplosionAtPosition.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Physics3dExtension__ExplosionAtPosition = {};
gdjs.evtsExt__Physics3dExtension__ExplosionAtPosition.GDBlocksObjects1= [];
gdjs.evtsExt__Physics3dExtension__ExplosionAtPosition.GDBlocksObjects2= [];


gdjs.evtsExt__Physics3dExtension__ExplosionAtPosition.userFunc0x14c1a60 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
// define the position and radius of the explosion
const x = eventsFunctionContext.getArgument("X");
const y = eventsFunctionContext.getArgument("Y");
const z = eventsFunctionContext.getArgument("Z");

var explosionPosition = new CANNON.Vec3(x, y, z);
var explosionRadius = eventsFunctionContext.getArgument("Radius");
var explosionForce = eventsFunctionContext.getArgument("Force");

// loop through all objects in the world
objects.forEach(object => {
    var behaviorName = object.getVariables().get("Physics3dBehavior").getAsString();
    var Physics3dBehavior = object.getBehavior(behaviorName);

    var body = Physics3dBehavior.body;
    // calculate the distance from the object to the explosion
    var distance = body.position.distanceTo(explosionPosition);
    // check if the object is within the explosion radius
    if (distance < explosionRadius) {
        // calculate the direction of the impulse force
        var impulseDirection = body.position.vsub(explosionPosition);
        impulseDirection.normalize();
        // apply the impulse force to the object
        body.applyImpulse(impulseDirection.scale(explosionForce), body.position);
    }
});
};
gdjs.evtsExt__Physics3dExtension__ExplosionAtPosition.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Blocks"), gdjs.evtsExt__Physics3dExtension__ExplosionAtPosition.GDBlocksObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3dExtension__ExplosionAtPosition.GDBlocksObjects1);
gdjs.evtsExt__Physics3dExtension__ExplosionAtPosition.userFunc0x14c1a60(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3dExtension__ExplosionAtPosition.func = function(runtimeScene, X, Y, Z, Blocks, Force, Radius, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Blocks": Blocks
},
  _objectArraysMap: {
"Blocks": gdjs.objectsListsToArray(Blocks)
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
if (argName === "X") return X;
if (argName === "Y") return Y;
if (argName === "Z") return Z;
if (argName === "Force") return Force;
if (argName === "Radius") return Radius;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Physics3dExtension__ExplosionAtPosition.GDBlocksObjects1.length = 0;
gdjs.evtsExt__Physics3dExtension__ExplosionAtPosition.GDBlocksObjects2.length = 0;

gdjs.evtsExt__Physics3dExtension__ExplosionAtPosition.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Physics3dExtension__ExplosionAtPosition.registeredGdjsCallbacks = [];