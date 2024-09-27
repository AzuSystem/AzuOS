
if (typeof gdjs.evtsExt__Gamepads__AxisValue !== "undefined") {
  gdjs.evtsExt__Gamepads__AxisValue.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Gamepads__AxisValue = {};


gdjs.evtsExt__Gamepads__AxisValue.userFunc0xc77d08 = function(runtimeScene, eventsFunctionContext) {
"use strict";
/** @type {Gamepad[]} */
const gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);

//Get function parameters
const playerId = eventsFunctionContext.getArgument("player_ID") - 1;
const stick = eventsFunctionContext.getArgument("stick").toUpperCase();
const direction = eventsFunctionContext.getArgument("direction").toUpperCase();

if (playerId < 0 || playerId > 4) {
    console.error('Parameter gamepad identifier is not valid in expression: "Value of a gamepad axis"');
    return;
}
if (stick != "LEFT" && stick != "RIGHT") {
    console.error('Parameter stick is not valid in expression: "Value of a gamepad axis"');
    return;
}
if (direction != "UP" && direction != "DOWN" && direction != "LEFT" && direction != "RIGHT" && direction != "HORIZONTAL" && direction != "VERTICAL") {
    console.error('Parameter direction is not valid in expression: "Value of a gamepad axis"');
    return;
}
const gamepad = gamepads[playerId];

//we need keep this condition because when use have not yet plug her controller we can't get the controller in the gamepad variable.
if (gamepad == null) return;

let parameterError = false;
switch (stick) {
    case 'LEFT':
        switch (direction) {
            case 'LEFT':
                if (gdjs._extensionController.getNormalizedAxisValue(gamepad.axes[0], playerId) < 0) {
                    eventsFunctionContext.returnValue = -gdjs._extensionController.getNormalizedAxisValue(gamepad.axes[0], playerId);
                }
                break;

            case 'RIGHT':
                if (gdjs._extensionController.getNormalizedAxisValue(gamepad.axes[0], playerId) > 0) {
                    eventsFunctionContext.returnValue = gdjs._extensionController.getNormalizedAxisValue(gamepad.axes[0], playerId);
                }
                break;

            case 'UP':
                if (gdjs._extensionController.getNormalizedAxisValue(gamepad.axes[1], playerId) < 0) {
                    eventsFunctionContext.returnValue = -gdjs._extensionController.getNormalizedAxisValue(gamepad.axes[1], playerId);
                }
                break;

            case 'DOWN':
                if (gdjs._extensionController.getNormalizedAxisValue(gamepad.axes[1], playerId) > 0) {
                    eventsFunctionContext.returnValue = gdjs._extensionController.getNormalizedAxisValue(gamepad.axes[1], playerId);
                }
                break;

            case "HORIZONTAL":
                eventsFunctionContext.returnValue = gdjs._extensionController.getNormalizedAxisValue(gamepad.axes[0], playerId);
                break;

            case "VERTICAL":
                eventsFunctionContext.returnValue = gdjs._extensionController.getNormalizedAxisValue(gamepad.axes[1], playerId);
                break;

            default:
                break;
        }
        break;

    case 'RIGHT':
        switch (direction) {
            case 'LEFT':
                if (gdjs._extensionController.getNormalizedAxisValue(gamepad.axes[2], playerId) < 0) {
                    eventsFunctionContext.returnValue = -gdjs._extensionController.getNormalizedAxisValue(gamepad.axes[2], playerId);
                }
                break;

            case 'RIGHT':
                if (gdjs._extensionController.getNormalizedAxisValue(gamepad.axes[2], playerId) > 0) {
                    eventsFunctionContext.returnValue = gdjs._extensionController.getNormalizedAxisValue(gamepad.axes[2], playerId);
                }
                break;

            case 'UP':
                if (gdjs._extensionController.getNormalizedAxisValue(gamepad.axes[3], playerId) < 0) {
                    eventsFunctionContext.returnValue = -gdjs._extensionController.getNormalizedAxisValue(gamepad.axes[3], playerId);
                }
                break;

            case 'DOWN':
                if (gdjs._extensionController.getNormalizedAxisValue(gamepad.axes[3], playerId) > 0) {
                    eventsFunctionContext.returnValue = gdjs._extensionController.getNormalizedAxisValue(gamepad.axes[3], playerId);
                }
                break;

            case "HORIZONTAL":
                eventsFunctionContext.returnValue = gdjs._extensionController.getNormalizedAxisValue(gamepad.axes[2], playerId);
                break;

            case "VERTICAL":
                eventsFunctionContext.returnValue = gdjs._extensionController.getNormalizedAxisValue(gamepad.axes[3], playerId);
                break;

            default:
                break;
        }
        break;

    default:
        break;
}

};
gdjs.evtsExt__Gamepads__AxisValue.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Gamepads__AxisValue.userFunc0xc77d08(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Gamepads__AxisValue.func = function(runtimeScene, player_ID, stick, direction, parentEventsFunctionContext) {
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
if (argName === "stick") return stick;
if (argName === "direction") return direction;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Gamepads__AxisValue.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__Gamepads__AxisValue.registeredGdjsCallbacks = [];