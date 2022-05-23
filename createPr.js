var request = new BPMRESTRequest();

request.externalServiceName = "sap-server";
request.operationName = "AppController_createPurchaseRequestion";

// set http headers
var headers = {
    "Content-Type": "application/json",
    "Accept": "application/json"
};
request.httpHeaders = headers;


// Obtain the Case Property amount from the parent case:
var interestingCasePropertyNames = new tw.object.listOf.toolkit.TWSYS.String();
interestingCasePropertyNames[0] = "ACMEP_Material";
interestingCasePropertyNames[1] = "ACMEP_MaterialCode";
interestingCasePropertyNames[2] = "ACMEP_Plant";
interestingCasePropertyNames[3] = "ACMEP_Organize";
interestingCasePropertyNames[4] = "ACMEP_MeterialGroup";


var interestingCasePropertyValues = tw.system.currentProcessInstance.parentCase.getCasePropertyValues(interestingCasePropertyNames);

var ACMEP_Material = interestingCasePropertyValues[0];
var ACMEP_MaterialCode = interestingCasePropertyValues[1]
var ACMEP_Plant = interestingCasePropertyValues[2]
var ACMEP_Organize = interestingCasePropertyValues[3]
var ACMEP_MeterialGroup = interestingCasePropertyValues[4]

// prepare the complex-typed input parameter that is needed for the REST request
request.parameters = {
    "body": {
        "materialName": ACMEP_Material,
        "materialCode": ACMEP_MaterialCode,
        "plant": ACMEP_Plant,
        "organize": ACMEP_Organize,
        "materialGroup": ACMEP_MeterialGroup,
    }
}

// invoke the REST request, which returns a BPMRESTResponse instance.
var response = tw.system.invokeREST(request);
tw.system.currentProcessInstance.parentCase.completeCurrentStage();

log.info("success rest")