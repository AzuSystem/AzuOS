
if (typeof gdjs.evtsExt__Physics3dExtension__AnimateBullets !== "undefined") {
  gdjs.evtsExt__Physics3dExtension__AnimateBullets.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Physics3dExtension__AnimateBullets = {};
gdjs.evtsExt__Physics3dExtension__AnimateBullets.GDTargetObjects1= [];


gdjs.evtsExt__Physics3dExtension__AnimateBullets.userFunc0x1544878 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (!window.balls) {
    window.balls = [];
}

if (!window.ballMeshes) {
    window.ballMeshes = [];
}

// Update ball positions
for(var i=0; i<balls.length; i++){
    ballMeshes[i].position.copy(balls[i].position);
    ballMeshes[i].quaternion.copy(balls[i].quaternion);
}

// Check for collisions
if(!objects[0]) return;
const object = objects[0];
var behaviorName = object.getVariables().get("Physics3dBehavior").getAsString();
var Physics3dBehavior = object.getBehavior(behaviorName);

if(!Physics3dBehavior.body) return;

var body = Physics3dBehavior.body;
var contactRadius = 17;

for(var i=0; i<balls.length; i++){    
    var distance = body.position.distanceTo(balls[i].position);
    
    // check if the object is within the explosion radius
    if (distance < contactRadius && balls[i]['contacted'] == undefined) {
        console.log(balls[i])
        console.log('contact')
        var hp = object.getVariables().get("Health").getAsNumber();
        hp -= 5;
        object.getVariables().get("Health").setNumber(hp);
        balls[i].contacted = true;
    }
}
};
gdjs.evtsExt__Physics3dExtension__AnimateBullets.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Target"), gdjs.evtsExt__Physics3dExtension__AnimateBullets.GDTargetObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3dExtension__AnimateBullets.GDTargetObjects1);
gdjs.evtsExt__Physics3dExtension__AnimateBullets.userFunc0x1544878(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3dExtension__AnimateBullets.func = function(runtimeScene, Target, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Target": Target
},
  _objectArraysMap: {
"Target": gdjs.objectsListsToArray(Target)
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Physics3dExtension__AnimateBullets.GDTargetObjects1.length = 0;

gdjs.evtsExt__Physics3dExtension__AnimateBullets.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Physics3dExtension__AnimateBullets.registeredGdjsCallbacks = [];