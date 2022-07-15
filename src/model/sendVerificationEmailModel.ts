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
* Represents a verification result model.
*/
export class SendVerificationEmailModel {
    /**
    * Gets or sets a value indicating whether sent verification email.
    */
    'isMailSent'?: boolean;
    /**
    * Gets or sets a value indicating message of verification.
    */
    'verificationMessage'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "isMailSent",
            "baseName": "IsMailSent",
            "type": "boolean"
        },
        {
            "name": "verificationMessage",
            "baseName": "VerificationMessage",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SendVerificationEmailModel.attributeTypeMap;
    }
}

