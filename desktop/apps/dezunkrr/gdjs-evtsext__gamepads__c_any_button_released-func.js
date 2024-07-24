
if (typeof gdjs.evtsExt__Gamepads__C_any_button_released !== "undefined") {
  gdjs.evtsExt__Gamepads__C_any_button_released.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Gamepads__C_any_button_released = {};


gdjs.evtsExt__Gamepads__C_any_button_released.userFunc0x19d47d8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
/** @type {Gamepad[]} */
const gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);

//Get function parameters
const playerId = eventsFunctionContext.getArgument("player_ID") - 1;

if (playerId < 0 || playerId > 4) {
	console.error('Parameter gamepad identifier in condition: "Any gamepad button released", is not valid number, must be between 0 and 4.');
	return;
}

const gamepad = gamepads[playerId];

//we need keep this condition because when use have not yet plug her controller we can't get the controller in the gamepad variable.
if (gamepad == null) return;

for (let buttonId = 0; buttonId < gamepad.buttons.length; buttonId++) { //For each buttons on current frame.

	if (buttonId === undefined) {
		eventsFunctionContext.returnValue = false;
		return;
	}

	//Get previous value or define value by default for the current button
	gdjs._extensionController.players[playerId].previousFrameStateButtons[buttonId] = gdjs._extensionController.players[playerId].previousFrameStateButtons[buttonId] || { pressed: false };

	//Get state of the button at previous frame
	const previousStateButtonIsPressed = gdjs._extensionController.players[playerId].previousFrameStateButtons[buttonId].pressed;

	//Get the state of the button on the current frame.
	const currentFrameStateButtonIsPressed = gamepad.buttons[buttonId].pressed;

	//When previousStateButtonIsPressed is true and actual button state is not pressed
	//Player have release the button
	if (previousStateButtonIsPressed === true && currentFrameStateButtonIsPressed === false) {
		gdjs._extensionController.players[playerId].previousFrameStateButtons[buttonId].pressed = true;
		eventsFunctionContext.returnValue = true;
		//break;
		return;
	} else {
		//The player didn't released the button yet, the previous frame state is still true
		gdjs._extensionController.players[playerId].previousFrameStateButtons[buttonId].pressed = false;
		eventsFunctionContext.returnValue = false;
	}

	if (currentFrameStateButtonIsPressed) gdjs._extensionController.players[playerId].lastButtonUsed = buttonId;
}

};
gdjs.evtsExt__Gamepads__C_any_button_released.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__Gamepads__C_any_button_released.userFunc0x19d47d8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Gamepads__C_any_button_released.func = function(runtimeScene, player_ID, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Gamepads__C_any_button_released.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Gamepads__C_any_button_released.registeredGdjsCallbacks = [];