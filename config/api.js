'use strict'

const API = {
    'local': {
        SENTRY_DSN: 'https://381142f3a66c4dd786f52a176fb1f684@sentry.io/1819461'
    },
    'dev': {
        SENTRY_DSN: 'https://3d4c0a85afeb45e1966ae43732c0e9ee@sentry.io/1891198',
    },
    'test': {
        SENTRY_DSN: 'https://a7d2e565e0e64a8bb80c61a6dbc010b9@sentry.io/1912464',
        EMAIL_SENDER_SERVICE: {
            URI: "https://api.sendgrid.com/v3/mail/send",
            AUTH_KEY: "Bearer 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",
        },
    },
    'staging': {
        SENTRY_DSN: 'https://a7d2e565e0e64a8bb80c61a6dbc010b9@sentry.io/1912464',
        EMAIL_SENDER_SERVICE: {
            URI: "https://api.sendgrid.com/v3/mail/send",
            AUTH_KEY: "Bearer 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",
        },
    },
    'production': {
        SENTRY_DSN: 'https://8778a941a2ed4af794b9ea0ddacc4d1c@sentry.io/1912489',
        EMAIL_SENDER_SERVICE: {
            URI: "https://api.sendgrid.com/v3/mail/send",
            AUTH_KEY: "Bearer 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",
        },
    }
};
API[process.env.ENV].PUBLIC_KEY_URI = '/api/publicKey';
API[process.env.ENV].ENCRYPTION_KEY_URI = '/api/encryptionkey';
API[process.env.ENV].MY_ADDRESS_URI = '/api/getAddress';
API[process.env.ENV].NODE_DETAILS_URI = '/api/getNodeDetails';
API[process.env.ENV].CHANGE_PASSWORD_URI = '/auth/reset-password';
API[process.env.ENV].FIRST_CHANGE_PASSWORD_URI = '/auth/set-password';
API[process.env.ENV].NODE_UPDATE_URI = '/api/updateDetails';
API[process.env.ENV].GET_PARTNERS_MAPPING_URI = '/api/partnership/getPartnerMapping';
API[process.env.ENV].CLARITY_API_URI = '/test_inquires';
API[process.env.ENV].NODE_CHECK_APPROVAL_URI = '/api/checkApproval';
API[process.env.ENV].SEND_METRICS_URI = '/api/sendMetrics';

API[process.env.ENV].GET_BUSINESS_METRICS = '/metric/getBusinessMetrics';

API[process.env.ENV].GET_TOTAL_STATS = '/metric/getTotalStats';

API[process.env.ENV].GET_SELLER_HISTORY = '/metric/history/decline';
API[process.env.ENV].GET_MERCHANT_HISTORY = '/metric/history/prescreen';
API[process.env.ENV].GET_FICO_DISTRIBUTION = '/metric/getApprovedFicoDistribution';
API[process.env.ENV].GET_DAYWISE_STATS = '/metric/getDaywiseStats';
API[process.env.ENV].GET_AVG_APROVED_FICO = '/metric/getApprovedAverageFico';




API[process.env.ENV].NODE_UPDATE_DEALER_ID = '/api/servicefinance/dealerid/update';

API[process.env.ENV].GET_PARTNERS_DETAILS = '/api/partnership/getPartners';
API[process.env.ENV].GET_GRADE_URI = '/api/getLead';
API[process.env.ENV].GET_LEAD_STATIC = '/api/getLead/static';
API[process.env.ENV].GET_LEAD_SDM = '/api/getLead/sdm';
API[process.env.ENV].GET_LEAD_BUREAU = '/api/getLead/bureau';
API[process.env.ENV].NODE_SHARE_LEAD_URI = '/api/shareLead';
API[process.env.ENV].ADD_BUYER_URI = '/api/partnership/addBuyer';
API[process.env.ENV].REMOVE_BUYER_URI = '/api/partnership/removeBuyer';
API[process.env.ENV].SEND_MESSAGE_URI = '/api/sendMessage';
API[process.env.ENV].SEND_SYSTEM_METRIC_URI = '/api/sendSystemMetrics';
API[process.env.ENV].PRE_QUAL_GET_REQUEST_BY_POINTCODE_URI = '/api/prescreen/getRequestByPointCode';
API[process.env.ENV].PRE_QUAL_MARK_REGRADED_BY_POINTCODE_URI = '/api/prescreen/markReGraded';

