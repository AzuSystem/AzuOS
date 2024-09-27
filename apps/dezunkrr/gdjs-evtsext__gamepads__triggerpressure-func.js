
if (typeof gdjs.evtsExt__Gamepads__TriggerPressure !== "undefined") {
  gdjs.evtsExt__Gamepads__TriggerPressure.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Gamepads__TriggerPressure = {};


gdjs.evtsExt__Gamepads__TriggerPressure.userFunc0x1263d50 = function(runtimeScene, eventsFunctionContext) {
"use strict";
/** @type {Gamepad[]} */
const gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);

//Get function parameters
const playerId = eventsFunctionContext.getArgument("player_ID") - 1;
const trigger = eventsFunctionContext.getArgument("trigger").toUpperCase();

if (playerId < 0 || playerId > 4) {
    console.error('Parameter gamepad identifier in expression: "Pressure on a gamepad trigger", is not valid number, must be between 0 and 4.');
    return;
}
if (trigger != "LT" && trigger != "RT" && trigger != "L2" && trigger != "R2") {
    console.error('Parameter trigger is not valid in expression: "Pressure on a gamepad trigger"');
    return;
}

const gamepad = gamepads[playerId];

//we need keep this condition because when use have not yet plug her controller we can't get the controller in the gamepad variable.
if (gamepad == null) return;

switch (trigger) {
    case 'LT':
    case 'L2':
        eventsFunctionContext.returnValue = gamepad.buttons[6].value;
        break;

    case 'RT':
    case 'R2':
        eventsFunctionContext.returnValue = gamepad.buttons[7].value;
        break;

    default:
        eventsFunctionContext.returnValue = -1;
        break;
}
};
gdjs.evtsExt__Gamepads__TriggerPressure.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Gamepads__TriggerPressure.userFunc0x1263d50(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Gamepads__TriggerPressure.func = function(runtimeScene, player_ID, trigger, parentEventsFunctionContext) {
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
if (argName === "trigger") return trigger;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Gamepads__TriggerPressure.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__Gamepads__TriggerPressure.registeredGdjsCallbacks = [];