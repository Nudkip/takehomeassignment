const ExifImage = require('exif').ExifImage;

exports.fileupload = (req, res) => {

    const title = req.body.title;
    const description = req.body.description;
    const photo = req.files[0];

    const filename = photo.path.substring(12);

    try {
        new ExifImage({ image: photo.path }, (error, exifData) => {
            if (error) {
                console.log('Error: ' + error.message);
                return res.render('error', {error});
            } else {
                console.log(exifData);
                const data = {
                    title,
                    description,
                    filename,
                    image: exifData.image,
                    exif: exifData.exif,
                    gps: exifData.gps
                };
                return res.render('display', data);
            }
        })
    } catch (error) {
        console.log('Error: ' + error.message);
        return res.render('error', {error});
    }

};

exports.showmap = (req, res) => {
    var data = {
        lat: req.params.lat,
        lon: req.params.lon,
        focus: req.params.focus
    }
    console.log(data);
    return res.render('map', data);
}