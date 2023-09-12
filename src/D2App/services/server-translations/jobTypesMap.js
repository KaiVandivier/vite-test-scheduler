import i18n from '@dhis2/d2-i18n';
const jobTypesMap = {
  ACCOUNT_EXPIRY_ALERT: i18n.t('Account expiry alert'),
  AGGREGATE_DATA_EXCHANGE: i18n.t('Exchange aggregate data'),
  ANALYTICS_TABLE: i18n.t('Analytics table'),
  ANALYTICSTABLE_UPDATE: i18n.t('Analytics table update'),
  COMPLETE_DATA_SET_REGISTRATION_IMPORT: i18n.t('Complete data set registration import'),
  CONTINUOUS_ANALYTICS_TABLE: i18n.t('Continuous analytics table'),
  CREDENTIALS_EXPIRY_ALERT: i18n.t('Credentials expiry alert'),
  DATA_INTEGRITY: i18n.t('Data integrity'),
  DATA_SET_NOTIFICATION: i18n.t('Dataset notification'),
  DATA_STATISTICS: i18n.t('Data statistics'),
  DATA_SYNC: i18n.t('Data synchronization'),
  DATAVALUE_IMPORT: i18n.t('Data value import'),
  DATAVALUE_IMPORT_INTERNAL: i18n.t('Data value import internal'),
  DISABLE_INACTIVE_USERS: i18n.t('Disable inactive users'),
  ENROLLMENT_IMPORT: i18n.t('Enrollment import'),
  EVENT_IMPORT: i18n.t('Event import'),
  EVENT_PROGRAMS_DATA_SYNC: i18n.t('Event programs data sync'),
  FILE_RESOURCE_CLEANUP: i18n.t('File resource clean up'),
  GEOJSON_IMPORT: i18n.t('GEOJSON import'),
  GML_IMPORT: i18n.t('GML import'),
  IMAGE_PROCESSING: i18n.t('Image processing'),
  LEADER_ELECTION: i18n.t('Leader election'),
  LEADER_RENEWAL: i18n.t('Leader renewal'),
  LOCK_EXCEPTION_CLEANUP: i18n.t('Lock exception cleanup'),
  MATERIALIZED_SQL_VIEW_UPDATE: i18n.t('Materialized sql view update'),
  METADATA_IMPORT: i18n.t('Metadata import'),
  META_DATA_SYNC: i18n.t('Metadata synchronization'),
  MOCK: i18n.t('Mock'),
  MONITORING: i18n.t('Monitoring'),
  PREDICTOR: i18n.t('Predictor'),
  PROGRAM_DATA_SYNC: i18n.t('Program data sync'),
  PROGRAM_NOTIFICATIONS: i18n.t('Program notifications'),
  PUSH_ANALYSIS: i18n.t('Push analysis'),
  REMOVE_EXPIRED_RESERVED_VALUES: i18n.t('Remove expired reserved values'),
  REMOVE_USED_OR_EXPIRED_RESERVED_VALUES: i18n.t('Remove used or expired reserved values'),
  RESOURCE_TABLE: i18n.t('Resource table'),
  SEND_SCHEDULED_MESSAGE: i18n.t('Send scheduled message'),
  SMS_SEND: i18n.t('SMS send'),
  SYSTEM_VERSION_UPDATE_CHECK: i18n.t('System version update check'),
  TEI_IMPORT: i18n.t('TEI import'),
  TEST: i18n.t('Test'),
  TRACKER_IMPORT_JOB: i18n.t('Tracker import job'),
  TRACKER_IMPORT_NOTIFICATION_JOB: i18n.t('Tracker import notification job'),
  TRACKER_IMPORT_RULE_ENGINE_JOB: i18n.t('Tracker import rule engine job'),
  TRACKER_PROGRAMS_DATA_SYNC: i18n.t('Tracker programs data sync'),
  TRACKER_SEARCH_OPTIMIZATION: i18n.t('Tracker search optimization'),
  VALIDATION_RESULTS_NOTIFICATION: i18n.t('Validation results notification')
};
export default jobTypesMap;