/**
 * Netsparker Enterprise API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/// <reference types="node" />
import http from 'http';
import { SaveScanProfileApiModel } from '../model/saveScanProfileApiModel';
import { Authentication, Interceptor } from '../model/models';
export declare enum ScanProfilesApiApiKeys {
}
export declare class ScanProfilesApi {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    set defaultHeaders(defaultHeaders: any);
    get defaultHeaders(): any;
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: ScanProfilesApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    /**
     *
     * @summary Deletes a scan profiles.
     * @param profileId The scan profile\&#39;s ID.
     */
    scanProfilesDelete(profileId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    /**
     *
     * @summary Gets the scan profiles by the specified name.
     * @param name The scan profiles name.
     */
    scanProfilesGet(name: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SaveScanProfileApiModel;
    }>;
    /**
     *
     * @summary Gets the scan profiles by the specified id.
     * @param id The identifier of scan profiles.
     */
    scanProfilesGet_1(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SaveScanProfileApiModel;
    }>;
    /**
     *
     * @summary Gets the list of scan profiles.
     * @param page The page index.
     * @param pageSize The page size. Page size can be any value between 1 and 200.
     */
    scanProfilesList(page?: number, pageSize?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SaveScanProfileApiModel;
    }>;
    /**
     *
     * @summary Creates a new scan profiles.
     * @param model The ScanProfileSettingApiModel model.
     */
    scanProfilesNew(model: SaveScanProfileApiModel, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SaveScanProfileApiModel;
    }>;
    /**
     *
     * @summary Updates a scan profiles.
     * @param model The model.
     */
    scanProfilesUpdate(model: SaveScanProfileApiModel, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SaveScanProfileApiModel;
    }>;
}
