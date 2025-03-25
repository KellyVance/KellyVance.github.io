var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LGA_1 = new ol.format.GeoJSON();
var features_LGA_1 = format_LGA_1.readFeatures(json_LGA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LGA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LGA_1.addFeatures(features_LGA_1);
var lyr_LGA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LGA_1, 
                style: style_LGA_1,
                popuplayertitle: 'LGA',
                interactive: true,
                title: '<img src="styles/legend/LGA_1.png" /> LGA'
            });
var format_WesternAustraliaRegionsLGA_2 = new ol.format.GeoJSON();
var features_WesternAustraliaRegionsLGA_2 = format_WesternAustraliaRegionsLGA_2.readFeatures(json_WesternAustraliaRegionsLGA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WesternAustraliaRegionsLGA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WesternAustraliaRegionsLGA_2.addFeatures(features_WesternAustraliaRegionsLGA_2);
var lyr_WesternAustraliaRegionsLGA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WesternAustraliaRegionsLGA_2, 
                style: style_WesternAustraliaRegionsLGA_2,
                popuplayertitle: 'Western Australia Regions (LGA)',
                interactive: true,
    title: 'Western Australia Regions (LGA)<br />\
    <img src="styles/legend/WesternAustraliaRegionsLGA_2_0.png" /> Dampier<br />\
    <img src="styles/legend/WesternAustraliaRegionsLGA_2_1.png" /> Gascoyne<br />\
    <img src="styles/legend/WesternAustraliaRegionsLGA_2_2.png" /> Goldfields (Kalgoorlie)<br />\
    <img src="styles/legend/WesternAustraliaRegionsLGA_2_3.png" /> Kimberley<br />\
    <img src="styles/legend/WesternAustraliaRegionsLGA_2_4.png" /> MidWest (Geraldton)<br />\
    <img src="styles/legend/WesternAustraliaRegionsLGA_2_5.png" /> Port Hedland<br />\
    <img src="styles/legend/WesternAustraliaRegionsLGA_2_6.png" /> Tom Price and Paraburdoo<br />\
    <img src="styles/legend/WesternAustraliaRegionsLGA_2_7.png" /> Great Southern (Albany)<br />\
    <img src="styles/legend/WesternAustraliaRegionsLGA_2_8.png" /> Northern Wheatbelt<br />\
    <img src="styles/legend/WesternAustraliaRegionsLGA_2_9.png" /> Peel<br />\
    <img src="styles/legend/WesternAustraliaRegionsLGA_2_10.png" /> Perth Metropolitan<br />\
    <img src="styles/legend/WesternAustraliaRegionsLGA_2_11.png" /> South West<br />\
    <img src="styles/legend/WesternAustraliaRegionsLGA_2_12.png" /> Southern Wheat Belt<br />' });
var format_VictoriaRegionsLGA_3 = new ol.format.GeoJSON();
var features_VictoriaRegionsLGA_3 = format_VictoriaRegionsLGA_3.readFeatures(json_VictoriaRegionsLGA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VictoriaRegionsLGA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VictoriaRegionsLGA_3.addFeatures(features_VictoriaRegionsLGA_3);
var lyr_VictoriaRegionsLGA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VictoriaRegionsLGA_3, 
                style: style_VictoriaRegionsLGA_3,
                popuplayertitle: 'Victoria Regions (LGA)',
                interactive: true,
    title: 'Victoria Regions (LGA)<br />\
    <img src="styles/legend/VictoriaRegionsLGA_3_0.png" /> Ballarat<br />\
    <img src="styles/legend/VictoriaRegionsLGA_3_1.png" /> Bendigo<br />\
    <img src="styles/legend/VictoriaRegionsLGA_3_2.png" /> Geelong<br />\
    <img src="styles/legend/VictoriaRegionsLGA_3_3.png" /> Gippsland<br />\
    <img src="styles/legend/VictoriaRegionsLGA_3_4.png" /> Goulburn Valley<br />\
    <img src="styles/legend/VictoriaRegionsLGA_3_5.png" /> Melbourne Metropolitan<br />\
    <img src="styles/legend/VictoriaRegionsLGA_3_6.png" /> North East<br />\
    <img src="styles/legend/VictoriaRegionsLGA_3_7.png" /> South West<br />\
    <img src="styles/legend/VictoriaRegionsLGA_3_8.png" /> Sunraysia<br />\
    <img src="styles/legend/VictoriaRegionsLGA_3_9.png" /> Upper Murray<br />\
    <img src="styles/legend/VictoriaRegionsLGA_3_10.png" /> Wimmera<br />' });
