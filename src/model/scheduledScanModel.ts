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
import { AdditionalWebsitesSettingModel } from './additionalWebsitesSettingModel';
import { AgentSelectionModel } from './agentSelectionModel';
import { BasicAuthenticationSettingModel } from './basicAuthenticationSettingModel';
import { ClientCertificateAuthenticationViewModel } from './clientCertificateAuthenticationViewModel';
import { FormAuthenticationSettingModel } from './formAuthenticationSettingModel';
import { HeaderAuthenticationModel } from './headerAuthenticationModel';
import { ImportedLinksSetting } from './importedLinksSetting';
import { OAuth2SettingModel } from './oAuth2SettingModel';
import { PreRequestScriptSettingModel } from './preRequestScriptSettingModel';
import { ScanTimeWindowModel } from './scanTimeWindowModel';
import { ScheduledScanRecurrenceViewModel } from './scheduledScanRecurrenceViewModel';
import { ScopeSetting } from './scopeSetting';
import { SharkModel } from './sharkModel';
import { TagViewModel } from './tagViewModel';
import { UrlRewriteSetting } from './urlRewriteSetting';

/**
* Represents a model that carries out scheduled scan data.
*/
export class ScheduledScanModel {
    /**
    * Gets or sets the last executed scan task identifier.
    */
    'lastExecutedScanTaskId'?: string;
    /**
    * Gets or sets the last execution error.
    */
    'lastExecutionError'?: number;
    /**
    * Gets or sets the last execution status. If value is not {Invicti.Cloud.Core.Models.ScanLaunchStatus.Ok}, specifies error type of
    */
    'lastExecutionStatus'?: ScheduledScanModel.LastExecutionStatusEnum;
    'timeWindow'?: ScanTimeWindowModel;
    /**
    * Gets or sets the identifier.
    */
    'id'?: string;
    /**
    * Gets or sets the how many times a scheduled scan triggered.
    */
    'occurencesCount'?: number;
    /**
    * Gets or sets a value indicating whether scheduled scan is disabled.
    */
    'disabled'?: boolean;
    /**
    * Gets or sets a value indicating whether scheduling enabled.
    */
    'enableScheduling'?: boolean;
    /**
    * Gets or sets the name.
    */
    'name'?: string;
    /**
    * Gets or sets the next execution time.
    */
    'nextExecutionTime'?: string;
    /**
    * Gets or sets scan group id
    */
    'scanGroupId'?: string;
    /**
    * Gets or sets scan type.
    */
    'scanType'?: ScheduledScanModel.ScanTypeEnum;
    /**
    * Gets or sets the run interval of scheduled scan.
    */
    'scheduleRunType'?: ScheduledScanModel.ScheduleRunTypeEnum;
    'customRecurrence'?: ScheduledScanRecurrenceViewModel;
    /**
    * The Template Type
    */
    'customScriptTemplateType'?: ScheduledScanModel.CustomScriptTemplateTypeEnum;
    /**
    * Gets or sets whether is target URL required.
    */
    'isTargetUrlRequired'?: boolean;
    /**
    * Get or set the is generate optimize css or not.
    */
    'isGenerateOptimizedCss'?: boolean;
    'accountTags'?: Array<TagViewModel>;
    'entityCurrentTags'?: Array<string>;
    /**
    * Gets or sets the foreign key reference to the related Launch Setting Id.
    */
    'launchSettingId'?: string;
    'additionalWebsites'?: AdditionalWebsitesSettingModel;
    /**
    * Gets or sets the agent group identifier
    */
    'agentGroupId'?: string;
    /**
    * Gets or sets the agent identifier.
    */
    'agentId'?: string;
    'basicAuthenticationSetting'?: BasicAuthenticationSettingModel;
    /**
    * Gets or sets the can edit.
    */
    'canEdit'?: boolean;
    'clientCertificateAuthentication'?: ClientCertificateAuthenticationViewModel;
    /**
    * Gets or sets the cookies.
    */
    'cookies'?: string;
    /**
    * Gets or sets the comments.
    */
    'comments'?: string;
    /**
    * Gets or sets a value indicating whether parallel attacker is enabled.
    */
    'crawlAndAttack'?: boolean;
    /**
    * Gets or sets the type of the create.
    */
    'createType'?: ScheduledScanModel.CreateTypeEnum;
    /**
    * Gets or sets the type of the authentication profile.
    */
    'authenticationProfileOption'?: string;
    /**
    * Gets or sets the type of the authentication profile name.
    */
    'authenticationProfileName'?: string;
    /**
    * Gets or sets a value indicating whether automatic crawling is enabled.
    */
    'findAndFollowNewLinks'?: boolean;
    'formAuthenticationSetting'?: FormAuthenticationSettingModel;
    'headerAuthentication'?: HeaderAuthenticationModel;
    'shark'?: SharkModel;
    'importedLinks'?: ImportedLinksSetting;
    /**
    * Gets or sets a value indicating whether max scan duration is enabled.  This is only used for scheduled group scan and regular group scan.
    */
    'isMaxScanDurationEnabled'?: boolean;
    /**
    * Gets or sets a value indicating whether this instance is primary.
    */
    'isPrimary'?: boolean;
    /**
    * Gets or sets a value indicating whether this instance is shared.
    */
    'isShared'?: boolean;
    /**
    * Gets or sets the maximum duration of the scan in hours.
    */
    'maxScanDuration'?: number;
    /**
    * Gets or sets the scan policy identifier. This property is required if CreateType is Website
    */
    'policyId'?: string;
    /**
    * Gets or sets scan policy name
    */
    'policyName'?: string;
    /**
    * Gets or sets the profile identifier.
    */
    'profileId'?: string;
    /**
    * Gets or sets a name for this instance.
    */
    'profileName'?: string;
    /**
    * Gets or sets the report policy identifier. This property is required if CreateType is Website
    */
    'reportPolicyId'?: string;
    /**
    * Gets or sets report policy name
    */
    'reportPolicyName'?: string;
    /**
    * Gets or sets the save scan profile.
    */
    'saveScanProfile'?: boolean;
    'scopeSetting'?: ScopeSetting;
    /**
    * Gets or sets the agent selections for the websites that use custom agent. This property is needed for Gorup Scans.
    */
    'selectedAgents'?: Array<AgentSelectionModel>;
    /**
    * Gets or sets the selected scan profile identifier.
    */
    'selectedScanProfileId'?: string;
    /**
    * Gets or sets the name of the selected scan profile.
    */
    'selectedScanProfileName'?: string;
    /**
    * Gets or sets the target website URL. This property is required if CreateType is Website
    */
    'targetUrl'?: string;
    /**
    * Gets or sets the target website\'s Descripition. This property is used if CreateType is Website
    */
    'description'?: string;
    'urlRewriteSetting'?: UrlRewriteSetting;
    'preRequestScriptSetting'?: PreRequestScriptSettingModel;
    /**
    * Gets or sets the user identifier.
    */
    'userId'?: string;
    /**
    * Gets or sets the website group identifier. This property is required if CreateType is WebsiteGroup
    */
    'websiteGroupId'?: string;
    /**
    * Defines whether a pci scan task going to be started.
    */
    'enablePciScanTask'?: boolean;
    'oAuth2Setting'?: OAuth2SettingModel;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "lastExecutedScanTaskId",
            "baseName": "LastExecutedScanTaskId",
            "type": "string"
        },
        {
            "name": "lastExecutionError",
            "baseName": "LastExecutionError",
            "type": "number"
        },
        {
            "name": "lastExecutionStatus",
            "baseName": "LastExecutionStatus",
            "type": "ScheduledScanModel.LastExecutionStatusEnum"
        },
        {
            "name": "timeWindow",
            "baseName": "TimeWindow",
            "type": "ScanTimeWindowModel"
        },
        {
            "name": "id",
            "baseName": "Id",
            "type": "string"
        },
        {
            "name": "occurencesCount",
            "baseName": "OccurencesCount",
            "type": "number"
        },
        {
            "name": "disabled",
            "baseName": "Disabled",
            "type": "boolean"
        },
        {
            "name": "enableScheduling",
            "baseName": "EnableScheduling",
            "type": "boolean"
        },
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "nextExecutionTime",
            "baseName": "NextExecutionTime",
            "type": "string"
        },
        {
            "name": "scanGroupId",
            "baseName": "ScanGroupId",
            "type": "string"
        },
        {
            "name": "scanType",
            "baseName": "ScanType",
            "type": "ScheduledScanModel.ScanTypeEnum"
        },
        {
            "name": "scheduleRunType",
            "baseName": "ScheduleRunType",
            "type": "ScheduledScanModel.ScheduleRunTypeEnum"
        },
        {
            "name": "customRecurrence",
            "baseName": "CustomRecurrence",
            "type": "ScheduledScanRecurrenceViewModel"
        },
        {
            "name": "customScriptTemplateType",
            "baseName": "CustomScriptTemplateType",
            "type": "ScheduledScanModel.CustomScriptTemplateTypeEnum"
        },
        {
            "name": "isTargetUrlRequired",
            "baseName": "IsTargetUrlRequired",
            "type": "boolean"
        },
        {
            "name": "isGenerateOptimizedCss",
            "baseName": "IsGenerateOptimizedCss",
            "type": "boolean"
        },
        {
            "name": "accountTags",
            "baseName": "AccountTags",
            "type": "Array<TagViewModel>"
        },
        {
            "name": "entityCurrentTags",
            "baseName": "EntityCurrentTags",
            "type": "Array<string>"
        },
        {
            "name": "launchSettingId",
            "baseName": "LaunchSettingId",
            "type": "string"
        },
        {
            "name": "additionalWebsites",
            "baseName": "AdditionalWebsites",
            "type": "AdditionalWebsitesSettingModel"
        },
        {
            "name": "agentGroupId",
            "baseName": "AgentGroupId",
            "type": "string"
        },
        {
            "name": "agentId",
            "baseName": "AgentId",
            "type": "string"
        },
        {
            "name": "basicAuthenticationSetting",
            "baseName": "BasicAuthenticationSetting",
            "type": "BasicAuthenticationSettingModel"
        },
        {
            "name": "canEdit",
            "baseName": "CanEdit",
            "type": "boolean"
        },
        {
            "name": "clientCertificateAuthentication",
            "baseName": "ClientCertificateAuthentication",
            "type": "ClientCertificateAuthenticationViewModel"
        },
        {
            "name": "cookies",
            "baseName": "Cookies",
            "type": "string"
        },
        {
            "name": "comments",
            "baseName": "Comments",
            "type": "string"
        },
        {
            "name": "crawlAndAttack",
            "baseName": "CrawlAndAttack",
            "type": "boolean"
        },
        {
            "name": "createType",
            "baseName": "CreateType",
            "type": "ScheduledScanModel.CreateTypeEnum"
        },
        {
            "name": "authenticationProfileOption",
            "baseName": "AuthenticationProfileOption",
            "type": "string"
        },
        {
            "name": "authenticationProfileName",
            "baseName": "AuthenticationProfileName",
            "type": "string"
        },
        {
            "name": "findAndFollowNewLinks",
            "baseName": "FindAndFollowNewLinks",
            "type": "boolean"
        },
        {
            "name": "formAuthenticationSetting",
            "baseName": "FormAuthenticationSetting",
            "type": "FormAuthenticationSettingModel"
        },
        {
            "name": "headerAuthentication",
            "baseName": "HeaderAuthentication",
            "type": "HeaderAuthenticationModel"
        },
        {
            "name": "shark",
            "baseName": "Shark",
            "type": "SharkModel"
        },
        {
            "name": "importedLinks",
            "baseName": "ImportedLinks",
            "type": "ImportedLinksSetting"
        },
        {
            "name": "isMaxScanDurationEnabled",
            "baseName": "IsMaxScanDurationEnabled",
            "type": "boolean"
        },
        {
            "name": "isPrimary",
            "baseName": "IsPrimary",
            "type": "boolean"
        },
        {
            "name": "isShared",
            "baseName": "IsShared",
            "type": "boolean"
        },
        {
            "name": "maxScanDuration",
            "baseName": "MaxScanDuration",
            "type": "number"
        },
        {
            "name": "policyId",
            "baseName": "PolicyId",
            "type": "string"
        },
        {
            "name": "policyName",
            "baseName": "PolicyName",
            "type": "string"
        },
        {
            "name": "profileId",
            "baseName": "ProfileId",
            "type": "string"
        },
        {
            "name": "profileName",
            "baseName": "ProfileName",
            "type": "string"
        },
        {
            "name": "reportPolicyId",
            "baseName": "ReportPolicyId",
            "type": "string"
        },
        {
            "name": "reportPolicyName",
            "baseName": "ReportPolicyName",
            "type": "string"
        },
        {
            "name": "saveScanProfile",
            "baseName": "SaveScanProfile",
            "type": "boolean"
        },
        {
            "name": "scopeSetting",
            "baseName": "ScopeSetting",
            "type": "ScopeSetting"
        },
        {
            "name": "selectedAgents",
            "baseName": "SelectedAgents",
            "type": "Array<AgentSelectionModel>"
        },
        {
            "name": "selectedScanProfileId",
            "baseName": "SelectedScanProfileId",
            "type": "string"
        },
        {
            "name": "selectedScanProfileName",
            "baseName": "SelectedScanProfileName",
            "type": "string"
        },
        {
            "name": "targetUrl",
            "baseName": "TargetUrl",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "Description",
            "type": "string"
        },
        {
            "name": "urlRewriteSetting",
            "baseName": "UrlRewriteSetting",
            "type": "UrlRewriteSetting"
        },
        {
            "name": "preRequestScriptSetting",
            "baseName": "PreRequestScriptSetting",
            "type": "PreRequestScriptSettingModel"
        },
        {
            "name": "userId",
            "baseName": "UserId",
            "type": "string"
        },
        {
            "name": "websiteGroupId",
            "baseName": "WebsiteGroupId",
            "type": "string"
        },
        {
            "name": "enablePciScanTask",
            "baseName": "EnablePciScanTask",
            "type": "boolean"
        },
        {
            "name": "oAuth2Setting",
            "baseName": "OAuth2Setting",
            "type": "OAuth2SettingModel"
        }    ];

    static getAttributeTypeMap() {
        return ScheduledScanModel.attributeTypeMap;
    }
}

export namespace ScheduledScanModel {
    export enum LastExecutionStatusEnum {
        Ok = <any> 'Ok',
        LicenseError = <any> 'LicenseError'
    }
    export enum ScanTypeEnum {
        Full = <any> 'Full',
        Retest = <any> 'Retest',
        Incremental = <any> 'Incremental'
    }
    export enum ScheduleRunTypeEnum {
        Once = <any> 'Once',
        Daily = <any> 'Daily',
        Weekly = <any> 'Weekly',
        Monthly = <any> 'Monthly',
        Quarterly = <any> 'Quarterly',
        Biannually = <any> 'Biannually',
        Yearly = <any> 'Yearly',
        Custom = <any> 'Custom'
    }
    export enum CustomScriptTemplateTypeEnum {
        Default = <any> 'Default',
        SimpleLoginForm = <any> 'SimpleLoginForm',
        SimpleLoginFormQuery = <any> 'SimpleLoginFormQuery',
        SimpleLoginFormDelay = <any> 'SimpleLoginFormDelay'
    }
    export enum CreateTypeEnum {
        Website = <any> 'Website',
        WebsiteGroup = <any> 'WebsiteGroup'
    }
}
