import { Entity, Property } from '@mikro-orm/core';
import Integration from './integration';

@Entity()
export default class GoogleAnalyticsV3Integration extends Integration {
  @Property()
  viewId!: string;
}
