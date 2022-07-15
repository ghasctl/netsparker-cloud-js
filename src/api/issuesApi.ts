/**
 * Invicti Enterprise API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { AllIssuesApiModel } from '../model/allIssuesApiModel';
import { IssueApiResult } from '../model/issueApiResult';
import { IssueApiUpdateModel } from '../model/issueApiUpdateModel';
import { VulnerabilityContentApiModel } from '../model/vulnerabilityContentApiModel';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://www.netsparkercloud.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum IssuesApiApiKeys {
}

export class IssuesApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'basic': new HttpBasicAuth(),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: IssuesApiApiKeys, value: string) {
        (this.authentications as any)[IssuesApiApiKeys[key]].apiKey = value;
    }

    set username(username: string) {
        this.authentications.basic.username = username;
    }

    set password(password: string) {
        this.authentications.basic.password = password;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * 
     * @summary Gets the list of addressed issues.
     * @param severity The vulnerability severity
     * @param webSiteName The website\&#39;s name.
     * @param websiteGroupName The website group\&#39;s name.
     * @param page The page size.
     * @param pageSize The page size. Page size can be any value between 1 and 200.
     */
    public async issuesAddressedIssues (severity?: 'BestPractice' | 'Information' | 'Low' | 'Medium' | 'High' | 'Critical', webSiteName?: string, websiteGroupName?: string, page?: number, pageSize?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: IssueApiResult;  }> {
        const localVarPath = this.basePath + '/api/1.0/issues/addressedissues';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json', 'text/json', 'application/scim+json', 'application/xml', 'text/xml', 'multipart/form-data'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        if (severity !== undefined) {
            localVarQueryParameters['severity'] = ObjectSerializer.serialize(severity, "'BestPractice' | 'Information' | 'Low' | 'Medium' | 'High' | 'Critical'");
        }

        if (webSiteName !== undefined) {
            localVarQueryParameters['webSiteName'] = ObjectSerializer.serialize(webSiteName, "string");
        }

        if (websiteGroupName !== undefined) {
            localVarQueryParameters['websiteGroupName'] = ObjectSerializer.serialize(websiteGroupName, "string");
        }

        if (page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "number");
        }

        if (pageSize !== undefined) {
            localVarQueryParameters['pageSize'] = ObjectSerializer.serialize(pageSize, "number");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: IssueApiResult;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "IssueApiResult");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Gets the list of all issues.
     * @param severity The vulnerability severity
     * @param webSiteName The website\&#39;s name.
     * @param websiteGroupName The website group\&#39;s name.
     * @param page The page size.
     * @param pageSize The page size. Page size can be any value between 1 and 200.
     * @param sortType Sort by ascending and descending according to LastSeenDate. Default parameter ascending.
     * @param lastSeenDate You can use the date format defined in your account. You can visit /account/changesettings to view the current format.
     * @param rawDetails If you want the vulnerability data response(Remedy, Description etc.) to return without raw html, this field must be set false.
     * @param integration 
     */
    public async issuesAllIssues (severity?: 'BestPractice' | 'Information' | 'Low' | 'Medium' | 'High' | 'Critical', webSiteName?: string, websiteGroupName?: string, page?: number, pageSize?: number, sortType?: 'Ascending' | 'Descending', lastSeenDate?: string, rawDetails?: boolean, integration?: 'Jira' | 'GitHub' | 'TFS' | 'FogBugz' | 'ServiceNow' | 'Slack' | 'GitLab' | 'Bitbucket' | 'Unfuddle' | 'Zapier' | 'AzureDevOps' | 'Redmine' | 'Bugzilla' | 'Kafka' | 'PagerDuty' | 'MicrosoftTeams' | 'Clubhouse' | 'Trello' | 'Asana' | 'Webhook' | 'Kenna' | 'Freshservice' | 'YouTrack' | 'NetsparkerEnterprise' | 'Splunk' | 'Mattermost' | 'Hashicorp' | 'PivotalTracker' | 'CyberArk' | 'DefectDojo' | 'JazzTeam', options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: IssueApiResult;  }> {
        const localVarPath = this.basePath + '/api/1.0/issues/allissues';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json', 'text/json', 'application/scim+json', 'application/xml', 'text/xml', 'multipart/form-data'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        if (severity !== undefined) {
            localVarQueryParameters['severity'] = ObjectSerializer.serialize(severity, "'BestPractice' | 'Information' | 'Low' | 'Medium' | 'High' | 'Critical'");
        }

        if (webSiteName !== undefined) {
            localVarQueryParameters['webSiteName'] = ObjectSerializer.serialize(webSiteName, "string");
        }

        if (websiteGroupName !== undefined) {
            localVarQueryParameters['websiteGroupName'] = ObjectSerializer.serialize(websiteGroupName, "string");
        }

        if (page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "number");
        }

        if (pageSize !== undefined) {
            localVarQueryParameters['pageSize'] = ObjectSerializer.serialize(pageSize, "number");
        }

        if (sortType !== undefined) {
            localVarQueryParameters['sortType'] = ObjectSerializer.serialize(sortType, "'Ascending' | 'Descending'");
        }

        if (lastSeenDate !== undefined) {
            localVarQueryParameters['lastSeenDate'] = ObjectSerializer.serialize(lastSeenDate, "string");
        }

        if (rawDetails !== undefined) {
            localVarQueryParameters['rawDetails'] = ObjectSerializer.serialize(rawDetails, "boolean");
        }

        if (integration !== undefined) {
            localVarQueryParameters['integration'] = ObjectSerializer.serialize(integration, "'Jira' | 'GitHub' | 'TFS' | 'FogBugz' | 'ServiceNow' | 'Slack' | 'GitLab' | 'Bitbucket' | 'Unfuddle' | 'Zapier' | 'AzureDevOps' | 'Redmine' | 'Bugzilla' | 'Kafka' | 'PagerDuty' | 'MicrosoftTeams' | 'Clubhouse' | 'Trello' | 'Asana' | 'Webhook' | 'Kenna' | 'Freshservice' | 'YouTrack' | 'NetsparkerEnterprise' | 'Splunk' | 'Mattermost' | 'Hashicorp' | 'PivotalTracker' | 'CyberArk' | 'DefectDojo' | 'JazzTeam'");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: IssueApiResult;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "IssueApiResult");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Gets issues by id. Returns with encoded(raw html) vulnerability template data by default.
     * @param id id.
     */
    public async issuesGet (id: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: AllIssuesApiModel;  }> {
        const localVarPath = this.basePath + '/api/1.0/issues/get/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json', 'text/json', 'application/scim+json', 'application/xml', 'text/xml', 'multipart/form-data'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling issuesGet.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: AllIssuesApiModel;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "AllIssuesApiModel");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Gets vulnerability request/response content by id.
     * @param id id.
     */
    public async issuesGetVulnerabilityContent (id: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: VulnerabilityContentApiModel;  }> {
        const localVarPath = this.basePath + '/api/1.0/issues/getvulnerabilitycontent/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json', 'text/json', 'application/scim+json', 'application/xml', 'text/xml', 'multipart/form-data'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling issuesGetVulnerabilityContent.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: VulnerabilityContentApiModel;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "VulnerabilityContentApiModel");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Returns the report of issues in the csv format.
     * @param csvSeparator Gets or sets the csv separator.
     * @param severity Gets or sets the vulnerability\&#39;s severity.
     * @param websiteGroupName Gets or sets the website group\&#39;s name.
     * @param webSiteName Gets or sets the website\&#39;s name.
     * @param startDate Start date identify the starting point for date range. It is less than or equal to Date field. Format: MM/dd/yyyy 00:00:00
     * @param endDate End date identify the end point for date range. It is greater than or equal to Date field. Format: MM/dd/yyyy 23:59:59
     */
    public async issuesReport (csvSeparator?: 'Comma' | 'Semicolon' | 'Pipe' | 'Tab', severity?: 'BestPractice' | 'Information' | 'Low' | 'Medium' | 'High' | 'Critical', websiteGroupName?: string, webSiteName?: string, startDate?: Date, endDate?: Date, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/api/1.0/issues/report';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        let localVarFormParams: any = {};

        if (csvSeparator !== undefined) {
            localVarQueryParameters['csvSeparator'] = ObjectSerializer.serialize(csvSeparator, "'Comma' | 'Semicolon' | 'Pipe' | 'Tab'");
        }

        if (severity !== undefined) {
            localVarQueryParameters['severity'] = ObjectSerializer.serialize(severity, "'BestPractice' | 'Information' | 'Low' | 'Medium' | 'High' | 'Critical'");
        }

        if (websiteGroupName !== undefined) {
            localVarQueryParameters['websiteGroupName'] = ObjectSerializer.serialize(websiteGroupName, "string");
        }

        if (webSiteName !== undefined) {
            localVarQueryParameters['webSiteName'] = ObjectSerializer.serialize(webSiteName, "string");
        }

        if (startDate !== undefined) {
            localVarQueryParameters['startDate'] = ObjectSerializer.serialize(startDate, "Date");
        }

        if (endDate !== undefined) {
            localVarQueryParameters['endDate'] = ObjectSerializer.serialize(endDate, "Date");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Gets the list of to-do issues.
     * @param severity The vulnerability severity
     * @param webSiteName The website\&#39;s name.
     * @param websiteGroupName The website group\&#39;s name.
     * @param page The page size.
     * @param pageSize The page size. Page size can be any value between 1 and 200.
     */
    public async issuesTodo (severity?: 'BestPractice' | 'Information' | 'Low' | 'Medium' | 'High' | 'Critical', webSiteName?: string, websiteGroupName?: string, page?: number, pageSize?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: IssueApiResult;  }> {
        const localVarPath = this.basePath + '/api/1.0/issues/todo';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json', 'text/json', 'application/scim+json', 'application/xml', 'text/xml', 'multipart/form-data'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        if (severity !== undefined) {
            localVarQueryParameters['severity'] = ObjectSerializer.serialize(severity, "'BestPractice' | 'Information' | 'Low' | 'Medium' | 'High' | 'Critical'");
        }

        if (webSiteName !== undefined) {
            localVarQueryParameters['webSiteName'] = ObjectSerializer.serialize(webSiteName, "string");
        }

        if (websiteGroupName !== undefined) {
            localVarQueryParameters['websiteGroupName'] = ObjectSerializer.serialize(websiteGroupName, "string");
        }

        if (page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "number");
        }

        if (pageSize !== undefined) {
            localVarQueryParameters['pageSize'] = ObjectSerializer.serialize(pageSize, "number");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: IssueApiResult;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "IssueApiResult");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Updates an existing issue.
     * @param model Issue model to update. Except IssueId, all parameters are optional but at least 1 parameter is required.              To reset status send \&quot;State\&quot;: \&quot;Default\&quot;
     */
    public async issuesUpdate (model: IssueApiUpdateModel, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/api/1.0/issues/update';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'model' is not null or undefined
        if (model === null || model === undefined) {
            throw new Error('Required parameter model was null or undefined when calling issuesUpdate.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(model, "IssueApiUpdateModel")
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Gets the list of retest issues.
     * @param severity The vulnerability severity
     * @param webSiteName The website\&#39;s name.
     * @param websiteGroupName The website group\&#39;s name.
     * @param page The page size.
     * @param pageSize The page size. Page size can be any value between 1 and 200.
     */
    public async issuesWaitingForRetest (severity?: 'BestPractice' | 'Information' | 'Low' | 'Medium' | 'High' | 'Critical', webSiteName?: string, websiteGroupName?: string, page?: number, pageSize?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: IssueApiResult;  }> {
        const localVarPath = this.basePath + '/api/1.0/issues/waitingforretest';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json', 'text/json', 'application/scim+json', 'application/xml', 'text/xml', 'multipart/form-data'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        if (severity !== undefined) {
            localVarQueryParameters['severity'] = ObjectSerializer.serialize(severity, "'BestPractice' | 'Information' | 'Low' | 'Medium' | 'High' | 'Critical'");
        }

        if (webSiteName !== undefined) {
            localVarQueryParameters['webSiteName'] = ObjectSerializer.serialize(webSiteName, "string");
        }

        if (websiteGroupName !== undefined) {
            localVarQueryParameters['websiteGroupName'] = ObjectSerializer.serialize(websiteGroupName, "string");
        }

        if (page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "number");
        }

        if (pageSize !== undefined) {
            localVarQueryParameters['pageSize'] = ObjectSerializer.serialize(pageSize, "number");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: IssueApiResult;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "IssueApiResult");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
