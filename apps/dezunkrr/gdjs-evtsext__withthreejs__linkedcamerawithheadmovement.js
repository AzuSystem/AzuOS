
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement = gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement || {};

/**
 * Behavior generated from Linked 3D Camera With Head Movement
 */
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement = class LinkedCameraWithHeadMovement extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.ProjectionScale = behaviorData.ProjectionScale !== undefined ? behaviorData.ProjectionScale : Number("0.01") || 0;
    this._behaviorData.LinkAngle = false;
    this._behaviorData.ViewMode = "Top Down";
    this._behaviorData.Hide = behaviorData.Hide !== undefined ? behaviorData.Hide : true;
    this._behaviorData.Sensitivity = behaviorData.Sensitivity !== undefined ? behaviorData.Sensitivity : Number("8") || 0;
    this._behaviorData.CameraZoom = behaviorData.CameraZoom !== undefined ? behaviorData.CameraZoom : Number("1") || 0;
    this._behaviorData.Sight = "";
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
    if (oldBehaviorData.Sensitivity !== newBehaviorData.Sensitivity)
      this._behaviorData.Sensitivity = newBehaviorData.Sensitivity;
    if (oldBehaviorData.CameraZoom !== newBehaviorData.CameraZoom)
      this._behaviorData.CameraZoom = newBehaviorData.CameraZoom;
    if (oldBehaviorData.Sight !== newBehaviorData.Sight)
      this._behaviorData.Sight = newBehaviorData.Sight;

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
    return this._behaviorData.LinkAngle !== undefined ? this._behaviorData.LinkAngle : false;
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
  _getSensitivity() {
    return this._behaviorData.Sensitivity !== undefined ? this._behaviorData.Sensitivity : Number("8") || 0;
  }
  _setSensitivity(newValue) {
    this._behaviorData.Sensitivity = newValue;
  }
  _getCameraZoom() {
    return this._behaviorData.CameraZoom !== undefined ? this._behaviorData.CameraZoom : Number("1") || 0;
  }
  _setCameraZoom(newValue) {
    this._behaviorData.CameraZoom = newValue;
  }
  _getSight() {
    return this._behaviorData.Sight !== undefined ? this._behaviorData.Sight : "";
  }
  _setSight(newValue) {
    this._behaviorData.Sight = newValue;
  }
}

/**
 * Shared data generated from Linked 3D Camera With Head Movement
 */
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.SharedData = class LinkedCameraWithHeadMovementSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._WithThreeJS_LinkedCameraWithHeadMovementSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._WithThreeJS_LinkedCameraWithHeadMovementSharedData = new gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.SharedData(
      initialData
    );
  }
  return instanceContainer._WithThreeJS_LinkedCameraWithHeadMovementSharedData;
}

// Methods:
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.onCreatedContext = {};


gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.onCreated = function(parentEventsFunctionContext) {

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


gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.doStepPostEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.doStepPostEventsContext.GDObjectObjects4= [];


gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.doStepPostEventsContext.userFunc0x1349b80 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Camera")) {
    console.warn("!");
    return;
}

const Camera = gdjs.__WithThreeJS.get("Camera");


function degToRad(deg) {
    return deg * (Math.PI / 180.0);
}

