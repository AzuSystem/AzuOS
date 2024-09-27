
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController = gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController || {};

/**
 * Behavior generated from Physics Engine 3D Player Controller
 */
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController = class PhysicsEnginePlayerController extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Shape = behaviorData.Shape !== undefined ? behaviorData.Shape : "Box";
    this._behaviorData.MakeStatic = behaviorData.MakeStatic !== undefined ? behaviorData.MakeStatic : false;
    this._behaviorData.Mass = behaviorData.Mass !== undefined ? behaviorData.Mass : Number("1") || 0;
    this._behaviorData.MovementSpeed = behaviorData.MovementSpeed !== undefined ? behaviorData.MovementSpeed : Number("20") || 0;
    this._behaviorData.CanJump = true;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Shape !== newBehaviorData.Shape)
      this._behaviorData.Shape = newBehaviorData.Shape;
    if (oldBehaviorData.MakeStatic !== newBehaviorData.MakeStatic)
      this._behaviorData.MakeStatic = newBehaviorData.MakeStatic;
    if (oldBehaviorData.Mass !== newBehaviorData.Mass)
      this._behaviorData.Mass = newBehaviorData.Mass;
    if (oldBehaviorData.MovementSpeed !== newBehaviorData.MovementSpeed)
      this._behaviorData.MovementSpeed = newBehaviorData.MovementSpeed;
    if (oldBehaviorData.CanJump !== newBehaviorData.CanJump)
      this._behaviorData.CanJump = newBehaviorData.CanJump;

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
  _getMovementSpeed() {
    return this._behaviorData.MovementSpeed !== undefined ? this._behaviorData.MovementSpeed : Number("20") || 0;
  }
  _setMovementSpeed(newValue) {
    this._behaviorData.MovementSpeed = newValue;
  }
  _getCanJump() {
    return this._behaviorData.CanJump !== undefined ? this._behaviorData.CanJump : true;
  }
  _setCanJump(newValue) {
    this._behaviorData.CanJump = newValue;
  }
  _toggleCanJump() {
    this._setCanJump(!this._getCanJump());
  }
}

/**
 * Shared data generated from Physics Engine 3D Player Controller
 */
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.SharedData = class PhysicsEnginePlayerControllerSharedData {
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

gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Physics3dExtension_PhysicsEnginePlayerControllerSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Physics3dExtension_PhysicsEnginePlayerControllerSharedData = new gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.SharedData(
      initialData
    );
  }
  return instanceContainer._Physics3dExtension_PhysicsEnginePlayerControllerSharedData;
}

// Methods:
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.onCreatedContext = {};
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.onCreatedContext.userFunc0x91f2e0 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

