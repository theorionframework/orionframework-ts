/**
 * Utilities related to accents/special characters.
 * 
 * @author orionframework
 * 
 * @class
 * @name orion.utils.Character
 * 
 * 
 */
export class Character {

    /*----------------------------------------------------------
     * ATTRIBUTES
     *----------------------------------------------------------*/

    /**
     * List of special characters
     * 
     * TODO: sync with http://www.w3schools.com/tags/ref_entities.asp
     */
    public static IN = 'ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ';

    /**
     * List of converted special characters to plain characters
     */
    public static OUT = ['A', 'A', 'A', 'A', 'A', 'A', 'a', 'a', 'a', 'a', 'a', 'a',
        'O', 'O', 'O', 'O', 'O', 'O', 'O', 'o', 'o', 'o', 'o', 'o', 'o', 'E',
        'E', 'E', 'E', 'e', 'e', 'e', 'e', 'e', 'C', 'c', 'D', 'I', 'I', 'I',
        'I', 'i', 'i', 'i', 'i', 'U', 'U', 'U', 'U', 'u', 'u', 'u', 'u', 'N',
        'n', 'S', 's', 'Y', 'y', 'y', 'Z', 'z'];


    /*----------------------------------------------------------
     * END OF ATTRIBUTES
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * METHODS
     *----------------------------------------------------------*/

    /**
     * Clean the given string replacing any special character by their
     * corresponding/plain character.
     * 
     * @param value
     *            the string value we want to clean
     * 
     * @return the cleaned string absent of any special character
     */
    public static clean(value: string): string {

        var builder: string[] = value.split('');

        var result: any = [];
        var length = builder.length;
        var accents = Character.IN;
        var accentsOut = Character.OUT;

        for (var y = 0; y < length; y++) {

            if (accents.indexOf(builder[y]) != -1) {
                result[y] = accentsOut[accents.indexOf(builder[y])];
            } else {
                result[y] = value[y];
            }
        }
        return result.join('');
    };

    /*----------------------------------------------------------
     * END OF METHODS
     *----------------------------------------------------------*/
}