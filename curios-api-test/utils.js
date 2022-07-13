//Prod Detail
const REQUEST_HOST = "api.curios.com";
const REQUEST_ACCESS_KEY = "ZV877J09P27T795Z";
const PRIVATE_KEY = "8v1niLGilU1cGSaXptk3E02NQSBRNHA/2eUTsv3ckDE=";

//dev Detail
/*const REQUEST_HOST = "api-dev.curios.com";
const REQUEST_ACCESS_KEY = "YI171K45M15W964K";
const PRIVATE_KEY = "iS4CdemJu0xhoymZ2lmUnBUzkQ7MYLzYxWE51xJ2HgQ=";*/

const API_VERSION = "v1";
const SECURE_HOST = "https://"
const USER_LOGIN_METHOD = "userLogin";
const USER_VERIFY_METHOD = "userVerify";
const TOKEN_LIST_METHOD = "tokenList";
const TOKEN_GET_METHOD = "tokenGet";
const FILE_LOAD_BASE64_METHOD = "fileLoadBase64";
const FILE_URL_METHOD = "fileGetURL";
const USER_RESET_PASSWORD_METHOD = "userResetPassword";
const USER_REGISTER_METHOD = "userRegister";

const WEBSITE_URL = "https://www.e-nft.com/";

function getRequestDate() {
    return new Date().toISOString();
}

function getRequestHeader(request_scope, request_data, authorization) {
    var request_date = getRequestDate();
    var request_payload_hash = CryptoJS.SHA256(request_data).toString();
    var string_to_sign = request_date + ' ' + request_scope + ' ' + request_payload_hash;
    var signature = CryptoJS.HmacSHA256(string_to_sign, PRIVATE_KEY).toString();;
    
    return {
        "curios-api-key": REQUEST_ACCESS_KEY,
        "curios-api-version": API_VERSION,
        "curios-date": request_date,
        "curios-signature": signature,
        "Authorization": authorization??"",
        "Content-Type": "application/x-www-form-urlencoded"
    };
}

function loginRequest(email, password) {
    var request_url = REQUEST_HOST + "/" + USER_LOGIN_METHOD;
    var request_scope = request_url + "/" + API_VERSION;

    var requestData = {
        "email": email,
        "password": password
    };

    var requestInfo = {
        url: SECURE_HOST + request_url,
        method: "POST",
        headers: getRequestHeader(request_scope, JSON.stringify(requestData), ""),
        data: requestData
    };

   
    return $.ajax(requestInfo);
}

function loginVerifyRequest(email, verification_code, verification_token) {
    var request_url = REQUEST_HOST + "/" + USER_VERIFY_METHOD;
    var request_scope = request_url + "/" + API_VERSION;

    var requestData = {
        "email": email,
        "verification_code": verification_code,
        "verification_token": verification_token
    };

    var requestInfo = {
        url: SECURE_HOST + request_url,
        method: "POST",
        headers: getRequestHeader(request_scope, JSON.stringify(requestData), ""),
        data: requestData
    };

     
        return $.ajax(requestInfo);
    
}

function getTokenListRequest(authorization) {
    var request_url = REQUEST_HOST + "/" + TOKEN_LIST_METHOD;
    var request_scope = request_url + "/" + API_VERSION;
    var requestData = {};

    var requestInfo = {
        url: SECURE_HOST + request_url,
        method: "POST",
        headers: getRequestHeader(request_scope, JSON.stringify(requestData), authorization),
        data: requestData
    };

   
        return $.ajax(requestInfo);
   
}

function getTokenRequest(token_id, authorization) {
    var request_url = REQUEST_HOST + "/" + TOKEN_GET_METHOD;
    var request_scope = request_url + "/" + API_VERSION;

    var requestData = {
        "token_id": token_id
    };

    var requestInfo = {
        url: SECURE_HOST + request_url,
        method: "POST",
        headers: getRequestHeader(request_scope, JSON.stringify(requestData), authorization),
        data: requestData
    };

     
        return $.ajax(requestInfo);
    
}

function getBase64FileRequest(token_id, file_id, authorization) {
    var request_url = REQUEST_HOST + "/" + FILE_URL_METHOD;
    var request_scope = request_url + "/" + API_VERSION;

    var requestData = {
        "file_id": file_id,
        "token_id": token_id
        
    };

    var requestInfo = {
        url: SECURE_HOST + request_url,
        method: "POST",
        headers: getRequestHeader(request_scope, JSON.stringify(requestData), authorization),
        data: requestData
    };

    return $.ajax(requestInfo);
}
