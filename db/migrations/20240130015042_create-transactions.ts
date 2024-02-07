import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('transactions', (table) => {
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
    table.uuid('is').primary()
    table.text('title').notNullable()
    table.decimal('amount').notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('transactions')
}