API[process.env.ENV].FILE_HASH_URI = '/api/v0/cat';
API[process.env.ENV].LOGO_UPLOAD_IPFS = '/api/v0/add';

API[process.env.ENV].BUYER_CHECK_APPROVAL = '/api/buyer/checkApproval';
API[process.env.ENV].DEPLOY_CONTRACT = '/api/deployContract';
API[process.env.ENV].SET_MODEL_GRADE = '/api/setModelGradeToNumber';
API[process.env.ENV].EVALUATE_CHECKAPPROVAL_PREQUAL_URI = '/api/checkApproval';
API[process.env.ENV].SHARE_METRICS_STATUS = '/api/sharedMetrics/status';
API[process.env.ENV].UPLOAD_SHARE_METRICS_DATA = '/api/secureipfs/upload';
API[process.env.ENV].TOGGLE_SHARE_METRICS = '/api/sharedMetrics/toggle';
API[process.env.ENV].GET_ANALYSIS_MODE_STATUS = '/api/analysisMode/get';

API[process.env.ENV].HEALTH_CHECK_URI = '/api/getAddress';

API[process.env.ENV].GET_STATE_UR = '/api/getStateUR';
API[process.env.ENV].GET_GRADE_THRESHOLD = '/api/getGradeThreshold';
API[process.env.ENV].GET_DQ = '/api/getDQ';
API[process.env.ENV].SET_DQ = '/api/setDQ';
API[process.env.ENV].RUN_DISQUALIFIED = '/api/runDisqualifiedProcess';
API[process.env.ENV].SET_MACROECONOMICS = '/api/setMacroEconomicData';
API[process.env.ENV].GET_STATE_UR_BULK = '/api/getStateURBulk';
API[process.env.ENV].PRE_QUAL_SAVE_METRICS_URI = '/api/saveMetrics';
API[process.env.ENV].PRE_QUAL_SEARCH_PREQUAL_OFFER = '/api/getPreExistingOffers';
API[process.env.ENV].PRE_QUAL_SEARCH_CUSTOMER_REQUESTPARAM_DETAILS = '/api/findCustomerRequestParamDetails';
API[process.env.ENV].PRE_QUAL_SAVE_FULL_CA_URI = '/api/saveFullCA';
API[process.env.ENV].ADD_PRE_QUAL_STATUS_CODES_URI = '/api/saveStatusCodeFromDeclineFlow';
API[process.env.ENV].GET_POINTCODE_FLOW = '/api/prequal/getFlowForPointCode';


API[process.env.ENV].PRE_QUAL_SAVE_SL_INFO = '/api/saveSlInfo';
API[process.env.ENV].PRE_QUAL_VALIDATE_SSN = '/api/validateSSNResult';
API[process.env.ENV].PRE_QUAL_CA_RESULTS = '/api/checkApprovalResults';
API[process.env.ENV].NOTIFY_BUREAU_FOR_SL = '/prescreen/shareLead';


API[process.env.ENV].GET_MERCHANT_BUYERS = '/streamsource/getBuyers';
API[process.env.ENV].METRICS_EBAY = '/api/prescreen/metrics/ebay';
API[process.env.ENV].SAVE_MERCHANT_BUYERS = '/streamsource/saveBuyers';
API[process.env.ENV].UPDATE_GET_BUREAU = '/streamsource/updateBureau';
API[process.env.ENV].GET_BUREAU = '/streamsource/getBureau';
API[process.env.ENV].UPDATE_BUYER_STATUS = '/streamsource/markBuyerStatus';
API[process.env.ENV].GET_BUYER_DETAIL = '/streamsource/getBuyerDetail';
API[process.env.ENV].SET_BUYER_NICKNAME = '/streamsource/setBuyerNickName';

