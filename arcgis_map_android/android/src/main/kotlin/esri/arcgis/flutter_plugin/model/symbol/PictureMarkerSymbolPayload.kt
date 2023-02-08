package esri.arcgis.flutter_plugin.model.symbol

data class PictureMarkerSymbolPayload(
    val url: String,
    val width: Double,
    val height: Double,
    val xOffset: Int,
    val yOffset: Int,
)