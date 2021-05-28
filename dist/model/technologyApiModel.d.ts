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
/**
* Represents a model for carrying out technology.
*/
export declare class TechnologyApiModel {
    /**
    * Gets or sets name of the technology\'s category.
    */
    'category'?: string;
    /**
    * Gets or sets display name of the technology.
    */
    'displayName'?: string;
    /**
    * Gets or sets indicating a value whether the technology\'s version is ended up.  Returns a date value if the version is ended up; otherwise, null.
    */
    'endOfLife'?: string;
    /**
    * Gets or sets unique identifier of the technology.
    */
    'id'?: string;
    /**
    * Gets or sets version of a technology.
    */
    'identifiedVersion'?: string;
    /**
    * Gets or sets a value indicating whether notifications is disabled.
    */
    'isNotificationDisabled'?: boolean;
    /**
    * Gets or sets whether a technology is out-of-date.  Returns a boolean value if there is out-of-date information about the version; otherwise, null.
    */
    'isOutofDate'?: boolean;
    /**
    * Gets or sets the count of issues with critical level severity.
    */
    'issueCriticalCount'?: number;
    /**
    * Gets or sets the count of issues with high level severity.
    */
    'issueHighCount'?: number;
    /**
    * Gets or sets the count of issues with information level severity.
    */
    'issueInfoCount'?: number;
    /**
    * Gets or sets the count of issues with low level severity.
    */
    'issueLowCount'?: number;
    /**
    * Gets or sets the count of issues with medium level severity.
    */
    'issueMediumCount'?: number;
    /**
    * Gets or sets last seen date of the technology.
    */
    'lastSeenDate'?: string;
    /**
    * Gets or sets latest version of the technology.
    */
    'latestVersion'?: string;
    /**
    * Gets or sets name of the technology.
    */
    'name'?: string;
    /**
    * Gets or sets the scan task identifier.
    */
    'scanTaskId'?: string;
    /**
    * Gets or sets the website identifier.
    */
    'websiteId'?: string;
    /**
    * Gets or sets name of the website.
    */
    'websiteName'?: string;
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
