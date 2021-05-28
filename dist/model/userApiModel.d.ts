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
* Represents a model for carrying out user data.
*/
export declare class UserApiModel {
    /**
    * Gets or sets the account identifier.
    */
    'accountId'?: string;
    /**
    * Gets or sets a value indicating whether this instance can manage application/settings.
    */
    'canManageApplication'?: boolean;
    /**
    * Gets or sets a value indicating whether this instance can edit issues for the SelectedGroups.
    */
    'canManageIssues'?: boolean;
    /**
    * Gets or sets a value indicating whether this instance can update fixed(unconfirmed) issues for the SelectedGroups.
    */
    'canManageIssuesAsRestricted'?: boolean;
    /**
    * Gets or sets a value indicating whether this instance can manage users.
    */
    'canManageTeam'?: boolean;
    /**
    * Gets or sets a value indicating whether this instance can manage websites.
    */
    'canManageWebsites'?: boolean;
    /**
    * Gets or sets a value indicating whether this instance can start a website scan for the SelectedGroups.
    */
    'canStartScan'?: boolean;
    /**
    * Gets or sets a value indicating whether this instance can view scan reports for the SelectedGroups.
    */
    'canViewScanReports'?: boolean;
    /**
    * Gets or sets the date which this website was created at.
    */
    'createdAt'?: Date;
    /**
    * Gets or sets the date time format.
    */
    'dateTimeFormat'?: string;
    /**
    * Gets or sets the user\'s email.
    */
    'email'?: string;
    /**
    * Gets or sets the user identifier.
    */
    'id'?: string;
    /**
    * Gets or sets a value indicating whether two factor authentication is enabled for this user.
    */
    'isTwoFactorAuthenticationEnabled'?: boolean;
    /**
    * Gets or sets the display name of the user.
    */
    'name'?: string;
    /**
    * Gets or sets the phone number.
    */
    'phoneNumber'?: string;
    /**
    * Gets or sets the role to which this user belongs.
    */
    'role'?: UserApiModel.RoleEnum;
    /**
    * Gets or sets the selected groups.
    */
    'selectedGroups'?: Array<string>;
    /**
    * Gets or sets the user\'s time zone.
    */
    'timezoneId'?: string;
    /**
    * Gets or sets the date which this website was updated at.
    */
    'updatedAt'?: Date;
    /**
    * Gets or sets the user\'s state.
    */
    'userState'?: UserApiModel.UserStateEnum;
    /**
    * Gets or sets a value indicating whether api access is enabled for the user.
    */
    'isApiAccessEnabled'?: boolean;
    /**
    * Gets or sets the allowed site limit.
    */
    'allowedWebsiteLimit'?: number;
    /**
    * Gets or sets the modification timestamp which is used for concurrency checking.
    */
    'lastLoginDate'?: Date;
    /**
    * If your SSO configuration settings and the use alternate login email option are active, you can use this feature.  Alternative login email is used for mails with extensions such as ex: test@subdomain.onmicrosoft.com.  When this option is active, view the alternative mail field that you can enter in Team Management&gt; Edit and New pages.  When you fill in this field, verification is made with this e-mail address for SSO login.
    */
    'alternateLoginEmail'?: string;
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
export declare namespace UserApiModel {
    enum RoleEnum {
        None,
        AccountMember,
        AccountOwner
    }
    enum UserStateEnum {
        Enabled,
        Disabled
    }
}
