var request = new BPMRESTRequest();
//
request.externalServiceName = "sap-server";
request.operationName = "AppController_getMaterialGroup";
//
//// set http headers
var headers = {"Content-Type": "application/json", 
               "Accept": "application/json"};
request.httpHeaders = headers;

var response = tw.system.invokeREST(request);

log.info(response.content);
tw.local.sapBody=JSON.parse( response.content)
tw.local.results = tw.local.sapBody