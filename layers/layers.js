var wms_layers = [];


        var lyr_GoogleEarth_0 = new ol.layer.Tile({
            'title': 'Google Earth',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Project_AOI_2 = new ol.format.GeoJSON();
var features_Project_AOI_2 = format_Project_AOI_2.readFeatures(json_Project_AOI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Project_AOI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Project_AOI_2.addFeatures(features_Project_AOI_2);
var lyr_Project_AOI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Project_AOI_2, 
                style: style_Project_AOI_2,
                popuplayertitle: 'Project_AOI',
                interactive: false,
                title: '<img src="styles/legend/Project_AOI_2.png" /> Project_AOI'
            });
var format_Existing_HealthFacility_3 = new ol.format.GeoJSON();
var features_Existing_HealthFacility_3 = format_Existing_HealthFacility_3.readFeatures(json_Existing_HealthFacility_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Existing_HealthFacility_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Existing_HealthFacility_3.addFeatures(features_Existing_HealthFacility_3);
cluster_Existing_HealthFacility_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Existing_HealthFacility_3
});
var lyr_Existing_HealthFacility_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Existing_HealthFacility_3, 
                style: style_Existing_HealthFacility_3,
                popuplayertitle: 'Existing_Health Facility',
                interactive: true,
    title: 'Existing_Health Facility<br />\
    <img src="styles/legend/Existing_HealthFacility_3_0.png" /> Hospital<br />\
    <img src="styles/legend/Existing_HealthFacility_3_1.png" /> Specialty Center<br />\
    <img src="styles/legend/Existing_HealthFacility_3_2.png" /> Specialty Clinic<br />\
    <img src="styles/legend/Existing_HealthFacility_3_3.png" /> Health Center<br />\
    <img src="styles/legend/Existing_HealthFacility_3_4.png" /> Clinic<br />\
    <img src="styles/legend/Existing_HealthFacility_3_5.png" /> Pharmacy<br />' });
var format_ThemostsuitableLocation_V2_4 = new ol.format.GeoJSON();
var features_ThemostsuitableLocation_V2_4 = format_ThemostsuitableLocation_V2_4.readFeatures(json_ThemostsuitableLocation_V2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ThemostsuitableLocation_V2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ThemostsuitableLocation_V2_4.addFeatures(features_ThemostsuitableLocation_V2_4);
var lyr_ThemostsuitableLocation_V2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ThemostsuitableLocation_V2_4, 
                style: style_ThemostsuitableLocation_V2_4,
                popuplayertitle: 'The most suitable Location_V2',
                interactive: false,
    title: 'The most suitable Location_V2<br />\
    <img src="styles/legend/ThemostsuitableLocation_V2_4_0.png" /> Most Suitable Site<br />\
    <img src="styles/legend/ThemostsuitableLocation_V2_4_1.png" /> Less Suitable Site<br />\
    <img src="styles/legend/ThemostsuitableLocation_V2_4_2.png" /> Not Suitable Site<br />' });

lyr_GoogleEarth_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_Project_AOI_2.setVisible(true);lyr_Existing_HealthFacility_3.setVisible(true);lyr_ThemostsuitableLocation_V2_4.setVisible(true);
var layersList = [lyr_GoogleEarth_0,lyr_OSMStandard_1,lyr_Project_AOI_2,lyr_Existing_HealthFacility_3,lyr_ThemostsuitableLocation_V2_4];
lyr_Project_AOI_2.set('fieldAliases', {'ZONE_': 'ZONE_', 'LUSE_CODE': 'LUSE_CODE', 'Use_Type': 'Use_Type', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'WOREDA': 'WOREDA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Existing_HealthFacility_3.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Altitude': 'Altitude', 'Ownership': 'Ownership', 'Type': 'Type', 'admin3Name': 'admin3Name', 'admin2Name': 'admin2Name', 'admin1Name': 'admin1Name', 'admin1Pcod': 'admin1Pcod', 'City': 'City', 'Kebele': 'Kebele', 'Status': 'Status', });
lyr_ThemostsuitableLocation_V2_4.set('fieldAliases', {'ZONE_': 'ZONE_', 'LUSE_CODE': 'LUSE_CODE', 'Use_Type': 'Use_Type', 'AREA': 'AREA', 'WOREDA': 'WOREDA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'OBJECTID': 'OBJECTID', 'Suitabilit': 'Suitabilit', });
lyr_Project_AOI_2.set('fieldImages', {'ZONE_': 'Range', 'LUSE_CODE': 'TextEdit', 'Use_Type': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'WOREDA': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Existing_HealthFacility_3.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Altitude': 'TextEdit', 'Ownership': 'TextEdit', 'Type': 'TextEdit', 'admin3Name': 'TextEdit', 'admin2Name': 'TextEdit', 'admin1Name': 'TextEdit', 'admin1Pcod': 'TextEdit', 'City': 'TextEdit', 'Kebele': 'TextEdit', 'Status': 'TextEdit', });
lyr_ThemostsuitableLocation_V2_4.set('fieldImages', {'ZONE_': 'Range', 'LUSE_CODE': 'TextEdit', 'Use_Type': 'TextEdit', 'AREA': 'TextEdit', 'WOREDA': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'OBJECTID': 'Range', 'Suitabilit': 'TextEdit', });
lyr_Project_AOI_2.set('fieldLabels', {'ZONE_': 'no label', 'LUSE_CODE': 'no label', 'Use_Type': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'WOREDA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Existing_HealthFacility_3.set('fieldLabels', {'Id': 'hidden field', 'Name': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Altitude': 'hidden field', 'Ownership': 'inline label - always visible', 'Type': 'inline label - always visible', 'admin3Name': 'hidden field', 'admin2Name': 'hidden field', 'admin1Name': 'hidden field', 'admin1Pcod': 'hidden field', 'City': 'inline label - always visible', 'Kebele': 'hidden field', 'Status': 'hidden field', });
lyr_ThemostsuitableLocation_V2_4.set('fieldLabels', {'ZONE_': 'hidden field', 'LUSE_CODE': 'hidden field', 'Use_Type': 'hidden field', 'AREA': 'no label', 'WOREDA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'OBJECTID': 'no label', 'Suitabilit': 'no label', });
lyr_ThemostsuitableLocation_V2_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});