
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick || {};

/**
 * Behavior generated from Multitouch Joystick
 */
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick = class MultitouchJoystick extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.ControllerIdentifier = behaviorData.ControllerIdentifier !== undefined ? behaviorData.ControllerIdentifier : Number("1") || 0;
    this._behaviorData.JoystickIdentifier = behaviorData.JoystickIdentifier !== undefined ? behaviorData.JoystickIdentifier : "Primary";
    this._behaviorData.DeadZoneRadius = behaviorData.DeadZoneRadius !== undefined ? behaviorData.DeadZoneRadius : Number("0.4") || 0;
    this._behaviorData.JoystickAngle = Number("0") || 0;
    this._behaviorData.JoystickForce = Number("0") || 0;
    this._behaviorData.TouchId = Number("0") || 0;
    this._behaviorData.TouchIndex = Number("") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.ControllerIdentifier !== newBehaviorData.ControllerIdentifier)
      this._behaviorData.ControllerIdentifier = newBehaviorData.ControllerIdentifier;
    if (oldBehaviorData.JoystickIdentifier !== newBehaviorData.JoystickIdentifier)
      this._behaviorData.JoystickIdentifier = newBehaviorData.JoystickIdentifier;
    if (oldBehaviorData.DeadZoneRadius !== newBehaviorData.DeadZoneRadius)
      this._behaviorData.DeadZoneRadius = newBehaviorData.DeadZoneRadius;
    if (oldBehaviorData.JoystickAngle !== newBehaviorData.JoystickAngle)
      this._behaviorData.JoystickAngle = newBehaviorData.JoystickAngle;
    if (oldBehaviorData.JoystickForce !== newBehaviorData.JoystickForce)
      this._behaviorData.JoystickForce = newBehaviorData.JoystickForce;
    if (oldBehaviorData.TouchId !== newBehaviorData.TouchId)
      this._behaviorData.TouchId = newBehaviorData.TouchId;
    if (oldBehaviorData.TouchIndex !== newBehaviorData.TouchIndex)
      this._behaviorData.TouchIndex = newBehaviorData.TouchIndex;

    return true;
  }

  // Properties:
  
  _getControllerIdentifier() {
    return this._behaviorData.ControllerIdentifier !== undefined ? this._behaviorData.ControllerIdentifier : Number("1") || 0;
  }
  _setControllerIdentifier(newValue) {
    this._behaviorData.ControllerIdentifier = newValue;
  }
  _getJoystickIdentifier() {
    return this._behaviorData.JoystickIdentifier !== undefined ? this._behaviorData.JoystickIdentifier : "Primary";
  }
  _setJoystickIdentifier(newValue) {
    this._behaviorData.JoystickIdentifier = newValue;
  }
  _getDeadZoneRadius() {
    return this._behaviorData.DeadZoneRadius !== undefined ? this._behaviorData.DeadZoneRadius : Number("0.4") || 0;
  }
  _setDeadZoneRadius(newValue) {
    this._behaviorData.DeadZoneRadius = newValue;
  }
  _getJoystickAngle() {
    return this._behaviorData.JoystickAngle !== undefined ? this._behaviorData.JoystickAngle : Number("0") || 0;
  }
  _setJoystickAngle(newValue) {
    this._behaviorData.JoystickAngle = newValue;
  }
  _getJoystickForce() {
    return this._behaviorData.JoystickForce !== undefined ? this._behaviorData.JoystickForce : Number("0") || 0;
  }
  _setJoystickForce(newValue) {
    this._behaviorData.JoystickForce = newValue;
  }
  _getTouchId() {
    return this._behaviorData.TouchId !== undefined ? this._behaviorData.TouchId : Number("0") || 0;
  }
  _setTouchId(newValue) {
    this._behaviorData.TouchId = newValue;
  }
  _getTouchIndex() {
    return this._behaviorData.TouchIndex !== undefined ? this._behaviorData.TouchIndex : Number("") || 0;
  }
  _setTouchIndex(newValue) {
    this._behaviorData.TouchIndex = newValue;
  }
}

/**
 * Shared data generated from Multitouch Joystick
 */
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.SharedData = class MultitouchJoystickSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._SpriteMultitouchJoystick_MultitouchJoystickSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._SpriteMultitouchJoystick_MultitouchJoystickSharedData = new gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.SharedData(
      initialData
    );
  }
  return instanceContainer._SpriteMultitouchJoystick_MultitouchJoystickSharedData;
}