API[process.env.ENV].SET_ANALYSIS_STATUS = '/api/analysisMode/set';

API[process.env.ENV].SSN_LIVE_UPDATE = '/api/suppressionList/update';
API[process.env.ENV].SSN_DEPLOY = '/api/suppressionList/deploy';

API[process.env.ENV].GET_DISQUALIFIER = '/api/getDisqualifier';
API[process.env.ENV].GET_STATEDATA = '/api/getStateData';
API[process.env.ENV].SET_STATEDATA = '/api/setStateData';
// API[process.env.ENV].GET_COEFICIENT = '/api/getCoeficient';
// API[process.env.ENV].SET_COEFICIENT = '/api/setCoefficients';
API[process.env.ENV].GET_COEFFICIENT = '/api/model/v2/coefficients/get';
API[process.env.ENV].SET_COEFFICIENT = '/api/model/v2/coefficients/set';
API[process.env.ENV].GET_ACCEPTANCE_THRESHOLD = '/api/getAcceptanceThreshold';
API[process.env.ENV].SET_ACCEPTANCE_THRESHOLD = '/api/setAcceptanceThreshold';
API[process.env.ENV].SAVE_STATUS_CODES_URI = '/metric/add';
API[process.env.ENV].REPORT_EVALUATE = '/api/report/evaluate';
API[process.env.ENV].SCORE_PARTNER_DATA = '/api/scorePartnerData';
API[process.env.ENV].GET_ALL_RECEIVED_MESSAGES = '/message/getAllReceivedMessages';
API[process.env.ENV].MARK_ALL_MESSAGES_READ = '/message/markAllMessagesRead';
API[process.env.ENV].DELETE_MESSAGES = '/message/deleteMessage';
API[process.env.ENV].SEND_MESSAGES = '/message/sendMessage';
API[process.env.ENV].SAVE_MESSAGES = '/message/saveMessage';
API[process.env.ENV].SEND_READ_RECEIPT = '/message/sendReadReceipt';
API[process.env.ENV].NOTIFY = '/message/notify';

// Contract End Points
API[process.env.ENV].DOWNLOAD_TEMPLATE = '/contract/downloadTemplate';
API[process.env.ENV].RUN_DISQUALIFIED_PROCESS = '/contract/runDisqualifiedProcess';
API[process.env.ENV].DEPLOY_CONTRACT = '/contract/deployContract';
API[process.env.ENV].SEND_ACK = '/contract/sendAck';
API[process.env.ENV].SEND_ACK_SELF = '/contract/sendAckSelf';
API[process.env.ENV].SEND_ACK_COMMON = '/contract/sendAckCommon';

