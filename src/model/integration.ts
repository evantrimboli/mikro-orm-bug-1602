import { Entity, ManyToOne, PrimaryKey } from '@mikro-orm/core';
import IntegrationSpec from './integration-spec';

@Entity({
  discriminatorColumn: 'discriminator',
  abstract: true
})
export default abstract class Integration {
  @PrimaryKey({ type: 'uuid', defaultRaw: 'uuid_generate_v4()' })
  id!: string;

  @ManyToOne()
  spec!: IntegrationSpec;
}