var format_TasmaniaRegionsLGA_4 = new ol.format.GeoJSON();
var features_TasmaniaRegionsLGA_4 = format_TasmaniaRegionsLGA_4.readFeatures(json_TasmaniaRegionsLGA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TasmaniaRegionsLGA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TasmaniaRegionsLGA_4.addFeatures(features_TasmaniaRegionsLGA_4);
var lyr_TasmaniaRegionsLGA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TasmaniaRegionsLGA_4, 
                style: style_TasmaniaRegionsLGA_4,
                popuplayertitle: 'Tasmania Regions (LGA)',
                interactive: true,
    title: 'Tasmania Regions (LGA)<br />\
    <img src="styles/legend/TasmaniaRegionsLGA_4_0.png" /> North Tasmania<br />\
    <img src="styles/legend/TasmaniaRegionsLGA_4_1.png" /> North West Tasmania<br />\
    <img src="styles/legend/TasmaniaRegionsLGA_4_2.png" /> Southern Tasmania<br />' });
var format_SydneyRegionsLGA_5 = new ol.format.GeoJSON();
var features_SydneyRegionsLGA_5 = format_SydneyRegionsLGA_5.readFeatures(json_SydneyRegionsLGA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SydneyRegionsLGA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SydneyRegionsLGA_5.addFeatures(features_SydneyRegionsLGA_5);
var lyr_SydneyRegionsLGA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SydneyRegionsLGA_5, 
                style: style_SydneyRegionsLGA_5,
                popuplayertitle: 'Sydney Regions (LGA)',
                interactive: true,
    title: 'Sydney Regions (LGA)<br />\
    <img src="styles/legend/SydneyRegionsLGA_5_0.png" /> Albury<br />\
    <img src="styles/legend/SydneyRegionsLGA_5_1.png" /> Broken Hill<br />\
    <img src="styles/legend/SydneyRegionsLGA_5_2.png" /> Central West<br />\
    <img src="styles/legend/SydneyRegionsLGA_5_3.png" /> Deniliquin<br />\
    <img src="styles/legend/SydneyRegionsLGA_5_4.png" /> Dubbo<br />\
    <img src="styles/legend/SydneyRegionsLGA_5_5.png" /> Far South Coast<br />\
    <img src="styles/legend/SydneyRegionsLGA_5_6.png" /> Illawarra Sutherland<br />\
    <img src="styles/legend/SydneyRegionsLGA_5_7.png" /> Monaro<br />\
    <img src="styles/legend/SydneyRegionsLGA_5_8.png" /> Murrumbidgee<br />\
    <img src="styles/legend/SydneyRegionsLGA_5_9.png" /> Riverina<br />\
    <img src="styles/legend/SydneyRegionsLGA_5_10.png" /> Shoalhaven<br />\
    <img src="styles/legend/SydneyRegionsLGA_5_11.png" /> Southern Highlands and Tablelands<br />\
    <img src="styles/legend/SydneyRegionsLGA_5_12.png" /> Sydney Metropolitan<br />\
    <img src="styles/legend/SydneyRegionsLGA_5_13.png" /> Western Sydney<br />' });
