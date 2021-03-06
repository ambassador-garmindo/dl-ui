var generalRoutes = require("./general");
var masterRoutes = require("./master");
var productionRoutes = require("./production");
var inventoryRoutes = require("./inventory");
var publicRoutes = require("./public");
var purchasingRoutes = require("./purchasing");
var reportRoutes = require("./report");
var authRoutes = require("./auth");
var salesRoutes = require("./sales");
var garmentPurchasingRoutes = require("./garment-purchasing");
var garmentMasterPlanRoutes = require("./garment-master-plan");
let garmentProductionRoutes = require("./garment-production");
var migrationLog = require("./migration-log");
var garmentMasterPlanRoutes = require("./garment-master-plan");
var spinningRoutes = require("./spinning-production");
var intPurchasingRoutes = require("./int-purchasing");
var customsReportRoutes = require("./customs-report");
let expeditionRoutes = require('./expedition');
let merchandiserRoutes = require('./merchandiser');
let weavingRoutes = require('./weaving');
let accountingRoutes = require('./accounting');

//export default [].concat(publicRoutes, generalRoutes, masterRoutes, productionRoutes, spinningRoutes, purchasingRoutes, salesRoutes, inventoryRoutes, garmentPurchasingRoutes, garmentMasterPlanRoutes, intPurchasingRoutes, customsReportRoutes, authRoutes, expeditionRoutes,merchandiserRoutes, migrationLog, reportRoutes, weavingRoutes);
export default [].concat(publicRoutes, generalRoutes, masterRoutes, productionRoutes, spinningRoutes, purchasingRoutes, salesRoutes, inventoryRoutes, garmentMasterPlanRoutes, intPurchasingRoutes, customsReportRoutes, authRoutes, expeditionRoutes,merchandiserRoutes, migrationLog, reportRoutes, weavingRoutes, garmentPurchasingRoutes, accountingRoutes, garmentProductionRoutes);


