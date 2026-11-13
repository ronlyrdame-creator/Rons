var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_AelanDigitalaelan_digital_1 = new ol.format.GeoJSON();
var features_AelanDigitalaelan_digital_1 = format_AelanDigitalaelan_digital_1.readFeatures(json_AelanDigitalaelan_digital_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AelanDigitalaelan_digital_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AelanDigitalaelan_digital_1.addFeatures(features_AelanDigitalaelan_digital_1);
var lyr_AelanDigitalaelan_digital_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AelanDigitalaelan_digital_1, 
                style: style_AelanDigitalaelan_digital_1,
                popuplayertitle: 'Aelan Digital — aelan_digital',
                interactive: true,
                title: '<img src="styles/legend/AelanDigitalaelan_digital_1.png" /> Aelan Digital — aelan_digital'
            });
var format_ANZCentralTulagianz_centraltulagi__2 = new ol.format.GeoJSON();
var features_ANZCentralTulagianz_centraltulagi__2 = format_ANZCentralTulagianz_centraltulagi__2.readFeatures(json_ANZCentralTulagianz_centraltulagi__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANZCentralTulagianz_centraltulagi__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANZCentralTulagianz_centraltulagi__2.addFeatures(features_ANZCentralTulagianz_centraltulagi__2);
var lyr_ANZCentralTulagianz_centraltulagi__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANZCentralTulagianz_centraltulagi__2, 
                style: style_ANZCentralTulagianz_centraltulagi__2,
                popuplayertitle: 'ANZ Central(Tulagi) — anz_centraltulagi_',
                interactive: true,
                title: '<img src="styles/legend/ANZCentralTulagianz_centraltulagi__2.png" /> ANZ Central(Tulagi) — anz_centraltulagi_'
            });
var format_ANZHoniaraanz_honiara__3 = new ol.format.GeoJSON();
var features_ANZHoniaraanz_honiara__3 = format_ANZHoniaraanz_honiara__3.readFeatures(json_ANZHoniaraanz_honiara__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANZHoniaraanz_honiara__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANZHoniaraanz_honiara__3.addFeatures(features_ANZHoniaraanz_honiara__3);
var lyr_ANZHoniaraanz_honiara__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANZHoniaraanz_honiara__3, 
                style: style_ANZHoniaraanz_honiara__3,
                popuplayertitle: 'ANZ Honiara — anz_honiara_',
                interactive: true,
                title: '<img src="styles/legend/ANZHoniaraanz_honiara__3.png" /> ANZ Honiara — anz_honiara_'
            });
var format_ANZMundaanz_munda_4 = new ol.format.GeoJSON();
var features_ANZMundaanz_munda_4 = format_ANZMundaanz_munda_4.readFeatures(json_ANZMundaanz_munda_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANZMundaanz_munda_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANZMundaanz_munda_4.addFeatures(features_ANZMundaanz_munda_4);
var lyr_ANZMundaanz_munda_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANZMundaanz_munda_4, 
                style: style_ANZMundaanz_munda_4,
                popuplayertitle: 'ANZ Munda — anz_munda',
                interactive: true,
                title: '<img src="styles/legend/ANZMundaanz_munda_4.png" /> ANZ Munda — anz_munda'
            });
var format_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__5 = new ol.format.GeoJSON();
var features_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__5 = format_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__5.readFeatures(json_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__5.addFeatures(features_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__5);
var lyr_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__5, 
                style: style_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__5,
                popuplayertitle: 'Bank of South Pacific Choisuel — bank_of_south_pacific_choisuel_',
                interactive: true,
                title: '<img src="styles/legend/BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__5.png" /> Bank of South Pacific Choisuel — bank_of_south_pacific_choisuel_'
            });
var format_BankofSouthPacificHoniarabank_of_south_pacific_honiara_6 = new ol.format.GeoJSON();
var features_BankofSouthPacificHoniarabank_of_south_pacific_honiara_6 = format_BankofSouthPacificHoniarabank_of_south_pacific_honiara_6.readFeatures(json_BankofSouthPacificHoniarabank_of_south_pacific_honiara_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BankofSouthPacificHoniarabank_of_south_pacific_honiara_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BankofSouthPacificHoniarabank_of_south_pacific_honiara_6.addFeatures(features_BankofSouthPacificHoniarabank_of_south_pacific_honiara_6);
var lyr_BankofSouthPacificHoniarabank_of_south_pacific_honiara_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BankofSouthPacificHoniarabank_of_south_pacific_honiara_6, 
                style: style_BankofSouthPacificHoniarabank_of_south_pacific_honiara_6,
                popuplayertitle: 'Bank of South Pacific Honiara — bank_of_south_pacific_honiara',
                interactive: true,
                title: '<img src="styles/legend/BankofSouthPacificHoniarabank_of_south_pacific_honiara_6.png" /> Bank of South Pacific Honiara — bank_of_south_pacific_honiara'
            });
