
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile = gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile || {};

/**
 * Behavior generated from Physics Engine 3D Box Tile
 */
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile = class PhysicsEngine3DBoxTile extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Shape = behaviorData.Shape !== undefined ? behaviorData.Shape : "Box";
    this._behaviorData.MakeStatic = behaviorData.MakeStatic !== undefined ? behaviorData.MakeStatic : false;
    this._behaviorData.Mass = behaviorData.Mass !== undefined ? behaviorData.Mass : Number("1") || 0;
    this._behaviorData.BoxProjectionFromTiled = behaviorData.BoxProjectionFromTiled !== undefined ? behaviorData.BoxProjectionFromTiled : "";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Shape !== newBehaviorData.Shape)
      this._behaviorData.Shape = newBehaviorData.Shape;
    if (oldBehaviorData.MakeStatic !== newBehaviorData.MakeStatic)
      this._behaviorData.MakeStatic = newBehaviorData.MakeStatic;
    if (oldBehaviorData.Mass !== newBehaviorData.Mass)
      this._behaviorData.Mass = newBehaviorData.Mass;
    if (oldBehaviorData.BoxProjectionFromTiled !== newBehaviorData.BoxProjectionFromTiled)
      this._behaviorData.BoxProjectionFromTiled = newBehaviorData.BoxProjectionFromTiled;

    return true;
  }

  // Properties:
  
  _getShape() {
    return this._behaviorData.Shape !== undefined ? this._behaviorData.Shape : "Box";
  }
  _setShape(newValue) {
    this._behaviorData.Shape = newValue;
  }
  _getMakeStatic() {
    return this._behaviorData.MakeStatic !== undefined ? this._behaviorData.MakeStatic : false;
  }
  _setMakeStatic(newValue) {
    this._behaviorData.MakeStatic = newValue;
  }
  _toggleMakeStatic() {
    this._setMakeStatic(!this._getMakeStatic());
  }
  _getMass() {
    return this._behaviorData.Mass !== undefined ? this._behaviorData.Mass : Number("1") || 0;
  }
  _setMass(newValue) {
    this._behaviorData.Mass = newValue;
  }
  _getBoxProjectionFromTiled() {
    return this._behaviorData.BoxProjectionFromTiled !== undefined ? this._behaviorData.BoxProjectionFromTiled : "";
  }
  _setBoxProjectionFromTiled(newValue) {
    this._behaviorData.BoxProjectionFromTiled = newValue;
  }
}

/**
 * Shared data generated from Physics Engine 3D Box Tile
 */
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.SharedData = class PhysicsEngine3DBoxTileSharedData {
  constructor(sharedData) {
    
    this.Gravity = sharedData.Gravity !== undefined ? sharedData.Gravity : Number("9.82") || 0;
  }
  
  // Shared properties:
  
  _getGravity() {
    return this.Gravity !== undefined ? this.Gravity : Number("9.82") || 0;
  }
  _setGravity(newValue) {
    this.Gravity = newValue;
  }
}

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Physics3dExtension_PhysicsEngine3DBoxTileSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Physics3dExtension_PhysicsEngine3DBoxTileSharedData = new gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.SharedData(
      initialData
    );
  }
  return instanceContainer._Physics3dExtension_PhysicsEngine3DBoxTileSharedData;
}

// Methods:
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.onCreatedContext = {};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.onCreatedContext.userFunc0x8ced00 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

