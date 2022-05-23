## Description

IBM Business Automation Workflow 21.0.3 Mock Purchaase Requsition Server

## Installation

1. `sap-server.json` is Open API Spec for BAW to invoke Backend Server
2. `createPr.js` is Javascript for System Task for implement Service Flow to invoke POST Method create Purchase Requisition
3. `fetchMaterialGroup.js` is Javascript for Single Select dropdown populate dynamic choice from external system by using Service Flow
4. `ACME_Procurement - complete_dynamic_dropdown_rest_api_and_sent_data_to_backend.twx` is completed BAW 21.0.3 project snapshot
5. `kubernetes.yaml` is Kubernetes Deployment file for demo in your local Kubernetes Environment without building Container Iamge again by yourself

Reference:
Single Select: https://www.ibm.com/docs/en/bpm/8.6.0?topic=toolkit-single-select
BAW Invoke Rest API: https://www.ibm.com/docs/en/baw/20.x?topic=service-invoking-rest-by-using-javascript

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


yarn build

docker build -t quay.io/linxianer12/baw-sap-server:0.0.5 .

docker push quay.io/linxianer12/baw-sap-server:0.0.5

docker run -p 3000:3000 quay.io/linxianer12/baw-sap-server:0.0.3

