//db-layer\mkt-db\src\entities\Default.ts

export abstract class Default {
  id!: string;

  createdAt?: Date;

  updatedAt?: Date;

  deletedAt?: Date | null;
}
