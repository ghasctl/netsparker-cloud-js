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
import { FormAuthenticationCustomScript } from './formAuthenticationCustomScript';
import { FormAuthenticationCyberArkVaultSetting } from './formAuthenticationCyberArkVaultSetting';
import { FormAuthenticationHashicorpVaultSetting } from './formAuthenticationHashicorpVaultSetting';
import { OtpSettings } from './otpSettings';
/**
* Provides credentials for form authentication.
*/
export declare class FormAuthenticationSettingApiModel {
    /**
    * Gets or sets the custom scripts.
    */
    'customScripts'?: Array<FormAuthenticationCustomScript>;
    /**
    * Gets or sets a value indicating whether to detect Bearer token authorization.
    */
    'detectBearerToken'?: boolean;
    /**
    * Gets or sets a value indicating whether to detect authorization tokens.
    */
    'detectAuthorizationTokens'?: boolean;
    /**
    * Gets or sets whether logout detection is disabled.
    */
    'disableLogoutDetection'?: boolean;
    /**
    * Gets or sets the login form URL.
    */
    'loginFormUrl'?: string;
    /**
    * Gets or sets the login required URL.
    */
    'loginRequiredUrl'?: string;
    /**
    * Gets or sets the logout keyword patterns.
    */
    'logoutKeywordPatterns'?: string;
    /**
    * Gets or sets the logout redirect pattern.
    */
    'logoutRedirectPattern'?: string;
    /**
    * Gets or sets a value indicating whether target URL should be overrided with authenticated page.
    */
    'overrideTargetUrlWithAuthenticatedPage'?: boolean;
    /**
    * Gets or sets the password.
    */
    'password'?: string;
    /**
    * Gets or sets the name of the user.
    */
    'userName'?: string;
    /**
    * Gets or sets the type of form authentication.
    */
    'formAuthType'?: FormAuthenticationSettingApiModel.FormAuthTypeEnum;
    'otpSettings'?: OtpSettings;
    'hashicorpVaultSetting'?: FormAuthenticationHashicorpVaultSetting;
    'cyberArkVaultSetting'?: FormAuthenticationCyberArkVaultSetting;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace FormAuthenticationSettingApiModel {
    enum FormAuthTypeEnum {
        Manual,
        Integration
    }
}
