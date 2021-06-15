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

import { RequestFile } from './models';
import { RoleWebsiteGroupMappingApiModel } from './roleWebsiteGroupMappingApiModel';

export class NewTeamApiModel {
    'roleWebsiteGroupMappings'?: Array<RoleWebsiteGroupMappingApiModel>;
    /**
    * Role Name field
    */
    'name': string;
    /**
    * users
    */
    'members'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "roleWebsiteGroupMappings",
            "baseName": "RoleWebsiteGroupMappings",
            "type": "Array<RoleWebsiteGroupMappingApiModel>"
        },
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "members",
            "baseName": "Members",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return NewTeamApiModel.attributeTypeMap;
    }
}