objects[0].getVariables().get("Physics3dBehavior").setString(behaviorName);
};
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.onCreatedContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.onCreatedContext.GDObjectObjects1);
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.onCreatedContext.userFunc0x91f2e0(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.doStepPostEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.doStepPostEventsContext.userFunc0x91f4d0 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";

const PhysicsEngine3D = objects[0].getBehavior("PhysicsEnginePlayerController");

if(!PhysicsEngine3D.body) return;

const ProjectionScale = 0.01;

const cubeMesh = PhysicsEngine3D.mesh;
const player = PhysicsEngine3D.body;
const controller = PhysicsEngine3D.controller;
const delta = runtimeScene.getVariables().get("__PhysicsEngine3D").getChild("TimeDelta").getAsNumber();

if(!cubeMesh) return;

controller.update(delta);
cubeMesh.position.copy(player.position);

objects[0].setX(player.position.x/ProjectionScale);
objects[0].setZOrder(player.position.y/ProjectionScale);
objects[0].setY(player.position.z/ProjectionScale);

// // decelrate
// player.velocity.x *= 0.9;
// player.velocity.z *= 0.9;
};
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.doStepPostEventsContext.GDObjectObjects1);
{gdjs.evtsExt__Physics3dExtension__CreateWorld.func(runtimeScene, (( gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.doStepPostEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._getGravity()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CreateShape((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.doStepPostEventsContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.doStepPostEventsContext.GDObjectObjects1);
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.doStepPostEventsContext.userFunc0x91f4d0(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.CreateShapeContext = {};
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.CreateShapeContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.CreateShapeContext.userFunc0x9227f8 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (!gdjs.__Physics3DExtension.has("World")) {
    console.warn("!");
    return;
}

const world = gdjs.__Physics3DExtension.get("World");
const Camera = gdjs.__WithThreeJS.get("Camera");
const scene = gdjs.__WithThreeJS.get("Scene");
const PhysicsEngine3D = objects[0].getBehavior("PhysicsEnginePlayerController");

if(PhysicsEngine3D.controller) return;

// Get object properties
const X = objects[0].getCenterXInScene();
const Y = objects[0].getCenterYInScene();
const Z = objects[0].zOrder;
const Width = objects[0].getWidth();
const Height = objects[0].getHeight();
const Depth = 64;
const ProjectionScale = 0.01;


const normalMaterial = new THREE.MeshNormalMaterial()
// const cubeGeometry = new THREE.BoxGeometry(Width * ProjectionScale, Depth * ProjectionScale, Height * ProjectionScale)
const cubeGeometry = new THREE.SphereGeometry()
const cubeMesh = new THREE.Mesh(cubeGeometry, normalMaterial)
cubeMesh.opacity = 0;

// Create the player object
const cubeShape = new CANNON.Sphere(1.3);
 //new CANNON.Box(new CANNON.Vec3(Width * ProjectionScale/2, Depth * ProjectionScale/2, Height * ProjectionScale/2));
var player = new CANNON.Body({ mass: PhysicsEngine3D.Mass() });
player.addShape(cubeShape)
player.position.x = X*ProjectionScale
player.position.y = Z*ProjectionScale
player.position.z = Y*ProjectionScale
world.addBody(player);
player.linearDamping = 0.9; // slow down

cubeMesh.position.copy(player.position)
scene.add(cubeMesh);


const keyboard = {};

document.addEventListener("keydown", event => {
    keyboard[event.code] = true;
});

document.addEventListener("keyup", event => {
    keyboard[event.code] = false;
});

keyboard.pressed = function(key) {
    if(key=="space")
        return this["Space"];
    return this["Key" + key.toUpperCase()];
}

class PlayerController {
  constructor(body, camera) {
    this.body = body;
    this.camera = camera;
    this.movementSpeed = PhysicsEngine3D.MovementSpeed();
    this.jumpForce = new CANNON.Vec3(0, 5, 0);
    this.canJump = true;
  }

  update(delta) {
    // Handle movement input
    let inputX = 0, inputZ = 0;
    if (keyboard.pressed("w")) inputZ = -1;
    if (keyboard.pressed("s")) inputZ = 1;
    if (keyboard.pressed("a")) inputX = -1;
    if (keyboard.pressed("d")) inputX = 1;
    
    // Calculate the movement vector
    var direction = new THREE.Vector3( inputX * this.movementSpeed * delta, 0, inputZ * this.movementSpeed * delta ); 
    direction.applyQuaternion( this.camera.quaternion );
    direction.y = 0;
    
    // Apply the movement vector to the body
    this.body.velocity.vadd(direction, this.body.velocity);
  }
}

var controller = new PlayerController(player, Camera);

var contactNormal = new CANNON.Vec3(); // Normal in the contact, pointing *out* of whatever the player touched
var upAxis = new CANNON.Vec3(0,1,0);

player.addEventListener("collide",function(e){
    var contact = e.contact;

    // contact.bi and contact.bj are the colliding bodies, and contact.ni is the collision normal.
    // We do not yet know which one is which! Let's check.
    if(contact.bi.id == player.id)  // bi is the player body, flip the contact normal
        contact.ni.negate(contactNormal);
    else
        contactNormal.copy(contact.ni); // bi is something else. Keep the normal as it is

    // If contactNormal.dot(upAxis) is between 0 and 1, we know that the contact normal is somewhat in the up direction.
    if(contactNormal.dot(upAxis) > 0.5) // Use a "good" threshold value between 0 and 1 here!
        controller.canJump = true;
});

PhysicsEngine3D.shape = cubeShape;
PhysicsEngine3D.mesh = cubeMesh;
PhysicsEngine3D.body = player;
PhysicsEngine3D.controller = controller;
};
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.CreateShapeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.CreateShapeContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.CreateShapeContext.GDObjectObjects1);
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.CreateShapeContext.userFunc0x9227f8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.CreateShape = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.CreateShapeContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.CreateShapeContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.MassContext = {};
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.MassContext.GDObjectObjects1= [];
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.MassContext.GDObjectObjects2= [];


gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.MassContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.MassContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.MassContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.MassContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMass()); }}}

}


};

gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.Mass = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.MassContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.MassContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.MassContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.onDestroyContext = {};
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.onDestroyContext.userFunc0x9227f8 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (!gdjs.__Physics3DExtension.has("World")) {
    console.warn("!");
    return;
}

const world = gdjs.__Physics3DExtension.get("World");