var format_BankofSouthPacificGizobank_of_south_pacific_gizo_7 = new ol.format.GeoJSON();
var features_BankofSouthPacificGizobank_of_south_pacific_gizo_7 = format_BankofSouthPacificGizobank_of_south_pacific_gizo_7.readFeatures(json_BankofSouthPacificGizobank_of_south_pacific_gizo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BankofSouthPacificGizobank_of_south_pacific_gizo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BankofSouthPacificGizobank_of_south_pacific_gizo_7.addFeatures(features_BankofSouthPacificGizobank_of_south_pacific_gizo_7);
var lyr_BankofSouthPacificGizobank_of_south_pacific_gizo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BankofSouthPacificGizobank_of_south_pacific_gizo_7, 
                style: style_BankofSouthPacificGizobank_of_south_pacific_gizo_7,
                popuplayertitle: 'Bank of South Pacific Gizo — bank_of_south_pacific_gizo',
                interactive: true,
                title: '<img src="styles/legend/BankofSouthPacificGizobank_of_south_pacific_gizo_7.png" /> Bank of South Pacific Gizo — bank_of_south_pacific_gizo'
            });
var format_BankofSouthPacificHoniara_8 = new ol.format.GeoJSON();
var features_BankofSouthPacificHoniara_8 = format_BankofSouthPacificHoniara_8.readFeatures(json_BankofSouthPacificHoniara_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BankofSouthPacificHoniara_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BankofSouthPacificHoniara_8.addFeatures(features_BankofSouthPacificHoniara_8);
var lyr_BankofSouthPacificHoniara_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BankofSouthPacificHoniara_8, 
                style: style_BankofSouthPacificHoniara_8,
                popuplayertitle: 'Bank of South Pacific Honiara',
                interactive: true,
                title: '<img src="styles/legend/BankofSouthPacificHoniara_8.png" /> Bank of South Pacific Honiara'
            });
var format_BankofSouthPacificMalaita_9 = new ol.format.GeoJSON();
var features_BankofSouthPacificMalaita_9 = format_BankofSouthPacificMalaita_9.readFeatures(json_BankofSouthPacificMalaita_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BankofSouthPacificMalaita_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BankofSouthPacificMalaita_9.addFeatures(features_BankofSouthPacificMalaita_9);
var lyr_BankofSouthPacificMalaita_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BankofSouthPacificMalaita_9, 
                style: style_BankofSouthPacificMalaita_9,
                popuplayertitle: 'Bank of South Pacific Malaita',
                interactive: true,
                title: '<img src="styles/legend/BankofSouthPacificMalaita_9.png" /> Bank of South Pacific Malaita'
            });
var format_BankofSouthPacificMunda_10 = new ol.format.GeoJSON();
var features_BankofSouthPacificMunda_10 = format_BankofSouthPacificMunda_10.readFeatures(json_BankofSouthPacificMunda_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BankofSouthPacificMunda_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BankofSouthPacificMunda_10.addFeatures(features_BankofSouthPacificMunda_10);
var lyr_BankofSouthPacificMunda_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BankofSouthPacificMunda_10, 
                style: style_BankofSouthPacificMunda_10,
                popuplayertitle: 'Bank of South Pacific Munda',
                interactive: true,
                title: '<img src="styles/legend/BankofSouthPacificMunda_10.png" /> Bank of South Pacific Munda'
            });
var format_BredBankHoniarabredbank_honiara_11 = new ol.format.GeoJSON();
var features_BredBankHoniarabredbank_honiara_11 = format_BredBankHoniarabredbank_honiara_11.readFeatures(json_BredBankHoniarabredbank_honiara_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BredBankHoniarabredbank_honiara_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BredBankHoniarabredbank_honiara_11.addFeatures(features_BredBankHoniarabredbank_honiara_11);
var lyr_BredBankHoniarabredbank_honiara_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BredBankHoniarabredbank_honiara_11, 
                style: style_BredBankHoniarabredbank_honiara_11,
                popuplayertitle: 'BredBank Honiara — bredbank_honiara',
                interactive: true,
                title: '<img src="styles/legend/BredBankHoniarabredbank_honiara_11.png" /> BredBank Honiara — bredbank_honiara'
            });