objects[0].getVariables().get("Physics3dBehavior").setString(behaviorName);
};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.onCreatedContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.onCreatedContext.GDObjectObjects1);
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.onCreatedContext.userFunc0x8ced00(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.onCreated = function(parentEventsFunctionContext) {

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
, "BoxProjectionFromTiled": this._getBoxProjectionFromTiled()
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

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.doStepPostEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.doStepPostEventsContext.userFunc0x8ce7b8 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";

const PhysicsEngine3D = objects[0].getBehavior("PhysicsEngine3DBoxTile");

if(!PhysicsEngine3D.body) return;

const scene = gdjs.__WithThreeJS.get("Scene");
const Object3D = objects[0].getBehavior("BoxProjectionFromTiled");
const ProjectionScale = Object3D.ProjectionScale();
const Id = Object3D.Id();
const cubeMesh = scene.getObjectByName(Id);
const cubeBody = PhysicsEngine3D.body;


if(!cubeMesh) return;

objects[0].setX(cubeBody.position.x/ProjectionScale);
objects[0].setZOrder(cubeBody.position.y/ProjectionScale);
objects[0].setY(cubeBody.position.z/ProjectionScale);


// solve this some day
// objects[0].setAngle(cubeBody.rotation.y);

cubeMesh.quaternion.copy(cubeBody.quaternion);
};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.doStepPostEventsContext.GDObjectObjects1);
{gdjs.evtsExt__Physics3dExtension__CreateWorld.func(runtimeScene, (( gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.doStepPostEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._getGravity()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(23342468);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CreateShape((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.doStepPostEventsContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.doStepPostEventsContext.GDObjectObjects1);
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.doStepPostEventsContext.userFunc0x8ce7b8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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
, "BoxProjectionFromTiled": this._getBoxProjectionFromTiled()
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

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.CreateShapeContext = {};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.CreateShapeContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.CreateShapeContext.userFunc0x8cea28 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (!gdjs.__Physics3DExtension.has("World")) {
    console.warn("!");
    return;
}

const world = gdjs.__Physics3DExtension.get("World");
const scene = gdjs.__WithThreeJS.get("Scene");
const PhysicsEngine3D = objects[0].getBehavior("PhysicsEngine3DBoxTile");
const Object3D = objects[0].getBehavior("BoxProjectionFromTiled");
const Id = Object3D.Id();
const cubeMesh = scene.getObjectByName(Id);
const Width = objects[0].getWidth();
const Height = objects[0].getHeight();
const Depth = Object3D.Depth();
const ProjectionScale = Object3D.ProjectionScale();

const cubeShape = new CANNON.Box(
    new CANNON.Vec3(
        Width * ProjectionScale/2,
        Depth * ProjectionScale/2,
        Height * ProjectionScale/2
    )
);

const cubeBody = new CANNON.Body({ mass: PhysicsEngine3D.Mass() })
cubeBody.addShape(cubeShape)
cubeBody.position.copy(cubeMesh.position)
world.addBody(cubeBody)

PhysicsEngine3D.body = cubeBody;
};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.CreateShapeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.CreateShapeContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.CreateShapeContext.GDObjectObjects1);
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.CreateShapeContext.userFunc0x8cea28(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.CreateShape = function(parentEventsFunctionContext) {

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
, "BoxProjectionFromTiled": this._getBoxProjectionFromTiled()
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

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.CreateShapeContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.CreateShapeContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.MassContext = {};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.MassContext.GDObjectObjects1= [];
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.MassContext.GDObjectObjects2= [];


gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.MassContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.MassContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.MassContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.MassContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMass()); }}}

}


};

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.Mass = function(parentEventsFunctionContext) {

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
, "BoxProjectionFromTiled": this._getBoxProjectionFromTiled()
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

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.MassContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.MassContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.MassContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.SetMassContext = {};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.SetMassContext.GDObjectObjects1= [];
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.SetMassContext.GDObjectObjects2= [];


gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.SetMassContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.SetMassContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.SetMassContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.SetMassContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMass((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.SetMass = function(Value, parentEventsFunctionContext) {

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
, "BoxProjectionFromTiled": this._getBoxProjectionFromTiled()
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

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.SetMassContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.SetMassContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.SetMassContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.onDestroyContext = {};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.onDestroyContext.userFunc0x8d0bd8 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (!gdjs.__Physics3DExtension.has("World")) {
    console.warn("!");
    return;
}

const world = gdjs.__Physics3DExtension.get("World");

const PhysicsEngine3D = objects[0].getBehavior("PhysicsEngine3DBoxTile");

if(!PhysicsEngine3D.body) return;

world.remove(PhysicsEngine3D.body);
};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.onDestroyContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.onDestroyContext.GDObjectObjects1);
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.onDestroyContext.userFunc0x8d0bd8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.onDestroy = function(parentEventsFunctionContext) {

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
, "BoxProjectionFromTiled": this._getBoxProjectionFromTiled()
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

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("Physics3dExtension::PhysicsEngine3DBoxTile", gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DBoxTile.PhysicsEngine3DBoxTile);