API[process.env.ENV].IS_CONTRACT_DEPLOYED = '/contract/isContractDeployed';
API[process.env.ENV].IS_REDEPLOYABLE = '/contract/isRedeployable';
API[process.env.ENV].IS_CONTRACT_DEPLOYED_PUSH = '/contract/isContractDeployedPush';
API[process.env.ENV].SET_MACROECONOMIC_DATA = '/contract/setMacroEconomicData';
API[process.env.ENV].UPLOAD_FILE_FOR_MODEL_GRADE_TO_NUMBER = '/contract/uploadFileForModelGradeToNumber';
API[process.env.ENV].UPLOAD_FILE_FOR_MACRO_ECONOMIC_DATA = '/contract/uploadFileForMacroEconomicData';
API[process.env.ENV].UPLOAD_FILE_FOR_STATE_INDEX = '/contract/uploadFileForStateIndex';
API[process.env.ENV].UPLOAD_FILE_FOR_STATE_PRICING = '/contract/uploadFileForStatePricing';
API[process.env.ENV].UPDATE_VALUES_FOR_GRADE_THRESHOLD = '/contract/updateValuesForGradeThreshold';
API[process.env.ENV].UPLOAD_FILE_FOR_SET_COEFFICIENT = '/contract/fundation/uploadFileForSetCoefficient';
API[process.env.ENV].UPLOAD_FILE_FOR_SET_DISQUALIFIER = '/contract/fundation/uploadFileForSetDisqualifier';
API[process.env.ENV].GET_COEFFICIENT = '/contract/fundation/getCoefficient';
API[process.env.ENV].SET_COEFFICIENT = '/contract/fundation/setCoefficient';
API[process.env.ENV].GET_ACCEPTANCE_THRESHOLD = '/contract/fundation/getAcceptanceThreshold';
API[process.env.ENV].SET_ACCEPTANCE_THRESHOLD = '/contract/fundation/setAcceptanceThreshold';
API[process.env.ENV].GET_DISQUALIFIER = '/contract/fundation/getDisqualifier';
API[process.env.ENV].SET_DISQUALIFIER = '/contract/setDisqualifier';
API[process.env.ENV].GET_UPLOADED_THRESHOLD = '/contract/getUploadedThreshold';
API[process.env.ENV].GET_DQ = '/contract/getDQ';
API[process.env.ENV].SET_DQ = '/contract/setDQ';
API[process.env.ENV].GET_STATE_UR = '/contract/getStateUR';
API[process.env.ENV].GET_STATE_UR_BULK = '/contract/getStateURBulk';
API[process.env.ENV].GET_GRADE_THRESHOLD = '/contract/getGradeThreshold';
API[process.env.ENV].GET_STATE_DISQUALIFIER = '/contract/getStateDisqualifier';
API[process.env.ENV].SET_STATE_DISQUALIFIER = '/contract/setStateDisqualifier';
API[process.env.ENV].GET_STATE_DATA = '/contract/getStateData';
API[process.env.ENV].SET_STATE_DATA = '/contract/setStateData';
API[process.env.ENV].UPDATE_ALL_SSNS = '/contract/updateAllSSNs';
API[process.env.ENV].UPDATE_VALUES_FOR_SET_ACCEPTANCE = '/contract/fundation/updateValuesForSetAcceptance';
API[process.env.ENV].GET_VALUES_FOR_SET_ACCEPTANCE = '/contract/fundation/getValuesForSetAcceptance';
API[process.env.ENV].GET_TEST_PARAMETERS = '/contract/getTestParameters';
API[process.env.ENV].UPDATE_SUPPRESSION_LIST = '/contract/buyer/suppressionList/update';
API[process.env.ENV].GET_STATUS_SUPPRESSION_LIST = '/contract/buyer/suppressionList/status';
API[process.env.ENV].GET_DISABLED_SUPPRESSION_LIST = '/contract/buyer/suppressionList/disabledSSN';
API[process.env.ENV].GET_UPDATE_LOG_SUPPRESSION_LIST = '/contract/buyer/suppressionList/updateLog';
API[process.env.ENV].GET_CHANGELOG = '/contract/changeLog';
API[process.env.ENV].GET_CHANGELOG_HISTORY = '/contract/changeLog/history';
API[process.env.ENV].APPROVE_CHANGELOG = '/contract/changelog/approve';
API[process.env.ENV].REJECT_CHANGELOG = '/contract/changelog/reject';
API[process.env.ENV].CANCEL_CHANGELOG = '/contract/changelog/cancel';
API[process.env.ENV].GET_DEFAULT_VALUE_SPECIFIC = '/contract/getDefaultValue';
API[process.env.ENV].UPDATE_DEFAULT_VALUE = '/contract/defaultValue';
API[process.env.ENV].FUNDATION_SET_DQ = '/contract/fundation/setDQ';
API[process.env.ENV].FUNDATION_GET_DQ = '/contract/fundation/getDQ';
API[process.env.ENV].GET_DEALER_ID = '/contract/getDealerID';
API[process.env.ENV].DELETE_DEALER_ID = '/contract/deleteDealerID';
API[process.env.ENV].UPDATE_DEALER_ID = '/contract/updateDealerID';
API[process.env.ENV].FUNDATION_GET_NAICS_CODE = '/contract/fundation/getNaicsCode';
API[process.env.ENV].FUNDATION_SET_NAICS_CODE = '/contract/fundation/setNaicsCode';

