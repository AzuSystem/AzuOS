
if (typeof gdjs.evtsExt__AuthorizedPlatformsValidation__AddExecution !== "undefined") {
  gdjs.evtsExt__AuthorizedPlatformsValidation__AddExecution.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__AuthorizedPlatformsValidation__AddExecution = {};


gdjs.evtsExt__AuthorizedPlatformsValidation__AddExecution.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.valuePush(runtimeScene.getGame().getVariables().get("__AuthorizedPlatformsValidation").getChild("AuthorizedPlatforms"), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Domain") : ""));
}}

}


};

gdjs.evtsExt__AuthorizedPlatformsValidation__AddExecution.func = function(runtimeScene, Domain, parentEventsFunctionContext) {
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
if (argName === "Domain") return Domain;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__AuthorizedPlatformsValidation__AddExecution.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__AuthorizedPlatformsValidation__AddExecution.registeredGdjsCallbacks = [];