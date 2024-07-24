
if (typeof gdjs.evtsExt__Gamepads__A_Set_deadzone !== "undefined") {
  gdjs.evtsExt__Gamepads__A_Set_deadzone.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Gamepads__A_Set_deadzone = {};


gdjs.evtsExt__Gamepads__A_Set_deadzone.userFunc0x19c2170 = function(runtimeScene, eventsFunctionContext) {
"use strict";
//Get function parameter
const playerId = eventsFunctionContext.getArgument("player_ID") - 1;
const newDeadzone = eventsFunctionContext.getArgument("deadzone");

if (playerId < 0 || playerId > 4) {
    console.error('Parameter gamepad identifier in action: "Set gamepad deadzone for sticks", is not valid, must be between 0 and 4.');
    return;
}

// clamp the newDeadzone in range [0, 1].
// https://github.com/4ian/GDevelop-extensions/pull/33#issuecomment-618224857
gdjs._extensionController.players[playerId].deadzone = gdjs.evtTools.common.clamp(newDeadzone, 0, 1);

};
gdjs.evtsExt__Gamepads__A_Set_deadzone.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Gamepads__A_Set_deadzone.userFunc0x19c2170(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Gamepads__A_Set_deadzone.func = function(runtimeScene, player_ID, deadzone, parentEventsFunctionContext) {
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
if (argName === "player_ID") return player_ID;
if (argName === "deadzone") return deadzone;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Gamepads__A_Set_deadzone.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Gamepads__A_Set_deadzone.registeredGdjsCallbacks = [];