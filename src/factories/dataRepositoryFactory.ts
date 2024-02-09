import CertificateRepository from "../../infra/repositories/CertificateRepository";
import PostgresDatabase from "../../infra/data/database";

export function dataRepositoryFactory() {
  var database = new PostgresDatabase();
  var certificateRepository = new CertificateRepository(database);

  return { certificateRepository };
}
