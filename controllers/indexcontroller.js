import bannerImages from '../bannerimage.js';
import campusImages from '../campusimage.js';
import campusFacilityImage from '../campusfacility.js';
import happeningsImage from "../latesthappeningsimages.js";
import menuBoxItems from '../menubox.js';
import secondMenuBox from '../secondmenubox.js';

const indexRouter = (req, res) => {

    res.render("index.ejs", {
      menus: menuBoxItems,
      secondMenu: secondMenuBox,
      images: bannerImages,
      campus: campusImages,
      campusImage: campusFacilityImage,
      eventsImage: happeningsImage,
    });

}

export default {

    indexRouter

}