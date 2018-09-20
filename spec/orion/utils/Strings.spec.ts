import { Strings } from './../../../src/orion/utils/Strings';

describe("Testing all functions on Strings utility class", () => {

    it("#capitalize()", () => {

        var name = Strings.capitalize("peter");

        expect(name).not.toBeNull("String cannot be null");
        expect(name).toBe("Peter", "Capitalized name does not match");
    });

    it("#camelCaseByToken()", () => {

        var name = Strings.camelCaseByToken("peter-pan", "-");

        expect(name).not.toBeNull("String cannot be null");
        expect(name).toBe("peterPan", "Camel-cased name does not match");
    });

    it("#uncapitalize()", () => {

        var name = Strings.uncapitalize("Peter");

        expect(name).not.toBeNull("String cannot be null");
        expect(name).toBe("peter", "Uncapitalized name does not match");
    });

    it("#startsWith()", () => {

        expect(Strings.startsWith("Peter", "P")).toBe(true, "Peter starts with 'P'");
        expect(Strings.startsWith("Peter", "p")).toBe(false, "Peter does not start with 'p'");
        expect(Strings.startsWith("Peter", "e")).toBe(false, "Peter does not start with 'e'");
    });

    it("#contains()", () => {

        expect(Strings.contains("Peter", "P")).toBe(true, "Peter contains 'P'");
        expect(Strings.contains("Peter", "e")).toBe(true, "Peter does not contain 'e'");
        expect(Strings.contains("Peter", "p")).toBe(false, "Peter does not contains 'p'");
    });

    it("#format()", () => {

        var message = Strings.format("Hey {0} {1}", ["Peter", "Pan"]);

        expect(message).not.toBeNull("Formatted String cannot be null");
        expect(message).toBe("Hey Peter Pan", "Formatted String does not match");
    });

    it("#replaceAll()", () => {

        var message = Strings.replaceAll("one-to-one", "-", " ");

        expect(message).not.toBeNull("Replaced String cannot be null");
        expect(message).toBe("one to one");
    });

    it("#trimLeft()", () => {

        expect(Strings.trimLeft(" abc")).toBe("abc", "Trim left does not match");
        expect(Strings.trimLeft("  abc")).toBe("abc", "Trim left does not match");
        expect(Strings.trimLeft("   abc")).toBe("abc", "Trim left does not match");
        expect(Strings.trimLeft(" \nabc")).toBe("abc", "Trim left does not match");
        expect(Strings.trimLeft("\rabc")).toBe("abc", "Trim left does not match");
    });

    it("#trimRight()", () => {

        expect(Strings.trimRight("abc ")).toBe("abc", "Trim right does not match");
        expect(Strings.trimRight("abc  ")).toBe("abc", "Trim right does not match");
        expect(Strings.trimRight("abc   ")).toBe("abc", "Trim right does not match");
        expect(Strings.trimRight("abc \n")).toBe("abc", "Trim right does not match");
        expect(Strings.trimRight("abc\r")).toBe("abc", "Trim right does not match");
    });

    it("#trim()", () => {

        expect(Strings.trim(" abc ")).toBe("abc", "Trim does not match");
        expect(Strings.trim("  abc  ")).toBe("abc", "Trim does not match");
        expect(Strings.trim("   abc   ")).toBe("abc", "Trim does not match");
        expect(Strings.trim(" \n abc \n")).toBe("abc", "Trim does not match");
        expect(Strings.trim("\rabc\r")).toBe("abc", "Trim does not match");
    });

    it("#padLeft", () => {

        expect(Strings.padLeft(null, 3, '0')).toBe(null);
        expect(Strings.padLeft("A", 3, '0')).toBe("00A");
        expect(Strings.padLeft("A0", 5, '0')).toBe("000A0");
        expect(Strings.padLeft("A00", 5, '0')).toBe("00A00");
        expect(Strings.padLeft("A000", 5, '0')).toBe("0A000");
        expect(Strings.padLeft("A0000", 5, '0')).toBe("A0000");
        expect(Strings.padLeft("A00000", 5, '0')).toBe("A00000");
    });

    it("#padRight", () => {

        expect(Strings.padRight(null, 3, '0')).toBeNull();
        expect(Strings.padRight("A", 3, '0')).toBe("A00", );
        expect(Strings.padRight("0A", 5, '0')).toBe("0A000");
        expect(Strings.padRight("00A", 5, '0')).toBe("00A00");
        expect(Strings.padRight("000A", 5, '0')).toBe("000A0");
        expect(Strings.padRight("0000A", 5, '0')).toBe("0000A");
        expect(Strings.padRight("00000A", 5, '0')).toBe("00000A");
    });

    it("#tokenizeByCamelCase()", () => {

        expect(Strings.tokenizeByCamelCase("oneToOne", " ")).toBe("one to one", "Tokenized string does not match");
        expect(Strings.tokenizeByCamelCase("oneToOne", "-")).toBe("one-to-one", "Tokenized string does not match");
    });

    it("#getLabel()", () => {

        expect(Strings.getLabel("@name")).toBe("Name", "Label doesn't match");
        expect(Strings.getLabel("personNames")).toBe("Person names", "Label doesn't match");
        expect(Strings.getLabel("person.name")).toBe("Person name", "Label doesn't match");
        expect(Strings.getLabel("one-to-one")).toBe("One to one", "Label doesn't match");
        expect(Strings.getLabel("person_names")).toBe("Person names", "Label doesn't match");
    });
});
