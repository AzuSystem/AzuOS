
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick = gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick || {};

/**
 * Object generated from Multitouch Joystick
 */
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick = class SpriteMultitouchJoystick extends gdjs.CustomRuntimeObject {
  constructor(parentInstanceContainer, objectData) {
    super(parentInstanceContainer, objectData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    this._objectData.ControllerIdentifier = objectData.content.ControllerIdentifier !== undefined ? objectData.content.ControllerIdentifier : Number("1") || 0;
    this._objectData.JoystickIdentifier = objectData.content.JoystickIdentifier !== undefined ? objectData.content.JoystickIdentifier : "Primary";
    this._objectData.DeadZoneRadius = objectData.content.DeadZoneRadius !== undefined ? objectData.content.DeadZoneRadius : Number("0.4") || 0;
    this._objectData.ThumbAnchorOrigin = "Center-center";
    this._objectData.ThumbAnchorTarget = Number("Center-center") || 0;
    this._objectData.ThumbIsScaledProportionally = true;
    this._objectData.ParentOrigin = "Center-center";

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.ControllerIdentifier !== newObjectData.content.ControllerIdentifier)
      this._objectData.ControllerIdentifier = newObjectData.content.ControllerIdentifier;
    if (oldObjectData.content.JoystickIdentifier !== newObjectData.content.JoystickIdentifier)
      this._objectData.JoystickIdentifier = newObjectData.content.JoystickIdentifier;
    if (oldObjectData.content.DeadZoneRadius !== newObjectData.content.DeadZoneRadius)
      this._objectData.DeadZoneRadius = newObjectData.content.DeadZoneRadius;
    if (oldObjectData.content.ThumbAnchorOrigin !== newObjectData.content.ThumbAnchorOrigin)
      this._objectData.ThumbAnchorOrigin = newObjectData.content.ThumbAnchorOrigin;
    if (oldObjectData.content.ThumbAnchorTarget !== newObjectData.content.ThumbAnchorTarget)
      this._objectData.ThumbAnchorTarget = newObjectData.content.ThumbAnchorTarget;
    if (oldObjectData.content.ThumbIsScaledProportionally !== newObjectData.content.ThumbIsScaledProportionally)
      this._objectData.ThumbIsScaledProportionally = newObjectData.content.ThumbIsScaledProportionally;
    if (oldObjectData.content.ParentOrigin !== newObjectData.content.ParentOrigin)
      this._objectData.ParentOrigin = newObjectData.content.ParentOrigin;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getControllerIdentifier() {
    return this._objectData.ControllerIdentifier !== undefined ? this._objectData.ControllerIdentifier : Number("1") || 0;
  }
  _setControllerIdentifier(newValue) {
    this._objectData.ControllerIdentifier = newValue;
  }
  _getJoystickIdentifier() {
    return this._objectData.JoystickIdentifier !== undefined ? this._objectData.JoystickIdentifier : "Primary";
  }
  _setJoystickIdentifier(newValue) {
    this._objectData.JoystickIdentifier = newValue;
  }
  _getDeadZoneRadius() {
    return this._objectData.DeadZoneRadius !== undefined ? this._objectData.DeadZoneRadius : Number("0.4") || 0;
  }
  _setDeadZoneRadius(newValue) {
    this._objectData.DeadZoneRadius = newValue;
  }
  _getThumbAnchorOrigin() {
    return this._objectData.ThumbAnchorOrigin !== undefined ? this._objectData.ThumbAnchorOrigin : "Center-center";
  }
  _setThumbAnchorOrigin(newValue) {
    this._objectData.ThumbAnchorOrigin = newValue;
  }
  _getThumbAnchorTarget() {
    return this._objectData.ThumbAnchorTarget !== undefined ? this._objectData.ThumbAnchorTarget : Number("Center-center") || 0;
  }
  _setThumbAnchorTarget(newValue) {
    this._objectData.ThumbAnchorTarget = newValue;
  }
  _getThumbIsScaledProportionally() {
    return this._objectData.ThumbIsScaledProportionally !== undefined ? this._objectData.ThumbIsScaledProportionally : true;
  }
  _setThumbIsScaledProportionally(newValue) {
    this._objectData.ThumbIsScaledProportionally = newValue;
  }
  _toggleThumbIsScaledProportionally() {
    this._setThumbIsScaledProportionally(!this._getThumbIsScaledProportionally());
  }
  _getParentOrigin() {
    return this._objectData.ParentOrigin !== undefined ? this._objectData.ParentOrigin : "Center-center";
  }
  _setParentOrigin(newValue) {
    this._objectData.ParentOrigin = newValue;
  }
}

// Methods:
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onCreatedContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onCreatedContext.GDThumbObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onCreatedContext.GDThumbObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onCreatedContext.GDBorderObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onCreatedContext.GDBorderObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onCreatedContext.mapOfGDgdjs_46evtsExt_95_95SpriteMultitouchJoystick_95_95SpriteMultitouchJoystick_46SpriteMultitouchJoystick_46prototype_46onCreatedContext_46GDBorderObjects1Objects = Hashtable.newFrom({"Border": gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onCreatedContext.GDBorderObjects1});
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onCreatedContext.mapOfGDgdjs_46evtsExt_95_95SpriteMultitouchJoystick_95_95SpriteMultitouchJoystick_46SpriteMultitouchJoystick_46prototype_46onCreatedContext_46GDThumbObjects1Objects = Hashtable.newFrom({"Thumb": gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onCreatedContext.GDThumbObjects1});
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onCreatedContext.GDObjectObjects1);
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onCreatedContext.GDBorderObjects1.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onCreatedContext.GDThumbObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onCreatedContext.mapOfGDgdjs_46evtsExt_95_95SpriteMultitouchJoystick_95_95SpriteMultitouchJoystick_46SpriteMultitouchJoystick_46prototype_46onCreatedContext_46GDBorderObjects1Objects, 0, 0, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onCreatedContext.mapOfGDgdjs_46evtsExt_95_95SpriteMultitouchJoystick_95_95SpriteMultitouchJoystick_46SpriteMultitouchJoystick_46prototype_46onCreatedContext_46GDThumbObjects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onCreatedContext.GDBorderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onCreatedContext.GDBorderObjects1[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onCreatedContext.GDThumbObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onCreatedContext.GDThumbObjects1[i].setZOrder(2);
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onCreatedContext.GDBorderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onCreatedContext.GDBorderObjects1[i].setCenterPositionInScene(0,0);
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onCreatedContext.GDThumbObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onCreatedContext.GDThumbObjects1[i].setCenterPositionInScene(0,0);
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onCreatedContext.GDObjectObjects1[i].UpdateConfiguration((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onCreatedContext.GDThumbObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onCreatedContext.GDThumbObjects1[i].setIncludedInParentCollisionMask(false);
}
}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDBorderObjectsList = [...runtimeScene.getObjects("Border")];
var GDBorderObjects = Hashtable.newFrom({"Border": thisGDBorderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Thumb": GDThumbObjects
, "Border": GDBorderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Thumb": thisGDThumbObjectsList
, "Border": thisGDBorderObjectsList
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onCreatedContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onCreatedContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onCreatedContext.GDBorderObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onCreatedContext.GDBorderObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.doStepPostEventsContext.GDThumbObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.doStepPostEventsContext.GDThumbObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.doStepPostEventsContext.GDBorderObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.doStepPostEventsContext.GDBorderObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Border"), gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.doStepPostEventsContext.GDBorderObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Thumb"), gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.doStepPostEventsContext.GDThumbObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.doStepPostEventsContext.GDThumbObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.doStepPostEventsContext.GDThumbObjects1[i].putAroundObject((gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.doStepPostEventsContext.GDBorderObjects1.length !== 0 ? gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.doStepPostEventsContext.GDBorderObjects1[0] : null), (( gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.doStepPostEventsContext.GDBorderObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.doStepPostEventsContext.GDBorderObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("MultitouchJoystick")).JoystickForce((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * (( gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.doStepPostEventsContext.GDBorderObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.doStepPostEventsContext.GDBorderObjects1[0].getWidth()) / 2, (( gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.doStepPostEventsContext.GDBorderObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.doStepPostEventsContext.GDBorderObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("MultitouchJoystick")).JoystickAngle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDBorderObjectsList = [...runtimeScene.getObjects("Border")];
var GDBorderObjects = Hashtable.newFrom({"Border": thisGDBorderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Thumb": GDThumbObjects
, "Border": GDBorderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Thumb": thisGDThumbObjectsList
, "Border": thisGDBorderObjectsList
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.doStepPostEventsContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.doStepPostEventsContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.doStepPostEventsContext.GDBorderObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.doStepPostEventsContext.GDBorderObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onHotReloadingContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onHotReloadingContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onHotReloadingContext.GDObjectObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onHotReloadingContext.GDThumbObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onHotReloadingContext.GDThumbObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onHotReloadingContext.GDBorderObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onHotReloadingContext.GDBorderObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onHotReloadingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onHotReloadingContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onHotReloadingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onHotReloadingContext.GDObjectObjects1[i].UpdateConfiguration((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onHotReloading = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDBorderObjectsList = [...runtimeScene.getObjects("Border")];
var GDBorderObjects = Hashtable.newFrom({"Border": thisGDBorderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Thumb": GDThumbObjects
, "Border": GDBorderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Thumb": thisGDThumbObjectsList
, "Border": thisGDBorderObjectsList
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onHotReloadingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onHotReloadingContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onHotReloadingContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onHotReloadingContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onHotReloadingContext.GDBorderObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onHotReloadingContext.GDBorderObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.onHotReloadingContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.UpdateConfigurationContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.UpdateConfigurationContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.UpdateConfigurationContext.GDObjectObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.UpdateConfigurationContext.GDThumbObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.UpdateConfigurationContext.GDThumbObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.UpdateConfigurationContext.GDBorderObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.UpdateConfigurationContext.GDBorderObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.UpdateConfigurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Border"), gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.UpdateConfigurationContext.GDBorderObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.UpdateConfigurationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.UpdateConfigurationContext.GDBorderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.UpdateConfigurationContext.GDBorderObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("MultitouchJoystick")).SetControllerIdentifier((( gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.UpdateConfigurationContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.UpdateConfigurationContext.GDObjectObjects1[0]._getControllerIdentifier()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.UpdateConfigurationContext.GDBorderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.UpdateConfigurationContext.GDBorderObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("MultitouchJoystick")).SetJoystickIdentifier((( gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.UpdateConfigurationContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.UpdateConfigurationContext.GDObjectObjects1[0]._getJoystickIdentifier()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.UpdateConfigurationContext.GDBorderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.UpdateConfigurationContext.GDBorderObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("MultitouchJoystick")).SetDeadZoneRadius((( gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.UpdateConfigurationContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.UpdateConfigurationContext.GDObjectObjects1[0]._getDeadZoneRadius()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.UpdateConfiguration = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDBorderObjectsList = [...runtimeScene.getObjects("Border")];
var GDBorderObjects = Hashtable.newFrom({"Border": thisGDBorderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Thumb": GDThumbObjects
, "Border": GDBorderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Thumb": thisGDThumbObjectsList
, "Border": thisGDBorderObjectsList
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.UpdateConfigurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.UpdateConfigurationContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.UpdateConfigurationContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.UpdateConfigurationContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.UpdateConfigurationContext.GDBorderObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.UpdateConfigurationContext.GDBorderObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.UpdateConfigurationContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ActivateControlContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ActivateControlContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ActivateControlContext.GDObjectObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ActivateControlContext.GDThumbObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ActivateControlContext.GDThumbObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ActivateControlContext.GDBorderObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ActivateControlContext.GDBorderObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ActivateControlContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("ShouldActivate") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Border"), gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ActivateControlContext.GDBorderObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ActivateControlContext.GDBorderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ActivateControlContext.GDBorderObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("MultitouchJoystick"), false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("ShouldActivate") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Border"), gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ActivateControlContext.GDBorderObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ActivateControlContext.GDBorderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ActivateControlContext.GDBorderObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("MultitouchJoystick"), true);
}
}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ActivateControl = function(ShouldActivate, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDBorderObjectsList = [...runtimeScene.getObjects("Border")];
var GDBorderObjects = Hashtable.newFrom({"Border": thisGDBorderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Thumb": GDThumbObjects
, "Border": GDBorderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Thumb": thisGDThumbObjectsList
, "Border": thisGDBorderObjectsList
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
if (argName === "ShouldActivate") return ShouldActivate;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ActivateControlContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ActivateControlContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ActivateControlContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ActivateControlContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ActivateControlContext.GDBorderObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ActivateControlContext.GDBorderObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ActivateControlContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsPressedContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsPressedContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsPressedContext.GDObjectObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsPressedContext.GDThumbObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsPressedContext.GDThumbObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsPressedContext.GDBorderObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsPressedContext.GDBorderObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Border"), gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsPressedContext.GDBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsPressedContext.GDBorderObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsPressedContext.GDBorderObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("MultitouchJoystick")).IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsPressedContext.GDBorderObjects1[k] = gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsPressedContext.GDBorderObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsPressedContext.GDBorderObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsPressed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDBorderObjectsList = [...runtimeScene.getObjects("Border")];
var GDBorderObjects = Hashtable.newFrom({"Border": thisGDBorderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Thumb": GDThumbObjects
, "Border": GDBorderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Thumb": thisGDThumbObjectsList
, "Border": thisGDBorderObjectsList
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsPressedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsPressedContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsPressedContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsPressedContext.GDBorderObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsPressedContext.GDBorderObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsPressedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickForceContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickForceContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickForceContext.GDObjectObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickForceContext.GDThumbObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickForceContext.GDThumbObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickForceContext.GDBorderObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickForceContext.GDBorderObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickForceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Border"), gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickForceContext.GDBorderObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickForceContext.GDBorderObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickForceContext.GDBorderObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("MultitouchJoystick")).JoystickForce((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))); }}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickForce = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDBorderObjectsList = [...runtimeScene.getObjects("Border")];
var GDBorderObjects = Hashtable.newFrom({"Border": thisGDBorderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Thumb": GDThumbObjects
, "Border": GDBorderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Thumb": thisGDThumbObjectsList
, "Border": thisGDBorderObjectsList
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickForceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickForceContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickForceContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickForceContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickForceContext.GDBorderObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickForceContext.GDBorderObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickForceContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceContext.GDObjectObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceContext.GDThumbObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceContext.GDThumbObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceContext.GDBorderObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceContext.GDBorderObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Border"), gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceContext.GDBorderObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceContext.GDBorderObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceContext.GDBorderObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("MultitouchJoystick")).JoystickForce((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))); }}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForce = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDBorderObjectsList = [...runtimeScene.getObjects("Border")];
var GDBorderObjects = Hashtable.newFrom({"Border": thisGDBorderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Thumb": GDThumbObjects
, "Border": GDBorderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Thumb": thisGDThumbObjectsList
, "Border": thisGDBorderObjectsList
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceContext.GDBorderObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceContext.GDBorderObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceXContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceXContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceXContext.GDObjectObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceXContext.GDThumbObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceXContext.GDThumbObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceXContext.GDBorderObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceXContext.GDBorderObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Border"), gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceXContext.GDBorderObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceXContext.GDBorderObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceXContext.GDBorderObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("MultitouchJoystick")).StickForceX((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))); }}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDBorderObjectsList = [...runtimeScene.getObjects("Border")];
var GDBorderObjects = Hashtable.newFrom({"Border": thisGDBorderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Thumb": GDThumbObjects
, "Border": GDBorderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Thumb": thisGDThumbObjectsList
, "Border": thisGDBorderObjectsList
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceXContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceXContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceXContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceXContext.GDBorderObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceXContext.GDBorderObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceXContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceYContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceYContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceYContext.GDObjectObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceYContext.GDThumbObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceYContext.GDThumbObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceYContext.GDBorderObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceYContext.GDBorderObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Border"), gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceYContext.GDBorderObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceYContext.GDBorderObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceYContext.GDBorderObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("MultitouchJoystick")).StickForceY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))); }}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDBorderObjectsList = [...runtimeScene.getObjects("Border")];
var GDBorderObjects = Hashtable.newFrom({"Border": thisGDBorderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Thumb": GDThumbObjects
, "Border": GDBorderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Thumb": thisGDThumbObjectsList
, "Border": thisGDBorderObjectsList
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceYContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceYContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceYContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceYContext.GDBorderObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceYContext.GDBorderObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickForceYContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickAngleContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickAngleContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickAngleContext.GDObjectObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickAngleContext.GDThumbObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickAngleContext.GDThumbObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickAngleContext.GDBorderObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickAngleContext.GDBorderObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Border"), gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickAngleContext.GDBorderObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickAngleContext.GDBorderObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickAngleContext.GDBorderObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("MultitouchJoystick")).JoystickAngle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))); }}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickAngle = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDBorderObjectsList = [...runtimeScene.getObjects("Border")];
var GDBorderObjects = Hashtable.newFrom({"Border": thisGDBorderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Thumb": GDThumbObjects
, "Border": GDBorderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Thumb": thisGDThumbObjectsList
, "Border": thisGDBorderObjectsList
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickAngleContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickAngleContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickAngleContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickAngleContext.GDBorderObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickAngleContext.GDBorderObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickAngleContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickAngleContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickAngleContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickAngleContext.GDObjectObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickAngleContext.GDThumbObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickAngleContext.GDThumbObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickAngleContext.GDBorderObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickAngleContext.GDBorderObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Border"), gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickAngleContext.GDBorderObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickAngleContext.GDBorderObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickAngleContext.GDBorderObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("MultitouchJoystick")).JoystickAngle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))); }}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickAngle = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDBorderObjectsList = [...runtimeScene.getObjects("Border")];
var GDBorderObjects = Hashtable.newFrom({"Border": thisGDBorderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Thumb": GDThumbObjects
, "Border": GDBorderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Thumb": thisGDThumbObjectsList
, "Border": thisGDBorderObjectsList
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickAngleContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickAngleContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickAngleContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickAngleContext.GDBorderObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickAngleContext.GDBorderObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.StickAngleContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed4WayContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed4WayContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed4WayContext.GDObjectObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed4WayContext.GDThumbObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed4WayContext.GDThumbObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed4WayContext.GDBorderObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed4WayContext.GDBorderObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed4WayContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Border"), gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed4WayContext.GDBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed4WayContext.GDBorderObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed4WayContext.GDBorderObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("MultitouchJoystick")).IsDirectionPushed4Way((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Direction") : ""), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed4WayContext.GDBorderObjects1[k] = gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed4WayContext.GDBorderObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed4WayContext.GDBorderObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed4Way = function(Direction, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDBorderObjectsList = [...runtimeScene.getObjects("Border")];
var GDBorderObjects = Hashtable.newFrom({"Border": thisGDBorderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Thumb": GDThumbObjects
, "Border": GDBorderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Thumb": thisGDThumbObjectsList
, "Border": thisGDBorderObjectsList
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
if (argName === "Direction") return Direction;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed4WayContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed4WayContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed4WayContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed4WayContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed4WayContext.GDBorderObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed4WayContext.GDBorderObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed4WayContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed8WayContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed8WayContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed8WayContext.GDObjectObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed8WayContext.GDThumbObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed8WayContext.GDThumbObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed8WayContext.GDBorderObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed8WayContext.GDBorderObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed8WayContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Border"), gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed8WayContext.GDBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed8WayContext.GDBorderObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed8WayContext.GDBorderObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("MultitouchJoystick")).IsDirectionPushed8Way((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Direction") : ""), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed8WayContext.GDBorderObjects1[k] = gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed8WayContext.GDBorderObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed8WayContext.GDBorderObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed8Way = function(Direction, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDBorderObjectsList = [...runtimeScene.getObjects("Border")];
var GDBorderObjects = Hashtable.newFrom({"Border": thisGDBorderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Thumb": GDThumbObjects
, "Border": GDBorderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Thumb": thisGDThumbObjectsList
, "Border": thisGDBorderObjectsList
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
if (argName === "Direction") return Direction;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed8WayContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed8WayContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed8WayContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed8WayContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed8WayContext.GDBorderObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed8WayContext.GDBorderObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.IsDirectionPushed8WayContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ControllerIdentifierContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ControllerIdentifierContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ControllerIdentifierContext.GDObjectObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ControllerIdentifierContext.GDThumbObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ControllerIdentifierContext.GDThumbObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ControllerIdentifierContext.GDBorderObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ControllerIdentifierContext.GDBorderObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ControllerIdentifierContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Border"), gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ControllerIdentifierContext.GDBorderObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ControllerIdentifierContext.GDBorderObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ControllerIdentifierContext.GDBorderObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("MultitouchJoystick"))._getControllerIdentifier()); }}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ControllerIdentifier = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDBorderObjectsList = [...runtimeScene.getObjects("Border")];
var GDBorderObjects = Hashtable.newFrom({"Border": thisGDBorderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Thumb": GDThumbObjects
, "Border": GDBorderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Thumb": thisGDThumbObjectsList
, "Border": thisGDBorderObjectsList
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ControllerIdentifierContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ControllerIdentifierContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ControllerIdentifierContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ControllerIdentifierContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ControllerIdentifierContext.GDBorderObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ControllerIdentifierContext.GDBorderObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.ControllerIdentifierContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetControllerIdentifierContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetControllerIdentifierContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetControllerIdentifierContext.GDObjectObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetControllerIdentifierContext.GDThumbObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetControllerIdentifierContext.GDThumbObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetControllerIdentifierContext.GDBorderObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetControllerIdentifierContext.GDBorderObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetControllerIdentifierContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Border"), gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetControllerIdentifierContext.GDBorderObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetControllerIdentifierContext.GDBorderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetControllerIdentifierContext.GDBorderObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("MultitouchJoystick")).SetControllerIdentifier((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetControllerIdentifier = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDBorderObjectsList = [...runtimeScene.getObjects("Border")];
var GDBorderObjects = Hashtable.newFrom({"Border": thisGDBorderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Thumb": GDThumbObjects
, "Border": GDBorderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Thumb": thisGDThumbObjectsList
, "Border": thisGDBorderObjectsList
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetControllerIdentifierContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetControllerIdentifierContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetControllerIdentifierContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetControllerIdentifierContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetControllerIdentifierContext.GDBorderObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetControllerIdentifierContext.GDBorderObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetControllerIdentifierContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickIdentifierContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickIdentifierContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickIdentifierContext.GDObjectObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickIdentifierContext.GDThumbObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickIdentifierContext.GDThumbObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickIdentifierContext.GDBorderObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickIdentifierContext.GDBorderObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickIdentifierContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Border"), gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickIdentifierContext.GDBorderObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickIdentifierContext.GDBorderObjects1.length === 0 ) ? "" :gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickIdentifierContext.GDBorderObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("MultitouchJoystick"))._getJoystickIdentifier()); }}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickIdentifier = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDBorderObjectsList = [...runtimeScene.getObjects("Border")];
var GDBorderObjects = Hashtable.newFrom({"Border": thisGDBorderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Thumb": GDThumbObjects
, "Border": GDBorderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Thumb": thisGDThumbObjectsList
, "Border": thisGDBorderObjectsList
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickIdentifierContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickIdentifierContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickIdentifierContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickIdentifierContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickIdentifierContext.GDBorderObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickIdentifierContext.GDBorderObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.JoystickIdentifierContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetJoystickIdentifierContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetJoystickIdentifierContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetJoystickIdentifierContext.GDObjectObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetJoystickIdentifierContext.GDThumbObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetJoystickIdentifierContext.GDThumbObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetJoystickIdentifierContext.GDBorderObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetJoystickIdentifierContext.GDBorderObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetJoystickIdentifierContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Border"), gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetJoystickIdentifierContext.GDBorderObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetJoystickIdentifierContext.GDBorderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetJoystickIdentifierContext.GDBorderObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("MultitouchJoystick")).SetJoystickIdentifier((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Value") : ""), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetJoystickIdentifier = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDBorderObjectsList = [...runtimeScene.getObjects("Border")];
var GDBorderObjects = Hashtable.newFrom({"Border": thisGDBorderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Thumb": GDThumbObjects
, "Border": GDBorderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Thumb": thisGDThumbObjectsList
, "Border": thisGDBorderObjectsList
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetJoystickIdentifierContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetJoystickIdentifierContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetJoystickIdentifierContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetJoystickIdentifierContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetJoystickIdentifierContext.GDBorderObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetJoystickIdentifierContext.GDBorderObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetJoystickIdentifierContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.DeadZoneRadiusContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.DeadZoneRadiusContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.DeadZoneRadiusContext.GDObjectObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.DeadZoneRadiusContext.GDThumbObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.DeadZoneRadiusContext.GDThumbObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.DeadZoneRadiusContext.GDBorderObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.DeadZoneRadiusContext.GDBorderObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.DeadZoneRadiusContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Border"), gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.DeadZoneRadiusContext.GDBorderObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.DeadZoneRadiusContext.GDBorderObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.DeadZoneRadiusContext.GDBorderObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("MultitouchJoystick"))._getDeadZoneRadius()); }}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.DeadZoneRadius = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDBorderObjectsList = [...runtimeScene.getObjects("Border")];
var GDBorderObjects = Hashtable.newFrom({"Border": thisGDBorderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Thumb": GDThumbObjects
, "Border": GDBorderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Thumb": thisGDThumbObjectsList
, "Border": thisGDBorderObjectsList
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.DeadZoneRadiusContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.DeadZoneRadiusContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.DeadZoneRadiusContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.DeadZoneRadiusContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.DeadZoneRadiusContext.GDBorderObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.DeadZoneRadiusContext.GDBorderObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.DeadZoneRadiusContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetDeadZoneRadiusContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetDeadZoneRadiusContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetDeadZoneRadiusContext.GDObjectObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetDeadZoneRadiusContext.GDThumbObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetDeadZoneRadiusContext.GDThumbObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetDeadZoneRadiusContext.GDBorderObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetDeadZoneRadiusContext.GDBorderObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetDeadZoneRadiusContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Border"), gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetDeadZoneRadiusContext.GDBorderObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetDeadZoneRadiusContext.GDBorderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetDeadZoneRadiusContext.GDBorderObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("MultitouchJoystick")).SetDeadZoneRadius((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetDeadZoneRadius = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDBorderObjectsList = [...runtimeScene.getObjects("Border")];
var GDBorderObjects = Hashtable.newFrom({"Border": thisGDBorderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Thumb": GDThumbObjects
, "Border": GDBorderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Thumb": thisGDThumbObjectsList
, "Border": thisGDBorderObjectsList
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetDeadZoneRadiusContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetDeadZoneRadiusContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetDeadZoneRadiusContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetDeadZoneRadiusContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetDeadZoneRadiusContext.GDBorderObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetDeadZoneRadiusContext.GDBorderObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.SetDeadZoneRadiusContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("SpriteMultitouchJoystick::SpriteMultitouchJoystick", gdjs.evtsExt__SpriteMultitouchJoystick__SpriteMultitouchJoystick.SpriteMultitouchJoystick);
