var begDesc = "$$$/JavaScripts/AutoSaveDocumentOnPainting/Description=Saves current Photoshop document on painting (and other) events";
var begName = "$$$/JavaScripts/AutoSaveDocumentOnPainting/MenuName=AutoSaveDocumentOnPainting";

#target photoshop

var INCLUDED_TOOLS = {

    "pntb": true,
    "stam": true,
    "stmp": true,
    "hstB": true,
    "penc": true,
    "crbt": true,
    "wetb": true,
    "blur": true,
    "shar": true,
    "smud": true,
    "dodg": true,
    "burn": true,
    "dsat": true,
    "sphB": true,
    "stmm": true,
    "ptch": true,
    "eras": true,
    "sera": true,
    "bndT": true
};

var INCLUDED_ADJUSTMENTS = {

    "hueSaturation": true,
    "levels": true,
    "curves": true,
    "colorBalance": true,
    "brightnessEvent": true,
    "vibrance": true,
    "exposure": true,
    "blackAndWhite": true,
    "selectiveColor": true,
    "photoFilter": true,
    "channelMixer": true,
    "colorLookup": true,
    "invert": true,
    "posterization": true,
    "thresholdClassEvent": true,
    "gradientMapEvent": true,
    "adaptCorrect": true,
    "desaturate": true,
    "matchColor": true,
    "replaceColor": true,
    "equalize": true,
    "applyImageEvent": true,
    "rotateEventEnum": true,
    "flip": true,
    "sharpen": true,
    "sharpenEdges": true,
    "sharpenMore": true,
    "smartSharpen": true,
    "unsharpMask": true,
    "1CAB8255-B682-4EAD-8184-AC65030134D5": true,    // sharpen -> shake reduction
    "blurEvent": true,
    "boxblur": true,
    "gaussianBlur": true,
    "motionBlur": true,
    "radialBlur": true,
    "shapeBlur": true,
    "smartBlur": true,
    "surfaceBlur": true,
    "addNoise": true,
    "despeckle": true,
    "dustAndScratches": true,
    "median": true,
    "denoise": true
};

try {

    if (arguments.length < 2) throw new Error("Not enough parameters, expecting at least two");

    var desc = arguments[0];
    var eventID = arguments[1];

    var eventName = typeIDToStringID(eventID);

    switch (eventName) {

        case "toolModalStateChanged":

            handleToolEvent(desc);
            break;

        case "make":
        case "set":

            doActiveDocumentSave(eventName);
            break;

        case "hide":
        case "show":

            doActiveDocumentSave(eventName);
            break;

        default:

            handleAnyOtherEvent(eventName);
            break;
    }

} catch (error) {

    alert("AutoSaveDocumentOnPainting: " + error.message);
}

function handleToolEvent(desc) {

    var keyState = charIDToTypeID("Stte");
    var keyTool = charIDToTypeID("Tool");

    if (!desc.hasKey(keyState) || !desc.hasKey(keyTool)) return;

    var state = typeIDToStringID(desc.getEnumerationValue(keyState));

    if (state !== "exit") return;

    var toolDesc = desc.getObjectValue(keyTool);

    var toolId = toolDesc.getString(charIDToTypeID("Idnt"));

    if (INCLUDED_TOOLS[toolId]) doActiveDocumentSave("tool", toolId);
}

function handleAnyOtherEvent(eventName) {

    if (INCLUDED_ADJUSTMENTS[eventName]) doActiveDocumentSave("adjustment", eventName);
}

function doActiveDocumentSave(category, id) {

    activeDocument.save();
}
