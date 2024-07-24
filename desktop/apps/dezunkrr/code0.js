gdjs.menuCode = {};
gdjs.menuCode.GDcamObjects1= [];
gdjs.menuCode.GDcamObjects2= [];
gdjs.menuCode.GDcamObjects3= [];
gdjs.menuCode.GDgroundObjects1= [];
gdjs.menuCode.GDgroundObjects2= [];
gdjs.menuCode.GDgroundObjects3= [];
gdjs.menuCode.GDcreditObjects1= [];
gdjs.menuCode.GDcreditObjects2= [];
gdjs.menuCode.GDcreditObjects3= [];
gdjs.menuCode.GDplayObjects1= [];
gdjs.menuCode.GDplayObjects2= [];
gdjs.menuCode.GDplayObjects3= [];
gdjs.menuCode.GDsettingsObjects1= [];
gdjs.menuCode.GDsettingsObjects2= [];
gdjs.menuCode.GDsettingsObjects3= [];
gdjs.menuCode.GDmedalsObjects1= [];
gdjs.menuCode.GDmedalsObjects2= [];
gdjs.menuCode.GDmedalsObjects3= [];
gdjs.menuCode.GDsettingstitleObjects1= [];
gdjs.menuCode.GDsettingstitleObjects2= [];
gdjs.menuCode.GDsettingstitleObjects3= [];
gdjs.menuCode.GDmusictitleObjects1= [];
gdjs.menuCode.GDmusictitleObjects2= [];
gdjs.menuCode.GDmusictitleObjects3= [];
gdjs.menuCode.GDsoundtitleObjects1= [];
gdjs.menuCode.GDsoundtitleObjects2= [];
gdjs.menuCode.GDsoundtitleObjects3= [];
gdjs.menuCode.GDskyboxtitleObjects1= [];
gdjs.menuCode.GDskyboxtitleObjects2= [];
gdjs.menuCode.GDskyboxtitleObjects3= [];
gdjs.menuCode.GDmedalsittleObjects1= [];
gdjs.menuCode.GDmedalsittleObjects2= [];
gdjs.menuCode.GDmedalsittleObjects3= [];
gdjs.menuCode.GDtitleObjects1= [];
gdjs.menuCode.GDtitleObjects2= [];
gdjs.menuCode.GDtitleObjects3= [];
gdjs.menuCode.GDmsliderObjects1= [];
gdjs.menuCode.GDmsliderObjects2= [];
gdjs.menuCode.GDmsliderObjects3= [];
gdjs.menuCode.GDssliderObjects1= [];
gdjs.menuCode.GDssliderObjects2= [];
gdjs.menuCode.GDssliderObjects3= [];
gdjs.menuCode.GDskyboxObjects1= [];
gdjs.menuCode.GDskyboxObjects2= [];
gdjs.menuCode.GDskyboxObjects3= [];
gdjs.menuCode.GDaccountbtnObjects1= [];
gdjs.menuCode.GDaccountbtnObjects2= [];
gdjs.menuCode.GDaccountbtnObjects3= [];
gdjs.menuCode.GDnbObjects1= [];
gdjs.menuCode.GDnbObjects2= [];
gdjs.menuCode.GDnbObjects3= [];


gdjs.menuCode.asyncCallback25366244 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("title"), gdjs.menuCode.GDtitleObjects2);

{for(var i = 0, len = gdjs.menuCode.GDtitleObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDtitleObjects2[i].playAnimation();
}
}}
gdjs.menuCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.menuCode.GDtitleObjects1) asyncObjectsList.addObject("title", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.menuCode.asyncCallback25366244(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.menuCode.asyncCallback25368316 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), false);
}}
gdjs.menuCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.menuCode.asyncCallback25368316(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.menuCode.asyncCallback25367908 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("cam"), gdjs.menuCode.GDcamObjects2);

