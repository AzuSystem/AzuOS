
if (typeof gdjs.evtsExt__AuthorizedPlatformsValidation__Includes !== "undefined") {
  gdjs.evtsExt__AuthorizedPlatformsValidation__Includes.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__AuthorizedPlatformsValidation__Includes = {};


gdjs.evtsExt__AuthorizedPlatformsValidation__Includes.userFunc0x9c04a8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const authorizedPlatformsVariableReference = runtimeScene.getGame()
    .getVariables()
    .get("__AuthorizedPlatformsValidation")
    .getChild("AuthorizedPlatforms");
    
authorizedPlatformsVariableReference.castTo("array");

eventsFunctionContext.returnValue = 
    authorizedPlatformsVariableReference.toJSObject()
    .includes(
        eventsFunctionContext.getArgument("DomainToCheck")
        );

};
gdjs.evtsExt__AuthorizedPlatformsValidation__Includes.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__AuthorizedPlatformsValidation__Includes.userFunc0x9c04a8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__AuthorizedPlatformsValidation__Includes.func = function(runtimeScene, DomainToCheck, parentEventsFunctionContext) {
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
if (argName === "DomainToCheck") return DomainToCheck;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__AuthorizedPlatformsValidation__Includes.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__AuthorizedPlatformsValidation__Includes.registeredGdjsCallbacks = [];