var format_SouthAustraliaRegionsLGA_6 = new ol.format.GeoJSON();
var features_SouthAustraliaRegionsLGA_6 = format_SouthAustraliaRegionsLGA_6.readFeatures(json_SouthAustraliaRegionsLGA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SouthAustraliaRegionsLGA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SouthAustraliaRegionsLGA_6.addFeatures(features_SouthAustraliaRegionsLGA_6);
var lyr_SouthAustraliaRegionsLGA_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SouthAustraliaRegionsLGA_6, 
                style: style_SouthAustraliaRegionsLGA_6,
                popuplayertitle: 'South Australia Regions (LGA)',
                interactive: true,
    title: 'South Australia Regions (LGA)<br />\
    <img src="styles/legend/SouthAustraliaRegionsLGA_6_0.png" /> Adelaide Metropolitan<br />\
    <img src="styles/legend/SouthAustraliaRegionsLGA_6_1.png" /> Mid-North<br />\
    <img src="styles/legend/SouthAustraliaRegionsLGA_6_2.png" /> Olympic Dam<br />\
    <img src="styles/legend/SouthAustraliaRegionsLGA_6_3.png" /> Port Augusta<br />\
    <img src="styles/legend/SouthAustraliaRegionsLGA_6_4.png" /> Port Lincoln<br />\
    <img src="styles/legend/SouthAustraliaRegionsLGA_6_5.png" /> Port Pirie<br />\
    <img src="styles/legend/SouthAustraliaRegionsLGA_6_6.png" /> Riverland<br />\
    <img src="styles/legend/SouthAustraliaRegionsLGA_6_7.png" /> South East<br />\
    <img src="styles/legend/SouthAustraliaRegionsLGA_6_8.png" /> Whyalla<br />' });
var format_QueenslandRegionsLGA_7 = new ol.format.GeoJSON();
var features_QueenslandRegionsLGA_7 = format_QueenslandRegionsLGA_7.readFeatures(json_QueenslandRegionsLGA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QueenslandRegionsLGA_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QueenslandRegionsLGA_7.addFeatures(features_QueenslandRegionsLGA_7);
var lyr_QueenslandRegionsLGA_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QueenslandRegionsLGA_7, 
                style: style_QueenslandRegionsLGA_7,
                popuplayertitle: 'Queensland Regions (LGA)',
                interactive: true,
    title: 'Queensland Regions (LGA)<br />\
    <img src="styles/legend/QueenslandRegionsLGA_7_0.png" /> Brisbane Metropolitan<br />\
    <img src="styles/legend/QueenslandRegionsLGA_7_1.png" /> Burnett (Bundaberg)<br />\
    <img src="styles/legend/QueenslandRegionsLGA_7_2.png" /> Cairns<br />\
    <img src="styles/legend/QueenslandRegionsLGA_7_3.png" /> Cape York<br />\
    <img src="styles/legend/QueenslandRegionsLGA_7_4.png" /> Central Highlands (Emerald)<br />\
    <img src="styles/legend/QueenslandRegionsLGA_7_5.png" /> Central Western (Barcaldine)<br />\
    <img src="styles/legend/QueenslandRegionsLGA_7_6.png" /> Gladstone<br />\
    <img src="styles/legend/QueenslandRegionsLGA_7_7.png" /> Gold Coast<br />\
    <img src="styles/legend/QueenslandRegionsLGA_7_8.png" /> Ipswich<br />\
    <img src="styles/legend/QueenslandRegionsLGA_7_9.png" /> Mackay<br />\
    <img src="styles/legend/QueenslandRegionsLGA_7_10.png" /> North Western (Mt Isa)<br />\
    <img src="styles/legend/QueenslandRegionsLGA_7_11.png" /> Rockhampton<br />\
    <img src="styles/legend/QueenslandRegionsLGA_7_12.png" /> Roma<br />\
    <img src="styles/legend/QueenslandRegionsLGA_7_13.png" /> Sunshine Coast<br />\
    <img src="styles/legend/QueenslandRegionsLGA_7_14.png" /> Toowoomba<br />\
    <img src="styles/legend/QueenslandRegionsLGA_7_15.png" /> Townsville<br />\
    <img src="styles/legend/QueenslandRegionsLGA_7_16.png" /> Wide Bay (Maryborough)<br />' });
