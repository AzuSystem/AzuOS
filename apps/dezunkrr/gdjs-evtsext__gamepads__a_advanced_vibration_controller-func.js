
if (typeof gdjs.evtsExt__Gamepads__A_Advanced_Vibration_Controller !== "undefined") {
  gdjs.evtsExt__Gamepads__A_Advanced_Vibration_Controller.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Gamepads__A_Advanced_Vibration_Controller = {};


gdjs.evtsExt__Gamepads__A_Advanced_Vibration_Controller.userFunc0x19d1f30 = function(runtimeScene, eventsFunctionContext) {
"use strict";
/** @type {Gamepad[]} */
//Vibration work only on game in browser.
const gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);

//Get function parameters
const playerId = eventsFunctionContext.getArgument("Player_ID") - 1;
const duration = eventsFunctionContext.getArgument("Duration") || 1;
const strongRumbleMagnitude = eventsFunctionContext.getArgument("StrongMagnitude");
const weakRumbleMagnitude = eventsFunctionContext.getArgument("WeakMagnitude");

if (playerId < 0 || playerId > 4) {
  console.error('Parameter gamepad identifier in action: "Advanced gamepad vibration", is not valid number, must be between 0 and 4.');
  return;
}
if (weakRumbleMagnitude < 0 || weakRumbleMagnitude > 1) {
  console.error('Parameter weakRumble identifier in action: "Advanced gamepad vibration", is not valid number, must be between 0 and 1.');
  return;
}
if (strongRumbleMagnitude < 0 || strongRumbleMagnitude > 1) {
  console.error('Parameter strongRumble identifier in action: "Advanced gamepad vibration", is not valid number, must be between 0 and 1.');
  return;
}

const gamepad = gamepads[playerId];

//we need keep this condition because when use have not yet plug the controller we can't get the controller in the gamepad variable.
if (gamepad == null) return;

if (gamepad && gamepad.vibrationActuator) {
  gamepad.vibrationActuator.playEffect("dual-rumble", {
    startDelay: 0,
    duration: duration * 1000,
    weakMagnitude: weakRumbleMagnitude,
    strongMagnitude: strongRumbleMagnitude
  });
}

gdjs._extensionController.players[playerId].rumble.duration = duration;
gdjs._extensionController.players[playerId].rumble.elapsedTime = 0;
gdjs._extensionController.players[playerId].rumble.weakMagnitude = weakRumbleMagnitude;
gdjs._extensionController.players[playerId].rumble.strongMagnitude = strongRumbleMagnitude;
};
gdjs.evtsExt__Gamepads__A_Advanced_Vibration_Controller.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Gamepads__A_Advanced_Vibration_Controller.userFunc0x19d1f30(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Gamepads__A_Advanced_Vibration_Controller.func = function(runtimeScene, Player_ID, Duration, StrongMagnitude, WeakMagnitude, parentEventsFunctionContext) {
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
if (argName === "Player_ID") return Player_ID;
if (argName === "Duration") return Duration;
if (argName === "StrongMagnitude") return StrongMagnitude;
if (argName === "WeakMagnitude") return WeakMagnitude;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Gamepads__A_Advanced_Vibration_Controller.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Gamepads__A_Advanced_Vibration_Controller.registeredGdjsCallbacks = [];