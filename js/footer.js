(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NT5PVRB');

/*<!-- End Google Tag Manager for top of page-->\*/

/**Test1**Bitcoin*API*Price*Coingeck0***Start**/
/** 
var btc = document.getElementById('bitcoin');

var liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",

    "meth": "GET",
    "headers": {}
}

$.ajax(liveprice).done(function (response){
    btc.innerHTML = response.bitcoin.usd;
    console.log("Kinda Workin");
});
**/
/*Test1***Bitcoin*API*Price*Coingeck0***Finish**/


/*Test2***Bitcoin*API*Price*Coingeck0***Start**/
/**
var btc = document.getElementById('bitcoin');


var  bitcoin = fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log('Sheats fcked Up somewhere'))
console.log("Bitcoin Workin");
**/
/*Test2***Bitcoin*API*Price*Coingeck0***Finish**/






	
	