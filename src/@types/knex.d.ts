// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Knex } from 'knex'

declare module 'knex/types/tables' {
  export interface Tables {
    transactions: {
      created_at: string
      id: string
      session_id?: string
      title: string
      amount: number
    }
  }
}
