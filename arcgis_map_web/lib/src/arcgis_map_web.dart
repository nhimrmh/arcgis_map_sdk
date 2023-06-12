import 'dart:async';
import 'dart:html';
import 'dart:js';

import 'package:arcgis_map_platform_interface/arcgis_map_platform_interface.dart';
import 'package:arcgis_map_web/src/arcgis_map_web_controller.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_web_plugins/flutter_web_plugins.dart';

class ArcgisMapWeb extends ArcgisMapPlatform {
  static final _hasScriptLoaded = Completer();

  static void registerWith(Registrar registrar) {
    ArcgisMapPlatform.instance = ArcgisMapWeb();

    //load webpack custom build of the ArcGIS JS API
    final script = ScriptElement()
      ..addEventListener("load", (event) => _hasScriptLoaded.complete())
      // ignore: unsafe_html
      ..src =
          "assets/packages/arcgis_map_web/assets/arcgis_js_api_custom_build/main.js";

    document.head!.append(script);

    final link = LinkElement()
      ..type = "text/css"
      ..href =
          "assets/packages/arcgis_map_web/assets/css_overrides/override_outline.css"
      ..rel = "stylesheet";

    document.head!.append(link);
  }

  final Map<int, ArcgisMapWebController> _mapById = {};

  ArcgisMapWebController _map(int mapId) {
    final controller = _mapById[mapId];
    if (controller == null) {
      throw StateError('Maps cannot be retrieved before calling buildView!');
    }
    return controller;
  }

  @override
  Future<void> init(int mapId) async {
    await _hasScriptLoaded.future;
    _map(mapId).init();
  }

  @override
  Future<void> moveCamera({
    required LatLng point,
    required int mapId,
    double? zoomLevel,
    int? threeDHeading,
    int? threeDTilt,
    AnimationOptions? animationOptions,
  }) {
    return _map(mapId).moveCamera(
      point: point,
      zoomLevel: zoomLevel,
      threeDHeading: threeDHeading,
      threeDTilt: threeDTilt,
      animationOptions: animationOptions,
    );
  }

  @override
  Future<void> zoomIn({
    required int lodFactor,
    required int mapId,
    AnimationOptions? animationOptions,
  }) {
    return _map(mapId)
        .zoomIn(lodFactor: lodFactor, animationOptions: animationOptions);
  }

  @override
  Future<void> zoomOut({
    required int lodFactor,
    required int mapId,
    AnimationOptions? animationOptions,
  }) {
    return _map(mapId)
        .zoomOut(lodFactor: lodFactor, animationOptions: animationOptions);
  }

  @override
  void addGraphic(int mapId, String layerId, Graphic graphic) {
    _map(mapId).addGraphic(layerId, graphic);
  }

  @override
  void removeGraphic(int mapId, String layerId, String objectId) {
    _map(mapId).removeGraphic(layerId, objectId);
  }

  @override
  void removeGraphics({
    required int mapId,
    String? layerId,
    String? removeByAttributeKey,
    String? removeByAttributeValue,
    String? excludeAttributeKey,
    List<String>? excludeAttributeValues,
  }) {
    _map(mapId).removeGraphics(
      layerId: layerId,
      removeByAttributeKey: removeByAttributeKey,
      removeByAttributeValue: removeByAttributeValue,
      excludeAttributeKey: excludeAttributeKey,
      excludeAttributeValues: excludeAttributeValues,
    );
  }

  @override
  void addViewPadding(int mapId, ViewPadding padding) {
    return _map(mapId).addViewPadding(padding: padding);
  }

  @override
  Future<void> toggleBaseMap(int mapId, BaseMap baseMap) async {
    return _map(mapId).toggleBaseMap(baseMap: baseMap);
  }

  @override
  List<Graphic> getGraphicsInView(int mapId) => _map(mapId).graphicsInView;

  @override
  Stream<bool> isGraphicHoveredStream(int mapId) =>
      _map(mapId).isGraphicHoveredStream;

