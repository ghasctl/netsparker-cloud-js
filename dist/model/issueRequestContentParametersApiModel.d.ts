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
* Issue request content parameters api response mapping class.
*/
export declare class IssueRequestContentParametersApiModel {
    /**
    * Gets or sets the parameter name
    */
    'name'?: string;
    /**
    * Gets or sets the parameter value
    */
    'value'?: string;
    /**
    * Gets or sets the parameter type name
    */
    'typeName'?: string;
    /**
    * Gets or sets the input type
    */
    'inputType'?: IssueRequestContentParametersApiModel.InputTypeEnum;
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
export declare namespace IssueRequestContentParametersApiModel {
    enum InputTypeEnum {
        Hidden,
        Text,
        Textarea,
        Submit,
        Reset,
        Button,
        Image,
        File,
        Radio,
        Select,
        Checkbox,
        Password,
        Color,
        Date,
        Datetime,
        DatetimeLocal,
        Email,
        Month,
        Number,
        Range,
        Search,
        Tel,
        Time,
        Url,
        Week,
        Output
    }
}
