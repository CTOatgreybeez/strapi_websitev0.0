import type { Schema, Struct } from '@strapi/strapi';

export interface SharedInfoSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_info_sections';
  info: {
    displayName: 'info Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    Linktext: Schema.Attribute.String;
    LinkUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedPartnerLogo extends Struct.ComponentSchema {
  collectionName: 'components_shared_partner_logos';
  info: {
    displayName: 'Partner Logo';
  };
  attributes: {
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    logoUrl: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    website: Schema.Attribute.String;
  };
}

export interface SharedPrograms extends Struct.ComponentSchema {
  collectionName: 'components_shared_programs';
  info: {
    displayName: 'programs';
  };
  attributes: {
    category: Schema.Attribute.Enumeration<['government', 'csr', 'training']>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    partner: Schema.Attribute.String;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'Social Link';
  };
  attributes: {
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    platform: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedStatistic extends Struct.ComponentSchema {
  collectionName: 'components_shared_statistics';
  info: {
    displayName: 'Statistic';
  };
  attributes: {
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.info-section': SharedInfoSection;
      'shared.partner-logo': SharedPartnerLogo;
      'shared.programs': SharedPrograms;
      'shared.social-link': SharedSocialLink;
      'shared.statistic': SharedStatistic;
    }
  }
}
