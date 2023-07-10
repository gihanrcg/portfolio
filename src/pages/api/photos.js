import fs from 'fs';
import path from 'path';
import sizeOf from 'image-size';

export default function handler(req, res) {
  const directoryPath = path.join(process.cwd(), 'public/images/events');

  // passsing directoryPath and callback function
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      return res.status(500).json({ error: 'Unable to scan directory' });
    }
    // Create a URL for each image file
    const images = files.map((file) => {
      const dimensions = sizeOf(path.join(directoryPath, file));
      return {
        src: `/images/events/${file}`,
        thumbnail: `/images/events/${file}`,       
      };
    });

    return res.status(200).json(images);
  });
}
