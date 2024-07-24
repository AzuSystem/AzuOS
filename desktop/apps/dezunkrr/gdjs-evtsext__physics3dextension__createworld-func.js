
if (typeof gdjs.evtsExt__Physics3dExtension__CreateWorld !== "undefined") {
  gdjs.evtsExt__Physics3dExtension__CreateWorld.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Physics3dExtension__CreateWorld = {};


gdjs.evtsExt__Physics3dExtension__CreateWorld.userFunc0x13f3a20 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if(!CANNON) {
    console.log("!")
    return;
}

const world = new CANNON.World()
world.gravity.set(0, eventsFunctionContext.getArgument("Gravity")*-1, 0);

// Enable collision detection
world.collisionResponse = true;

gdjs.__Physics3DExtension.set("World", world);

runtimeScene.getVariables().get("__PhysicsEngine3D").getChild("WorldInitiated").setNumber(1);
};
gdjs.evtsExt__Physics3dExtension__CreateWorld.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Physics3dExtension__CreateWorld.userFunc0x13f3a20(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__Physics3dExtension__CreateWorld.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__PhysicsEngine3D").getChild("WorldInitiated")) == 0;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Physics3dExtension__CreateWorld.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Physics3dExtension__CreateWorld.func = function(runtimeScene, Gravity, parentEventsFunctionContext) {
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
if (argName === "Gravity") return Gravity;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Physics3dExtension__CreateWorld.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Physics3dExtension__CreateWorld.registeredGdjsCallbacks = [];