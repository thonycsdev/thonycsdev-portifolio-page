import IDatabase from "../../infra/data/IDatabase";
import { Certificate } from "../../infra/data/skills";
import certificateRepository from "../../infra/repositories/CertificateRepository";

describe("Certificate Repositories Tests", () => {
  const query = jest.fn();
  const databaseMock: IDatabase = {
    query,
  };
  test("Should call the query method with the correct query", async () => {
    var repository = new certificateRepository(databaseMock);
    await repository.getCertificates();
    expect(query).toHaveBeenCalledWith("SELECT * FROM certificates");
  });
  test("Should call the query method with the correct to get single certificate", async () => {
    var repository = new certificateRepository(databaseMock);
    await repository.getCertificateById(1);
    expect(query).toHaveBeenCalledWith(
      "SELECT * FROM certificates WHERE id = $1",
      [1]
    );
  });
  test("Should insert the correct certificate calling the query method", async () => {
    var repository = new certificateRepository(databaseMock);
    var certificateToInsert: Certificate = {
      name: "Certificate 1",
      date_started_and_completion: "2023 2024",
      hours: 10,
      url: "http://certificate.com",
    };

    await repository.insertCertificate(certificateToInsert);
    expect(query).toHaveBeenCalledWith(
      "INSERT INTO certificates (name, date_started_and_completion, hours, url) VALUES ($1, $2, $3, $4) RETURNING *",
      [
        certificateToInsert.name,
        certificateToInsert.date_started_and_completion,
        certificateToInsert.hours,
        certificateToInsert.url,
      ]
    );
  });
});
