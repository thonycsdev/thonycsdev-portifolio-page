import { Certificate } from "@/models/certificate";
import { faker } from "@faker-js/faker";

export default function certificationFixture() {
  function createCertificationList(amount: number) {
    const certificationsMocks: Certificate[] = faker.helpers.multiple(
      createValidCertification,
      { count: amount }
    );
    return certificationsMocks;
  }

  function createValidCertification() {
    var certificationMock: Certificate = {
      id: faker.number.int(),
      level: "Basic",
      description: faker.lorem.sentence(),
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
