
gdjs.evtsExt__WithThreeJS__LinkedCamera = gdjs.evtsExt__WithThreeJS__LinkedCamera || {};

/**
 * Behavior generated from Linked 3D Camera
 */
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera = class LinkedCamera extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.ProjectionScale = behaviorData.ProjectionScale !== undefined ? behaviorData.ProjectionScale : Number("0.01") || 0;
    this._behaviorData.LinkAngle = behaviorData.LinkAngle !== undefined ? behaviorData.LinkAngle : true;
    this._behaviorData.ViewMode = behaviorData.ViewMode !== undefined ? behaviorData.ViewMode : "Top Down";
    this._behaviorData.Hide = behaviorData.Hide !== undefined ? behaviorData.Hide : true;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.ProjectionScale !== newBehaviorData.ProjectionScale)
      this._behaviorData.ProjectionScale = newBehaviorData.ProjectionScale;
    if (oldBehaviorData.LinkAngle !== newBehaviorData.LinkAngle)
      this._behaviorData.LinkAngle = newBehaviorData.LinkAngle;
    if (oldBehaviorData.ViewMode !== newBehaviorData.ViewMode)
      this._behaviorData.ViewMode = newBehaviorData.ViewMode;
    if (oldBehaviorData.Hide !== newBehaviorData.Hide)
      this._behaviorData.Hide = newBehaviorData.Hide;

    return true;
  }

  // Properties:
  
  _getProjectionScale() {
    return this._behaviorData.ProjectionScale !== undefined ? this._behaviorData.ProjectionScale : Number("0.01") || 0;
  }
  _setProjectionScale(newValue) {
    this._behaviorData.ProjectionScale = newValue;
  }
  _getLinkAngle() {
    return this._behaviorData.LinkAngle !== undefined ? this._behaviorData.LinkAngle : true;
  }
  _setLinkAngle(newValue) {
    this._behaviorData.LinkAngle = newValue;
  }
  _toggleLinkAngle() {
    this._setLinkAngle(!this._getLinkAngle());
  }
  _getViewMode() {
    return this._behaviorData.ViewMode !== undefined ? this._behaviorData.ViewMode : "Top Down";
  }
  _setViewMode(newValue) {
    this._behaviorData.ViewMode = newValue;
  }
  _getHide() {
    return this._behaviorData.Hide !== undefined ? this._behaviorData.Hide : true;
  }
  _setHide(newValue) {
    this._behaviorData.Hide = newValue;
  }
  _toggleHide() {
    this._setHide(!this._getHide());
  }
}

/**
 * Shared data generated from Linked 3D Camera
 */
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.SharedData = class LinkedCameraSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._WithThreeJS_LinkedCameraSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._WithThreeJS_LinkedCameraSharedData = new gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.SharedData(
      initialData
    );
  }
  return instanceContainer._WithThreeJS_LinkedCameraSharedData;
}

// Methods:
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.doStepPostEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.doStepPostEventsContext.userFunc0x1291e18 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Camera = gdjs.__WithThreeJS.get("Camera");
const Behavior = objects[0].getBehavior("LinkedCamera");
const ProjectionScale = Behavior.ProjectionScale();
const LinkAngle = Behavior.LinkAngle();
const ViewMode = Behavior.ViewMode();
const Hide = Behavior.Hide();
const X = objects[0].x;
const Y = objects[0].y;
const Z = objects[0].zOrder;
//
if (ViewMode == "Top Down") {
    Camera.position.set(X * ProjectionScale, Z * ProjectionScale, Y * ProjectionScale);
} else {
    Camera.position.set(X * ProjectionScale, -Y * ProjectionScale, Z * ProjectionScale);
}
//
if (LinkAngle) {
    const Angle = objects[0].angle;
    const XAngle = objects[0].getVariables().get("XAngle").getAsNumber();
    if (ViewMode == "Top Down") {

        // x y z w
        // Camera.rotation.set(gdjs.toRad(0), gdjs.toRad(Angle * -1 - 90), gdjs.toRad(0));

        // Includes Vertical rotation
        Camera.rotation.set(gdjs.toRad(XAngle), gdjs.toRad(Angle * -1 - 90), gdjs.toRad(0), "YXZ");

    } else {
        Camera.rotation.set(gdjs.toRad(-Angle), gdjs.toRad(-90), gdjs.toRad(0), "YXZ");
    }
}
//
objects[0].hide(Hide);


};
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.doStepPostEventsContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.doStepPostEventsContext.GDObjectObjects1);
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.doStepPostEventsContext.userFunc0x1291e18(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.ProjectionScaleContext = {};
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.ProjectionScaleContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.ProjectionScaleContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.ProjectionScaleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.ProjectionScaleContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.ProjectionScaleContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.ProjectionScaleContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProjectionScale()); }}}

}


};

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.ProjectionScale = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.ProjectionScaleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.ProjectionScaleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.ProjectionScaleContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.ViewModeContext = {};
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.ViewModeContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.ViewModeContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.ViewModeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.ViewModeContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.ViewModeContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.ViewModeContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getViewMode()); }}}

}


};

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.ViewMode = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.ViewModeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.ViewModeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.ViewModeContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngleContext = {};
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngleContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngleContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngleContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngleContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLinkAngle() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngleContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngleContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngleContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngleContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngleContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLinkAngle()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngleContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngleContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngleContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


};

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngle = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngleContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.HideContext = {};
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.HideContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.HideContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.HideContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.HideContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.HideContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.HideContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHide() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.HideContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.HideContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.HideContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.HideContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.HideContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.HideContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHide()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.HideContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.HideContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.HideContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


};

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.Hide = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.HideContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.HideContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.HideContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.onCreatedContext = {};
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("XAngle")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("YAngle")).setNumber(0);
}
}}

}


};

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.SetProjectionScaleContext = {};
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.SetProjectionScaleContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.SetProjectionScaleContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.SetProjectionScaleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.SetProjectionScaleContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.SetProjectionScaleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.SetProjectionScaleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setProjectionScale((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Scale")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.SetProjectionScale = function(Scale, parentEventsFunctionContext) {

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
if (argName === "Scale") return Scale;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.SetProjectionScaleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.SetProjectionScaleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.SetProjectionScaleContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.RotateVerticalCameraContext = {};
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.RotateVerticalCameraContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.RotateVerticalCameraContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.RotateVerticalCameraContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.RotateVerticalCameraContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.RotateVerticalCameraContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.RotateVerticalCameraContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.RotateVerticalCameraContext.GDObjectObjects1[i].getVariables().get("XAngle")).add((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Increment")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.RotateVerticalCamera = function(Increment, parentEventsFunctionContext) {

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
if (argName === "Increment") return Increment;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.RotateVerticalCameraContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.RotateVerticalCameraContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.RotateVerticalCameraContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("WithThreeJS::LinkedCamera", gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera);
