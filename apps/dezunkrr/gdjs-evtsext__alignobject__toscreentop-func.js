
if (typeof gdjs.evtsExt__AlignObject__ToScreenTop !== "undefined") {
  gdjs.evtsExt__AlignObject__ToScreenTop.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__AlignObject__ToScreenTop = {};
gdjs.evtsExt__AlignObject__ToScreenTop.GDObjectToAlignObjects1= [];
gdjs.evtsExt__AlignObject__ToScreenTop.GDObjectToAlignObjects2= [];


gdjs.evtsExt__AlignObject__ToScreenTop.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("ObjectToAlign"), gdjs.evtsExt__AlignObject__ToScreenTop.GDObjectToAlignObjects1);
{for(var i = 0, len = gdjs.evtsExt__AlignObject__ToScreenTop.GDObjectToAlignObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AlignObject__ToScreenTop.GDObjectToAlignObjects1[i].setY(0);
}
}}

}


};

gdjs.evtsExt__AlignObject__ToScreenTop.func = function(runtimeScene, ObjectToAlign, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"ObjectToAlign": ObjectToAlign
},
  _objectArraysMap: {
"ObjectToAlign": gdjs.objectsListsToArray(ObjectToAlign)
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

gdjs.evtsExt__AlignObject__ToScreenTop.GDObjectToAlignObjects1.length = 0;
gdjs.evtsExt__AlignObject__ToScreenTop.GDObjectToAlignObjects2.length = 0;

gdjs.evtsExt__AlignObject__ToScreenTop.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__AlignObject__ToScreenTop.registeredGdjsCallbacks = [];