var format_NorthernTerritoryRegionsLGA_8 = new ol.format.GeoJSON();
var features_NorthernTerritoryRegionsLGA_8 = format_NorthernTerritoryRegionsLGA_8.readFeatures(json_NorthernTerritoryRegionsLGA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NorthernTerritoryRegionsLGA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NorthernTerritoryRegionsLGA_8.addFeatures(features_NorthernTerritoryRegionsLGA_8);
var lyr_NorthernTerritoryRegionsLGA_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NorthernTerritoryRegionsLGA_8, 
                style: style_NorthernTerritoryRegionsLGA_8,
                popuplayertitle: 'Northern Territory Regions (LGA)',
                interactive: true,
    title: 'Northern Territory Regions (LGA)<br />\
    <img src="styles/legend/NorthernTerritoryRegionsLGA_8_0.png" /> Alice Springs<br />\
    <img src="styles/legend/NorthernTerritoryRegionsLGA_8_1.png" /> Darwin<br />\
    <img src="styles/legend/NorthernTerritoryRegionsLGA_8_2.png" /> Gove<br />\
    <img src="styles/legend/NorthernTerritoryRegionsLGA_8_3.png" /> Jabiru<br />\
    <img src="styles/legend/NorthernTerritoryRegionsLGA_8_4.png" /> Katherine<br />\
    <img src="styles/legend/NorthernTerritoryRegionsLGA_8_5.png" /> Tennant Creek<br />' });
var format_NewcastleRegionsLGA_9 = new ol.format.GeoJSON();
var features_NewcastleRegionsLGA_9 = format_NewcastleRegionsLGA_9.readFeatures(json_NewcastleRegionsLGA_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NewcastleRegionsLGA_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NewcastleRegionsLGA_9.addFeatures(features_NewcastleRegionsLGA_9);
var lyr_NewcastleRegionsLGA_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NewcastleRegionsLGA_9, 
                style: style_NewcastleRegionsLGA_9,
                popuplayertitle: 'Newcastle Regions (LGA)',
                interactive: true,
    title: 'Newcastle Regions (LGA)<br />\
    <img src="styles/legend/NewcastleRegionsLGA_9_0.png" /> Central Coast<br />\
    <img src="styles/legend/NewcastleRegionsLGA_9_1.png" /> Mid North Coast<br />\
    <img src="styles/legend/NewcastleRegionsLGA_9_2.png" /> Newcastle Metropolitan<br />\
    <img src="styles/legend/NewcastleRegionsLGA_9_3.png" /> Northern<br />\
    <img src="styles/legend/NewcastleRegionsLGA_9_4.png" /> Northern Rivers<br />\
    <img src="styles/legend/NewcastleRegionsLGA_9_5.png" /> Upper Hunter<br />' });
var format_ACTRegionsLGA_10 = new ol.format.GeoJSON();
var features_ACTRegionsLGA_10 = format_ACTRegionsLGA_10.readFeatures(json_ACTRegionsLGA_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACTRegionsLGA_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACTRegionsLGA_10.addFeatures(features_ACTRegionsLGA_10);
var lyr_ACTRegionsLGA_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ACTRegionsLGA_10, 
                style: style_ACTRegionsLGA_10,
                popuplayertitle: 'ACT Regions (LGA)',
                interactive: true,
    title: 'ACT Regions (LGA)<br />\
    <img src="styles/legend/ACTRegionsLGA_10_0.png" /> Canberra - Australian Capital Territory<br />' });
