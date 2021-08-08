//https://www.codeproject.com/Tips/5163219/HTML-Line-Numbering-using-textarea

//https://stackoverflow.com/a/57607334
//English to Arabic using unicode
String.prototype.toArabicUni= function() {
    return this.replace(/\d/g, d => String.fromCharCode('0x066'+d))
    }
/**
 * جب سطور اشارات میں کوئی رد و بدل کیا جایے
 * @param {*} سطور_اشارات 
 */
function تغیر_اشارات(سطور_اشارات){
    debugger
    let رقم_سطر = سطور_اشارات.parentElement.parentElement.getElementsByTagName('textarea')[0];
    let گنتی_سطور = حصول_گنتی_سطور(سطور_اشارات.value);
    if(گنتی_سطور){
        if(گنتی_سطور == 0) گنتی_سطور = 1;
        let وقتی_ترتیب = رقم_سطر.value.split('\n');
        let پرانی_گنتی_سطور = parseInt(وقتی_ترتیب[وقتی_ترتیب.length - 1], 10);
        // if there was a change in line count
        if(گنتی_سطور != پرانی_گنتی_سطور)
        {
            // یہان پر رقم دیکھانے والی جگہ کی چوڑاءی دیکھنی ہے
            //رقم_سطر.cols = گنتی_سطور.toString().length; // new width of txt_rownr
            تجدید_رقم_سطور(رقم_سطر, گنتی_سطور);
            تغیر_طومار(سطور_اشارات);
        }
    }
    return true;
}

/**
 * اشارات کع جانچنے کے لیے جب سطور اشارات کع اوپر نیچے یا دائیں بائیں کیا جاتا ہے
 * @param {*} سطور_اشارات 
 */
function تغیر_طومار(سطور_اشارات){    
    document.getElementById('رقم_سطور').scrollTop = سطور_اشارات.scrollTop;
}

/**
 * 
 * @param {*} سطور 
 * @returns 
 */
function حصول_گنتی_سطور(سطور){
    if(typeof سطور == 'string'){
        return سطور.split('\n').length;
    } else {
        return null;
    }
}

function تجدید_رقم_سطور(رقم_سطر,گنتی_سطور){
    رقم_سطر.value=String.fromCharCode('0x066'+1);
    for(let i=0;i<گنتی_سطور-1;i++){        
        رقم_سطر.value += ('\n'+(i+1+1)).replace(/\d/g, d => String.fromCharCode('0x066'+d));
    }
}