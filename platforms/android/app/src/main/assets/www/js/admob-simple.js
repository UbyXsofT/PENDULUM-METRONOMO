var admobid = {};

// TODO: replace the following ad units with your own
if( /(android)/i.test(navigator.userAgent) ) {
  admobid = { // for Android
    banner: 'ca-app-pub-5269369775118683/7003223550',
    interstitial: 'ca-app-pub-5269369775118683/4748611214',
    rewardvideo: 'ca-app-pub-xxxxxxxxxxx/xxxxxxxxxxx',
  };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
  admobid = { // for iOS
    banner: 'ca-app-pub-5269369775118683/7003223550',
    interstitial: 'ca-app-pub-5269369775118683/4748611214',
    rewardvideo: 'ca-app-pub-xxxxxxxxxxx/xxxxxxxxxxx',
  };
} else {
  admobid = { // for Windows Phone, deprecated
    banner: '',
    interstitial: '',
    rewardvideo: '',
  };
}

function initApp() {
  if (! AdMob ) { alert( 'admob plugin not ready' ); return; }

  // this will create a banner on startup
  // AdMob.createBanner( {
  //   adId: admobid.banner,
  //   position: AdMob.AD_POSITION.BOTTOM_CENTER,
  //   isTesting: true, //  ricezione dell'annuncio di prova  
  //   overlap: false, //  il banner si sovrapporrà alla visualizzazione web 
  //   offsetTopBar: false, //  impostato su true per evitare la sovrapposizione della barra di stato di iOS7  
  //   bgColor: 'black'
  // } );

  // this will load a full screen ad on startup
  AdMob.prepareInterstitial({
    adId: admobid.interstitial,
    //isTesting: true, // TODO: remove this line when release
    autoShow: true
  });
}

if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}