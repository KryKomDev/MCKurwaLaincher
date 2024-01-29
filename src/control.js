// 
// MC KURWA LAUNCHER V2
// by KryKom 2024
//

const labels = ["worldSize", "heightLimit", "seed",                                                                         // world
                "mainNoiseSharpness", "mainNoiseScale", "biomeScale", "subbiomeScale", "terrainCollapseLimit",              // terrain
                "waterLevel", "oceanScale", "pondDensity", "freezingDistance", "maximumFreezingDistance", "iceHoleDensity", // water
                "treeDensity", "bushDensity", "woodyPlantsEdgeOffset",                                                      // plants
                "windowWidth", "windowHeight", "fieldOfView", "renderDistance",                                             // rendering
                "movementSpeed", "mouseSensibility"                                                                         // movement control
            ];
var values = [500, 250, 1,
              60, 17, 800, 400, 6,
              7, 90, 20, 20, 45, 0,
              130, 50, 0,
              1920, 1080, 60, 8000,
              25, 200];

const defaults = [500, 250, 1,
                  60, 17, 800, 400, 6,
                  7, 90, 20, 20, 45, 0,
                  130, 50, 0,
                  1920, 1080, 60, 8000,
                  25, 200];

const varToString = varObj => Object.keys(varObj)[0];

function add (id, value) {
    for (var i = 0; i < labels.length; i++) {
        if (labels[i] == id) {
            values[i] += value;
            document.getElementById(id).value = values[i];
        }
    }
}

function setValueById (id, value) {
    for (var i = 0; i < labels.length; i++) {
        if (labels[i] == id) {
            values[i] = value;
        }
    }
}