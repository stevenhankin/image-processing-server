import fs from 'fs';
import Jimp from 'jimp';
import { reject } from 'bluebird';


// filterImageFromURL
// helper function to download, filter, and save the filtered image locally
// returns the absolute path to the local image
// INPUTS
//    inputURL: string - a publicly accessible url to an image file
// RETURNS
//    an absolute path to a filtered image locally saved file
export async function filterImageFromURL(inputURL: string): Promise<string> {
    return new Promise(async (resolve, reject) => {
        let photo;
        // Bad MIME type might throw an exception
        try {
            photo = await Jimp.read(inputURL);
        } catch (e) {
            return reject('Unable to download as image');
        }

        const outpath: string = __dirname + '/tmp/'
        const outfile: string = 'filtered.' + Math.floor(Math.random() * 2000) + '.jpg';
        const localFile: string = outpath + outfile;

        try {
            await photo
                .resize(256, 256) // resize
                .quality(60) // set JPEG quality
                .greyscale() // set greyscale
                .write(localFile, img =>
                    resolve(localFile)
                );
        } catch (e) {
            return reject('Unable to process as image');
        }
    });
}

// deleteLocalFiles
// helper function to delete files on the local disk
// useful to cleanup after tasks
// INPUTS
//    files: Array<string> an array of absolute paths to files
export async function deleteLocalFiles(files: Array<string>) {
    for (let file of files) {
        fs.unlinkSync(file);
    }
}