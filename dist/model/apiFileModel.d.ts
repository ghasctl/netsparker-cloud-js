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
* Represents a model for file.
*/
export declare class ApiFileModel {
    /**
    * Gets or sets the content in Base64 format.
    */
    'content': string;
    /**
    * Gets or sets the name of the file.
    */
    'fileName': string;
    /**
    * Gets or sets the type of the importer.
    */
    'importerType'?: ApiFileModel.ImporterTypeEnum;
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
export declare namespace ApiFileModel {
    enum ImporterTypeEnum {
        Fiddler,
        Burp,
        Swagger,
        OwaspZap,
        AspNet,
        HttpArchive,
        Wadl,
        Wsdl,
        Postman,
        Netsparker,
        HttpRequestImporter,
        LinkImporter,
        CsvImporter,
        Iodocs,
        WordPress,
        Raml
    }
}
