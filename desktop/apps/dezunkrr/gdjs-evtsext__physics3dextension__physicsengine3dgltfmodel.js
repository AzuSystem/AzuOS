
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel = gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel || {};

/**
 * Behavior generated from Physics Engine 3D GLTF Model
 */
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel = class PhysicsEngine3DGLTFModel extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.FileName = behaviorData.FileName !== undefined ? behaviorData.FileName : "";
    this._behaviorData.MakeStatic = behaviorData.MakeStatic !== undefined ? behaviorData.MakeStatic : false;
    this._behaviorData.Mass = behaviorData.Mass !== undefined ? behaviorData.Mass : Number("1") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.FileName !== newBehaviorData.FileName)
      this._behaviorData.FileName = newBehaviorData.FileName;
    if (oldBehaviorData.MakeStatic !== newBehaviorData.MakeStatic)
      this._behaviorData.MakeStatic = newBehaviorData.MakeStatic;
    if (oldBehaviorData.Mass !== newBehaviorData.Mass)
      this._behaviorData.Mass = newBehaviorData.Mass;

    return true;
  }

  // Properties:
  
  _getFileName() {
    return this._behaviorData.FileName !== undefined ? this._behaviorData.FileName : "";
  }
  _setFileName(newValue) {
    this._behaviorData.FileName = newValue;
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
}

/**
 * Shared data generated from Physics Engine 3D GLTF Model
 */
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.SharedData = class PhysicsEngine3DGLTFModelSharedData {
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

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Physics3dExtension_PhysicsEngine3DGLTFModelSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Physics3dExtension_PhysicsEngine3DGLTFModelSharedData = new gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.SharedData(
      initialData
    );
  }
  return instanceContainer._Physics3dExtension_PhysicsEngine3DGLTFModelSharedData;
}

// Methods:
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.onCreatedContext = {};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.onCreatedContext.userFunc0x8f6658 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

