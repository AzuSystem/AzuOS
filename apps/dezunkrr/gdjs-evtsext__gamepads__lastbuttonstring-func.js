
if (typeof gdjs.evtsExt__Gamepads__LastButtonString !== "undefined") {
  gdjs.evtsExt__Gamepads__LastButtonString.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Gamepads__LastButtonString = {};


gdjs.evtsExt__Gamepads__LastButtonString.userFunc0x19bdb58 = function(runtimeScene, eventsFunctionContext) {
"use strict";
/** @type {Gamepad[]} */
const gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);

//Get function parameters
const playerId = eventsFunctionContext.getArgument("player_ID") - 1;
const controllerType = eventsFunctionContext.getArgument("controller_type").toUpperCase();

if (playerId < 0 || playerId > 4) {
    console.error('Parameter gamepad identifier in string expression: "Last pressed button (LastButtonString)", is not valid number, must be between 0 and 4.');
    return;
}
if (controllerType === "") {
    console.error('Parameter controller type is not valid in string expression: "Last pressed button (LastButtonString)"');
    return;
}

const gamepad = gamepads[playerId];

if (gamepad !== null) { //Gamepad exist
    //Get last btn id
    const lastButtonUsedID = gdjs._extensionController.players[playerId].lastButtonUsed;

    //Return last button as string    
    eventsFunctionContext.returnValue = gdjs._extensionController.getInputString(controllerType, lastButtonUsedID);

} else { //Gamepad dosen't exist
    console.error('Your controller is not supported or the gamepad wasn\'t detected in string expression: "Last pressed button (LastButtonString)"');
    eventsFunctionContext.returnValue = "Gamepad not connected";
}
};
gdjs.evtsExt__Gamepads__LastButtonString.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Gamepads__LastButtonString.userFunc0x19bdb58(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Gamepads__LastButtonString.func = function(runtimeScene, player_ID, controller_type, parentEventsFunctionContext) {
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
if (argName === "controller_type") return controller_type;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Gamepads__LastButtonString.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Gamepads__LastButtonString.registeredGdjsCallbacks = [];