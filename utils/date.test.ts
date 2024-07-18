import { timestampToLocalDate } from "@/utils/date";

// 模拟时区的辅助函数
interface MockDateConstructor extends DateConstructor {
  new (...args: any[]): Date;
  now(): number;
}

const mockTimeZone = (timeZone: string) => {
  const RealDate = Date as MockDateConstructor;
  let OriginalDate: MockDateConstructor;

  const mockedDate = class extends RealDate {
    constructor(...args: any[]) {
      if (args.length > 0) {
        super(...args);
      } else {
        super();
      }
    }

    static now() {
      return RealDate.now();
    }

    toLocaleString(
      locale?: string,
      options?: Intl.DateTimeFormatOptions
    ): string {
      if (options && options.timeZone) {
        options.timeZone = timeZone;
      }
      return super.toLocaleString(locale, options);
    }
  };

  OriginalDate = global.Date as MockDateConstructor;
  global.Date = mockedDate as unknown as typeof Date;

  return () => {
    global.Date = OriginalDate;
  };
};

describe("timestampToLocalDate", () => {
  let restoreDate: () => void;

  afterEach(() => {
    if (restoreDate) restoreDate();
  });

  test("should convert normal timestamp format to local date in default time zone", () => {
    expect(timestampToLocalDate("2023-07-18T12:34:56Z")).toBe("2023-07-18");
  });

  test("should convert timestamp to local date in New York time zone", () => {
    restoreDate = mockTimeZone("America/New_York");
    expect(timestampToLocalDate("2023-07-18T12:34:56Z")).toBe("2023-07-18");
    expect(timestampToLocalDate("2023-07-18T04:34:56Z")).toBe("2023-07-18");
    expect(timestampToLocalDate("2023-07-18T23:59:59Z")).toBe("2023-07-18");
    expect(timestampToLocalDate("2023-07-19T00:00:00Z")).toBe("2023-07-18");
    expect(timestampToLocalDate("2023-07-19T03:59:59Z")).toBe("2023-07-18");
    expect(timestampToLocalDate("2023-07-19T04:00:00Z")).toBe("2023-07-19");
  });

  test("should convert timestamp to local date in Tokyo time zone", () => {
    restoreDate = mockTimeZone("Asia/Tokyo");
    expect(timestampToLocalDate("2023-07-18T12:34:56Z")).toBe("2023-07-18");
    expect(timestampToLocalDate("2023-07-18T13:59:59Z")).toBe("2023-07-18");
    expect(timestampToLocalDate("2023-07-18T14:39:59Z")).toBe("2023-07-18");
    expect(timestampToLocalDate("2023-07-18T14:59:59Z")).toBe("2023-07-18");
    expect(timestampToLocalDate("2023-07-18T15:00:00Z")).toBe("2023-07-19");
    expect(timestampToLocalDate("2023-07-18T22:34:56Z")).toBe("2023-07-19");
  });

  test("should convert timestamp to local date in UTC time zone", () => {
    restoreDate = mockTimeZone("UTC");
    expect(timestampToLocalDate("2023-07-18T12:34:56Z")).toBe("2023-07-18");
    expect(timestampToLocalDate("2023-07-18T23:59:59Z")).toBe("2023-07-18");
    expect(timestampToLocalDate("2023-07-19T00:00:00Z")).toBe("2023-07-19");
  });

  test("should handle invalid timestamp", () => {
    expect(() => timestampToLocalDate("invalid-timestamp")).toThrow(Error);
    expect(() => timestampToLocalDate("")).toThrow(Error);
  });

  test("should handle Unix epoch start date", () => {
    restoreDate = mockTimeZone("UTC");
    expect(timestampToLocalDate("1970-01-01T00:00:00Z")).toBe("1970-01-01");
  });

  test("should handle future dates", () => {
    restoreDate = mockTimeZone("UTC");
    expect(timestampToLocalDate("2100-12-31T12:34:56Z")).toBe("2100-12-31");
    expect(timestampToLocalDate("2100-12-31T23:59:59Z")).toBe("2100-12-31");
    expect(timestampToLocalDate("2101-01-01T00:00:00Z")).toBe("2101-01-01");
  });

  test("should handle daylight saving time transitions", () => {
    // Test for a timezone with DST, e.g., New York
    restoreDate = mockTimeZone("America/New_York");
    // Spring forward (March)
    expect(timestampToLocalDate("2023-03-12T06:59:59Z")).toBe("2023-03-12");
    expect(timestampToLocalDate("2023-03-12T07:00:00Z")).toBe("2023-03-12");
    // Fall back (November)
    expect(timestampToLocalDate("2023-11-05T05:59:59Z")).toBe("2023-11-05");
    expect(timestampToLocalDate("2023-11-05T06:00:00Z")).toBe("2023-11-05");
    expect(timestampToLocalDate("2023-11-05T06:59:59Z")).toBe("2023-11-05");
    expect(timestampToLocalDate("2023-11-05T07:00:00Z")).toBe("2023-11-05");
  });
});