objects[0].getVariables().get("Physics3dBehavior").setString(behaviorName);
};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.onCreatedContext.GDObjectObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.onCreatedContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.onCreatedContext.GDObjectObjects1);
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.onCreatedContext.userFunc0x8f6658(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.doStepPostEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.doStepPostEventsContext.userFunc0x8f4340 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const PhysicsEngine3D = objects[0].getBehavior(behaviorName);

if(!PhysicsEngine3D.body) return;
if(!PhysicsEngine3D.model) return;

const Scene = gdjs.__WithThreeJS.get("Scene");
const Camera = gdjs.__WithThreeJS.get("Camera");
const Renderer = gdjs.__WithThreeJS.get("Renderer");
const World = gdjs.__Physics3DExtension.get("World");
const ProjectionScale = 0.01;
const mixer = PhysicsEngine3D.mixer;
const model = PhysicsEngine3D.model;
const body = PhysicsEngine3D.body;
const size = PhysicsEngine3D.size;
const box = PhysicsEngine3D.box;
const sphere = PhysicsEngine3D.sphere;
const delta = runtimeScene.getVariables().get("__PhysicsEngine3D").getChild("TimeDelta").getAsNumber();

// Update Gdevelop instance
objects[0].setX(body.position.x/ProjectionScale);
objects[0].setZOrder(body.position.y/ProjectionScale);
objects[0].setY(body.position.z/ProjectionScale);

// Position the sphere to cover the model
sphere.position.copy(body.position);

// Update model position
model.position.copy(sphere.position);
var sphereSize = new THREE.Box3().setFromObject( sphere );
model.position.y = sphereSize.min.y;

// Play animation
mixer.update( delta );
};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.doStepPostEventsContext.GDObjectObjects1);
{gdjs.evtsExt__Physics3dExtension__CreateWorld.func(runtimeScene, (( gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.doStepPostEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._getGravity()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CreateShape((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.doStepPostEventsContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.doStepPostEventsContext.GDObjectObjects1);
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.doStepPostEventsContext.userFunc0x8f4340(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.CreateShapeContext = {};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.CreateShapeContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.CreateShapeContext.userFunc0x8f4340 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (!gdjs.__Physics3DExtension.has("World")) {
    console.warn("!");
    return;
}

if(!THREE.GLTFLoader) return;

const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const PhysicsEngine3D = objects[0].getBehavior(behaviorName);

if(PhysicsEngine3D.loaded) return;

const Scene = gdjs.__WithThreeJS.get("Scene");
const Camera = gdjs.__WithThreeJS.get("Camera");
const Renderer = gdjs.__WithThreeJS.get("Renderer");
const World = gdjs.__Physics3DExtension.get("World");

// Load the model
async function loadGLTF(url) {
  let loader = new THREE.GLTFLoader();
  let gltf = await new Promise((resolve, reject) => {
    loader.load(url, resolve, undefined, reject);
  });

  // adjust colors
  gltf.scene.traverse(function(node) {
    if (node.isMesh) {
      if(node.material.map) {
        node.material.map.encoding = THREE.LinearEncoding;
      }

      node.flipY = false;
    } 
  });

  return gltf;
}

function getSizeOfModel(model) {
  const box = new THREE.Box3().setFromObject( model ); 
  const size = box.getSize(new THREE.Vector3());

  return size;
}

async function LoadModel() {
  let gltf = await loadGLTF(PhysicsEngine3D.FileName());

  let model = gltf.scene;
  // let size = getSizeOfModel(model);

  Scene.add(model);

  // remove optimization
  model.traverse(function(obj){ obj.frustumCulled = false; });
  
  // Calculate the size of the model
  var box = new THREE.Box3().setFromObject( model );
  var size = box.getSize( new THREE.Vector3() );
  
  // // Calculate the radius of the sphere
  var radius = ( size.x + size.y + size.z ) / 3;
  
  // Create a sphere that covers the model
  var sphereGeometry = new THREE.SphereGeometry( radius, 32, 32 );
  var sphereMaterial = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
  var sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
  
  // Position the sphere to cover the model
  sphere.position.x = ( box.max.x + box.min.x ) / 2;
  sphere.position.y = ( box.max.y + box.min.y ) / 2;
  sphere.position.z = ( box.max.z + box.min.z ) / 2;
  
  // Add the sphere to the scene
  // Scene.add( sphere );
  
  objects[0].setWidth(radius/0.01);
  objects[0].setHeight(radius/0.01);

  // Create a Cannon.js body for the sphere
  var sphereBody = new CANNON.Body({
      mass: 1,
      shape: new CANNON.Sphere(radius),
      position: new THREE.Vector3(sphere.position.x, sphere.position.y, sphere.position.z)
  });
  sphereBody.linearDamping = 0.9; // slow down
  
  // Add the sphere body to the Cannon.js world
  World.addBody( sphereBody );

  sphereBody.position.x = objects[0].getCenterXInScene()*0.01;
  sphereBody.position.y = objects[0].getZOrder()*0.01;
  sphereBody.position.z = objects[0].getCenterYInScene()*0.01;

  PhysicsEngine3D.body = sphereBody;
  PhysicsEngine3D.sphere = sphere;
  PhysicsEngine3D.box = box;
  PhysicsEngine3D.size = size;
  PhysicsEngine3D.model = model;
  PhysicsEngine3D.animations = gltf.animations;
  PhysicsEngine3D.mixer = new THREE.AnimationMixer(model);;
}

function LoadBody() {
    const Width = objects[0].getWidth();
    const Height = objects[0].getHeight();
    const Depth = 64;
    const ProjectionScale = 0.01;
    const Angle = objects[0].angle;
    const X = objects[0].getCenterXInScene();
    const Y = objects[0].getCenterYInScene();
    const Z = objects[0].zOrder;

    const cubeShape = new CANNON.Box(
        new CANNON.Vec3(
            Width * ProjectionScale/2,
            Depth * ProjectionScale/2,
            Height * ProjectionScale/2
        )
    );

    const cubeBody = new CANNON.Body({ mass: PhysicsEngine3D.Mass() })
    cubeBody.addShape(cubeShape)
    
    cubeBody.position.set(X * ProjectionScale, Z * ProjectionScale, Y * ProjectionScale);
    // cubeBody.rotation.set(gdjs.toRad(0), gdjs.toRad(Angle * -1), gdjs.toRad(0));

    World.addBody(cubeBody)

    PhysicsEngine3D.body = cubeBody;
}

PhysicsEngine3D.loaded = true;
LoadModel();
// LoadBody();
};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.CreateShapeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.CreateShapeContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.CreateShapeContext.GDObjectObjects1);
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.CreateShapeContext.userFunc0x8f4340(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.CreateShape = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.CreateShapeContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.CreateShapeContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.MassContext = {};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.MassContext.GDObjectObjects1= [];
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.MassContext.GDObjectObjects2= [];


gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.MassContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.MassContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.MassContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.MassContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMass()); }}}

}


};

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.Mass = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.MassContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.MassContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.MassContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetMassContext = {};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetMassContext.GDObjectObjects1= [];
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetMassContext.GDObjectObjects2= [];


gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetMassContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetMassContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetMassContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetMassContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMass((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetMass = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetMassContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetMassContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetMassContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.onDestroyContext = {};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.onDestroyContext.userFunc0x902948 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (!gdjs.__Physics3DExtension.has("World")) {
    console.warn("!");
    return;
}

const world = gdjs.__Physics3DExtension.get("World");
const Scene = gdjs.__WithThreeJS.get("Scene");

const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const PhysicsEngine3D = objects[0].getBehavior(behaviorName);

if(!PhysicsEngine3D.model) return;

Scene.remove(PhysicsEngine3D.model);

if(!PhysicsEngine3D.body) return;

world.remove(PhysicsEngine3D.body);
};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.onDestroyContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.onDestroyContext.GDObjectObjects1);
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.onDestroyContext.userFunc0x902948(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.onDestroy = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.ApplyImpulseContext = {};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.ApplyImpulseContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.ApplyImpulseContext.userFunc0x902948 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const PhysicsEngine3D = objects[0].getBehavior(behaviorName);

if(!PhysicsEngine3D.body) return;

const forceX = eventsFunctionContext.getArgument("ForceX");
const forceY = eventsFunctionContext.getArgument("ForceY");
const forceZ = eventsFunctionContext.getArgument("ForceZ");
const body = PhysicsEngine3D.body;
const jumpForce = new CANNON.Vec3(forceX, forceY, forceZ);

body.applyImpulse(jumpForce, body.position);
};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.ApplyImpulseContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.ApplyImpulseContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.ApplyImpulseContext.GDObjectObjects1);
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.ApplyImpulseContext.userFunc0x902948(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.ApplyImpulse = function(ForceX, ForceY, ForceZ, parentEventsFunctionContext) {

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
if (argName === "ForceZ") return ForceZ;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.ApplyImpulseContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.ApplyImpulseContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.PositionXContext = {};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.PositionXContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.PositionXContext.userFunc0x902948 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const scene = gdjs.__WithThreeJS.get("Scene");
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const PhysicsEngine3D = objects[0].getBehavior(behaviorName);
const Id = PhysicsEngine3D.Id();
const cubeMesh = scene.getObjectByName(Id);

eventsFunctionContext.returnValue = cubeMesh.position.x;
};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.PositionXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.PositionXContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.PositionXContext.GDObjectObjects1);
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.PositionXContext.userFunc0x902948(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.PositionX = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.PositionXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.PositionXContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.PositionZContext = {};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.PositionZContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.PositionZContext.userFunc0x902948 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const scene = gdjs.__WithThreeJS.get("Scene");
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const PhysicsEngine3D = objects[0].getBehavior(behaviorName);
const Id = PhysicsEngine3D.Id();
const cubeMesh = scene.getObjectByName(Id);

eventsFunctionContext.returnValue = cubeMesh.position.z;
};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.PositionZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.PositionZContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.PositionZContext.GDObjectObjects1);
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.PositionZContext.userFunc0x902948(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.PositionZ = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.PositionZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.PositionZContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.PositionYContext = {};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.PositionYContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.PositionYContext.userFunc0x902948 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const scene = gdjs.__WithThreeJS.get("Scene");
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const PhysicsEngine3D = objects[0].getBehavior(behaviorName);
const Id = PhysicsEngine3D.Id();
const cubeMesh = scene.getObjectByName(Id);

eventsFunctionContext.returnValue = cubeMesh.position.y;
};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.PositionYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.PositionYContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.PositionYContext.GDObjectObjects1);
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.PositionYContext.userFunc0x902948(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.PositionY = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.PositionYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.PositionYContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.FileNameContext = {};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.FileNameContext.GDObjectObjects1= [];
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.FileNameContext.GDObjectObjects2= [];


gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.FileNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.FileNameContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.FileNameContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.FileNameContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFileName()); }}}

}


};

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.FileName = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.FileNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.FileNameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.FileNameContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetFileNameContext = {};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetFileNameContext.GDObjectObjects1= [];
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetFileNameContext.GDObjectObjects2= [];


gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetFileNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetFileNameContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetFileNameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetFileNameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFileName((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Value") : ""));
}
}}

}


};

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetFileName = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetFileNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetFileNameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetFileNameContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetAnimationContext = {};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetAnimationContext.GDObjectObjects1= [];
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetAnimationContext.GDObjectObjects2= [];


gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetAnimationContext.userFunc0x902948 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const PhysicsEngine3D = objects[0].getBehavior(behaviorName);

if(!PhysicsEngine3D.mixer) return;

if(!!PhysicsEngine3D.action) {
    PhysicsEngine3D.action.stop();
}

const AnimationIndex = eventsFunctionContext.getArgument("AnimationIndex");

