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

import { RequestFile } from './models';

/**
* Represents a model for carrying out form value settings.
*/
export class FormValueSettingModel {
    /**
    * Gets or sets a value indicating whether force option is enabled.
    */
    'force'?: boolean;
    /**
    * Gets or sets the match type.
    */
    'match'?: FormValueSettingModel.MatchEnum;
    /**
    * Gets or sets the match target.
    */
    'matchTarget'?: Array<FormValueSettingModel.MatchTargetEnum>;
    /**
    * Gets or sets the match target.
    */
    'matchTargetValue': FormValueSettingModel.MatchTargetValueEnum;
    /**
    * Gets or sets the name.
    */
    'name': string;
    /**
    * Gets or sets the pattern.
    */
    'pattern'?: string;
    /**
    * Gets or sets the type.
    */
    'type'?: string;
    /**
    * Gets or sets the value.
    */
    'value': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "force",
            "baseName": "Force",
            "type": "boolean"
        },
        {
            "name": "match",
            "baseName": "Match",
            "type": "FormValueSettingModel.MatchEnum"
        },
        {
            "name": "matchTarget",
            "baseName": "MatchTarget",
            "type": "Array<FormValueSettingModel.MatchTargetEnum>"
        },
        {
            "name": "matchTargetValue",
            "baseName": "MatchTargetValue",
            "type": "FormValueSettingModel.MatchTargetValueEnum"
        },
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "pattern",
            "baseName": "Pattern",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "Type",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "Value",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return FormValueSettingModel.attributeTypeMap;
    }
}

export namespace FormValueSettingModel {
    export enum MatchEnum {
        RegEx = <any> 'RegEx',
        Exact = <any> 'Exact',
        Contains = <any> 'Contains',
        Starts = <any> 'Starts',
        Ends = <any> 'Ends'
    }
    export enum MatchTargetEnum {
        Name = <any> 'Name',
        Label = <any> 'Label',
        Placeholder = <any> 'Placeholder',
        Id = <any> 'Id'
    }
    export enum MatchTargetValueEnum {
        Name = <any> 'Name',
        Label = <any> 'Label',
        Placeholder = <any> 'Placeholder',
        Id = <any> 'Id'
    }
}
