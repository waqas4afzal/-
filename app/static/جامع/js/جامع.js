//https://www.codeproject.com/Tips/5163219/HTML-Line-Numbering-using-textarea

/**
 * جب سطور اشارات میں کوئی رد و بدل کیا جایے
 * @param {*} سطور_اشارات 
 */
function تغیر_اشارات(سطور_اشارات){

}

/**
 * اشارات کع جانچنے کے لیے جب سطور اشارات کع اوپر نیچے یا دائیں بائیں کیا جاتا ہے
 * @param {*} سطور_اشارات 
 */
function تغیر_طومار(سطور_اشارات){    
    document.getElementById('رقم_سطور').scrollTop = سطور_اشارات.scrollTop;
}