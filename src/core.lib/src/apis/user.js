const _0x110e15=_0x4914;function _0x9346(){const _0x4b8117=['CreatTime','onLoginSuccess','PskeyTime','getProfileService','6646200Mtdweq','获取Pskey失败','mRNZH','vboOR','JXCze','12505122RVJNbX','addListener','getRobotUinRange','getUserDetailInfo\x20timeout','response','kCySB','696552gQHwwD','setBuddyProfileLike','JdyDD','getUserDetailInfoWithBizInfo','NTIfY','5cguRzs','now','&clientkey=','Skey','4zmKiiH','get','https://ssl.ptlogin2.qq.com/jump?ptlang=1033&clientuin=','onProfileDetailInfoChanged','5937701NUXpbj','getUserDetailInfo','hCYpM','DNyBE','setSelfOnlineStatus','assign','FDZkF','like','uin','4401835leanvc','session','getSkey','then','entries','VeeDq','setStatus','errMsg','CDsGc','PskeyData','160636xxzpoT','vxVtY','getUserInfo','delete','set','eajyi','getMsgService','4770513cnNSPI','clientKey','&u1=https%3A%2F%2Fh5.qzone.qq.com%2Fqqnt%2Fqzoneinpcqq%2Ffriend%3Frefresh%3D0%26clientuin%3D0%26darkMode%3D0&keyindex=','result','cJufF','getProfileLikeService','fromEntries','HttpsGetCookies','UieHY','setHeader','forceFetchClientKey','skey','forEach','robotUinRanges','getTipOffService','uid'];_0x9346=function(){return _0x4b8117;};return _0x9346();}(function(_0x2a9e37,_0xd2580d){const _0x320206=_0x4914,_0x335cf1=_0x2a9e37();while(!![]){try{const _0x2f6594=-parseInt(_0x320206(0x1ed))/0x1*(-parseInt(_0x320206(0x208))/0x2)+parseInt(_0x320206(0x1c9))/0x3+-parseInt(_0x320206(0x1f1))/0x4*(parseInt(_0x320206(0x1fe))/0x5)+parseInt(_0x320206(0x1e8))/0x6+-parseInt(_0x320206(0x1f5))/0x7+-parseInt(_0x320206(0x1dd))/0x8+parseInt(_0x320206(0x1e2))/0x9;if(_0x2f6594===_0xd2580d)break;else _0x335cf1['push'](_0x335cf1['shift']());}catch(_0x82965){_0x335cf1['push'](_0x335cf1['shift']());}}}(_0x9346,0xe4fc6));import{Credentials,selfInfo,uid2UinMap}from'@/core/data';import{napCatCore}from'@/core';import{ProfileListener}from'@/core/listeners';import{randomUUID}from'crypto';function _0x4914(_0x220b46,_0x5f4f50){const _0x934650=_0x9346();return _0x4914=function(_0x4914b7,_0x31afb9){_0x4914b7=_0x4914b7-0x1c9;let _0x1fc263=_0x934650[_0x4914b7];return _0x1fc263;},_0x4914(_0x220b46,_0x5f4f50);}import{RequestUtil}from'@/common/utils/request';import{logDebug,logError}from'@/common/utils/log';const userInfoCache={},profileListener=new ProfileListener(),userDetailHandlers=new Map();profileListener[_0x110e15(0x1f4)]=_0x43099d=>{const _0x17bbfd=_0x110e15;userInfoCache[_0x43099d[_0x17bbfd(0x1d8)]]=_0x43099d,userDetailHandlers[_0x17bbfd(0x1d5)](_0x30a745=>_0x30a745(_0x43099d));},setTimeout(()=>{const _0x29baf3=_0x110e15;napCatCore[_0x29baf3(0x1da)](()=>{const _0x5c99c9=_0x29baf3;napCatCore[_0x5c99c9(0x1e3)](profileListener);});},0x64);export class NTQQUserApi{static async[_0x110e15(0x1f9)](_0x4e1adf,_0x254885,_0x203dfe){const _0x212cce=_0x110e15;return napCatCore['session'][_0x212cce(0x20e)]()[_0x212cce(0x204)]({'status':_0x4e1adf,'extStatus':_0x254885,'batteryStatus':_0x203dfe});}static async[_0x110e15(0x1fc)](_0x33f23c,_0x2d573b=0x1){const _0x3683a8=_0x110e15;return napCatCore[_0x3683a8(0x1ff)][_0x3683a8(0x1ce)]()[_0x3683a8(0x1e9)]({'friendUid':_0x33f23c,'sourceId':0x47,'doLikeCount':_0x2d573b,'doLikeTollCount':0x0});}static async['setQQAvatar'](_0x19d092){const _0x487877=_0x110e15,_0x572458=napCatCore[_0x487877(0x1ff)][_0x487877(0x1dc)]()[_0x487877(0x1d2)](_0x19d092);return{'result':_0x572458?.[_0x487877(0x1cc)],'errMsg':_0x572458?.[_0x487877(0x205)]};}static async['getSelfInfo'](){}static async[_0x110e15(0x20a)](_0x12b0e0){}static async[_0x110e15(0x1f6)](_0x1f08a8){const _0xdb55ec=_0x110e15,_0x1fc1d8={'kCySB':function(_0x4a35fe,_0x3c1d97){return _0x4a35fe(_0x3c1d97);},'vboOR':_0xdb55ec(0x1e5),'cJufF':function(_0x2bdf30,_0x5eeaa7){return _0x2bdf30===_0x5eeaa7;},'UieHY':function(_0x3e37a6){return _0x3e37a6();},'dysdl':function(_0xd99ad1,_0x42f59a,_0x1a71ee){return _0xd99ad1(_0x42f59a,_0x1a71ee);}},_0xf3714c=napCatCore[_0xdb55ec(0x1ff)][_0xdb55ec(0x1dc)]();return new Promise((_0x28902e,_0x5c747e)=>{const _0x225272=_0xdb55ec,_0x58404b={'hCYpM':function(_0x703835,_0x32cd1e){const _0x20da53=_0x4914;return _0x1fc1d8[_0x20da53(0x1cd)](_0x703835,_0x32cd1e);},'WAfdr':function(_0xb9928c,_0xe6ab41){return _0xb9928c(_0xe6ab41);}},_0x46b8e3=_0x1fc1d8[_0x225272(0x1d1)](randomUUID);let _0x5b4f7b=![];_0x1fc1d8['dysdl'](setTimeout,()=>{const _0x36adc0=_0x225272;!_0x5b4f7b&&_0x1fc1d8[_0x36adc0(0x1e7)](_0x5c747e,_0x1fc1d8[_0x36adc0(0x1e0)]);},0x1388),userDetailHandlers[_0x225272(0x20c)](_0x46b8e3,_0x476c58=>{const _0x654c5e=_0x225272;_0x58404b[_0x654c5e(0x1f7)](_0x476c58['uid'],_0x1f08a8)&&(_0x5b4f7b=!![],userDetailHandlers[_0x654c5e(0x20b)](_0x46b8e3),uid2UinMap[_0x1f08a8]=_0x476c58[_0x654c5e(0x1fd)],_0x58404b['WAfdr'](_0x28902e,_0x476c58));}),_0xf3714c[_0x225272(0x1eb)](_0x1f08a8,[0x0])[_0x225272(0x201)](_0x19df71=>{});});}static async['getPSkey'](_0x518972,_0x36c21d=!![]){const _0x31f661=_0x110e15,_0x2f07af={'mRNZH':function(_0x4b300e,_0x50a5fc){return _0x4b300e||_0x50a5fc;},'FDZkF':function(_0x2b3a65,_0x1b5804){return _0x2b3a65-_0x1b5804;},'XuMtj':function(_0x55613c,_0x173a35){return _0x55613c===_0x173a35;},'CDsGc':function(_0x44b509,_0x58805c,_0x152528){return _0x44b509(_0x58805c,_0x152528);},'JdyDD':_0x31f661(0x1de)},_0x5781e4=[],_0xde978={};for(const _0x18c1c4 in _0x518972){const _0x5542c6=Credentials[_0x31f661(0x207)]['get'](_0x518972[_0x18c1c4]),_0x2156ca=Credentials['PskeyTime']['get'](_0x518972[_0x18c1c4]);_0x2f07af[_0x31f661(0x1df)](!_0x5542c6,!_0x2156ca)||_0x2f07af[_0x31f661(0x1fb)](Date[_0x31f661(0x1ee)](),_0x2156ca)>0x708*0x3e8||!_0x36c21d?_0x5781e4['push'](_0x518972[_0x18c1c4]):_0xde978[_0x518972[_0x18c1c4]]=_0x5542c6;}let _0x2e2804={'result':0x0,'errMsg':'','domainPskeyMap':new Map()};_0x5781e4['length']>0x0&&(_0x2e2804=await napCatCore[_0x31f661(0x1ff)][_0x31f661(0x1d7)]()['getPskey'](_0x5781e4,!![]));const _0x3f9d43=_0x2e2804['domainPskeyMap'];for(const _0x3a1248 of _0x3f9d43[_0x31f661(0x202)]()){Credentials[_0x31f661(0x207)][_0x31f661(0x20c)](_0x3a1248[0x0],_0x3a1248[0x1]),Credentials[_0x31f661(0x1db)]['set'](_0x3a1248[0x0],Date['now']());}const _0x564706=Object[_0x31f661(0x1fa)](Object[_0x31f661(0x1cf)](_0x3f9d43),_0xde978);if(_0x2f07af['XuMtj'](_0x2e2804['result'],0x0))return _0x564706;else _0x2f07af[_0x31f661(0x206)](logError,_0x2f07af[_0x31f661(0x1ea)],_0x2e2804[_0x31f661(0x205)]);return{};}static async[_0x110e15(0x1e4)](){const _0x3f88ef=_0x110e15,_0x32c94b=await napCatCore['session']['getRobotService']()[_0x3f88ef(0x1e4)]({'justFetchMsgConfig':'1','type':0x1,'version':0x0,'aioKeywordVersion':0x0});return _0x32c94b?.[_0x3f88ef(0x1e6)]?.[_0x3f88ef(0x1d6)];}static async[_0x110e15(0x200)](_0x2a0e06=!![]){const _0x220f74=_0x110e15,_0x4be4a3={'djXON':function(_0x4030c8,_0x3974e8){return _0x4030c8==_0x3974e8;},'JXCze':function(_0x329fdd,_0x130d3b){return _0x329fdd>_0x130d3b;},'NTIfY':function(_0x2d1673,_0x1c6243){return _0x2d1673-_0x1c6243;},'vxVtY':function(_0x4f91e4,_0x1a08f7){return _0x4f91e4*_0x1a08f7;},'eajyi':function(_0x4c34e5,_0x5ecad1){return _0x4c34e5!==_0x5ecad1;},'VeeDq':function(_0x2fa4a2,_0x48ab29){return _0x2fa4a2+_0x48ab29;},'yQtRN':_0x220f74(0x1f3),'SnVhL':_0x220f74(0x1ef),'DNyBE':function(_0x1b2517,_0x3cd1a9,_0x1f132e){return _0x1b2517(_0x3cd1a9,_0x1f132e);}};try{if(_0x4be4a3['djXON'](Credentials[_0x220f74(0x1d9)],0x0)||_0x4be4a3[_0x220f74(0x1e1)](_0x4be4a3[_0x220f74(0x1ec)](Date[_0x220f74(0x1ee)](),Credentials[_0x220f74(0x1d9)]),_0x4be4a3[_0x220f74(0x209)](0x3e8,0xe10))||!_0x2a0e06){const _0x36f18f=await napCatCore[_0x220f74(0x1ff)]['getTicketService']()[_0x220f74(0x1d3)]('');if(_0x4be4a3[_0x220f74(0x20d)](_0x36f18f['result'],0x0))return'';const _0x461090=_0x36f18f[_0x220f74(0x1ca)],_0x23d3cd=_0x36f18f['keyIndex'],_0x150430=_0x4be4a3[_0x220f74(0x203)](_0x4be4a3[_0x220f74(0x203)](_0x4be4a3[_0x220f74(0x203)](_0x4be4a3['yQtRN'],selfInfo[_0x220f74(0x1fd)])+_0x4be4a3['SnVhL']+_0x461090,_0x220f74(0x1cb)),_0x23d3cd);let _0x1af6ca;try{_0x1af6ca=await RequestUtil[_0x220f74(0x1d0)](_0x150430);}catch(_0x2a4118){_0x4be4a3[_0x220f74(0x1f8)](logDebug,'请求获取Skey时失败',_0x2a4118),_0x1af6ca=new Map();}const _0x566ddb=_0x1af6ca[_0x220f74(0x1f2)](_0x220f74(0x1d4));if(!_0x566ddb)return'';return Credentials[_0x220f74(0x1d9)]=Date[_0x220f74(0x1ee)](),Credentials[_0x220f74(0x1f0)]=_0x566ddb,_0x566ddb;}return Credentials['Skey'];}catch(_0x23c0e3){}return undefined;}}