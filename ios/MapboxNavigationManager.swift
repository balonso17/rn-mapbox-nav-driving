@objc(MapboxNavigationDrivingManager)
class MapboxNavigationDrivingManager: RCTViewManager {
  override func view() -> UIView! {
    return MapboxNavigationView();
  }

  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
