
if (typeof gdjs.evtsExt__UpdateChecker__CreateGlobalReference !== "undefined") {
  gdjs.evtsExt__UpdateChecker__CreateGlobalReference.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__UpdateChecker__CreateGlobalReference = {};


gdjs.evtsExt__UpdateChecker__CreateGlobalReference.userFunc0x1992370 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const reference = eventsFunctionContext.getArgument("reference");
const source = eventsFunctionContext.getArgument("source");

// Override each method 
for (let func of Object.getOwnPropertyNames(gdjs.Variable.prototype))
    reference[func] = gdjs.Variable.prototype[func].bind(source);

};
gdjs.evtsExt__UpdateChecker__CreateGlobalReference.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__UpdateChecker__CreateGlobalReference.userFunc0x1992370(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__UpdateChecker__CreateGlobalReference.func = function(runtimeScene, reference, source, parentEventsFunctionContext) {
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
if (argName === "reference") return reference;
if (argName === "source") return source;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__UpdateChecker__CreateGlobalReference.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__UpdateChecker__CreateGlobalReference.registeredGdjsCallbacks = [];