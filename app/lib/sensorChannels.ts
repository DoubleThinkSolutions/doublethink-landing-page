export type SampleType = 'CONTINUOUS' | 'TRIGGER' | 'STATIC';

export interface SensorChannel {
  id: string;
  code: string;
  name: string;
  unit: string;
  sampleType: SampleType;
  description: string;
  example: string;
}

export const SENSOR_CHANNELS: SensorChannel[] = [
  // Category A — Motion / IMU (calibrated)
  {
    id: 'A01',
    code: 'ACCELEROMETER_3_AXIS',
    name: 'Accelerometer 3-axis',
    unit: 'm/s2',
    sampleType: 'CONTINUOUS',
    description: 'Measures acceleration forces applied to the device on three physical axes (X, Y, and Z), including gravity.',
    example: '[0.02, 9.81, 0.15]'
  },
  {
    id: 'A02',
    code: 'GYROSCOPE_3_AXIS',
    name: 'Gyroscope 3-axis',
    unit: 'rad/s',
    sampleType: 'CONTINUOUS',
    description: 'Measures the rate of device rotation around the three physical axes (X, Y, and Z).',
    example: '[0.01, -0.05, 0.02]'
  },
  {
    id: 'A03',
    code: 'GRAVITY_VECTOR_3_AXIS',
    name: 'Gravity vector 3-axis',
    unit: 'm/s2',
    sampleType: 'CONTINUOUS',
    description: 'Provides a three-dimensional vector indicating the direction and magnitude of gravity acting on the device.',
    example: '[0.0, 9.80665, 0.0]'
  },
  {
    id: 'A04',
    code: 'LINEAR_ACCELERATION',
    name: 'Linear acceleration',
    unit: 'm/s2',
    sampleType: 'CONTINUOUS',
    description: 'Measures acceleration forces applied to the device on three physical axes, excluding the force of gravity.',
    example: '[0.5, 0.0, -0.1]'
  },
  {
    id: 'A05',
    code: 'ROTATION_VECTOR_QUATERNION',
    name: 'Rotation vector quaternion',
    unit: 'quaternion',
    sampleType: 'CONTINUOUS',
    description: 'Identifies the orientation of the device relative to an Earth-centered coordinate system as a 4-component quaternion.',
    example: '[0.707, 0.0, 0.0, 0.707]'
  },
  {
    id: 'A06',
    code: 'GAME_ROTATION_VECTOR',
    name: 'Game rotation vector',
    unit: 'quaternion',
    sampleType: 'CONTINUOUS',
    description: 'Identifies the orientation of the device as a quaternion without using the geomagnetic field sensor (no true North reference).',
    example: '[0.0, 1.0, 0.0, 0.0]'
  },
  {
    id: 'A07',
    code: 'GEOMAGNETIC_ROTATION_VECTOR',
    name: 'Geomagnetic rotation vector',
    unit: 'quaternion',
    sampleType: 'CONTINUOUS',
    description: 'Identifies device orientation using an accelerometer and a magnetometer, designed for low power consumption.',
    example: '[0.1, 0.2, 0.3]'
  },
  {
    id: 'A08',
    code: 'TRUE_NORTH_HEADING',
    name: 'True north heading',
    unit: 'deg',
    sampleType: 'CONTINUOUS',
    description: 'Calculates the current compass heading of the device relative to geographic True North.',
    example: '184.5'
  },
  {
    id: 'A09',
    code: '6DOF_POSE',
    name: '6DOF pose',
    unit: 'pose',
    sampleType: 'CONTINUOUS',
    description: 'Tracks device position (X, Y, Z translation) and orientation (roll, pitch, yaw) within an environment using ARCore spatial tracking.',
    example: '[0.1, 1.2, -0.5, 0.0, 0.707, 0.0, 0.707]'
  },
  {
    id: 'A10',
    code: 'ACCEL_LIMITED_AXES',
    name: 'Accel limited-axes',
    unit: 'm/s2',
    sampleType: 'CONTINUOUS',
    description: 'Measures 3-axis acceleration while explicitly accounting for cases where one or more axes have limited capability or sensor hardware restrictions.',
    example: '[0.02, 9.81, 0.15, 1.0, 1.0, 0.0]'
  },
  {
    id: 'A11',
    code: 'GYRO_LIMITED_AXES',
    name: 'Gyro limited-axes',
    unit: 'rad/s',
    sampleType: 'CONTINUOUS',
    description: 'Measures 3-axis rotational velocity while reflecting structural axis limits or specific hardware constraints.',
    example: '[0.01, -0.05, 0.02, 1.0, 1.0, 0.0]'
  },

  // Category B — Motion / IMU (uncalibrated)
  {
    id: 'B01',
    code: 'ACCEL_UNCALIBRATED_BIAS',
    name: 'Accel uncalibrated + bias',
    unit: 'm/s2',
    sampleType: 'CONTINUOUS',
    description: 'Reports raw 3-axis acceleration alongside the estimated accelerometer hard-iron bias compensation.',
    example: '[0.05, 9.86, 0.12, 0.01, 0.02, -0.01]'
  },
  {
    id: 'B02',
    code: 'GYRO_UNCALIBRATED_DRIFT',
    name: 'Gyro uncalibrated + drift',
    unit: 'rad/s',
    sampleType: 'CONTINUOUS',
    description: 'Reports raw 3-axis rotation rates alongside the estimated gyro drift bias for each axis.',
    example: '[0.02, -0.04, 0.01, 0.001, -0.002, 0.000]'
  },
  {
    id: 'B03',
    code: 'ACCEL_LIMITED_AXES_UNCAL',
    name: 'Accel limited-axes uncal',
    unit: 'm/s2',
    sampleType: 'CONTINUOUS',
    description: 'Reports uncalibrated 3-axis acceleration and bias components restricted by limited hardware axes capabilities.',
    example: '[0.05, 9.86, 0.12, 0.01, 0.02, -0.01]'
  },
  {
    id: 'B04',
    code: 'GYRO_LIMITED_AXES_UNCAL',
    name: 'Gyro limited-axes uncal',
    unit: 'rad/s',
    sampleType: 'CONTINUOUS',
    description: 'Reports uncalibrated 3-axis angular velocity and drift components restricted by limited hardware axes capabilities.',
    example: '[0.02, -0.04, 0.01, 0.001, -0.002, 0.000]'
  },

  // Category C — Motion Events (trigger)
  {
    id: 'C01',
    code: 'SIGNIFICANT_MOTION',
    name: 'Significant motion',
    unit: 'boolean',
    sampleType: 'TRIGGER',
    description: 'Triggers a notification event when a major motion change is detected (e.g., walking, running, or being in a moving vehicle).',
    example: 'true'
  },
  {
    id: 'C02',
    code: 'STEP_DETECTOR',
    name: 'Step detector',
    unit: 'boolean',
    sampleType: 'TRIGGER',
    description: 'Fires an event instantly every time the user takes a step.',
    example: 'true'
  },
  {
    id: 'C03',
    code: 'STEP_COUNTER',
    name: 'Step counter',
    unit: 'steps',
    sampleType: 'STATIC',
    description: 'Tracks the total cumulative number of steps taken by the user since the last device boot.',
    example: '14250'
  },
  {
    id: 'C04',
    code: 'TILT_DETECTOR',
    name: 'Tilt detector',
    unit: 'boolean',
    sampleType: 'TRIGGER',
    description: 'Detects a distinct change in the device tilt orientation angle.',
    example: 'true'
  },
  {
    id: 'C05',
    code: 'STATIONARY_DETECT',
    name: 'Stationary detect',
    unit: 'boolean',
    sampleType: 'TRIGGER',
    description: 'Fires an event when the device transitions into a prolonged completely still or baseline resting state.',
    example: 'true'
  },
  {
    id: 'C06',
    code: 'MOTION_DETECT',
    name: 'Motion detect',
    unit: 'boolean',
    sampleType: 'TRIGGER',
    description: 'Fires an event when the device transitions out of a stationary state into any active movement.',
    example: 'true'
  },

  // Category D — Environment
  {
    id: 'D01',
    code: 'MAGNETIC_FIELD_CALIBRATED',
    name: 'Magnetic field calibrated',
    unit: 'uT',
    sampleType: 'CONTINUOUS',
    description: 'Measures ambient geomagnetic fields along three axes with hard-iron calibration corrections applied.',
    example: '[19.5, -4.2, -43.1]'
  },
  {
    id: 'D02',
    code: 'MAGNETIC_FIELD_UNCALIBRATED',
    name: 'Magnetic field uncalibrated',
    unit: 'uT',
    sampleType: 'CONTINUOUS',
    description: 'Reports raw 3-axis magnetic field measurements combined alongside the estimated internal iron bias corrections.',
    example: '[22.1, -2.1, -40.0, -2.6, -2.1, -3.1]'
  },
  {
    id: 'D03',
    code: 'BAROMETRIC_PRESSURE',
    name: 'Barometric pressure',
    unit: 'hPa',
    sampleType: 'CONTINUOUS',
    description: 'Measures the atmospheric pressure of the surrounding environment, useful for altitude estimations.',
    example: '1013.25'
  },
  {
    id: 'D04',
    code: 'AMBIENT_LIGHT',
    name: 'Ambient light',
    unit: 'lux',
    sampleType: 'CONTINUOUS',
    description: 'Measures environmental illuminance levels using the device ambient light sensor.',
    example: '450.0'
  },
  {
    id: 'D05',
    code: 'RELATIVE_HUMIDITY',
    name: 'Relative humidity',
    unit: 'percent',
    sampleType: 'CONTINUOUS',
    description: 'Measures the relative ambient air humidity of the surrounding environment expressed as a percentage.',
    example: '55.3'
  },
  {
    id: 'D06',
    code: 'AMBIENT_TEMPERATURE',
    name: 'Ambient temperature',
    unit: 'celsius',
    sampleType: 'CONTINUOUS',
    description: 'Measures the local ambient room or environmental air temperature.',
    example: '22.5'
  },

  // Category E — Proximity / Orientation State
  {
    id: 'E01',
    code: 'PROXIMITY',
    name: 'Proximity',
    unit: 'cm',
    sampleType: 'TRIGGER',
    description: 'Measures distance to an object relative to the device screen, typically used to detect phone presence near an ear.',
    example: '0.0'
  },
  {
    id: 'E02',
    code: 'DEVICE_ORIENTATION',
    name: 'Device orientation',
    unit: 'enum',
    sampleType: 'TRIGGER',
    description: 'Reports the orientation posture state of the physical device frame (e.g., portrait, landscape, face up).',
    example: '1'
  },
  {
    id: 'E03',
    code: 'HINGE_ANGLE',
    name: 'Hinge angle',
    unit: 'deg',
    sampleType: 'TRIGGER',
    description: 'Measures the angle between two integral physical parts of a foldable or dual-screen device.',
    example: '180.0'
  },

  // Category F — Interaction Events
  {
    id: 'F01',
    code: 'WAKE_GESTURE',
    name: 'Wake gesture',
    unit: 'boolean',
    sampleType: 'TRIGGER',
    description: 'Detects device motion patterns indicative of a user deliberate action to wake or light up the screen.',
    example: 'true'
  },
  {
    id: 'F02',
    code: 'PICK_UP_GESTURE',
    name: 'Pick-up gesture',
    unit: 'boolean',
    sampleType: 'TRIGGER',
    description: 'Fires when the device is picked up from an idle resting position on a surface.',
    example: 'true'
  },
  {
    id: 'F03',
    code: 'GLANCE_GESTURE',
    name: 'Glance gesture',
    unit: 'boolean',
    sampleType: 'TRIGGER',
    description: 'Triggers a quick look behavior when a user performs a short gesture to check the screen briefly.',
    example: 'true'
  },
  {
    id: 'F04',
    code: 'WRIST_TILT_GESTURE',
    name: 'Wrist tilt gesture',
    unit: 'boolean',
    sampleType: 'TRIGGER',
    description: 'Detects specialized wrist rotational tilt interactions, primarily intended for wearable forms/smartwatches.',
    example: 'true'
  },

  // Category G — Biometric
  {
    id: 'G01',
    code: 'HEART_RATE',
    name: 'Heart rate',
    unit: 'bpm',
    sampleType: 'CONTINUOUS',
    description: 'Monitors the real-time heart rate of the user using an optical or biometric monitor sensor.',
    example: '72.0'
  },
  {
    id: 'G02',
    code: 'HEART_BEAT_EVENT',
    name: 'Heart beat event',
    unit: 'boolean',
    sampleType: 'TRIGGER',
    description: 'Fires an instant event peak tag immediately upon every singular detected heartbeat pulse cycle.',
    example: 'true'
  },
  {
    id: 'G03',
    code: 'OFF_BODY_DETECT',
    name: 'Off-body detect',
    unit: 'boolean',
    sampleType: 'TRIGGER',
    description: 'Triggers when a body-worn accessory or device transitions between being worn or taken off the skin.',
    example: 'false'
  },

  // Category H — Sensor Infrastructure Meta
  {
    id: 'H01',
    code: 'SENSOR_ATTACH_DETACH',
    name: 'Sensor attach/detach',
    unit: 'event_id',
    sampleType: 'TRIGGER',
    description: 'Tracks lifecycle changes when modular or peripheral sensors are physically or logically attached or detached.',
    example: '1002'
  },
  {
    id: 'H02',
    code: 'SUPPLEMENTAL_SENSOR_META',
    name: 'Supplemental sensor meta',
    unit: 'none',
    sampleType: 'TRIGGER',
    description: 'Relays operational configuration adjustments, hardware calibration shifts, or frame environment data.',
    example: '"recalibrated"'
  },
  {
    id: 'H03',
    code: 'HEAD_TRACKER',
    name: 'Head tracker',
    unit: 'quaternion',
    sampleType: 'CONTINUOUS',
    description: 'Captures head position/orientation via connected peripheral peripherals for immersive spatial audio pipelines.',
    example: '[1.0, 0.0, 0.0, 0.0]'
  },

  // Category I — GNSS / Location
  {
    id: 'I01',
    code: 'GPS_POSITION',
    name: 'GPS position',
    unit: 'deg,deg,m,m,deg,m/s',
    sampleType: 'CONTINUOUS',
    description: 'Provides comprehensive location telemetry (Latitude, Longitude, Altitude, Accuracy, Bearing, Speed) from GNSS providers.',
    example: '[43.0731, -89.4012, 260.5, 3.0, 180.0, 12.5]'
  },
  {
    id: 'I02',
    code: 'GNSS_SATELLITE_STATUS',
    name: 'GNSS satellite status',
    unit: 'count,snr',
    sampleType: 'CONTINUOUS',
    description: 'Tracks active global tracking infrastructure overhead, containing the visible satellite count and average Signal-to-Noise Ratio.',
    example: '[12, 38.5]'
  },
  {
    id: 'I03',
    code: 'RAW_GNSS_PSEUDORANGES',
    name: 'Raw GNSS pseudoranges',
    unit: 'm,m/s',
    sampleType: 'CONTINUOUS',
    description: 'Logs sub-meter raw signal propagation distance measurements and range rates directly from individual tracked satellites.',
    example: '[21450320.5, -450.2]'
  },
  {
    id: 'I04',
    code: 'GNSS_CONSTELLATION_MIX',
    name: 'GNSS constellation mix',
    unit: 'bitmask',
    sampleType: 'CONTINUOUS',
    description: 'Provides a bitmask indicating which active global networks (GPS, GLONASS, Galileo, Beidou) are tracking fixes.',
    example: '15'
  },
  {
    id: 'I05',
    code: 'GPS_PRECISION_DOP',
    name: 'GPS precision HDOP/VDOP/PDOP',
    unit: 'none',
    sampleType: 'CONTINUOUS',
    description: 'Captures structural Dilution of Precision metrics mapping architectural satellite geometric quality.',
    example: '[1.2, 0.8, 1.4]'
  },
  {
    id: 'I06',
    code: 'GPS_FIX_TYPE',
    name: 'GPS fix type',
    unit: 'enum',
    sampleType: 'CONTINUOUS',
    description: 'Represents the lock resolution quality of the current spatial coordinate stream (e.g., No Fix, 2D, 3D, RTK).',
    example: '3'
  },

  // Category J — RF / Network
  {
    id: 'J01',
    code: 'WIFI_SCAN_BSSID_RSSI',
    name: 'WiFi scan BSSID/RSSI',
    unit: 'dbm',
    sampleType: 'CONTINUOUS',
    description: 'Logs surrounding wireless network environmental sweeps tracking access points along with received signal strength indicators.',
    example: '[-65, 2]'
  },
  {
    id: 'J02',
    code: 'WIFI_RTT_RANGING',
    name: 'WiFi RTT ranging',
    unit: 'ns',
    sampleType: 'CONTINUOUS',
    description: 'Measures round-trip signal flight time to supporting network nodes to enable high-accuracy indoor micro-positioning.',
    example: '24'
  },
  {
    id: 'J03',
    code: 'CELL_TOWER_INFO',
    name: 'Cell tower info',
    unit: 'dbm',
    sampleType: 'CONTINUOUS',
    description: 'Captures cellular radio modem link signals tracking tower identifiers and base operational network strengths.',
    example: '[-85, 4]'
  },
  {
    id: 'J04',
    code: 'CELL_TOWER_TIMING_ADVANCE',
    name: 'Cell tower timing advance',
    unit: 'ta_units',
    sampleType: 'CONTINUOUS',
    description: 'Tracks physical signal length offset adjustments to gauge overall connection distance to base cellular infrastructure.',
    example: '2'
  },
  {
    id: 'J05',
    code: 'MULTI_TOWER_VISIBILITY',
    name: 'Multi-tower visibility',
    unit: 'count',
    sampleType: 'CONTINUOUS',
    description: 'Tracks the number of nearby reachable or active cellular base transceiver stations.',
    example: '3'
  },
  {
    id: 'J06',
    code: 'BLE_SCAN',
    name: 'BLE scan',
    unit: 'dbm',
    sampleType: 'CONTINUOUS',
    description: 'Tracks nearby active Bluetooth Low Energy beacons, returning target signal strengths and device addresses.',
    example: '[-72, 1]'
  },
  {
    id: 'J07',
    code: 'UWB_RANGING',
    name: 'UWB ranging',
    unit: 'cm',
    sampleType: 'CONTINUOUS',
    description: 'Utilizes Ultra-Wideband spatial radios to calculate absolute point-to-point relative target proximity offsets.',
    example: '142'
  },
  {
    id: 'J08',
    code: 'NFC_VICINITY',
    name: 'NFC vicinity',
    unit: 'boolean',
    sampleType: 'TRIGGER',
    description: 'Registers momentary hardware entry field intersections against physical Near Field Communication tag hardware.',
    example: 'true'
  },
  {
    id: 'J09',
    code: 'NETWORK_CONNECTIVITY_STATE',
    name: 'Network connectivity state',
    unit: 'enum',
    sampleType: 'STATIC',
    description: 'Identifies the structural operational medium of active outbound device pipelines (e.g., Disconnected, WiFi, Mobile Data).',
    example: '2'
  },

  // Category K — Camera / Optical
  {
    id: 'K01',
    code: 'FRAME_HARDWARE_TIMESTAMP',
    name: 'Frame hardware timestamp',
    unit: 'ns',
    sampleType: 'CONTINUOUS',
    description: 'Extracts exact kernel-level physical shutters synchronization timestamps relative to system base clock.',
    example: '45812904322100'
  },
  {
    id: 'K02',
    code: 'TIMESTAMP_SOURCE_TYPE',
    name: 'Timestamp source type',
    unit: 'enum',
    sampleType: 'STATIC',
    description: 'Identifies the reference clock source used for video frame time tracking (e.g., real-time monotonic or hardware-synced).',
    example: '1'
  },
  {
    id: 'K03',
    code: 'EXPOSURE_TIME_PER_FRAME',
    name: 'Exposure time per frame',
    unit: 's',
    sampleType: 'CONTINUOUS',
    description: 'Exposes active electronic shutter capture speeds applied to individual camera sensors per frame.',
    example: '0.0333'
  },
  {
    id: 'K04',
    code: 'ISO_PER_FRAME',
    name: 'ISO per frame',
    unit: 'iso',
    sampleType: 'CONTINUOUS',
    description: 'Identifies continuous digital gain or sensor light sensitivity profiles active on current optical tracks.',
    example: '400'
  },
  {
    id: 'K05',
    code: 'FOCAL_LENGTH_PER_FRAME',
    name: 'Focal length per frame',
    unit: 'mm',
    sampleType: 'CONTINUOUS',
    description: 'Exposes the active physical lens position focal configurations applied to optical paths.',
    example: '4.38'
  },
  {
    id: 'K06',
    code: 'APERTURE_PER_FRAME',
    name: 'Aperture per frame',
    unit: 'f-stop',
    sampleType: 'CONTINUOUS',
    description: 'Tracks lens aperture diameter values associated with specific incoming frames.',
    example: '1.8'
  },
  {
    id: 'K07',
    code: 'FACE_DETECTION_METADATA',
    name: 'Face detection metadata',
    unit: 'count,x,y',
    sampleType: 'CONTINUOUS',
    description: 'Reports structural tracking telemetry detailing face counts and spatial bounding-box centers.',
    example: '[2, 450, 310]'
  },
  {
    id: 'K08',
    code: 'OIS_STATE',
    name: 'OIS state',
    unit: 'enum',
    sampleType: 'STATIC',
    description: 'Identifies the operational mode of the hardware Optical Image Stabilization module.',
    example: '1'
  },
  {
    id: 'K09',
    code: 'FLASH_STATE_PER_FRAME',
    name: 'Flash state per frame',
    unit: 'enum',
    sampleType: 'CONTINUOUS',
    description: 'Indicates whether the device flash or torch illumination component was active for a given frame.',
    example: '0'
  },
  {
    id: 'K10',
    code: 'AWB_STATE_PER_FRAME',
    name: 'AWB state per frame',
    unit: 'enum',
    sampleType: 'CONTINUOUS',
    description: 'Logs individual Auto White Balance calculation and locks convergence statuses.',
    example: '2'
  },
  {
    id: 'K11',
    code: 'AF_STATE_PER_FRAME',
    name: 'AF state per frame',
    unit: 'enum',
    sampleType: 'CONTINUOUS',
    description: 'Logs Auto Focus algorithm convergence feedback tracking state transitions.',
    example: '3'
  },
  {
    id: 'K12',
    code: 'VIDEO_CODEC_PARAMS',
    name: 'Video codec params',
    unit: 'none',
    sampleType: 'STATIC',
    description: 'Details codec compression profiles, including profile tiers, target bitrates, and keyframe interval layouts.',
    example: '[7, 1, 15000000, 30]'
  },

  // Category L — Audio
  {
    id: 'L01',
    code: 'AUDIO_PCM_AMPLITUDE',
    name: 'Audio PCM amplitude',
    unit: 'amplitude',
    sampleType: 'CONTINUOUS',
    description: 'Tracks digital microphone input levels using peak normalized linear Pulse Code Modulation indicators.',
    example: '1432.0'
  },
  {
    id: 'L02',
    code: 'SPECTRAL_FINGERPRINT',
    name: 'Spectral fingerprint',
    unit: 'db',
    sampleType: 'CONTINUOUS',
    description: 'Maps sound energy distributions across grouped frequency bands for ambient noise profiling.',
    example: '[-45.2, -50.1, -38.4, -42.0, -55.1, -60.3, -48.7, -52.2]'
  },
  {
    id: 'L03',
    code: 'MICROPHONE_POSITION',
    name: 'Microphone position',
    unit: 'enum',
    sampleType: 'STATIC',
    description: 'Identifies the primary active physical microphone configuration (e.g., bottom, top, or external headset).',
    example: '1'
  },
  {
    id: 'L04',
    code: 'AUDIO_DISTORTION_EVENTS',
    name: 'Audio distortion events',
    unit: 'boolean',
    sampleType: 'TRIGGER',
    description: 'Triggers when input audio streams exceed hardware thresholds, causing digital clipping or saturation.',
    example: 'true'
  },

  // Category M — Power / Thermal
  {
    id: 'M01',
    code: 'BATTERY_VOLTAGE',
    name: 'Battery voltage',
    unit: 'uV',
    sampleType: 'CONTINUOUS',
    description: 'Measures internal battery operating potential in microvolts.',
    example: '4120000'
  },
  {
    id: 'M02',
    code: 'BATTERY_CURRENT_DRAW',
    name: 'Battery current draw',
    unit: 'uA',
    sampleType: 'CONTINUOUS',
    description: 'Measures instant energy current draws or charge input flows through the power management rail.',
    example: '-250000'
  },
  {
    id: 'M03',
    code: 'BATTERY_CHARGE_CONSUMED',
    name: 'Battery charge consumed',
    unit: 'uAh',
    sampleType: 'CONTINUOUS',
    description: 'Tracks the accumulated power usage metrics recorded since the last full system charge reset.',
    example: '1200000'
  },
  {
    id: 'M04',
    code: 'BATTERY_TEMPERATURE',
    name: 'Battery temperature',
    unit: 'tenths_celsius',
    sampleType: 'CONTINUOUS',
    description: 'Monitors the internal hardware core battery pack temperature.',
    example: '325'
  },
  {
    id: 'M05',
    code: 'SYSTEM_THERMAL_STATUS',
    name: 'System thermal status',
    unit: 'enum',
    sampleType: 'TRIGGER',
    description: 'Monitors hardware thermal throttling indicators (e.g., Normal, Throttling, Critical Shutdown).',
    example: '0'
  },
  {
    id: 'M06',
    code: 'CHARGING_STATE',
    name: 'Charging state',
    unit: 'enum',
    sampleType: 'STATIC',
    description: 'Identifies the current power source connection type (e.g., AC, USB, Wireless, or Battery).',
    example: '1'
  },
  {
    id: 'M07',
    code: 'SCREEN_ON_STATE',
    name: 'Screen-on state',
    unit: 'boolean',
    sampleType: 'STATIC',
    description: 'Tracks whether the primary device display panel is active or dark.',
    example: 'true'
  },

  // Category N — Device Identity & Integrity
  {
    id: 'N01',
    code: 'BUILD_FINGERPRINT_HASH',
    name: 'Build.FINGERPRINT hash',
    unit: 'hash',
    sampleType: 'STATIC',
    description: 'A cryptographic hash of the unique system build fingerprint used to verify software consistency.',
    example: '"a5f8c3d2e1b439c2"'
  },
  {
    id: 'N02',
    code: 'HARDWARE_SERIAL_HASH',
    name: 'Hardware serial hash',
    unit: 'hash',
    sampleType: 'STATIC',
    description: 'A cryptographic hash of the unique physical device serial identifier.',
    example: '"8c99e12f0a34bd77"'
  },
  {
    id: 'N03',
    code: 'DEVICE_MODEL_IDENTIFIER',
    name: 'Device model identifier',
    unit: 'hash',
    sampleType: 'STATIC',
    description: 'A cryptographic hash of the device model string to track specific hardware variants.',
    example: '"d3b07384d113edec"'
  },
  {
    id: 'N04',
    code: 'ANDROID_ID',
    name: 'ANDROID_ID',
    unit: 'hash',
    sampleType: 'STATIC',
    description: 'A cryptographic hash of the unique, 64-bit random ID generated on device first boot.',
    example: '"7be120fa2934cd51"'
  },
  {
    id: 'N05',
    code: 'SECURITY_PATCH_LEVEL',
    name: 'Security patch level',
    unit: 'date_int',
    sampleType: 'STATIC',
    description: 'The system security patch release date represented as an integer (YYYYMM).',
    example: '202603'
  },
  {
    id: 'N06',
    code: 'SDK_VERSION',
    name: 'SDK version',
    unit: 'int',
    sampleType: 'STATIC',
    description: 'The framework API level version number of the host Android operating system.',
    example: '34'
  },
  {
    id: 'N07',
    code: 'BOOTLOADER_LOCK_STATE',
    name: 'Bootloader lock state',
    unit: 'boolean',
    sampleType: 'STATIC',
    description: 'Indicates whether the low-level hardware bootloader remains verified and locked.',
    example: 'true'
  },
  {
    id: 'N08',
    code: 'USB_DEBUG_STATE',
    name: 'USB debug state',
    unit: 'boolean',
    sampleType: 'STATIC',
    description: 'Indicates whether Android Debug Bridge (ADB) development connections are currently active over USB.',
    example: 'false'
  },
  {
    id: 'N09',
    code: 'MOCK_LOCATION_ENABLED',
    name: 'Mock location enabled',
    unit: 'boolean',
    sampleType: 'STATIC',
    description: 'Indicates whether system location coordinates are being generated by an active mock provider application.',
    example: 'false'
  },
  {
    id: 'N10',
    code: 'DEVELOPER_OPTIONS_ENABLED',
    name: 'Developer options enabled',
    unit: 'boolean',
    sampleType: 'STATIC',
    description: 'Indicates whether the system-wide Android developer options settings menu is visible and active.',
    example: 'false'
  },
  {
    id: 'N11',
    code: 'ROOT_DETECTED',
    name: 'Root detected',
    unit: 'boolean',
    sampleType: 'STATIC',
    description: 'Indicates whether signs of root access or su binaries were discovered on the system partition.',
    example: 'false'
  },
  {
    id: 'N12',
    code: 'SELINUX_ENFORCING',
    name: 'SELinux enforcing',
    unit: 'boolean',
    sampleType: 'STATIC',
    description: 'Indicates whether Security-Enhanced Linux kernel enforcement access controls are actively running.',
    example: 'true'
  },
  {
    id: 'N13',
    code: 'PLAY_INTEGRITY_RESULT',
    name: 'Play Integrity result',
    unit: 'enum',
    sampleType: 'STATIC',
    description: 'Indicates the structural integrity evaluation result of the Google Play Integrity check.',
    example: '1'
  },
  {
    id: 'N14',
    code: 'NTP_CLOCK_DELTA',
    name: 'NTP clock delta',
    unit: 'ms',
    sampleType: 'STATIC',
    description: 'Calculates the millisecond time offset between the internal hardware wall clock and an authoritative Network Time Protocol source.',
    example: '-45'
  }
];
