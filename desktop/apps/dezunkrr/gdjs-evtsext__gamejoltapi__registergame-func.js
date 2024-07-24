
if (typeof gdjs.evtsExt__GamejoltAPI__RegisterGame !== "undefined") {
  gdjs.evtsExt__GamejoltAPI__RegisterGame.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__GamejoltAPI__RegisterGame = {};


gdjs.evtsExt__GamejoltAPI__RegisterGame.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().get("__GamejoltAPI").getChild("GameID").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("GameIdentifier") : ""));
}{runtimeScene.getGame().getVariables().get("__GamejoltAPI").getChild("GameKey").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("GameSecretKey") : ""));
}{runtimeScene.getGame().getVariables().get("__GamejoltAPI").getChild("Url").setString("");
}{runtimeScene.getGame().getVariables().get("__GamejoltAPI").getChild("Response").setString("");
}{runtimeScene.getGame().getVariables().get("__GamejoltAPI").getChild("Username").setString("");
}{runtimeScene.getGame().getVariables().get("__GamejoltAPI").getChild("UserToken").setString("");
}{runtimeScene.getGame().getVariables().get("__GamejoltAPI").getChild("ErrorMessage").setString("");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("__GamejoltAPI").getChild("Success"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("__GamejoltAPI").getChild("TestMode"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("__GamejoltAPI").getChild("Session"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("__GamejoltAPI").getChild("IsAuthenticated"), false);
}}

}


};

gdjs.evtsExt__GamejoltAPI__RegisterGame.func = function(runtimeScene, GameIdentifier, GameSecretKey, parentEventsFunctionContext) {
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
if (argName === "GameIdentifier") return GameIdentifier;
if (argName === "GameSecretKey") return GameSecretKey;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__GamejoltAPI__RegisterGame.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__GamejoltAPI__RegisterGame.registeredGdjsCallbacks = [];