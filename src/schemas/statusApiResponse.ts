export type StatusApiResponse = {
  updated_at: string;
  dependencies: {
    database: {
      version: string;
      max_connections: number;
      opened_connections: number;
    };
  };
};