var format_BSPCentralTulagibsp_centraltulagi_12 = new ol.format.GeoJSON();
var features_BSPCentralTulagibsp_centraltulagi_12 = format_BSPCentralTulagibsp_centraltulagi_12.readFeatures(json_BSPCentralTulagibsp_centraltulagi_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BSPCentralTulagibsp_centraltulagi_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BSPCentralTulagibsp_centraltulagi_12.addFeatures(features_BSPCentralTulagibsp_centraltulagi_12);
var lyr_BSPCentralTulagibsp_centraltulagi_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BSPCentralTulagibsp_centraltulagi_12, 
                style: style_BSPCentralTulagibsp_centraltulagi_12,
                popuplayertitle: 'BSP Central(Tulagi) — bsp_centraltulagi',
                interactive: true,
                title: '<img src="styles/legend/BSPCentralTulagibsp_centraltulagi_12.png" /> BSP Central(Tulagi) — bsp_centraltulagi'
            });
var format_EziPeiGizoezi_pei_gizo_13 = new ol.format.GeoJSON();
var features_EziPeiGizoezi_pei_gizo_13 = format_EziPeiGizoezi_pei_gizo_13.readFeatures(json_EziPeiGizoezi_pei_gizo_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EziPeiGizoezi_pei_gizo_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EziPeiGizoezi_pei_gizo_13.addFeatures(features_EziPeiGizoezi_pei_gizo_13);
var lyr_EziPeiGizoezi_pei_gizo_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EziPeiGizoezi_pei_gizo_13, 
                style: style_EziPeiGizoezi_pei_gizo_13,
                popuplayertitle: 'Ezi Pei Gizo — ezi_pei_gizo',
                interactive: true,
                title: '<img src="styles/legend/EziPeiGizoezi_pei_gizo_13.png" /> Ezi Pei Gizo — ezi_pei_gizo'
            });
var format_EziPeiMalaitaezi_pei_malaita_14 = new ol.format.GeoJSON();
var features_EziPeiMalaitaezi_pei_malaita_14 = format_EziPeiMalaitaezi_pei_malaita_14.readFeatures(json_EziPeiMalaitaezi_pei_malaita_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EziPeiMalaitaezi_pei_malaita_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EziPeiMalaitaezi_pei_malaita_14.addFeatures(features_EziPeiMalaitaezi_pei_malaita_14);
var lyr_EziPeiMalaitaezi_pei_malaita_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EziPeiMalaitaezi_pei_malaita_14, 
                style: style_EziPeiMalaitaezi_pei_malaita_14,
                popuplayertitle: 'Ezi Pei Malaita — ezi_pei_malaita',
                interactive: true,
                title: '<img src="styles/legend/EziPeiMalaitaezi_pei_malaita_14.png" /> Ezi Pei Malaita — ezi_pei_malaita'
            });
var format_EzipeiPostCentralTulagiezipei_post_centraltulagi__15 = new ol.format.GeoJSON();
var features_EzipeiPostCentralTulagiezipei_post_centraltulagi__15 = format_EzipeiPostCentralTulagiezipei_post_centraltulagi__15.readFeatures(json_EzipeiPostCentralTulagiezipei_post_centraltulagi__15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EzipeiPostCentralTulagiezipei_post_centraltulagi__15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EzipeiPostCentralTulagiezipei_post_centraltulagi__15.addFeatures(features_EzipeiPostCentralTulagiezipei_post_centraltulagi__15);
var lyr_EzipeiPostCentralTulagiezipei_post_centraltulagi__15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EzipeiPostCentralTulagiezipei_post_centraltulagi__15, 
                style: style_EzipeiPostCentralTulagiezipei_post_centraltulagi__15,
                popuplayertitle: 'Ezipei Post Central(Tulagi) — ezipei_post_centraltulagi_',
                interactive: true,
                title: '<img src="styles/legend/EzipeiPostCentralTulagiezipei_post_centraltulagi__15.png" /> Ezipei Post Central(Tulagi) — ezipei_post_centraltulagi_'
            });
