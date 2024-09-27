
gdjs.evtsExt__TweenZOrder__TweenZOrder = gdjs.evtsExt__TweenZOrder__TweenZOrder || {};

/**
 * Behavior generated from Tween Z-Order
 */
gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder = class TweenZOrder extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Tween = behaviorData.Tween !== undefined ? behaviorData.Tween : "";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Tween !== newBehaviorData.Tween)
      this._behaviorData.Tween = newBehaviorData.Tween;

    return true;
  }

  // Properties:
  
  _getTween() {
    return this._behaviorData.Tween !== undefined ? this._behaviorData.Tween : "";
  }
  _setTween(newValue) {
    this._behaviorData.Tween = newValue;
  }
}

/**
 * Shared data generated from Tween Z-Order
 */
gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.SharedData = class TweenZOrderSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._TweenZOrder_TweenZOrderSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._TweenZOrder_TweenZOrderSharedData = new gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.SharedData(
      initialData
    );
  }
  return instanceContainer._TweenZOrder_TweenZOrderSharedData;
}

// Methods:
gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.TweenZOrderContext = {};
gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.TweenZOrderContext.GDObjectObjects1= [];
gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.TweenZOrderContext.GDObjectObjects2= [];


gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.TweenZOrderContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.TweenZOrderContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.TweenZOrderContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.TweenZOrderContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.TweenZOrderContext.GDObjectObjects1[i].getVariables().get("__TweenZOrder").getChild("Z")).setNumber((gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.TweenZOrderContext.GDObjectObjects1[i].getZOrder()));
}
}{for(var i = 0, len = gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.TweenZOrderContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.TweenZOrderContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.TweenZOrderContext.GDObjectObjects1[i].getVariables().get("__TweenZOrder").getChild("LastID")).setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("TweenIdentifier") : ""));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Destroy") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.TweenZOrderContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.TweenZOrderContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.TweenZOrderContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addVariableTween2((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("TweenIdentifier") : ""), gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.TweenZOrderContext.GDObjectObjects1[i].getVariables().get("__TweenZOrder").getChild("Z"), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ToZ")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Easing") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Ms")) || 0 : 0), true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Destroy") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.TweenZOrderContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.TweenZOrderContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.TweenZOrderContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addVariableTween2((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("TweenIdentifier") : ""), gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.TweenZOrderContext.GDObjectObjects1[i].getVariables().get("__TweenZOrder").getChild("Z"), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ToZ")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Easing") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Ms")) || 0 : 0), false);
}
}}

}


};

gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.TweenZOrder = function(TweenIdentifier, ToZ, Easing, Ms, Destroy, parentEventsFunctionContext) {

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
, "Tween": this._getTween()
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
if (argName === "TweenIdentifier") return TweenIdentifier;
if (argName === "ToZ") return ToZ;
if (argName === "Easing") return Easing;
if (argName === "Ms") return Ms;
if (argName === "Destroy") return Destroy;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.TweenZOrderContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.TweenZOrderContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.TweenZOrderContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).isPlaying((gdjs.RuntimeObject.getVariableString(gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("__TweenZOrder").getChild("LastID")))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.doStepPreEventsContext.GDObjectObjects1[i].setZOrder((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("__TweenZOrder").getChild("Z"))));
}
}}

}


};

gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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
, "Tween": this._getTween()
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

gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("TweenZOrder::TweenZOrder", gdjs.evtsExt__TweenZOrder__TweenZOrder.TweenZOrder);
