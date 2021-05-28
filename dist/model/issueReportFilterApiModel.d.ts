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
* Represent a filter model of {Netsparker.Cloud.Infrastructure.Models.IssueReportFilterApiModel} type.
*/
export declare class IssueReportFilterApiModel {
    /**
    * Gets or sets the csv separator.
    */
    'csvSeparator'?: IssueReportFilterApiModel.CsvSeparatorEnum;
    /**
    * Gets or sets the vulnerability\'s severity.
    */
    'severity'?: IssueReportFilterApiModel.SeverityEnum;
    /**
    * Gets or sets the website group\'s name.
    */
    'websiteGroupName'?: string;
    /**
    * Gets or sets the website\'s name.
    */
    'webSiteName'?: string;
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
export declare namespace IssueReportFilterApiModel {
    enum CsvSeparatorEnum {
        Comma,
        Semicolon,
        Pipe,
        Tab
    }
    enum SeverityEnum {
        BestPractice,
        Information,
        Low,
        Medium,
        High,
        Critical
    }
}