// Methods:
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.onCreatedContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.onCreatedContext.GDObjectObjects1);
{gdjs.evtsExt__SpriteMultitouchJoystick__SetDeadZone.func(runtimeScene, (( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.onCreatedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.onCreatedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControllerIdentifier()), (( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.onCreatedContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.onCreatedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJoystickIdentifier()), (( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.onCreatedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.onCreatedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDeadZoneRadius()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Reset((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.onDeActivateContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.onDeActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.onDeActivateContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.onDeActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.onDeActivateContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.onDeActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.onDeActivateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Reset((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.onDeActivate = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.onDeActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.onDeActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.onDeActivateContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects4= [];
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects5= [];


gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchId() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects4[i].isCollidingWithPoint(gdjs.evtTools.input.getTouchX(runtimeScene, gdjs.evtTools.input.getStartedTouchOrMouseIdentifier(runtimeScene, (gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchIndex())), (gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects4[i].getLayer()), 0), gdjs.evtTools.input.getTouchY(runtimeScene, gdjs.evtTools.input.getStartedTouchOrMouseIdentifier(runtimeScene, (gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchIndex())), (gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects4[i].getLayer()), 0)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects4.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTouchId(gdjs.evtTools.input.getStartedTouchOrMouseIdentifier(runtimeScene, (gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchIndex())));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects4);

{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTouchIndex(gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchIndex() + (1));
}
}}

}


};gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


const repeatCount3 = gdjs.evtTools.input.getStartedTouchOrMouseCount(runtimeScene);
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTouchIndex(0);
}
}
{ //Subevents
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasTouchEnded(runtimeScene, (( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchId()));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Reset((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchId() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetJoystickAngle(gdjs.evtTools.common.angleBetweenPositions((gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects1[i].getCenterXInScene()), (gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects1[i].getCenterYInScene()), gdjs.evtTools.input.getTouchX(runtimeScene, (gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchId()), (gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects1[i].getLayer()), 0), gdjs.evtTools.input.getTouchY(runtimeScene, (gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchId()), (gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects1[i].getLayer()), 0)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetJoystickForce(gdjs.evtTools.common.clamp(2 * gdjs.evtTools.common.distanceBetweenPositions((gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects1[i].getCenterXInScene()), (gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects1[i].getCenterYInScene()), gdjs.evtTools.input.getTouchX(runtimeScene, (gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchId()), (gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects1[i].getLayer()), 0), gdjs.evtTools.input.getTouchY(runtimeScene, (gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchId()), (gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects1[i].getLayer()), 0)) / (gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects1[i].getWidth()), 0, 1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.hasGameJustResumed(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Reset((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.GDObjectObjects5.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.JoystickForceContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.JoystickForceContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.JoystickForceContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.JoystickForceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.JoystickForceContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.JoystickForceContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.JoystickForceContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJoystickForce()); }}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.JoystickForce = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.JoystickForceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.JoystickForceContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.JoystickForceContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickForceContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickForceContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickForceContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickForceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickForceContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickForceContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickForceContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setJoystickForce((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}{gdjs.evtsExt__SpriteMultitouchJoystick__SetJoystickForce.func(runtimeScene, (( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickForceContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickForceContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControllerIdentifier()), (( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickForceContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickForceContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJoystickIdentifier()), (( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickForceContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickForceContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJoystickForce()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickForce = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickForceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickForceContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickForceContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.JoystickAngleContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.JoystickAngleContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.JoystickAngleContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.JoystickAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.JoystickAngleContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.JoystickAngleContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.JoystickAngleContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJoystickAngle()); }}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.JoystickAngle = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.JoystickAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.JoystickAngleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.JoystickAngleContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickAngleContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickAngleContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickAngleContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickAngleContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickAngleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickAngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setJoystickAngle((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}{gdjs.evtsExt__SpriteMultitouchJoystick__SetJoystickAngle.func(runtimeScene, (( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickAngleContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickAngleContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControllerIdentifier()), (( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickAngleContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickAngleContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJoystickIdentifier()), (( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickAngleContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickAngleContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJoystickAngle()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickAngle = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickAngleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickAngleContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.StickForceXContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.StickForceXContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.StickForceXContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.StickForceXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.StickForceXContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.StickForceXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.StickForceXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).JoystickForce((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * Math.cos(gdjs.toRad((( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.StickForceXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.StickForceXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).JoystickAngle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))))); }}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.StickForceX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.StickForceXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.StickForceXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.StickForceXContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.StickForceYContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.StickForceYContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.StickForceYContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.StickForceYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.StickForceYContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.StickForceYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.StickForceYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).JoystickForce((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * Math.sin(gdjs.toRad((( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.StickForceYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.StickForceYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).JoystickAngle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))))); }}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.StickForceY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.StickForceYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.StickForceYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.StickForceYContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsDirectionPushed4WayContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsDirectionPushed4WayContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsDirectionPushed4WayContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsDirectionPushed4WayContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsDirectionPushed4WayContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsDirectionPushed4WayContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsDirectionPushed4WayContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJoystickForce() > (gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsDirectionPushed4WayContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDeadZoneRadius()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsDirectionPushed4WayContext.GDObjectObjects1[k] = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsDirectionPushed4WayContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsDirectionPushed4WayContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.func(runtimeScene, (( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsDirectionPushed4WayContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsDirectionPushed4WayContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).JoystickAngle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Direction") : ""), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsDirectionPushed4Way = function(Direction, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Direction") return Direction;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsDirectionPushed4WayContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsDirectionPushed4WayContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsDirectionPushed4WayContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsDirectionPushed8WayContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsDirectionPushed8WayContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsDirectionPushed8WayContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsDirectionPushed8WayContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsDirectionPushed8WayContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsDirectionPushed8WayContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsDirectionPushed8WayContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJoystickForce() > (gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsDirectionPushed8WayContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDeadZoneRadius()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsDirectionPushed8WayContext.GDObjectObjects1[k] = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsDirectionPushed8WayContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsDirectionPushed8WayContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn8WayDirection.func(runtimeScene, (( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsDirectionPushed8WayContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsDirectionPushed8WayContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).JoystickAngle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Direction") : ""), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsDirectionPushed8Way = function(Direction, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Direction") return Direction;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsDirectionPushed8WayContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsDirectionPushed8WayContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsDirectionPushed8WayContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsPressedContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsPressedContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsPressedContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsPressedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsPressedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsPressedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchId() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsPressedContext.GDObjectObjects1[k] = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsPressedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsPressedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsPressed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsPressedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.IsPressedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.ResetContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.ResetContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.ResetContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.ResetContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.ResetContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.ResetContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.ResetContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetJoystickForce(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.ResetContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.ResetContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTouchId(0);
}
}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.Reset = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.ResetContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.ResetContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.ResetContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.ControllerIdentifierContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.ControllerIdentifierContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.ControllerIdentifierContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.ControllerIdentifierContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.ControllerIdentifierContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.ControllerIdentifierContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.ControllerIdentifierContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControllerIdentifier()); }}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.ControllerIdentifier = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.ControllerIdentifierContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.ControllerIdentifierContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.ControllerIdentifierContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetControllerIdentifierContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetControllerIdentifierContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetControllerIdentifierContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetControllerIdentifierContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetControllerIdentifierContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetControllerIdentifierContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetControllerIdentifierContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setControllerIdentifier((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetControllerIdentifier = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetControllerIdentifierContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetControllerIdentifierContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetControllerIdentifierContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.JoystickIdentifierContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.JoystickIdentifierContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.JoystickIdentifierContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.JoystickIdentifierContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.JoystickIdentifierContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.JoystickIdentifierContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.JoystickIdentifierContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJoystickIdentifier()); }}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.JoystickIdentifier = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.JoystickIdentifierContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.JoystickIdentifierContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.JoystickIdentifierContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickIdentifierContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickIdentifierContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickIdentifierContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickIdentifierContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickIdentifierContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickIdentifierContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickIdentifierContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setJoystickIdentifier((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Value") : ""));
}
}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickIdentifier = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickIdentifierContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickIdentifierContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetJoystickIdentifierContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.DeadZoneRadiusContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.DeadZoneRadiusContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.DeadZoneRadiusContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.DeadZoneRadiusContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.DeadZoneRadiusContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.DeadZoneRadiusContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.DeadZoneRadiusContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDeadZoneRadius()); }}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.DeadZoneRadius = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.DeadZoneRadiusContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.DeadZoneRadiusContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.DeadZoneRadiusContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetDeadZoneRadiusContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetDeadZoneRadiusContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetDeadZoneRadiusContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetDeadZoneRadiusContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetDeadZoneRadiusContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetDeadZoneRadiusContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetDeadZoneRadiusContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDeadZoneRadius((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetDeadZoneRadius = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetDeadZoneRadiusContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetDeadZoneRadiusContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick.prototype.SetDeadZoneRadiusContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("SpriteMultitouchJoystick::MultitouchJoystick", gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchJoystick.MultitouchJoystick);
