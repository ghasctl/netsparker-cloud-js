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
* Represents a model for carrying out HTTP request settings.
*/
export declare class HttpRequestSettingModel {
    /**
    * Gets or sets the accept.
    */
    'accept'?: string;
    /**
    * Gets or sets the accept charset.
    */
    'acceptCharset'?: string;
    /**
    * Gets or sets the accept language.
    */
    'acceptLanguage'?: string;
    /**
    * Gets or sets a value indicating whether cookies are disabled.
    */
    'enableCookies'?: boolean;
    /**
    * Gets or sets a value indicating whether gzip and deflate is enabled.
    */
    'enableGzipAndDeflate'?: boolean;
    /**
    * Gets or sets a value indicating whether HTTP keep alive is enabled.
    */
    'httpKeepAlive'?: boolean;
    /**
    * Gets or sets a value indicating whether cookies are disabled.
    */
    'logHttpRequests'?: boolean;
    /**
    * Gets or sets the request count per unit time.
    */
    'requestsPerSecond'?: number;
    /**
    * Gets or sets the concurrent connection count.
    */
    'concurrentConnectionCount'?: number;
    /**
    * Gets or sets the request timeout in seconds.
    */
    'requestTimeout'?: number;
    /**
    * Gets or sets the user agent.
    */
    'userAgent'?: string;
    /**
    * Gets or sets the user agents.
    */
    'userAgents'?: {
        [key: string]: string;
    };
    /**
    * Gets or sets a value indicating whether user agent forced.
    */
    'forceUserAgent'?: boolean;
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
