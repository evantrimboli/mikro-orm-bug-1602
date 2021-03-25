import { Entity, Enum, PrimaryKey } from '@mikro-orm/core';
import { IntegrationProvider, IntegrationType } from '../types';

// Export is required here for Mikro ORM to be able to discover the enum correctly
export { IntegrationProvider, IntegrationType };

@Entity()
export default class IntegrationSpec {
  @PrimaryKey({ type: 'uuid', defaultRaw: 'uuid_generate_v4()' })
  id!: string;

  @Enum()
  type!: IntegrationType;

  @Enum()
  provider!: IntegrationProvider;
}
