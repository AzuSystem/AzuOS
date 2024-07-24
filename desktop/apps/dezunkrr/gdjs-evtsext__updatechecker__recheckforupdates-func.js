
if (typeof gdjs.evtsExt__UpdateChecker__RecheckForUpdates !== "undefined") {
  gdjs.evtsExt__UpdateChecker__RecheckForUpdates.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__UpdateChecker__RecheckForUpdates = {};


gdjs.evtsExt__UpdateChecker__RecheckForUpdates.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__UpdateChecker__CreateGlobalReference.func(runtimeScene, runtimeScene.getScene().getVariables().get("__UpdateChecker").getChild("LatestVersion"), runtimeScene.getGame().getVariables().get("__UpdateChecker").getChild("LatestVersion"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__UpdateChecker__CreateGlobalReference.func(runtimeScene, runtimeScene.getScene().getVariables().get("__UpdateChecker").getChild("Error"), runtimeScene.getGame().getVariables().get("__UpdateChecker").getChild("Error"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.network.sendAsyncRequest("https://updates.arthuro555.com/?game-id=" + gdjs.evtsExt__UpdateChecker__CurrentGameID.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), "", "GET", "text/plain-text", runtimeScene.getScene().getVariables().get("__UpdateChecker").getChild("LatestVersion"), runtimeScene.getScene().getVariables().get("__UpdateChecker").getChild("Error"));
}}

}


};

gdjs.evtsExt__UpdateChecker__RecheckForUpdates.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__UpdateChecker__RecheckForUpdates.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__UpdateChecker__RecheckForUpdates.registeredGdjsCallbacks = [];