import { faker } from "@faker-js/faker";
import { Certifications } from "../../infra/data/skills";
import ICertificateRepository from "../../infra/repositories/interfaces/ICertificateRepository";

export default function certificationFixture() {
  function createCertificationList(amount: number) {
    const certificationsMocks: Certifications[] = faker.helpers.multiple(
      createValidCertification,
      { count: amount }
    );
    return certificationsMocks;
  }

  function createValidCertification() {
    var certificationMock: Certifications = {
      hours: faker.number.int(),
      name: faker.company.name(),
      date_started_and_completion: faker.date.recent().toDateString(),
      url: faker.internet.url(),
    };
    return certificationMock;
  }

  return {
    createCertificationList,
    createValidCertification,
  };
}