{for(var i = 0, len = gdjs.menuCode.GDcamObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDcamObjects2[i].getBehavior("TweenZOrder").TweenZOrder("down", (gdjs.menuCode.GDcamObjects2[i].getZOrder()) - 100, "easeInOutQuad", 2000, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.menuCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.menuCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.menuCode.GDcamObjects1) asyncObjectsList.addObject("cam", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.menuCode.asyncCallback25367908(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDplayObjects2Objects = Hashtable.newFrom({"play": gdjs.menuCode.GDplayObjects2});
gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDsettingsObjects2Objects = Hashtable.newFrom({"settings": gdjs.menuCode.GDsettingsObjects2});
gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDmedalsObjects2Objects = Hashtable.newFrom({"medals": gdjs.menuCode.GDmedalsObjects2});
gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDaccountbtnObjects2Objects = Hashtable.newFrom({"accountbtn": gdjs.menuCode.GDaccountbtnObjects2});
gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDsettingstitleObjects2Objects = Hashtable.newFrom({"settingstitle": gdjs.menuCode.GDsettingstitleObjects2});
gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDmedalsittleObjects1Objects = Hashtable.newFrom({"medalsittle": gdjs.menuCode.GDmedalsittleObjects1});
gdjs.menuCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.menuCode.GDplayObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDplayObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "UI");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "tutorial", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("settings"), gdjs.menuCode.GDsettingsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDsettingsObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "UI");
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "UI");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "settings");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("medals"), gdjs.menuCode.GDmedalsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDmedalsObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "UI");
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "UI");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "medals");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("accountbtn"), gdjs.menuCode.GDaccountbtnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDaccountbtnObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "UI"));
}
if (isConditionTrue_0) {
{gdjs.playerAuthentication.openAuthenticationWindow(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("settingstitle"), gdjs.menuCode.GDsettingstitleObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDsettingstitleObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "UI"));
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "settings");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "UI");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("medalsittle"), gdjs.menuCode.GDmedalsittleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDmedalsittleObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "UI"));
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "medals");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "UI");
}}

}


};gdjs.menuCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("credit"), gdjs.menuCode.GDcreditObjects1);
gdjs.copyArray(runtimeScene.getObjects("title"), gdjs.menuCode.GDtitleObjects1);
{for(var i = 0, len = gdjs.menuCode.GDtitleObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDtitleObjects1[i].pauseAnimation();
}
}{gdjs.evtsExt__Physics3dExtension__LoadGLTFLoaderLibrary.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__Physics3dExtension__LoadLighting.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.menuCode.GDtitleObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDtitleObjects1[i].setAnimationFrame(0);
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "UI");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "settings");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "medals");
}{gdjs.evtTools.advancedWindow.setFullScreenable(true, runtimeScene);
}{gdjs.evtsExt__WithThreeJS__Create3DScene.func(runtimeScene, 100, "74;144;226", "assets\\skybox.jpg", "80;227;194", 1, 1000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__WithThreeJS__Rotate3DCamera.func(runtimeScene, "=", -(30), 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.menuCode.GDcreditObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDcreditObjects1[i].setString("Created by ItsIceCreeperPE Dev for GDevelop's First 3D Game Jam!\nVersion " + gdjs.evtsExt__CurrentGameVersion__ReturnCurrentGameVersion.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}
{ //Subevents
gdjs.menuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__WithThreeJS__Rotate3DCamera.func(runtimeScene, "+", 0, 0.2, 0.1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cam"), gdjs.menuCode.GDcamObjects1);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
}{for(var i = 0, len = gdjs.menuCode.GDcamObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDcamObjects1[i].getBehavior("TweenZOrder").TweenZOrder("up", (gdjs.menuCode.GDcamObjects1[i].getZOrder()) + 100, "easeInOutQuad", 2000, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.menuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.menuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("Account", "Banner"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21813044);
}
}
if (isConditionTrue_0) {
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Account", "Banner", 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "settings"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("accountbtn"), gdjs.menuCode.GDaccountbtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("mslider"), gdjs.menuCode.GDmsliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("skybox"), gdjs.menuCode.GDskyboxObjects1);
gdjs.copyArray(runtimeScene.getObjects("sslider"), gdjs.menuCode.GDssliderObjects1);
{for(var i = 0, len = gdjs.menuCode.GDmsliderObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDmsliderObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.menuCode.GDssliderObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDssliderObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.menuCode.GDskyboxObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDskyboxObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.menuCode.GDaccountbtnObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDaccountbtnObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "settings");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("accountbtn"), gdjs.menuCode.GDaccountbtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("mslider"), gdjs.menuCode.GDmsliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("skybox"), gdjs.menuCode.GDskyboxObjects1);
gdjs.copyArray(runtimeScene.getObjects("sslider"), gdjs.menuCode.GDssliderObjects1);
{for(var i = 0, len = gdjs.menuCode.GDmsliderObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDmsliderObjects1[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.menuCode.GDssliderObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDssliderObjects1[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.menuCode.GDskyboxObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDskyboxObjects1[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.menuCode.GDaccountbtnObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDaccountbtnObjects1[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mslider"), gdjs.menuCode.GDmsliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDmsliderObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDmsliderObjects1[i].IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDmsliderObjects1[k] = gdjs.menuCode.GDmsliderObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDmsliderObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.menuCode.GDmsliderObjects1 */
{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 0, (( gdjs.menuCode.GDmsliderObjects1.length === 0 ) ? 0 :gdjs.menuCode.GDmsliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mslider"), gdjs.menuCode.GDmsliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDmsliderObjects1.length;i<l;++i) {
    if ( !(gdjs.menuCode.GDmsliderObjects1[i].IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDmsliderObjects1[k] = gdjs.menuCode.GDmsliderObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDmsliderObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25377220);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.menuCode.GDmsliderObjects1 */
{gdjs.evtTools.storage.writeNumberInJSONFile("Config", "Muzik", (( gdjs.menuCode.GDmsliderObjects1.length === 0 ) ? 0 :gdjs.menuCode.GDmsliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("sslider"), gdjs.menuCode.GDssliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDssliderObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDssliderObjects1[i].IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDssliderObjects1[k] = gdjs.menuCode.GDssliderObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDssliderObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.menuCode.GDssliderObjects1 */
{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 0, (( gdjs.menuCode.GDssliderObjects1.length === 0 ) ? 0 :gdjs.menuCode.GDssliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("sslider"), gdjs.menuCode.GDssliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDssliderObjects1.length;i<l;++i) {
    if ( !(gdjs.menuCode.GDssliderObjects1[i].IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDssliderObjects1[k] = gdjs.menuCode.GDssliderObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDssliderObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25379588);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.menuCode.GDssliderObjects1 */
{gdjs.evtTools.storage.writeNumberInJSONFile("Config", "Sound", (( gdjs.menuCode.GDssliderObjects1.length === 0 ) ? 0 :gdjs.menuCode.GDssliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isMusicOnChannelPlaying(runtimeScene, 0));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("mslider"), gdjs.menuCode.GDmsliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("sslider"), gdjs.menuCode.GDssliderObjects1);
{gdjs.evtTools.storage.readNumberFromJSONFile("Config", "Muzik", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2).getChild("muzik"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Config", "Sound", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2).getChild("sound"));
}{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("sound")));
}{for(var i = 0, len = gdjs.menuCode.GDmsliderObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDmsliderObjects1[i].SetValue(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("muzik")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.menuCode.GDssliderObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDssliderObjects1[i].SetValue(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("sound")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\audio\\dz1.mp3", 0, true, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("muzik")), 1);
}}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDcamObjects1.length = 0;
gdjs.menuCode.GDcamObjects2.length = 0;
gdjs.menuCode.GDcamObjects3.length = 0;
gdjs.menuCode.GDgroundObjects1.length = 0;
gdjs.menuCode.GDgroundObjects2.length = 0;
gdjs.menuCode.GDgroundObjects3.length = 0;
gdjs.menuCode.GDcreditObjects1.length = 0;
gdjs.menuCode.GDcreditObjects2.length = 0;
gdjs.menuCode.GDcreditObjects3.length = 0;
gdjs.menuCode.GDplayObjects1.length = 0;
gdjs.menuCode.GDplayObjects2.length = 0;
gdjs.menuCode.GDplayObjects3.length = 0;
gdjs.menuCode.GDsettingsObjects1.length = 0;
gdjs.menuCode.GDsettingsObjects2.length = 0;
gdjs.menuCode.GDsettingsObjects3.length = 0;
gdjs.menuCode.GDmedalsObjects1.length = 0;
gdjs.menuCode.GDmedalsObjects2.length = 0;
gdjs.menuCode.GDmedalsObjects3.length = 0;
gdjs.menuCode.GDsettingstitleObjects1.length = 0;
gdjs.menuCode.GDsettingstitleObjects2.length = 0;
gdjs.menuCode.GDsettingstitleObjects3.length = 0;
gdjs.menuCode.GDmusictitleObjects1.length = 0;
gdjs.menuCode.GDmusictitleObjects2.length = 0;
gdjs.menuCode.GDmusictitleObjects3.length = 0;
gdjs.menuCode.GDsoundtitleObjects1.length = 0;
gdjs.menuCode.GDsoundtitleObjects2.length = 0;
gdjs.menuCode.GDsoundtitleObjects3.length = 0;
gdjs.menuCode.GDskyboxtitleObjects1.length = 0;
gdjs.menuCode.GDskyboxtitleObjects2.length = 0;
gdjs.menuCode.GDskyboxtitleObjects3.length = 0;
gdjs.menuCode.GDmedalsittleObjects1.length = 0;
gdjs.menuCode.GDmedalsittleObjects2.length = 0;
gdjs.menuCode.GDmedalsittleObjects3.length = 0;
gdjs.menuCode.GDtitleObjects1.length = 0;
gdjs.menuCode.GDtitleObjects2.length = 0;
gdjs.menuCode.GDtitleObjects3.length = 0;
gdjs.menuCode.GDmsliderObjects1.length = 0;
gdjs.menuCode.GDmsliderObjects2.length = 0;
gdjs.menuCode.GDmsliderObjects3.length = 0;
gdjs.menuCode.GDssliderObjects1.length = 0;
gdjs.menuCode.GDssliderObjects2.length = 0;
gdjs.menuCode.GDssliderObjects3.length = 0;
gdjs.menuCode.GDskyboxObjects1.length = 0;
gdjs.menuCode.GDskyboxObjects2.length = 0;
gdjs.menuCode.GDskyboxObjects3.length = 0;
gdjs.menuCode.GDaccountbtnObjects1.length = 0;
gdjs.menuCode.GDaccountbtnObjects2.length = 0;
gdjs.menuCode.GDaccountbtnObjects3.length = 0;
gdjs.menuCode.GDnbObjects1.length = 0;
gdjs.menuCode.GDnbObjects2.length = 0;
gdjs.menuCode.GDnbObjects3.length = 0;

gdjs.menuCode.eventsList4(runtimeScene);

return;

}

gdjs['menuCode'] = gdjs.menuCode;
