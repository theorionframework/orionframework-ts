/**
 * Helper used to make it easier to handle the HTML5 file system.
 * 
 * @author orionframework
 */
export class Files {

    /*----------------------------------------------------------
     * ATTRIBUTES
     *----------------------------------------------------------*/

    /**
     * The default file system quota
     */
    public static quota: number = 1024 * 1024 * 100;

    /**
     * The file name
     */
    protected static fileName: string;

    /**
     * The root file system.
     */
    protected static root: any;

    /*----------------------------------------------------------
     * END OF ATTRIBUTES
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * METHODS
     *----------------------------------------------------------*/

    // -------------------------------------------------
    // static
    // -------------------------------------------------

    /**
     * Initializes the file system requesting either the given or the default/configured quota size.
     * 
     * @param quota 
     */
    public static initialize(quota?: number): Promise<void> {

        if (Files.root) {
            return Promise.resolve();
        }

        if (quota) {
            Files.quota = quota;
        }

        return new Promise((resolve, reject) => {

            let context = window as any;
            let requestFileSystem = context.requestFileSystem || context.webkitRequestFileSystem;

            requestFileSystem(context.PERSISTENT, Files.quota, (fs: any) => {

                Files.fileName = fs.name;
                Files.root = fs.root;

                resolve();

            }, reject)
        });
    }

    /**
     * Retrieve raw access to the root file system
     */
    public static async fileSystem(): Promise<any> {

        await Files.initialize();

        return Files.root;
    }

    /**
     * Load the file entry from the file system within the given name and parameters
     * 
     * @param name 
     * @param args 
     */
    public static getFileEntry(name: string, args: any = {}): Promise<any> {

        return new Promise((resolve, reject) => {

            Files.fileSystem().then(fs => {

                fs.getFile(name, args, (fileEntry: any) => {

                    resolve(fileEntry);

                }, reject);

            }, reject);
        });
    }

    /**
     * Load the file handle from the file system  within the given name and parameters
     * 
     * @param name 
     * @param args 
     */
    public static getFile(name: string, args: any = {}): Promise<any> {

        return new Promise((resolve, reject) => {

            Files.getFileEntry(name, args).then(fileEntry => {

                fileEntry.file((file: any) => {

                    resolve(file);
                }, reject);

            }, reject);
        });
    }

    /**
     * Writes the given file to the file system as a text file.
     * 
     * @param name 
     * @param value 
     */
    public static write(name: string, value: any) {

        return new Promise((resolve, reject) => {

            this.getFileEntry(name, { create: true }).then(fileEntry => {

                fileEntry.createWriter((fileWriter: any) => {

                    fileWriter.onwriteend = function () {

                        resolve();
                    };

                    fileWriter.onerror = reject;

                    var blob = value instanceof Blob ? value : new Blob([value], { type: 'text/plain' });

                    fileWriter.write(blob);
                });
            }, reject);
        });
    }

    /**
     * Reads the given file name from the file system
     * 
     * @param name 
     */
    public static read<T>(name: string, args?: any, type: "array" | "binary" | "url" | "text" = "text"): Promise<T> {

        return new Promise<T>((resolve, reject) => {

            this.getFile(name, args).then(file => {

                let reader = new FileReader();

                reader.onloadend = function () {

                    resolve(this.result as T);
                };

                reader.onerror = reject;

                if (type == "array") {

                    reader.readAsArrayBuffer(file);
                }
                else if (type == "binary") {

                    reader.readAsBinaryString(file);
                }
                else if (type == "url") {

                    reader.readAsDataURL(file);
                }
                else {
                    reader.readAsText(file);
                }

            }, reject);
        });
    }

    /*----------------------------------------------------------
     * END OF METHODS
     *----------------------------------------------------------*/
}