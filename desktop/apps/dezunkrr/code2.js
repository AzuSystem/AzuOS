gdjs.loseCode = {};
gdjs.loseCode.GDcamObjects1= [];
gdjs.loseCode.GDcamObjects2= [];
gdjs.loseCode.GDcamObjects3= [];
gdjs.loseCode.GDgroundObjects1= [];
gdjs.loseCode.GDgroundObjects2= [];
gdjs.loseCode.GDgroundObjects3= [];
gdjs.loseCode.GDcreditObjects1= [];
gdjs.loseCode.GDcreditObjects2= [];
gdjs.loseCode.GDcreditObjects3= [];
gdjs.loseCode.GDgoObjects1= [];
gdjs.loseCode.GDgoObjects2= [];
gdjs.loseCode.GDgoObjects3= [];
gdjs.loseCode.GDmenuObjects1= [];
gdjs.loseCode.GDmenuObjects2= [];
gdjs.loseCode.GDmenuObjects3= [];
gdjs.loseCode.GDtitleObjects1= [];
gdjs.loseCode.GDtitleObjects2= [];
gdjs.loseCode.GDtitleObjects3= [];
gdjs.loseCode.GDnbObjects1= [];
gdjs.loseCode.GDnbObjects2= [];
gdjs.loseCode.GDnbObjects3= [];


gdjs.loseCode.asyncCallback10108948 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("title"), gdjs.loseCode.GDtitleObjects2);

{for(var i = 0, len = gdjs.loseCode.GDtitleObjects2.length ;i < len;++i) {
    gdjs.loseCode.GDtitleObjects2[i].playAnimation();
}
}}
gdjs.loseCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.loseCode.GDtitleObjects1) asyncObjectsList.addObject("title", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.loseCode.asyncCallback10108948(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.loseCode.mapOfGDgdjs_46loseCode_46GDtitleObjects1Objects = Hashtable.newFrom({"title": gdjs.loseCode.GDtitleObjects1});
gdjs.loseCode.mapOfGDgdjs_46loseCode_46GDgoObjects1Objects = Hashtable.newFrom({"go": gdjs.loseCode.GDgoObjects1});
gdjs.loseCode.mapOfGDgdjs_46loseCode_46GDmenuObjects1Objects = Hashtable.newFrom({"menu": gdjs.loseCode.GDmenuObjects1});
gdjs.loseCode.asyncCallback9529172 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), false);
}}
gdjs.loseCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.loseCode.asyncCallback9529172(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.loseCode.asyncCallback13558604 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("cam"), gdjs.loseCode.GDcamObjects2);

{for(var i = 0, len = gdjs.loseCode.GDcamObjects2.length ;i < len;++i) {
    gdjs.loseCode.GDcamObjects2[i].getBehavior("TweenZOrder").TweenZOrder("down", (gdjs.loseCode.GDcamObjects2[i].getZOrder()) - 100, "easeInOutQuad", 2000, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.loseCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.loseCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.loseCode.GDcamObjects1) asyncObjectsList.addObject("cam", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.loseCode.asyncCallback13558604(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.loseCode.mapOfGDgdjs_46loseCode_46GDmenuObjects1Objects = Hashtable.newFrom({"menu": gdjs.loseCode.GDmenuObjects1});
gdjs.loseCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.loseCode.GDmenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.loseCode.mapOfGDgdjs_46loseCode_46GDmenuObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}}

}


};gdjs.loseCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("credit"), gdjs.loseCode.GDcreditObjects1);
gdjs.copyArray(runtimeScene.getObjects("title"), gdjs.loseCode.GDtitleObjects1);
{for(var i = 0, len = gdjs.loseCode.GDtitleObjects1.length ;i < len;++i) {
    gdjs.loseCode.GDtitleObjects1[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.loseCode.GDtitleObjects1.length ;i < len;++i) {
    gdjs.loseCode.GDtitleObjects1[i].setAnimationFrame(0);
}
}{gdjs.evtsExt__WithThreeJS__Create3DScene.func(runtimeScene, 100, "74;144;226", "assets\\skybox.jpg", "80;227;194", 1, 1000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__WithThreeJS__Rotate3DCamera.func(runtimeScene, "=", -(30), 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.loseCode.GDcreditObjects1.length ;i < len;++i) {
    gdjs.loseCode.GDcreditObjects1[i].setString("Created by ItsIceCreeperPE Dev for GDevelop's First 3D Game Jam!\nVersion " + gdjs.evtsExt__CurrentGameVersion__ReturnCurrentGameVersion.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}
{ //Subevents
gdjs.loseCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("go"), gdjs.loseCode.GDgoObjects1);
gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.loseCode.GDmenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("title"), gdjs.loseCode.GDtitleObjects1);
{gdjs.evtsExt__WithThreeJS__Rotate3DCamera.func(runtimeScene, "+", 0, 0.2, 0.1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AlignObject__ToSceneCenter.func(runtimeScene, gdjs.loseCode.mapOfGDgdjs_46loseCode_46GDtitleObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AlignObject__ToSceneCenter.func(runtimeScene, gdjs.loseCode.mapOfGDgdjs_46loseCode_46GDgoObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AlignObject__ToSceneCenter.func(runtimeScene, gdjs.loseCode.mapOfGDgdjs_46loseCode_46GDmenuObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cam"), gdjs.loseCode.GDcamObjects1);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
}{for(var i = 0, len = gdjs.loseCode.GDcamObjects1.length ;i < len;++i) {
    gdjs.loseCode.GDcamObjects1[i].getBehavior("TweenZOrder").TweenZOrder("up", (gdjs.loseCode.GDcamObjects1[i].getZOrder()) + 100, "easeInOutQuad", 2000, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.loseCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.loseCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isMusicOnChannelPlaying(runtimeScene, 0));
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("Config", "Muzik", runtimeScene, runtimeScene.getScene().getVariables().get("audio").getChild("muzik"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Config", "Sound", runtimeScene, runtimeScene.getScene().getVariables().get("audio").getChild("sound"));
}{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("audio").getChild("sound")));
}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\audio\\dz1.mp3", 0, true, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("audio").getChild("muzik")), 1);
}}

}


};

gdjs.loseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.loseCode.GDcamObjects1.length = 0;
gdjs.loseCode.GDcamObjects2.length = 0;
gdjs.loseCode.GDcamObjects3.length = 0;
gdjs.loseCode.GDgroundObjects1.length = 0;
gdjs.loseCode.GDgroundObjects2.length = 0;
gdjs.loseCode.GDgroundObjects3.length = 0;
gdjs.loseCode.GDcreditObjects1.length = 0;
gdjs.loseCode.GDcreditObjects2.length = 0;
gdjs.loseCode.GDcreditObjects3.length = 0;
gdjs.loseCode.GDgoObjects1.length = 0;
gdjs.loseCode.GDgoObjects2.length = 0;
gdjs.loseCode.GDgoObjects3.length = 0;
gdjs.loseCode.GDmenuObjects1.length = 0;
gdjs.loseCode.GDmenuObjects2.length = 0;
gdjs.loseCode.GDmenuObjects3.length = 0;
gdjs.loseCode.GDtitleObjects1.length = 0;
gdjs.loseCode.GDtitleObjects2.length = 0;
gdjs.loseCode.GDtitleObjects3.length = 0;
gdjs.loseCode.GDnbObjects1.length = 0;
gdjs.loseCode.GDnbObjects2.length = 0;
gdjs.loseCode.GDnbObjects3.length = 0;

gdjs.loseCode.eventsList4(runtimeScene);

return;

}

gdjs['loseCode'] = gdjs.loseCode;