var format_MSelenCentralBigNgellabig_ngella__16 = new ol.format.GeoJSON();
var features_MSelenCentralBigNgellabig_ngella__16 = format_MSelenCentralBigNgellabig_ngella__16.readFeatures(json_MSelenCentralBigNgellabig_ngella__16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenCentralBigNgellabig_ngella__16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenCentralBigNgellabig_ngella__16.addFeatures(features_MSelenCentralBigNgellabig_ngella__16);
var lyr_MSelenCentralBigNgellabig_ngella__16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenCentralBigNgellabig_ngella__16, 
                style: style_MSelenCentralBigNgellabig_ngella__16,
                popuplayertitle: 'M - Selen Central(Big Ngella) — big_ngella_',
                interactive: true,
                title: '<img src="styles/legend/MSelenCentralBigNgellabig_ngella__16.png" /> M - Selen Central(Big Ngella) — big_ngella_'
            });
var format_MSelenCentralSmallNgellasmall_ngella_17 = new ol.format.GeoJSON();
var features_MSelenCentralSmallNgellasmall_ngella_17 = format_MSelenCentralSmallNgellasmall_ngella_17.readFeatures(json_MSelenCentralSmallNgellasmall_ngella_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenCentralSmallNgellasmall_ngella_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenCentralSmallNgellasmall_ngella_17.addFeatures(features_MSelenCentralSmallNgellasmall_ngella_17);
var lyr_MSelenCentralSmallNgellasmall_ngella_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenCentralSmallNgellasmall_ngella_17, 
                style: style_MSelenCentralSmallNgellasmall_ngella_17,
                popuplayertitle: 'M - Selen Central(Small Ngella) — small_ngella',
                interactive: true,
                title: '<img src="styles/legend/MSelenCentralSmallNgellasmall_ngella_17.png" /> M - Selen Central(Small Ngella) — small_ngella'
            });
var format_MSelenChoisuelmselen_choisuel__18 = new ol.format.GeoJSON();
var features_MSelenChoisuelmselen_choisuel__18 = format_MSelenChoisuelmselen_choisuel__18.readFeatures(json_MSelenChoisuelmselen_choisuel__18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenChoisuelmselen_choisuel__18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenChoisuelmselen_choisuel__18.addFeatures(features_MSelenChoisuelmselen_choisuel__18);
var lyr_MSelenChoisuelmselen_choisuel__18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenChoisuelmselen_choisuel__18, 
                style: style_MSelenChoisuelmselen_choisuel__18,
                popuplayertitle: 'M - Selen Choisuel — mselen_choisuel_',
                interactive: true,
                title: '<img src="styles/legend/MSelenChoisuelmselen_choisuel__18.png" /> M - Selen Choisuel — mselen_choisuel_'
            });
var format_MSelenGizomselen_gizo_19 = new ol.format.GeoJSON();
var features_MSelenGizomselen_gizo_19 = format_MSelenGizomselen_gizo_19.readFeatures(json_MSelenGizomselen_gizo_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenGizomselen_gizo_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenGizomselen_gizo_19.addFeatures(features_MSelenGizomselen_gizo_19);
var lyr_MSelenGizomselen_gizo_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenGizomselen_gizo_19, 
                style: style_MSelenGizomselen_gizo_19,
                popuplayertitle: 'M- Selen Gizo — mselen_gizo',
                interactive: true,
                title: '<img src="styles/legend/MSelenGizomselen_gizo_19.png" /> M- Selen Gizo — mselen_gizo'
            });
var format_MSelenMalaitamselen_malaita_20 = new ol.format.GeoJSON();
var features_MSelenMalaitamselen_malaita_20 = format_MSelenMalaitamselen_malaita_20.readFeatures(json_MSelenMalaitamselen_malaita_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenMalaitamselen_malaita_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenMalaitamselen_malaita_20.addFeatures(features_MSelenMalaitamselen_malaita_20);
var lyr_MSelenMalaitamselen_malaita_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenMalaitamselen_malaita_20, 
                style: style_MSelenMalaitamselen_malaita_20,
                popuplayertitle: 'M- Selen Malaita — mselen_malaita',
                interactive: true,
                title: '<img src="styles/legend/MSelenMalaitamselen_malaita_20.png" /> M- Selen Malaita — mselen_malaita'
            });
