import { faker } from "@faker-js/faker";
import { Certifications } from "../../infra/data/skills";
import ICertificateRepository from "../../infra/repositories/interfaces/ICertificateRepository";
import CertificationService from "@/services/certificationService";
import certificationFixture from "../../testsUtils/mocks/CertificationFixture";
describe("Certification Service Tests", () => {
  test("Get Certifications must be ordered by hours", async () => {
    const { createCertificationList } = certificationFixture();

    const certificationsMocks: Certifications[] = createCertificationList(5);

    const certificationRepoMock: ICertificateRepository = {
      getCertificates: jest.fn().mockResolvedValue(certificationsMocks),
      insertCertificate: jest.fn(),
      getCertificateById: jest.fn(),
    };

    var certificateService = new CertificationService(certificationRepoMock);
    var result = await certificateService.getCertifications();
    var expected = certificationsMocks.sort((a, b) => b.hours - a.hours);
    expect(result).toEqual(expected);
  });
});
