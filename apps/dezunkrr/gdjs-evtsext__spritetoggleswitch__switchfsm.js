
gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM = gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM || {};

/**
 * Behavior generated from Switch finite state machine
 */
gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM = class SwitchFSM extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.ButtonFSM = behaviorData.ButtonFSM !== undefined ? behaviorData.ButtonFSM : "";
    this._behaviorData.IsChecked = behaviorData.IsChecked !== undefined ? behaviorData.IsChecked : false;
    this._behaviorData.WasChecked = false;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.ButtonFSM !== newBehaviorData.ButtonFSM)
      this._behaviorData.ButtonFSM = newBehaviorData.ButtonFSM;
    if (oldBehaviorData.IsChecked !== newBehaviorData.IsChecked)
      this._behaviorData.IsChecked = newBehaviorData.IsChecked;
    if (oldBehaviorData.WasChecked !== newBehaviorData.WasChecked)
      this._behaviorData.WasChecked = newBehaviorData.WasChecked;

    return true;
  }

  // Properties:
  
  _getButtonFSM() {
    return this._behaviorData.ButtonFSM !== undefined ? this._behaviorData.ButtonFSM : "";
  }
  _setButtonFSM(newValue) {
    this._behaviorData.ButtonFSM = newValue;
  }
  _getIsChecked() {
    return this._behaviorData.IsChecked !== undefined ? this._behaviorData.IsChecked : false;
  }
  _setIsChecked(newValue) {
    this._behaviorData.IsChecked = newValue;
  }
  _toggleIsChecked() {
    this._setIsChecked(!this._getIsChecked());
  }
  _getWasChecked() {
    return this._behaviorData.WasChecked !== undefined ? this._behaviorData.WasChecked : false;
  }
  _setWasChecked(newValue) {
    this._behaviorData.WasChecked = newValue;
  }
  _toggleWasChecked() {
    this._setWasChecked(!this._getWasChecked());
  }
}

/**
 * Shared data generated from Switch finite state machine
 */
gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.SharedData = class SwitchFSMSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._SpriteToggleSwitch_SwitchFSMSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._SpriteToggleSwitch_SwitchFSMSharedData = new gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.SharedData(
      initialData
    );
  }
  return instanceContainer._SpriteToggleSwitch_SwitchFSMSharedData;
}

// Methods:
gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWasChecked(false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWasChecked(true);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._toggleIsChecked();
}
}}

}


};

gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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
, "ButtonFSM": this._getButtonFSM()
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

gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.IsCheckedContext = {};
gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.IsCheckedContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.IsCheckedContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.IsCheckedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.IsCheckedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.IsCheckedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.IsCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsChecked() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.IsCheckedContext.GDObjectObjects1[k] = gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.IsCheckedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.IsCheckedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.IsChecked = function(parentEventsFunctionContext) {

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
, "ButtonFSM": this._getButtonFSM()
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

gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.IsCheckedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.IsCheckedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.IsCheckedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.HasJustBeenCheckedContext = {};
gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.HasJustBeenCheckedContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.HasJustBeenCheckedContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.HasJustBeenCheckedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.HasJustBeenCheckedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.HasJustBeenCheckedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.HasJustBeenCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsChecked() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.HasJustBeenCheckedContext.GDObjectObjects1[k] = gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.HasJustBeenCheckedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.HasJustBeenCheckedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.HasJustBeenCheckedContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.HasJustBeenCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWasChecked()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.HasJustBeenCheckedContext.GDObjectObjects1[k] = gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.HasJustBeenCheckedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.HasJustBeenCheckedContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.HasJustBeenChecked = function(parentEventsFunctionContext) {

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
, "ButtonFSM": this._getButtonFSM()
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

gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.HasJustBeenCheckedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.HasJustBeenCheckedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.HasJustBeenCheckedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.HasJustBeenUncheckedContext = {};
gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.HasJustBeenUncheckedContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.HasJustBeenUncheckedContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.HasJustBeenUncheckedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.HasJustBeenUncheckedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.HasJustBeenUncheckedContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.HasJustBeenUncheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsChecked()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.HasJustBeenUncheckedContext.GDObjectObjects1[k] = gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.HasJustBeenUncheckedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.HasJustBeenUncheckedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.HasJustBeenUncheckedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.HasJustBeenUncheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWasChecked() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.HasJustBeenUncheckedContext.GDObjectObjects1[k] = gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.HasJustBeenUncheckedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.HasJustBeenUncheckedContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.HasJustBeenUnchecked = function(parentEventsFunctionContext) {

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
, "ButtonFSM": this._getButtonFSM()
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

gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.HasJustBeenUncheckedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.HasJustBeenUncheckedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.HasJustBeenUncheckedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext = {};
gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
{isConditionTrue_2 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects2[k] = gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects2.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects1_1final.push(gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
{isConditionTrue_2 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects2[k] = gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects2.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects1_1final.push(gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects1_1final, gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).ResetState((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsChecked(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsChecked(true);
}
}}

}


};

gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetChecked = function(Value, parentEventsFunctionContext) {

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
, "ButtonFSM": this._getButtonFSM()
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

gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM.prototype.SetCheckedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("SpriteToggleSwitch::SwitchFSM", gdjs.evtsExt__SpriteToggleSwitch__SwitchFSM.SwitchFSM);