var format_MSelenNoromselen_noro_21 = new ol.format.GeoJSON();
var features_MSelenNoromselen_noro_21 = format_MSelenNoromselen_noro_21.readFeatures(json_MSelenNoromselen_noro_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenNoromselen_noro_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenNoromselen_noro_21.addFeatures(features_MSelenNoromselen_noro_21);
var lyr_MSelenNoromselen_noro_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenNoromselen_noro_21, 
                style: style_MSelenNoromselen_noro_21,
                popuplayertitle: 'M- Selen Noro — mselen_noro',
                interactive: true,
                title: '<img src="styles/legend/MSelenNoromselen_noro_21.png" /> M- Selen Noro — mselen_noro'
            });
var format_MSelenRenbel_22 = new ol.format.GeoJSON();
var features_MSelenRenbel_22 = format_MSelenRenbel_22.readFeatures(json_MSelenRenbel_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenRenbel_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenRenbel_22.addFeatures(features_MSelenRenbel_22);
var lyr_MSelenRenbel_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenRenbel_22, 
                style: style_MSelenRenbel_22,
                popuplayertitle: 'M-Selen Renbel',
                interactive: true,
                title: '<img src="styles/legend/MSelenRenbel_22.png" /> M-Selen Renbel'
            });
var format_MSelenHoniaramselen_honiara_23 = new ol.format.GeoJSON();
var features_MSelenHoniaramselen_honiara_23 = format_MSelenHoniaramselen_honiara_23.readFeatures(json_MSelenHoniaramselen_honiara_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenHoniaramselen_honiara_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenHoniaramselen_honiara_23.addFeatures(features_MSelenHoniaramselen_honiara_23);
var lyr_MSelenHoniaramselen_honiara_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenHoniaramselen_honiara_23, 
                style: style_MSelenHoniaramselen_honiara_23,
                popuplayertitle: 'M-Selen Honiara — mselen_honiara',
                interactive: true,
                title: '<img src="styles/legend/MSelenHoniaramselen_honiara_23.png" /> M-Selen Honiara — mselen_honiara'
            });
var format_MSelenMundamselen_munda_24 = new ol.format.GeoJSON();
var features_MSelenMundamselen_munda_24 = format_MSelenMundamselen_munda_24.readFeatures(json_MSelenMundamselen_munda_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenMundamselen_munda_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenMundamselen_munda_24.addFeatures(features_MSelenMundamselen_munda_24);
var lyr_MSelenMundamselen_munda_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenMundamselen_munda_24, 
                style: style_MSelenMundamselen_munda_24,
                popuplayertitle: 'M-Selen Munda — mselen_munda',
                interactive: true,
                title: '<img src="styles/legend/MSelenMundamselen_munda_24.png" /> M-Selen Munda — mselen_munda'
            });
