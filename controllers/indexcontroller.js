import bannerImages from '../bannerimage.js';
import campusImages from '../campusimage.js';
import campusFacilityImage from '../campusfacility.js';

const indexRouter = (req, res) => {

    res.render('index.ejs', {images: bannerImages, campus: campusImages, campusImage: campusFacilityImage});

}

export default {

    indexRouter

}