var DeviceOrientationControls = function( object ) {

  var scope = this;

  this.object = object;
  this.object.rotation.reorder( "YXZ" );

  this.enabled = true;

  this.deviceOrientation = {};
  this.screenOrientation = 0;

  this.alpha = 0;
  this.alphaOffsetAngle = 0;


  var onDeviceOrientationChangeEvent = function( event ) {

    scope.deviceOrientation = event;

  };

  var onScreenOrientationChangeEvent = function() {

    scope.screenOrientation = window.orientation || 0;

  };

  // The angles alpha, beta and gamma form a set of intrinsic Tait-Bryan angles of type Z-X'-Y''

  var setObjectQuaternion = function() {

    var zee = new THREE.Vector3( 0, 0, 1 );

    var euler = new THREE.Euler();

    var q0 = new THREE.Quaternion();

    var q1 = new THREE.Quaternion( - Math.sqrt( 0.5 ), 0, 0, Math.sqrt( 0.5 ) ); // - PI/2 around the x-axis

    return function( quaternion, alpha, beta, gamma, orient ) {

      euler.set( beta, alpha, - gamma, 'YXZ' ); // 'ZXY' for the device, but 'YXZ' for us

      quaternion.setFromEuler( euler ); // orient the device

      quaternion.multiply( q1 ); // camera looks out the back of the device, not the top

      quaternion.multiply( q0.setFromAxisAngle( zee, - orient ) ); // adjust for screen orientation

    }

  }();

  this.connect = function() {

    onScreenOrientationChangeEvent(); // run once on load

    window.addEventListener( 'orientationchange', onScreenOrientationChangeEvent, false );
    window.addEventListener( 'deviceorientation', onDeviceOrientationChangeEvent, false );

    scope.enabled = true;

  };

  this.disconnect = function() {

    window.removeEventListener( 'orientationchange', onScreenOrientationChangeEvent, false );
    window.removeEventListener( 'deviceorientation', onDeviceOrientationChangeEvent, false );

    scope.enabled = false;

  };

  this.update = function() {

    if ( scope.enabled === false ) return;

    var alpha = scope.deviceOrientation.alpha ? degToRad( scope.deviceOrientation.alpha ) + this.alphaOffsetAngle : 0; // Z
    var beta = scope.deviceOrientation.beta ? degToRad( scope.deviceOrientation.beta ) : 0; // X'
    var gamma = scope.deviceOrientation.gamma ? degToRad( scope.deviceOrientation.gamma ) : 0; // Y''
    var orient = scope.screenOrientation ? degToRad( scope.screenOrientation ) : 0; // O

    setObjectQuaternion( scope.object.quaternion, alpha, beta, gamma, orient );
    this.alpha = alpha;

  };

  this.updateAlphaOffsetAngle = function( angle ) {

    this.alphaOffsetAngle = angle;
    this.update();

  };

  this.dispose = function() {

    this.disconnect();

  };

  this.connect();

};

window.controls = new DeviceOrientationControls(Camera);
console.log('mobile ocntrols')

};
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.doStepPostEventsContext.userFunc0x1349b80(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.doStepPostEventsContext.userFunc0x863618 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Camera = gdjs.__WithThreeJS.get("Camera");
const Behavior = objects[0].getBehavior("LinkedCameraWithHeadMovement");
const ProjectionScale = Behavior.ProjectionScale();
const LinkAngle = Behavior.LinkAngle();
const ViewMode = Behavior.ViewMode();
const Hide = Behavior.Hide();
const CameraZoom = Behavior.CameraZoom();
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
        Camera.rotation.set(gdjs.toRad(0), gdjs.toRad(Angle * -1 - 90), gdjs.toRad(0));
    } else {
        Camera.rotation.set(gdjs.toRad(-Angle), gdjs.toRad(-90), gdjs.toRad(0), "YXZ");
    }
}

//
objects[0].hide(Hide);