  @override
  Future<FeatureLayer> addFeatureLayer(
    FeatureLayerOptions options,
    List<Graphic>? data,
    void Function(dynamic)? onPressed,
    String? url,
    int mapId,
    void Function(double)? getZoom,
    String layerId,
  ) async {
    return _map(mapId)
        .addFeatureLayer(options, data, onPressed, url, getZoom, layerId);
  }

  @override
  Future<GraphicsLayer> addGraphicsLayer(
    GraphicsLayerOptions options,
    int mapId,
    String layerId,
    void Function(dynamic)? onPressed,
  ) async {
    return _map(mapId).addGraphicsLayer(
      options,
      layerId,
      onPressed,
    );
  }

  @override
  Future<SceneLayer> addSceneLayer({
    required SceneLayerOptions options,
    required String layerId,
    required String url,
    required int mapId,
  }) async {
    return _map(mapId).addSceneLayer(
      options: options,
      layerId: layerId,
      url: url,
    );
  }

  @override
  void setMouseCursor(SystemMouseCursor cursor, int mapId) {
    _map(mapId).setMouseCursor(cursor);
  }

  @override
  void updateGraphicSymbol({
    required int mapId,
    required String layerId,
    required String graphicId,
    required Symbol symbol,
  }) {
    _map(mapId).updateGraphicSymbol(
      layerId: layerId,
      symbol: symbol,
      graphicId: graphicId,
    );
  }

  @override
  Stream<double> getZoom(int mapId) {
    return _map(mapId).getZoom();
  }

  @override
  void switchMapStyle(int mapId, MapStyle mapStyle) {
    _map(mapId).switchMapStyle(mapStyle);
  }

  @override
  Stream<LatLng> centerPosition(int mapId) {
    return _map(mapId).centerPosition();
  }

  @override
  Stream<BoundingBox> getBounds(int mapId) {
    return _map(mapId).getBounds();
  }

  @override
  Stream<List<String>> visibleGraphics(int mapId) {
    return _map(mapId).visibleGraphics();
  }

  @override
  List<String> getVisibleGraphicIds(int mapId) {
    return _map(mapId).getVisibleGraphicIds();
  }

  @override
  Stream<String> attributionText(int mapId) {
    return _map(mapId).attributionText();
  }

  @override
  Stream<Attributes?> onClickListener(int mapId) {
    return _map(mapId).onClickListener();
  }

  @override
  Future<void> updateFeatureLayer({
    required String featureLayerId,
    required int mapId,
    required List<Graphic> data,
  }) async {
    await _map(mapId).updateFeatureLayer(
      featureLayerId: featureLayerId,
      data: data,
    );
  }

  @override
  bool destroyLayer({required int mapId, required String layerId}) {
    return _map(mapId).destroyLayer(layerId);
  }

  @override
  bool polygonContainsPoint({
    required String polygonId,
    required LatLng pointCoordinates,
    required int mapId,
  }) {
    return _map(mapId).polygonContainsPoint(polygonId, pointCoordinates);
  }

  @override
  void dispose({required int mapId}) {
    _map(mapId).dispose();
    _mapById.remove(mapId);
  }

  @override
  Widget buildView({
    required int creationId,
    required PlatformViewCreatedCallback onPlatformViewCreated,
    required ArcgisMapOptions mapOptions,
  }) {
    // Bail fast if we've already rendered this map ID...
    final widget = _mapById[creationId]?.widget;
    if (widget != null) {
      return widget;
    }

    final controller = StreamController<MapEvent>.broadcast();

    _hasScriptLoaded.future.then((_) {
      /// Since we manage assets locally, the following line is needed to direct to these assets:
      ///
      /// https://developers.arcgis.com/javascript/latest/es-modules/#managing-assets-locally
      // ignore: avoid_dynamic_calls
      context["esri"]["core"]["config"]["assetsPath"] =
          "/assets/packages/arcgis_map_web/assets/arcgis_js_api_custom_build/assets";
    });

    final mapController = ArcgisMapWebController(
      mapId: creationId,
      streamController: controller,
      mapOptions: mapOptions,
    );

    _mapById[creationId] = mapController;

    onPlatformViewCreated.call(creationId);

    return mapController.widget!;
  }
}