var group_RegionsFromLGAs = new ol.layer.Group({
                                layers: [lyr_WesternAustraliaRegionsLGA_2,lyr_VictoriaRegionsLGA_3,lyr_TasmaniaRegionsLGA_4,lyr_SydneyRegionsLGA_5,lyr_SouthAustraliaRegionsLGA_6,lyr_QueenslandRegionsLGA_7,lyr_NorthernTerritoryRegionsLGA_8,lyr_NewcastleRegionsLGA_9,lyr_ACTRegionsLGA_10,],
                                fold: "open",
                                title: 'RegionsFromLGAs'});
var group_ABSLayers = new ol.layer.Group({
                                layers: [lyr_LGA_1,],
                                fold: "open",
                                title: 'ABS Layers'});

lyr_OpenStreetMap_0.setVisible(true);lyr_LGA_1.setVisible(true);lyr_WesternAustraliaRegionsLGA_2.setVisible(true);lyr_VictoriaRegionsLGA_3.setVisible(true);lyr_TasmaniaRegionsLGA_4.setVisible(true);lyr_SydneyRegionsLGA_5.setVisible(true);lyr_SouthAustraliaRegionsLGA_6.setVisible(true);lyr_QueenslandRegionsLGA_7.setVisible(true);lyr_NorthernTerritoryRegionsLGA_8.setVisible(true);lyr_NewcastleRegionsLGA_9.setVisible(true);lyr_ACTRegionsLGA_10.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_ABSLayers,group_RegionsFromLGAs];
lyr_LGA_1.set('fieldAliases', {'objectid': 'OBJECTID', 'lga_code_2024': 'LGA_CODE_2024', 'lga_name_2024': 'LGA_NAME_2024', 'state_code_2021': 'STATE_CODE_2021', 'state_name_2021': 'STATE_NAME_2021', 'aus_code_2021': 'AUS_CODE_2021', 'aus_name_2021': 'AUS_NAME_2021', 'area_albers_sqkm': 'AREA_ALBERS_SQKM', 'asgs_loci_uri_2021': 'ASGS_LOCI_URI_2021', 'st_area(shape)': 'st_area(shape)', 'st_length(shape)': 'st_length(shape)', });
lyr_WesternAustraliaRegionsLGA_2.set('fieldAliases', {'fid': 'fid', 'Regional Group': 'Regional Group', 'Description': 'Description', });
lyr_VictoriaRegionsLGA_3.set('fieldAliases', {'fid': 'fid', 'Regional Group': 'Regional Group', 'Description': 'Description', });
lyr_TasmaniaRegionsLGA_4.set('fieldAliases', {'fid': 'fid', 'Regional Group': 'Regional Group', 'Description': 'Description', });
lyr_SydneyRegionsLGA_5.set('fieldAliases', {'fid': 'fid', 'Regional Group': 'Regional Group', 'Description': 'Description', });
lyr_SouthAustraliaRegionsLGA_6.set('fieldAliases', {'fid': 'fid', 'Regional Group': 'Regional Group', 'Description': 'Description', });
lyr_QueenslandRegionsLGA_7.set('fieldAliases', {'fid': 'fid', 'Regional Group': 'Regional Group', 'Description': 'Description', });
lyr_NorthernTerritoryRegionsLGA_8.set('fieldAliases', {'fid': 'fid', 'Regional Group': 'Regional Group', 'Description': 'Description', });
lyr_NewcastleRegionsLGA_9.set('fieldAliases', {'fid': 'fid', 'Regional Group': 'Regional Group', 'Description': 'Description', });
lyr_ACTRegionsLGA_10.set('fieldAliases', {'fid': 'fid', 'Regional Group': 'Regional Group', 'Description': 'Description', });
lyr_LGA_1.set('fieldImages', {'objectid': 'TextEdit', 'lga_code_2024': 'TextEdit', 'lga_name_2024': 'TextEdit', 'state_code_2021': 'TextEdit', 'state_name_2021': 'TextEdit', 'aus_code_2021': 'TextEdit', 'aus_name_2021': 'TextEdit', 'area_albers_sqkm': 'TextEdit', 'asgs_loci_uri_2021': 'TextEdit', 'st_area(shape)': 'TextEdit', 'st_length(shape)': 'TextEdit', });
lyr_WesternAustraliaRegionsLGA_2.set('fieldImages', {'fid': 'TextEdit', 'Regional Group': 'TextEdit', 'Description': 'TextEdit', });
lyr_VictoriaRegionsLGA_3.set('fieldImages', {'fid': 'TextEdit', 'Regional Group': 'TextEdit', 'Description': 'TextEdit', });
lyr_TasmaniaRegionsLGA_4.set('fieldImages', {'fid': 'TextEdit', 'Regional Group': 'TextEdit', 'Description': 'TextEdit', });
lyr_SydneyRegionsLGA_5.set('fieldImages', {'fid': 'TextEdit', 'Regional Group': 'TextEdit', 'Description': 'TextEdit', });
lyr_SouthAustraliaRegionsLGA_6.set('fieldImages', {'fid': 'TextEdit', 'Regional Group': 'TextEdit', 'Description': 'TextEdit', });
lyr_QueenslandRegionsLGA_7.set('fieldImages', {'fid': 'TextEdit', 'Regional Group': 'TextEdit', 'Description': 'TextEdit', });
lyr_NorthernTerritoryRegionsLGA_8.set('fieldImages', {'fid': 'TextEdit', 'Regional Group': 'TextEdit', 'Description': 'TextEdit', });
lyr_NewcastleRegionsLGA_9.set('fieldImages', {'fid': 'TextEdit', 'Regional Group': 'TextEdit', 'Description': 'TextEdit', });
lyr_ACTRegionsLGA_10.set('fieldImages', {'fid': 'TextEdit', 'Regional Group': 'TextEdit', 'Description': 'TextEdit', });
lyr_LGA_1.set('fieldLabels', {'objectid': 'no label', 'lga_code_2024': 'no label', 'lga_name_2024': 'no label', 'state_code_2021': 'no label', 'state_name_2021': 'no label', 'aus_code_2021': 'no label', 'aus_name_2021': 'no label', 'area_albers_sqkm': 'no label', 'asgs_loci_uri_2021': 'no label', 'st_area(shape)': 'no label', 'st_length(shape)': 'no label', });
lyr_WesternAustraliaRegionsLGA_2.set('fieldLabels', {'fid': 'no label', 'Regional Group': 'no label', 'Description': 'no label', });
lyr_VictoriaRegionsLGA_3.set('fieldLabels', {'fid': 'no label', 'Regional Group': 'no label', 'Description': 'no label', });
lyr_TasmaniaRegionsLGA_4.set('fieldLabels', {'fid': 'no label', 'Regional Group': 'no label', 'Description': 'no label', });
lyr_SydneyRegionsLGA_5.set('fieldLabels', {'fid': 'no label', 'Regional Group': 'no label', 'Description': 'no label', });
lyr_SouthAustraliaRegionsLGA_6.set('fieldLabels', {'fid': 'no label', 'Regional Group': 'no label', 'Description': 'no label', });
lyr_QueenslandRegionsLGA_7.set('fieldLabels', {'fid': 'no label', 'Regional Group': 'no label', 'Description': 'no label', });
lyr_NorthernTerritoryRegionsLGA_8.set('fieldLabels', {'fid': 'no label', 'Regional Group': 'no label', 'Description': 'no label', });
lyr_NewcastleRegionsLGA_9.set('fieldLabels', {'fid': 'no label', 'Regional Group': 'no label', 'Description': 'no label', });
lyr_ACTRegionsLGA_10.set('fieldLabels', {'fid': 'no label', 'Regional Group': 'no label', 'Description': 'no label', });
lyr_ACTRegionsLGA_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});