// Zooming camera function
Camera.zoom = CameraZoom;
Camera.updateProjectionMatrix();

};
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.doStepPostEventsContext.userFunc0x86c838 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if(!window.controls) return;
controls.update();
};
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.doStepPostEventsContext.userFunc0x86c838(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__MousePointerLock__isPointerLocked.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
{gdjs.evtsExt__MousePointerLock__RequestPointerLock.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__MousePointerLock__isPointerLocked.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.doStepPostEventsContext.GDObjectObjects2);
{gdjs.evtsExt__WithThreeJS__Rotate3DCameraLikeHead.func(runtimeScene, "+", gdjs.evtsExt__MousePointerLock__MovementY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * (( gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.doStepPostEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Sensitivity((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * -(1) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Breathing")) / 64, gdjs.evtsExt__MousePointerLock__MovementX.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * (( gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.doStepPostEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Sensitivity((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * -(1), 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.doStepPostEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__WithThreeJS__CameraAngle.func(runtimeScene, "X", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) <= -(90));
}
if (isConditionTrue_0) {
{gdjs.evtsExt__WithThreeJS__Rotate3DCameraLikeHead.func(runtimeScene, "-", 1000 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__WithThreeJS__CameraAngle.func(runtimeScene, "X", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) >= 90);
}
if (isConditionTrue_0) {
{gdjs.evtsExt__WithThreeJS__Rotate3DCameraLikeHead.func(runtimeScene, "+", 1000 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.doStepPostEventsContext.GDObjectObjects1[i].setAngle(gdjs.evtsExt__WithThreeJS__CameraAngle.func(runtimeScene, "Y", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - 90);
}
}}

}


};gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.doStepPostEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(23249204);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.doStepPostEventsContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.doStepPostEventsContext.GDObjectObjects1);
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.doStepPostEventsContext.userFunc0x863618(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.doStepPostEventsContext.eventsList3(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.doStepPostEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.doStepPostEventsContext.eventsList4(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.ProjectionScaleContext = {};
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.ProjectionScaleContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.ProjectionScaleContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.ProjectionScaleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.ProjectionScaleContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.ProjectionScaleContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.ProjectionScaleContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProjectionScale()); }}}

}


};

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.ProjectionScale = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.ProjectionScaleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.ProjectionScaleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.ProjectionScaleContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.ViewModeContext = {};
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.ViewModeContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.ViewModeContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.ViewModeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.ViewModeContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.ViewModeContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.ViewModeContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getViewMode()); }}}

}


};

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.ViewMode = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.ViewModeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.ViewModeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.ViewModeContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.LinkAngleContext = {};
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.LinkAngleContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.LinkAngleContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.LinkAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.LinkAngleContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.LinkAngleContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.LinkAngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLinkAngle() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.LinkAngleContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.LinkAngleContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.LinkAngleContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.LinkAngleContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.LinkAngleContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.LinkAngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLinkAngle()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.LinkAngleContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.LinkAngleContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.LinkAngleContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


};

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.LinkAngle = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.LinkAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.LinkAngleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.LinkAngleContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.HideContext = {};
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.HideContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.HideContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.HideContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.HideContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.HideContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.HideContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHide() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.HideContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.HideContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.HideContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.HideContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.HideContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.HideContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHide()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.HideContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.HideContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.HideContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


};

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.Hide = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.HideContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.HideContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.HideContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetProjectionScaleContext = {};
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetProjectionScaleContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetProjectionScaleContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetProjectionScaleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetProjectionScaleContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetProjectionScaleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetProjectionScaleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setProjectionScale((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Scale")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetProjectionScale = function(Scale, parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetProjectionScaleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetProjectionScaleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetProjectionScaleContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.RotateVerticalCameraContext = {};
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.RotateVerticalCameraContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.RotateVerticalCameraContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.RotateVerticalCameraContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.RotateVerticalCameraContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.RotateVerticalCameraContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.RotateVerticalCameraContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.RotateVerticalCameraContext.GDObjectObjects1[i].getVariables().get("XAngle")).add((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Increment")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.RotateVerticalCamera = function(Increment, parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.RotateVerticalCameraContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.RotateVerticalCameraContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.RotateVerticalCameraContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SensitivityContext = {};
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SensitivityContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SensitivityContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SensitivityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SensitivityContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SensitivityContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SensitivityContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSensitivity()); }}}

}


};

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.Sensitivity = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SensitivityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SensitivityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SensitivityContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetSensitivityContext = {};
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetSensitivityContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetSensitivityContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetSensitivityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetSensitivityContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetSensitivityContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetSensitivityContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSensitivity((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetSensitivity = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetSensitivityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetSensitivityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetSensitivityContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.CameraZoomContext = {};
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.CameraZoomContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.CameraZoomContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.CameraZoomContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.CameraZoomContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.CameraZoomContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.CameraZoomContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCameraZoom()); }}}

}


};

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.CameraZoom = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.CameraZoomContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.CameraZoomContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.CameraZoomContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetCameraZoomContext = {};
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetCameraZoomContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetCameraZoomContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetCameraZoomContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetCameraZoomContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetCameraZoomContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetCameraZoomContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCameraZoom((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetCameraZoom = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetCameraZoomContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetCameraZoomContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetCameraZoomContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SightContext = {};
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SightContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SightContext.GDObjectObjects2= [];
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SightContext.GDObjectObjects3= [];


gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__WithThreeJS__RaycastFrom3DCamera.func(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SightContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetSight(gdjs.evtsExt__WithThreeJS__RaycastResultString.func(runtimeScene, 0, "3D Object ID", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SightContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SightContext.eventsList0(runtimeScene, eventsFunctionContext);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SightContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SightContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SightContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSight()); }}}

}


};

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.Sight = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SightContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SightContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SightContext.eventsList1(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetSightContext = {};
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetSightContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetSightContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetSightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetSightContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetSightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetSightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSight((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Value") : ""));
}
}}

}


};

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetSight = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetSightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetSightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.SetSightContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("WithThreeJS::LinkedCameraWithHeadMovement", gdjs.evtsExt__WithThreeJS__LinkedCameraWithHeadMovement.LinkedCameraWithHeadMovement);
