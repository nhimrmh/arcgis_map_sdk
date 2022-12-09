import 'dart:async';
import 'dart:core';

import 'package:arcgis/map_elements.dart';
import 'package:arcgis/vector_layer_example_page.dart';
import 'package:arcgis_map/arcgis_map.dart';
import 'package:arcgis_map_platform_interface/arcgis_map_platform_interface.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

void main() => runApp(const ExampleApp());

const arcGisApiKey = String.fromEnvironment(
  "ARCGIS-API-KEY",
  defaultValue: "YOUR KEY HERE",
);

class ExampleApp extends StatelessWidget {
  const ExampleApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'flutter_arcgis package demo',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: const ExampleMap(),
    );
  }
}

class ExampleMap extends StatefulWidget {
  const ExampleMap({Key? key}) : super(key: key);

  @override
  _ExampleMapState createState() => _ExampleMapState();
}

class _ExampleMapState extends State<ExampleMap> {
  static const String _polygonId1 = 'polygon1';
  static const String _polygonId2 = 'polygon2';

  final LatLng _firstPinCoordinates = LatLng(52.9, 13.2);
  final LatLng _secondPinCoordinates = LatLng(51, 11);

  /// null when executed on a platform that's not supported yet
  ArcgisMapController? _controller;

  StreamSubscription<BoundingBox>? _boundingBoxSubscription;
  StreamSubscription<LatLng>? _centerPositionSubscription;
  StreamSubscription<String>? _attributionTextSubscription;
  StreamSubscription<double>? _zoomSubscription;
  StreamSubscription<String>? _pointerSubscription;
  StreamSubscription<List<String>>? _graphicsInViewSubscription;
  String _attributionText = '';
  bool _subscribedToBounds = false;
  bool _subscribedToCenterPosition = false;
  bool _isFirstPinInView = false;
  bool _isSecondPinInView = false;
  bool _subscribedToZoom = false;
  bool _subscribedToGraphicsInView = false;
  final Map<String, bool> _hoveredPolygons = {};
  var _isInteractionEnabled = true;

  bool _baseMapToggled = false;

  @override
  void dispose() {
    _boundingBoxSubscription?.cancel();
    _centerPositionSubscription?.cancel();
    _attributionTextSubscription?.cancel();
    _zoomSubscription?.cancel();
    _pointerSubscription?.cancel();
    _graphicsInViewSubscription?.cancel();
    super.dispose();
  }

  Future<void> _onMapCreated(ArcgisMapController controller) async {
    _controller = controller;
    _controller?.addGraphic(
      const PointGraphic(
        attributes: ArcGisMapAttributes(
          id: 'point1',
          name: 'Point 1',
        ),
        latitude: 48.1234963,
        longitude: 11.5910182,
        symbol: SimpleMarkerSymbol(
          color: Colors.lightBlue,
          outlineColor: Colors.blue,
        ),
      ),
    );

    // TODO: Remove when mobile implementation is complete
    if (!kIsWeb) {
      return;
    }
    _controller?.onClick(
      onPressed: (ArcGisMapAttributes? attributes) {
        if (attributes == null) return;
        final snackBar = SnackBar(
          content: Text('Attributes Name after on Click: ${attributes.name}'),
        );
        ScaffoldMessenger.of(context)
          ..hideCurrentSnackBar()
          ..showSnackBar(snackBar);
      },
    );

    _attributionTextSubscription =
        _controller?.attributionText().listen((attribution) {
      setState(() {
        _attributionText = attribution;
      });
    });

    await _createFeatureLayer();
    _addPolygon(
      graphic: PolygonGraphic(
        rings: firstPolygon,
        symbol: orangeFillSymbol,
        attributes:
            const ArcGisMapAttributes(id: _polygonId1, name: 'First Polygon'),
        onHover: (isHovered) {
          isHovered
              ? _updateGraphicSymbol(
                  polygonId: _polygonId1,
                  symbol: highlightedOrangeFillSymbol,
                )
              : _updateGraphicSymbol(
                  polygonId: _polygonId1,
                  symbol: orangeFillSymbol,
                );
          if (_hoveredPolygons[_polygonId1] == isHovered) return;
          _hoveredPolygons[_polygonId1] = isHovered;
          _setMouseCursor();
        },
      ),
    );
  }

