export enum QueryFunctionName {

	/**
	 * Name of the avg() SQL function within an IQuery
	 */
    AVG = "avg",

	/**
	 * Name of the count() SQL function within an IQuery
	 */
    COUNT = "count",

	/**
	 * Name of the max() SQL function within an IQuery
	 */
    MAX = "max",

	/**
	 * Name of the min() SQL function within an IQuery
	 */
    MIN = "min",

	/**
	 * Name of the sum() SQL function within an IQuery
	 */
    SUM = "sum",

	/**
	 * Storage for the SUBSTRING property
	 */
    SUBSTRING = "substring",

	/**
	 * Storage for the CONCAT property
	 */
    CONCAT = "concat",

	/**
	 * Storage for the LOCATE property
	 */
    LOCATE = "locate",

	/**
	 * Storage for the TRIM property
	 */
    TRIM = "trim",

	/**
	 * Storage for the LENGTH property
	 */
    LENGTH = "length",

	/**
	 * Storage for the BIT_LENGTH property
	 */
    BIT_LENGTH = "bit_length",

	/**
	 * Storage for the COALESCE property
	 */
    COALESCE = "coalesce",

	/**
	 * Storage for the NULLIF property
	 */
    NULLIF = "nullif",

	/**
	 * Storage for the ABS property
	 */
    ABS = "abs",

	/**
	 * Storage for the MOD property
	 */
    MOD = "mod",

	/**
	 * Storage for the SQRT property
	 */
    SQRT = "sqrt",

	/**
	 * Storage for the UPPER property
	 */
    UPPER = "upper",

	/**
	 * Storage for the LOWER property
	 */
    LOWER = "lower",

	/**
	 * Storage for the CAST property
	 */
    CAST = "cast",

	/**
	 * Storage for the EXTRACT property
	 */
    EXTRACT = "extract",

	/*
	 * map second/minute/hour/day/month/year to ANSI extract()
	 */

	/**
	 * Storage for the SECOND property
	 */
    SECOND = "second",

	/**
	 * Storage for the MINUTE property
	 */
    MINUTE = "minute",

	/**
	 * Storage for the HOUR property
	 */
    HOUR = "hour",

	/**
	 * Storage for the DAY property
	 */
    DAY = "day",

	/**
	 * Storage for the MONTH property
	 */
    MONTH = "month",

	/**
	 * Storage for the YEAR property
	 */
    YEAR = "year",

	/**
	 * Storage for the STRING property
	 */
    STRING = "string"
}