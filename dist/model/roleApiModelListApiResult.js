"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleApiModelListApiResult = void 0;
class RoleApiModelListApiResult {
    static getAttributeTypeMap() {
        return RoleApiModelListApiResult.attributeTypeMap;
    }
}
exports.RoleApiModelListApiResult = RoleApiModelListApiResult;
RoleApiModelListApiResult.discriminator = undefined;
RoleApiModelListApiResult.attributeTypeMap = [
    {
        "name": "firstItemOnPage",
        "baseName": "FirstItemOnPage",
        "type": "number"
    },
    {
        "name": "hasNextPage",
        "baseName": "HasNextPage",
        "type": "boolean"
    },
    {
        "name": "hasPreviousPage",
        "baseName": "HasPreviousPage",
        "type": "boolean"
    },
    {
        "name": "isFirstPage",
        "baseName": "IsFirstPage",
        "type": "boolean"
    },
    {
        "name": "isLastPage",
        "baseName": "IsLastPage",
        "type": "boolean"
    },
    {
        "name": "lastItemOnPage",
        "baseName": "LastItemOnPage",
        "type": "number"
    },
    {
        "name": "list",
        "baseName": "List",
        "type": "Array<RoleApiViewModel>"
    },
    {
        "name": "pageCount",
        "baseName": "PageCount",
        "type": "number"
    },
    {
        "name": "pageNumber",
        "baseName": "PageNumber",
        "type": "number"
    },
    {
        "name": "pageSize",
        "baseName": "PageSize",
        "type": "number"
    },
    {
        "name": "totalItemCount",
        "baseName": "TotalItemCount",
        "type": "number"
    }
];
//# sourceMappingURL=roleApiModelListApiResult.js.map