  void _addPolygon({required PolygonGraphic graphic}) {
    _controller?.addGraphic(graphic);
  }

  void _removePolygon({required String id}) {
    _controller?.removeGraphic(id);
  }

  Future<FeatureLayer?> _createFeatureLayer() async {
    final List<Graphic> graphics = [pointGraphic];

    final layer = await _controller?.addFeatureLayer(
      layerId: '1010',
      data: graphics,
      options: FeatureLayerOptions(
        fields: <Field>[
          Field(name: 'ObjectID', type: 'oid'),
          Field(name: 'name', type: 'string'),
        ],
        symbol: simpleMarkerSymbol,
        featureReduction: FeatureReductionCluster().toJson(),
      ),
      getZoom: (double zoom) {
        debugPrint('zoom $zoom');
      },
    );
    return layer;
  }

  void destroyFeatureLayer() {
    _controller?.destroyFeatureLayer(id: '1010');
  }

  void _subscribeToBounds() {
    _boundingBoxSubscription?.cancel();
    _boundingBoxSubscription = _controller?.getBounds().listen((bounds) {
      debugPrint(
        'LOWER LEFT  Latitude:${bounds.lowerLeft.latitude} Longitude:${bounds.lowerLeft.longitude}',
      );
      debugPrint(
        'TOP RIGHT  Latitude:${bounds.topRight.latitude} Longitude:${bounds.topRight.longitude}',
      );
    });
    setState(() {
      _subscribedToBounds = true;
    });
  }

  void _unsubscribeFromBounds() {
    _boundingBoxSubscription?.cancel();
    setState(() {
      _subscribedToBounds = false;
    });
  }

  void _subscribeToGraphicsInView() {
    _graphicsInViewSubscription?.cancel();
    _graphicsInViewSubscription = _controller
        ?.visibleGraphics()
        .listen((List<String> visibleGraphicsIds) {
      visibleGraphicsIds.forEach(debugPrint);
    });
    setState(() {
      _subscribedToGraphicsInView = true;
    });
  }

  void _unSubscribeToGraphicsInView() {
    _graphicsInViewSubscription?.cancel();
    setState(() {
      _subscribedToGraphicsInView = false;
    });
  }

  void _subscribeToPos() {
    _centerPositionSubscription?.cancel();
    _centerPositionSubscription =
        _controller?.centerPosition().listen((center) {
      debugPrint("New center: $center");
    });
    setState(() {
      _subscribedToCenterPosition = true;
    });
  }

  void _unsubscribeFromPos() {
    _centerPositionSubscription?.cancel();
    setState(() {
      _subscribedToCenterPosition = false;
    });
  }

  void _subscribeToZoom() {
    _zoomSubscription?.cancel();
    _zoomSubscription = _controller?.getZoom().listen((zoom) {
      debugPrint('Zoom is: $zoom');
    });
    setState(() {
      _subscribedToZoom = true;
    });
  }

  void _unsubscribeFromZoom() {
    _zoomSubscription?.cancel();
    setState(() {
      _subscribedToZoom = false;
    });
  }

  void _addPin(String id, LatLng location) {
    _controller?.addGraphic(
      PointGraphic(
        longitude: location.longitude,
        latitude: location.latitude,
        attributes: ArcGisMapAttributes(id: id, name: 'Marker Pin'),
        symbol: _markerSymbol,
      ),
    );
  }

  void _removePin(String id) {
    _controller?.removeGraphic(id);
  }

  void _connectTwoPinsWithPolyline({
    required String id,
    required String name,
    required LatLng start,
    required LatLng end,
  }) {
    _controller?.addGraphic(
      PolylineGraphic(
        paths: [
          [start, end]
        ],
        symbol: const SimpleLineSymbol(
          color: Colors.purple,
          style: PolylineStyle.shortDashDotDot,
          width: 3,
          marker: LineSymbolMarker(
            color: Colors.green,
            style: MarkerStyle.circle,
          ),
        ),
        attributes: ArcGisMapAttributes(
          id: id,
          name: name,
        ),
      ),
    );
  }