const PhysicsEngine3D = objects[0].getBehavior("PhysicsEnginePlayerController");

if(!PhysicsEngine3D.body) return;

world.remove(PhysicsEngine3D.body);

const scene = gdjs.__WithThreeJS.get("Scene");

// Remove the mesh from the scene
scene.remove(PhysicsEngine3D.mesh);
};
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.onDestroyContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.onDestroyContext.GDObjectObjects1);
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.onDestroyContext.userFunc0x9227f8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.onDestroy = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.MovementSpeedContext = {};
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.MovementSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.MovementSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.MovementSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.MovementSpeedContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.MovementSpeedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.MovementSpeedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMovementSpeed()); }}}

}


};

gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.MovementSpeed = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.MovementSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.MovementSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.MovementSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.SetMovementSpeedContext = {};
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.SetMovementSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.SetMovementSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.SetMovementSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.SetMovementSpeedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.SetMovementSpeedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.SetMovementSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMovementSpeed((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.SetMovementSpeed = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.SetMovementSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.SetMovementSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.SetMovementSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.ApplyImpulseContext = {};
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.ApplyImpulseContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.ApplyImpulseContext.userFunc0x9248b8 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const PhysicsEngine3D = objects[0].getBehavior("PhysicsEnginePlayerController");

if(!PhysicsEngine3D.body) return;

const force = eventsFunctionContext.getArgument("Force");
const body = PhysicsEngine3D.body;
const jumpForce = new CANNON.Vec3(0, force, 0);

body.applyImpulse(jumpForce, body.position);
};
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.ApplyImpulseContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.ApplyImpulseContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.ApplyImpulseContext.GDObjectObjects1);
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.ApplyImpulseContext.userFunc0x9248b8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.ApplyImpulse = function(Force, parentEventsFunctionContext) {

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
if (argName === "Force") return Force;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.ApplyImpulseContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.ApplyImpulseContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.ApplyForceContext = {};
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.ApplyForceContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.ApplyForceContext.userFunc0x924918 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const PhysicsEngine3D = objects[0].getBehavior("PhysicsEnginePlayerController");

if(!PhysicsEngine3D.body) return;

const Camera = gdjs.__WithThreeJS.get("Camera");
const Controller = PhysicsEngine3D.controller;
const Body = Controller.body;
const ForceX = eventsFunctionContext.getArgument("ForceX")*PhysicsEngine3D.MovementSpeed()/10;
const ForceY = eventsFunctionContext.getArgument("ForceY")*PhysicsEngine3D.MovementSpeed()/10;

// Calculate the movement vector
var direction = new THREE.Vector3( ForceX, 0, ForceY ); 
direction.applyQuaternion( Camera.quaternion );
direction.y = 0;

// Apply the movement vector to the body
Body.velocity.vadd(direction, Body.velocity);
};
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.ApplyForceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.ApplyForceContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.ApplyForceContext.GDObjectObjects1);
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.ApplyForceContext.userFunc0x924918(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.ApplyForce = function(ForceX, ForceY, parentEventsFunctionContext) {

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
if (argName === "ForceX") return ForceX;
if (argName === "ForceY") return ForceY;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.ApplyForceContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.ApplyForceContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.CanJumpContext = {};
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.CanJumpContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.CanJumpContext.userFunc0x924880 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const PhysicsEngine3D = objects[0].getBehavior("PhysicsEnginePlayerController");

if(!PhysicsEngine3D.controller) return;

eventsFunctionContext.returnValue = PhysicsEngine3D.controller.canJump;
};
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.CanJumpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.CanJumpContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.CanJumpContext.GDObjectObjects1);
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.CanJumpContext.userFunc0x924880(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.CanJump = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.CanJumpContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.CanJumpContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.SetCanJumpContext = {};
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.SetCanJumpContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.SetCanJumpContext.userFunc0x9248b8 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const PhysicsEngine3D = objects[0].getBehavior("PhysicsEnginePlayerController");

if(!PhysicsEngine3D.controller) return;

PhysicsEngine3D.controller.canJump = eventsFunctionContext.getArgument("Value");
};
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.SetCanJumpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.SetCanJumpContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.SetCanJumpContext.GDObjectObjects1);
gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.SetCanJumpContext.userFunc0x9248b8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.SetCanJump = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.SetCanJumpContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.SetCanJumpContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("Physics3dExtension::PhysicsEnginePlayerController", gdjs.evtsExt__Physics3dExtension__PhysicsEnginePlayerController.PhysicsEnginePlayerController);