PhysicsEngine3D.action = PhysicsEngine3D.mixer.clipAction(PhysicsEngine3D.animations[AnimationIndex]);
PhysicsEngine3D.action.play();

};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetAnimationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetAnimationContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetAnimationContext.GDObjectObjects1);
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetAnimationContext.userFunc0x902948(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetAnimation = function(AnimationIndex, parentEventsFunctionContext) {

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
if (argName === "AnimationIndex") return AnimationIndex;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetAnimationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetAnimationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetAnimationContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.LookAtCameraContext = {};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.LookAtCameraContext.GDObjectObjects1= [];
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.LookAtCameraContext.GDObjectObjects2= [];


gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.LookAtCameraContext.userFunc0x902948 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const PhysicsEngine3D = objects[0].getBehavior(behaviorName);

if(!PhysicsEngine3D.model) return;

const Scene = gdjs.__WithThreeJS.get("Scene");
const Camera = gdjs.__WithThreeJS.get("Camera");
const Renderer = gdjs.__WithThreeJS.get("Renderer");
const World = gdjs.__Physics3DExtension.get("World");

const model = PhysicsEngine3D.model;

// look at the camera
const target = new THREE.Vector3();
Camera.getWorldPosition(target);
target.y = 0;
model.lookAt(target);
model.rotateY(Math.PI);
};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.LookAtCameraContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.LookAtCameraContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.LookAtCameraContext.GDObjectObjects1);
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.LookAtCameraContext.userFunc0x902948(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.LookAtCamera = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.LookAtCameraContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.LookAtCameraContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.LookAtCameraContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.RotatePositionContext = {};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.RotatePositionContext.GDObjectObjects1= [];
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.RotatePositionContext.GDObjectObjects2= [];


gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.RotatePositionContext.userFunc0x902948 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const PhysicsEngine3D = objects[0].getBehavior(behaviorName);

if(!PhysicsEngine3D.model) return;

const model = PhysicsEngine3D.model;

const Axis = eventsFunctionContext.getArgument("Axis");
const Degree = eventsFunctionContext.getArgument("Degree");

// Change the rotation of the cube using a quaternion with degrees
const quaternion = new THREE.Quaternion();

let direction;

switch(Axis) {
    case "y": direction = new THREE.Vector3(1, 0, 0); break;
    case "x": direction = new THREE.Vector3(0, 1, 0); break;
    case "z": direction = new THREE.Vector3(0, 0, 1); break;
}

const angleRadians = THREE.MathUtils.degToRad(Degree);

quaternion.setFromAxisAngle(direction, angleRadians);
model.quaternion.copy(quaternion);
};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.RotatePositionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.RotatePositionContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.RotatePositionContext.GDObjectObjects1);
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.RotatePositionContext.userFunc0x902948(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.RotatePosition = function(Axis, Degree, parentEventsFunctionContext) {

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
if (argName === "Axis") return Axis;
if (argName === "Degree") return Degree;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.RotatePositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.RotatePositionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.RotatePositionContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetPositionContext = {};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetPositionContext.GDObjectObjects1= [];
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetPositionContext.GDObjectObjects2= [];


gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetPositionContext.userFunc0x902948 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const PhysicsEngine3D = objects[0].getBehavior(behaviorName);

if(!PhysicsEngine3D.body) return;

const body = PhysicsEngine3D.body;
const Value = eventsFunctionContext.getArgument("Value");
const Axis = eventsFunctionContext.getArgument("Axis");

body.position[Axis] = Value*0.01;
};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetPositionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetPositionContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetPositionContext.GDObjectObjects1);
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetPositionContext.userFunc0x902948(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetPosition = function(Value, Axis, parentEventsFunctionContext) {

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
if (argName === "Axis") return Axis;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetPositionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetPositionContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetVIsibilityContext = {};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetVIsibilityContext.GDObjectObjects1= [];
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetVIsibilityContext.GDObjectObjects2= [];


gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetVIsibilityContext.userFunc0x902948 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const PhysicsEngine3D = objects[0].getBehavior(behaviorName);

if(!PhysicsEngine3D.model) return;

const model = PhysicsEngine3D.model;
const Value = eventsFunctionContext.getArgument("Value");

model.visible = Value;
};
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetVIsibilityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetVIsibilityContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetVIsibilityContext.GDObjectObjects1);
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetVIsibilityContext.userFunc0x902948(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetVIsibility = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetVIsibilityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetVIsibilityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.SetVIsibilityContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("Physics3dExtension::PhysicsEngine3DGLTFModel", gdjs.evtsExt__Physics3dExtension__PhysicsEngine3DGLTFModel.PhysicsEngine3DGLTFModel);