  void _setMouseCursor() {
    _controller?.setMouseCursor(
      _hoveredPolygons.containsValue(true)
          ? SystemMouseCursors.click
          : SystemMouseCursors.basic,
    );
  }

  void _updateGraphicSymbol({
    required String polygonId,
    required Symbol symbol,
  }) {
    _controller?.updateGraphicSymbol(symbol, polygonId);
  }

  bool? _isPointInPolygon({
    required String polygonId,
    required LatLng pointCoordinates,
  }) {
    return _controller?.graphicContainsPoint(
      polygonId: polygonId,
      pointCoordinates: pointCoordinates,
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          ArcgisMap(
            apiKey: arcGisApiKey,
            basemap:
                _baseMapToggled ? BaseMap.osmLightGray : BaseMap.osmDarkGray,
            initialCenter: LatLng(51.16, 10.45),
            zoom: 4,
            hideDefaultZoomButtons: true,
            hideAttribution: true,
            onMapCreated: _onMapCreated,
          ),
          const Positioned(
            bottom: 10,
            right: 10,
            child: Text(
              'Powered by Esri',
              style: TextStyle(color: Colors.white),
            ),
          ),
          Positioned(
            bottom: 10,
            left: 10,
            child: Text(
              _attributionText,
              style: const TextStyle(color: Colors.white),
            ),
          )
        ],
      ),
      floatingActionButton: Padding(
        padding: const EdgeInsets.only(bottom: 20.0),
        child: Wrap(
          crossAxisAlignment: WrapCrossAlignment.center,
          children: [
            FloatingActionButton(
              heroTag: "move-camera-button",
              onPressed: () {
                _controller?.moveCamera(
                  point: LatLng(48.1234963, 11.5910182),
                  zoomLevel: 15,
                  animationOptions: AnimationOptions(
                    duration: 1500,
                    animationCurve: AnimationCurve.easeIn,
                  ),
                );
              },
              backgroundColor: Colors.red,
              child: const Icon(Icons.place_outlined),
            ),
            FloatingActionButton(
              heroTag: "zoom-in-button",
              onPressed: () {
                _controller?.zoomIn(lodFactor: 1);
              },
              backgroundColor: Colors.grey,
              child: const Icon(Icons.add),
            ),
            FloatingActionButton(
              heroTag: "zoom-out-button",
              onPressed: () {
                _controller?.zoomOut(lodFactor: 1);
              },
              backgroundColor: Colors.grey,
              child: const Icon(Icons.remove),
            ),
            Column(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                ElevatedButton(
                  onPressed: () {
                    _routeToVectorLayerMap();
                  },
                  child: const Text("Show Vector layer example"),
                ),
                ElevatedButton(
                  onPressed: () {
                    _controller?.setInteraction(
                      isEnabled: !_isInteractionEnabled,
                    );

                    setState(() {
                      _isInteractionEnabled = !_isInteractionEnabled;
                    });
                  },
                  child: Text(
                    "${_isInteractionEnabled ? "Disable" : "Enable"} Interaction",
                  ),
                ),
                ElevatedButton(
                  onPressed: () {
                    if (_subscribedToGraphicsInView) {
                      _unSubscribeToGraphicsInView();
                    } else {
                      _subscribeToGraphicsInView();
                    }
                  },
                  child: _subscribedToGraphicsInView
                      ? const Text("Stop printing Graphics")
                      : const Text("Start printing Graphics"),
                ),
                ElevatedButton(
                  onPressed: () {
                    final graphicIdsInView =
                        _controller?.getVisibleGraphicIds();
                    graphicIdsInView?.forEach(debugPrint);
                  },
                  child: const Text("Print visible Graphics"),
                ),
              ],
            ),
            Column(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                ElevatedButton(
                  onPressed: () {
                    // Checks if polygon 1 contains the pin
                    debugPrint(
                      _isPointInPolygon(
                        polygonId: _polygonId1,
                        pointCoordinates: _firstPinCoordinates,
                      ).toString(),
                    );
                  },
                  child: const Text("Contains Point"),
                ),
                ElevatedButton(
                  onPressed: () {
                    if (_subscribedToBounds) {
                      _unsubscribeFromBounds();
                    } else {
                      _subscribeToBounds();
                    }
                  },
                  child: _subscribedToBounds
                      ? const Text("Stop bounds")
                      : const Text("Sub to bounds"),
                ),
                ElevatedButton(
                  onPressed: () {
                    if (_subscribedToCenterPosition) {
                      _unsubscribeFromPos();
                    } else {
                      _subscribeToPos();
                    }
                  },
                  child: _subscribedToCenterPosition
                      ? const Text("Stop pos")
                      : const Text("Sub to pos"),
                ),
              ],
            ),
            Column(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                ElevatedButton(
                  onPressed: () {
                    _controller?.addViewPadding(
                      padding: const ViewPadding(right: 300),
                    );
                  },
                  child: const Text("Add 300 right"),
                ),
                ElevatedButton(
                  onPressed: () {
                    _controller?.addViewPadding(
                      padding: const ViewPadding(left: 300),
                    );
                  },
                  child: const Text("Add 300 left"),
                ),
                ElevatedButton(
                  onPressed: () {
                    setState(() {
                      _baseMapToggled = !_baseMapToggled;
                    });
                  },
                  child: const Text("Toggle BaseMap"),
                ),
              ],
            ),
            Column(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                ElevatedButton(
                  onPressed: () {
                    if (_isFirstPinInView) {
                      _removePin('_isFirstPinInView');
                      setState(() {
                        _isFirstPinInView = false;
                      });
                    } else {
                      _addPin('_isFirstPinInView', _firstPinCoordinates);
                      setState(() {
                        _isFirstPinInView = true;
                      });
                    }
                  },
                  child: _isFirstPinInView
                      ? const Text('Remove first Pin')
                      : const Text('Add first Pin'),
                ),
                ElevatedButton(
                  onPressed: () {
                    if (_isSecondPinInView) {
                      _removePin('_isSecondPinInView');
                      setState(() {
                        _isSecondPinInView = false;
                      });
                    } else {
                      _addPin('_isSecondPinInView', _secondPinCoordinates);
                      setState(() {
                        _isSecondPinInView = true;
                      });
                    }
                  },
                  child: _isSecondPinInView
                      ? const Text('Remove second Pin')
                      : const Text('Add second Pin'),
                ),
                ElevatedButton(
                  onPressed: () {
                    _connectTwoPinsWithPolyline(
                      id: 'connecting-polyline-01',
                      name: 'Connecting polyline',
                      start: _firstPinCoordinates,
                      end: _secondPinCoordinates,
                    );
                  },
                  child: const Text('Connect pins'),
                ),
              ],
            ),
            Column(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                ElevatedButton(
                  onPressed: () {
                    _addPolygon(
                      graphic: PolygonGraphic(
                        rings: secondPolygon,
                        symbol: redFillSymbol,
                        attributes: const ArcGisMapAttributes(
                          id: _polygonId2,
                          name: 'Second Polygon',
                        ),
                        onHover: (isHovered) {
                          isHovered
                              ? _updateGraphicSymbol(
                                  polygonId: _polygonId2,
                                  symbol: highlightedRedFillSymbol,
                                )
                              : _updateGraphicSymbol(
                                  polygonId: _polygonId2,
                                  symbol: redFillSymbol,
                                );
                          if (_hoveredPolygons[_polygonId2] == isHovered) {
                            return;
                          }
                          _hoveredPolygons[_polygonId2] = isHovered;
                          _setMouseCursor();
                        },
                      ),
                    );
                  },
                  child: const Text('Add red polygon'),
                ),
                ElevatedButton(
                  onPressed: () => _removePolygon(id: _polygonId2),
                  child: const Text('Remove red polygon'),
                ),
                ElevatedButton(
                  onPressed: () {
                    if (_subscribedToZoom) {
                      _unsubscribeFromZoom();
                    } else {
                      _subscribeToZoom();
                    }
                  },
                  child: _subscribedToZoom
                      ? const Text('Stop zoom')
                      : const Text('Sub to zoom'),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }

  /// Marker for searched address
  final _markerSymbol = const PictureMarkerSymbol(
    uri: 'assets/pin_filled.svg',
    width: 56,
    height: 56,
  );

  void _routeToVectorLayerMap() {
    Navigator.of(context).push(
      MaterialPageRoute(builder: (_) => const VectorLayerExamplePage()),
    );
  }
}
