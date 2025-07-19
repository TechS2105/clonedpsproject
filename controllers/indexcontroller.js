import bannerImages from '../bannerimage.js';
import campusImages from '../campusimage.js';
import campusFacilityImage from '../campusfacility.js';
import happeningsImage from "../latesthappeningsimages.js";

const indexRouter = (req, res) => {

    res.render('index.ejs', {images: bannerImages, campus: campusImages, campusImage: campusFacilityImage, eventsImage: happeningsImage});

}

export default {

    indexRouter

}