#import "ArcgisMapPlugin.h"
#if __has_include(<arcgis_map/arcgis_map-Swift.h>)
#import <arcgis_map/arcgis_map-Swift.h>
#else
// Support project import fallback if the generated compatibility header
// is not copied when this plugin is created as a library.
// https://forums.swift.org/t/swift-static-libraries-dont-copy-generated-objective-c-header/19816
#import "arcgis_map-Swift.h"
#endif

@implementation ArcgisMapPlugin
+ (void)registerWithRegistrar:(NSObject<FlutterPluginRegistrar>*)registrar {
  [SwiftArcgisMapPlugin registerWithRegistrar:registrar];
}
@end