API[process.env.ENV].SellerStaticData = {};
API[process.env.ENV].SystemStaticData = {};
API[process.env.ENV].SSN_DEPLOY_EMAIL_SSN = '/api/suppressionList/deploy/email-ssn';
API[process.env.ENV].SSN_DEPLOY_SSN_DISABLED = '/api/suppressionList/deploy/ssn-disabled';
API[process.env.ENV].GET_PRICING = '/contract/getStatePricing';
API[process.env.ENV].GET_FICO_CATAGORIES = '/contract/getFicoCategories';
API[process.env.ENV].FUNDATION_GET_SELECTION_CRITERIA_RULES = '/contract/fundation/getSelectionCriteriaRules';
API[process.env.ENV].FUNDATION_SET_SELECTION_CRITERIA_RULES = '/contract/fundation/setSelectionCriteriaRules';
API[process.env.ENV].CHECK_APPROVAL_ANALYSIS = '/api/checkapproval/analysis';

// sb_dashboard
API[process.env.ENV].GET_PUBLIC_KEY = "/dashboard/user/getPublicKey";
API[process.env.ENV].GET_ENCRYPTION_KEY = "/dashboard/user/getEncryptionKey";
API[process.env.ENV].GET_MY_ADDRESS = "/dashboard/user/getMyAddress";
API[process.env.ENV].LOGIN = "/dashboard/user/login";
API[process.env.ENV].LOGOUT = "/dashboard/user/logout";
API[process.env.ENV].IS_USING_2FA = "/dashboard/user/isUsing2FA";
API[process.env.ENV].ADD_USER = "/dashboard/user/addUser";
API[process.env.ENV].DELETE_USER = "/dashboard/user/deleteUser";
API[process.env.ENV].UPDATE_ROLE = "/dashboard/user/updateRole";
API[process.env.ENV].RESET_PASSWORD = "/dashboard/user/resetPassword";
API[process.env.ENV].CHANGE_PASSWORD = "/dashboard/user/changePassword";
API[process.env.ENV].UPDATE_PASSWORD = "/dashboard/user/updatePassword";
API[process.env.ENV].PASSWORD_MODIFY = "/dashboard/user/passwordModify";
API[process.env.ENV].GET_USER_DETAILS = "/dashboard/user/getUserDetails";
API[process.env.ENV].UPLOAD_FILE = "/dashboard/uploadFile";
API[process.env.ENV].GET_ALL_USERS = "/dashboard/getAllUsers";
API[process.env.ENV].GET_MY_LOGO = "/dashboard/getMyLogo";
API[process.env.ENV].TEST_JWT = "/dashboard/testJWT";
API[process.env.ENV].TEST = "/dashboard/test";
API[process.env.ENV].UPDATE_MY_DETAILS = "/dashboard/updateMyDetails";
API[process.env.ENV].GET_MY_DETAILS = "/dashboard/getMyDetails";
API[process.env.ENV].GET_NODE_DETAILS = "/dashboard/getNodeDetails";
API[process.env.ENV].GET_PARTNERS_DETAILS = "/dashboard/getPartnersDetails";
API[process.env.ENV].GET_CONFIG = "/dashboard/user/getConfig";
API[process.env.ENV].SET_CONFIG = "/dashboard/user/setConfig";
// end sb_dashboard
API[process.env.ENV].GET_REPORT_LOGS = '/internal/reportLog/getLogs';



module.exports = API[process.env.ENV];
