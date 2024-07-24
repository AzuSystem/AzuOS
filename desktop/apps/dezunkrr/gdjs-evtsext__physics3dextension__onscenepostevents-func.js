
if (typeof gdjs.evtsExt__Physics3dExtension__onScenePostEvents !== "undefined") {
  gdjs.evtsExt__Physics3dExtension__onScenePostEvents.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Physics3dExtension__onScenePostEvents = {};


gdjs.evtsExt__Physics3dExtension__onScenePostEvents.userFunc0x13f3a20 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__Physics3DExtension.has("World")) {
    console.warn("!");
    return;
}

const World = gdjs.__Physics3DExtension.get("World");

const delta = runtimeScene.getVariables().get("__PhysicsEngine3D").getChild("TimeDelta").getAsNumber();

World.step(delta);


};
gdjs.evtsExt__Physics3dExtension__onScenePostEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Physics3dExtension__onScenePostEvents.userFunc0x13f3a20(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__Physics3dExtension__onScenePostEvents.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__Physics3dExtension__LoadGLTFLoaderLibrary.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__Physics3dExtension__LoadLighting.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__PhysicsEngine3D").getChild("TimeDelta").setNumber(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
{ //Subevents
gdjs.evtsExt__Physics3dExtension__onScenePostEvents.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Physics3dExtension__onScenePostEvents.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Physics3dExtension__onScenePostEvents.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Physics3dExtension__onScenePostEvents.registeredGdjsCallbacks = [];
gdjs.evtsExt__Physics3dExtension__onScenePostEvents.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__Physics3dExtension__onScenePostEvents.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeScenePostEventsCallback(gdjs.evtsExt__Physics3dExtension__onScenePostEvents.registeredGdjsCallbacks[gdjs.evtsExt__Physics3dExtension__onScenePostEvents.registeredGdjsCallbacks.length - 1]);