var format_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__25 = new ol.format.GeoJSON();
var features_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__25 = format_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__25.readFeatures(json_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__25.addFeatures(features_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__25);
var lyr_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__25, 
                style: style_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__25,
                popuplayertitle: 'Solomon Post Office Branch Choisuel — solomon_post_office_branch_choisuel_',
                interactive: true,
                title: '<img src="styles/legend/SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__25.png" /> Solomon Post Office Branch Choisuel — solomon_post_office_branch_choisuel_'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_AelanDigitalaelan_digital_1.setVisible(true);lyr_ANZCentralTulagianz_centraltulagi__2.setVisible(true);lyr_ANZHoniaraanz_honiara__3.setVisible(true);lyr_ANZMundaanz_munda_4.setVisible(true);lyr_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__5.setVisible(true);lyr_BankofSouthPacificHoniarabank_of_south_pacific_honiara_6.setVisible(true);lyr_BankofSouthPacificGizobank_of_south_pacific_gizo_7.setVisible(true);lyr_BankofSouthPacificHoniara_8.setVisible(true);lyr_BankofSouthPacificMalaita_9.setVisible(true);lyr_BankofSouthPacificMunda_10.setVisible(true);lyr_BredBankHoniarabredbank_honiara_11.setVisible(true);lyr_BSPCentralTulagibsp_centraltulagi_12.setVisible(true);lyr_EziPeiGizoezi_pei_gizo_13.setVisible(true);lyr_EziPeiMalaitaezi_pei_malaita_14.setVisible(true);lyr_EzipeiPostCentralTulagiezipei_post_centraltulagi__15.setVisible(true);lyr_MSelenCentralBigNgellabig_ngella__16.setVisible(true);lyr_MSelenCentralSmallNgellasmall_ngella_17.setVisible(true);lyr_MSelenChoisuelmselen_choisuel__18.setVisible(true);lyr_MSelenGizomselen_gizo_19.setVisible(true);lyr_MSelenMalaitamselen_malaita_20.setVisible(true);lyr_MSelenNoromselen_noro_21.setVisible(true);lyr_MSelenRenbel_22.setVisible(true);lyr_MSelenHoniaramselen_honiara_23.setVisible(true);lyr_MSelenMundamselen_munda_24.setVisible(true);lyr_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__25.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_AelanDigitalaelan_digital_1,lyr_ANZCentralTulagianz_centraltulagi__2,lyr_ANZHoniaraanz_honiara__3,lyr_ANZMundaanz_munda_4,lyr_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__5,lyr_BankofSouthPacificHoniarabank_of_south_pacific_honiara_6,lyr_BankofSouthPacificGizobank_of_south_pacific_gizo_7,lyr_BankofSouthPacificHoniara_8,lyr_BankofSouthPacificMalaita_9,lyr_BankofSouthPacificMunda_10,lyr_BredBankHoniarabredbank_honiara_11,lyr_BSPCentralTulagibsp_centraltulagi_12,lyr_EziPeiGizoezi_pei_gizo_13,lyr_EziPeiMalaitaezi_pei_malaita_14,lyr_EzipeiPostCentralTulagiezipei_post_centraltulagi__15,lyr_MSelenCentralBigNgellabig_ngella__16,lyr_MSelenCentralSmallNgellasmall_ngella_17,lyr_MSelenChoisuelmselen_choisuel__18,lyr_MSelenGizomselen_gizo_19,lyr_MSelenMalaitamselen_malaita_20,lyr_MSelenNoromselen_noro_21,lyr_MSelenRenbel_22,lyr_MSelenHoniaramselen_honiara_23,lyr_MSelenMundamselen_munda_24,lyr_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__25];
