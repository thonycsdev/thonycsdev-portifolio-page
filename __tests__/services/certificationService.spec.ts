import ICertificateRepository from "../../infra/repositories/interfaces/ICertificateRepository";
import CertificationService from "@/services/certificationService";
import certificationFixture from "../../testsUtils/mocks/CertificationFixture";
import { faker } from "@faker-js/faker";
import { Certificate } from "@/models/certificate";
describe("Certification Service Tests", () => {
  test("Get Certifications must be ordered by hours", async () => {
    const { createCertificationList } = certificationFixture();

    const certificationsMocks: Certificate[] = createCertificationList(5);

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

  test("should throw an error when id is invalid", async () => {
    const certificationRepoMock: ICertificateRepository = {
      getCertificates: jest.fn(),
      insertCertificate: jest.fn(),
      getCertificateById: jest.fn(),
    };

    var certificateService = new CertificationService(certificationRepoMock);
    await expect(certificateService.getCertificationById(1)).rejects.toThrow(
      "Certificate not found"
    );
  });
  test("Should return the certification when founded", async () => {
    const certificationMock = certificationFixture().createValidCertification();
    const getCertificateById = jest.fn().mockResolvedValue(certificationMock);

    const certificationRepoMock: ICertificateRepository = {
      getCertificates: jest.fn(),
      insertCertificate: jest.fn(),
      getCertificateById: getCertificateById,
    };

    var certificateService = new CertificationService(certificationRepoMock);
    var result = await certificateService.getCertificationById(
      certificationMock.id!
    );
    expect(getCertificateById).toHaveBeenCalledWith(certificationMock.id);
    expect(result).toEqual(certificationMock);
  });

  test("Should call the creation method from the repository", async () => {
    const certificationMock = certificationFixture().createValidCertification();

    const insertCertificate = jest.fn().mockResolvedValue(certificationMock);

    const certificationRepoMock: ICertificateRepository = {
      getCertificates: jest.fn(),
      insertCertificate: insertCertificate,
      getCertificateById: jest.fn(),
    };

    var certificateService = new CertificationService(certificationRepoMock);
    await certificateService.insertCertification(certificationMock);
    expect(insertCertificate).toHaveBeenCalledWith(certificationMock);
  });
});