lyr_AelanDigitalaelan_digital_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Status': 'Status', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ANZCentralTulagianz_centraltulagi__2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ANZHoniaraanz_honiara__3.set('fieldAliases', {'fid': 'fid', 'ANZ   BRANCHES': 'ANZ   BRANCHES', 'TYPE OF BRANCHE': 'TYPE OF BRANCHE', 'STREET ADDRESS & CITY': 'STREET ADDRESS & CITY', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ANZMundaanz_munda_4.set('fieldAliases', {'fid': 'fid', 'Merchant Name': 'Merchant Name', 'Location': 'Location', 'Physical Sreet Address - Location': 'Physical Sreet Address - Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__5.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'Access type': 'Access type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BankofSouthPacificHoniarabank_of_south_pacific_honiara_6.set('fieldAliases', {'fid': 'fid', 'BSP BRANCHES': 'BSP BRANCHES', 'STREET ADDRESS & CITY': 'STREET ADDRESS & CITY', 'TYPE OF BRANCHE': 'TYPE OF BRANCHE', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_BankofSouthPacificGizobank_of_south_pacific_gizo_7.set('fieldAliases', {'fid': 'fid', 'BSP BRANCHES': 'BSP BRANCHES', 'STREET ADDRESS & CITY': 'STREET ADDRESS & CITY', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BankofSouthPacificHoniara_8.set('fieldAliases', {'fid': 'fid', 'BSP BRANCHES': 'BSP BRANCHES', 'STREET ADDRESS & CITY': 'STREET ADDRESS & CITY', 'TYPE OF BRANCHE': 'TYPE OF BRANCHE', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_BankofSouthPacificMalaita_9.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Access type': 'Access type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BankofSouthPacificMunda_10.set('fieldAliases', {'fid': 'fid', 'BSP BRANCHES': 'BSP BRANCHES', 'STREET ADDRESS & CITY': 'STREET ADDRESS & CITY', 'field_3': 'field_3', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BredBankHoniarabredbank_honiara_11.set('fieldAliases', {'fid': 'fid', 'PROVINCES': 'PROVINCES', 'Bred    BRANCHES': 'Bred    BRANCHES', 'Type of Branche': 'Type of Branche', 'STREET ADDRESS & CITY': 'STREET ADDRESS & CITY', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_BSPCentralTulagibsp_centraltulagi_12.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_EziPeiGizoezi_pei_gizo_13.set('fieldAliases', {'fid': 'fid', 'Agent Name': 'Agent Name', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_EziPeiMalaitaezi_pei_malaita_14.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Access type': 'Access type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_EzipeiPostCentralTulagiezipei_post_centraltulagi__15.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenCentralBigNgellabig_ngella__16.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenCentralSmallNgellasmall_ngella_17.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenChoisuelmselen_choisuel__18.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Access type': 'Access type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenGizomselen_gizo_19.set('fieldAliases', {'fid': 'fid', 'Agent Type': 'Agent Type', 'Agent Business Name': 'Agent Business Name', 'Physical Address': 'Physical Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenMalaitamselen_malaita_20.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Access type': 'Access type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenNoromselen_noro_21.set('fieldAliases', {'fid': 'fid', 'Agent Type': 'Agent Type', 'Agent Business Name': 'Agent Business Name', 'Physical Address': 'Physical Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenRenbel_22.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'Access type': 'Access type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenHoniaramselen_honiara_23.set('fieldAliases', {'fid': 'fid', 'Agent Type': 'Agent Type', 'Agent Busi': 'Agent Busi', 'Physical A': 'Physical A', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenMundamselen_munda_24.set('fieldAliases', {'fid': 'fid', 'Agent Type': 'Agent Type', 'Agent Business Name': 'Agent Business Name', 'Physical Address': 'Physical Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__25.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'Access type': 'Access type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_AelanDigitalaelan_digital_1.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Status': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_ANZCentralTulagianz_centraltulagi__2.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_ANZHoniaraanz_honiara__3.set('fieldImages', {'fid': 'TextEdit', 'ANZ   BRANCHES': 'TextEdit', 'TYPE OF BRANCHE': 'TextEdit', 'STREET ADDRESS & CITY': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_ANZMundaanz_munda_4.set('fieldImages', {'fid': 'TextEdit', 'Merchant Name': 'TextEdit', 'Location': 'TextEdit', 'Physical Sreet Address - Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__5.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'Access type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_BankofSouthPacificHoniarabank_of_south_pacific_honiara_6.set('fieldImages', {'fid': 'TextEdit', 'BSP BRANCHES': 'TextEdit', 'STREET ADDRESS & CITY': 'TextEdit', 'TYPE OF BRANCHE': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', });
lyr_BankofSouthPacificGizobank_of_south_pacific_gizo_7.set('fieldImages', {'fid': 'TextEdit', 'BSP BRANCHES': 'TextEdit', 'STREET ADDRESS & CITY': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_BankofSouthPacificHoniara_8.set('fieldImages', {'fid': 'TextEdit', 'BSP BRANCHES': 'TextEdit', 'STREET ADDRESS & CITY': 'TextEdit', 'TYPE OF BRANCHE': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', });
lyr_BankofSouthPacificMalaita_9.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Access type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_BankofSouthPacificMunda_10.set('fieldImages', {'fid': 'TextEdit', 'BSP BRANCHES': 'TextEdit', 'STREET ADDRESS & CITY': 'TextEdit', 'field_3': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_BredBankHoniarabredbank_honiara_11.set('fieldImages', {'fid': 'TextEdit', 'PROVINCES': 'TextEdit', 'Bred    BRANCHES': 'TextEdit', 'Type of Branche': 'TextEdit', 'STREET ADDRESS & CITY': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', });
lyr_BSPCentralTulagibsp_centraltulagi_12.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_EziPeiGizoezi_pei_gizo_13.set('fieldImages', {'fid': 'TextEdit', 'Agent Name': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_EziPeiMalaitaezi_pei_malaita_14.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Access type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_EzipeiPostCentralTulagiezipei_post_centraltulagi__15.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelenCentralBigNgellabig_ngella__16.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelenCentralSmallNgellasmall_ngella_17.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelenChoisuelmselen_choisuel__18.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Access type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelenGizomselen_gizo_19.set('fieldImages', {'fid': 'TextEdit', 'Agent Type': 'TextEdit', 'Agent Business Name': 'TextEdit', 'Physical Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelenMalaitamselen_malaita_20.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Access type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelenNoromselen_noro_21.set('fieldImages', {'fid': 'TextEdit', 'Agent Type': 'TextEdit', 'Agent Business Name': 'TextEdit', 'Physical Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelenRenbel_22.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'Access type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelenHoniaramselen_honiara_23.set('fieldImages', {'fid': 'TextEdit', 'Agent Type': 'TextEdit', 'Agent Busi': 'TextEdit', 'Physical A': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelenMundamselen_munda_24.set('fieldImages', {'fid': 'TextEdit', 'Agent Type': 'TextEdit', 'Agent Business Name': 'TextEdit', 'Physical Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__25.set('fieldImages', {'fid': '', 'NAME': '', 'Access type': '', 'Location': '', 'Province': '', 'Latitude': '', 'Longitude': '', });
lyr_AelanDigitalaelan_digital_1.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Status': 'inline label - always visible', 'Location': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_ANZCentralTulagianz_centraltulagi__2.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_ANZHoniaraanz_honiara__3.set('fieldLabels', {'fid': 'inline label - always visible', 'ANZ   BRANCHES': 'inline label - always visible', 'TYPE OF BRANCHE': 'inline label - always visible', 'STREET ADDRESS & CITY': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_ANZMundaanz_munda_4.set('fieldLabels', {'fid': 'inline label - always visible', 'Merchant Name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Physical Sreet Address - Location': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_BankofSouthPacificChoisuelbank_of_south_pacific_choisuel__5.set('fieldLabels', {'fid': 'inline label - always visible', 'NAME': 'inline label - always visible', 'Access type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_BankofSouthPacificHoniarabank_of_south_pacific_honiara_6.set('fieldLabels', {'fid': 'inline label - always visible', 'BSP BRANCHES': 'inline label - always visible', 'STREET ADDRESS & CITY': 'inline label - always visible', 'TYPE OF BRANCHE': 'inline label - always visible', 'LATITUDE': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', });
lyr_BankofSouthPacificGizobank_of_south_pacific_gizo_7.set('fieldLabels', {'fid': 'inline label - always visible', 'BSP BRANCHES': 'inline label - always visible', 'STREET ADDRESS & CITY': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_BankofSouthPacificHoniara_8.set('fieldLabels', {'fid': 'inline label - always visible', 'BSP BRANCHES': 'inline label - always visible', 'STREET ADDRESS & CITY': 'inline label - always visible', 'TYPE OF BRANCHE': 'inline label - always visible', 'LATITUDE': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', });
lyr_BankofSouthPacificMalaita_9.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Access type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_BankofSouthPacificMunda_10.set('fieldLabels', {'fid': 'inline label - always visible', 'BSP BRANCHES': 'inline label - always visible', 'STREET ADDRESS & CITY': 'inline label - always visible', 'field_3': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_BredBankHoniarabredbank_honiara_11.set('fieldLabels', {'fid': 'inline label - always visible', 'PROVINCES': 'inline label - always visible', 'Bred    BRANCHES': 'inline label - always visible', 'Type of Branche': 'inline label - always visible', 'STREET ADDRESS & CITY': 'inline label - always visible', 'LATITUDE': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', });
lyr_BSPCentralTulagibsp_centraltulagi_12.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_EziPeiGizoezi_pei_gizo_13.set('fieldLabels', {'fid': 'inline label - always visible', 'Agent Name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_EziPeiMalaitaezi_pei_malaita_14.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Access type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_EzipeiPostCentralTulagiezipei_post_centraltulagi__15.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenCentralBigNgellabig_ngella__16.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenCentralSmallNgellasmall_ngella_17.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenChoisuelmselen_choisuel__18.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Access type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenGizomselen_gizo_19.set('fieldLabels', {'fid': 'inline label - always visible', 'Agent Type': 'inline label - always visible', 'Agent Business Name': 'inline label - always visible', 'Physical Address': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenMalaitamselen_malaita_20.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Access type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenNoromselen_noro_21.set('fieldLabels', {'fid': 'inline label - always visible', 'Agent Type': 'inline label - always visible', 'Agent Business Name': 'inline label - always visible', 'Physical Address': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenRenbel_22.set('fieldLabels', {'fid': 'inline label - always visible', 'NAME': 'inline label - always visible', 'Access type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenHoniaramselen_honiara_23.set('fieldLabels', {'fid': 'inline label - always visible', 'Agent Type': 'inline label - always visible', 'Agent Busi': 'inline label - always visible', 'Physical A': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenMundamselen_munda_24.set('fieldLabels', {'fid': 'inline label - always visible', 'Agent Type': 'inline label - visible with data', 'Agent Business Name': 'inline label - always visible', 'Physical Address': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__25.set('fieldLabels', {'fid': 'inline label - always visible', 'NAME': 'inline label - always visible', 'Access type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_SolomonPostOfficeBranchChoisuelsolomon_post_office_branch_choisuel__25.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});