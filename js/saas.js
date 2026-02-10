// GA init 
// (function (w, d, s, l, i) {
//     w[l] = w[l] || []; w[l].push({
//         'gtm.start':
//             new Date().getTime(), event: 'gtm.js'
//     }); var f = d.getElementsByTagName(s)[0],
//         j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
//             'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
// })(window, document, 'script', 'dataLayer', 'GTM-588PXQ8');

// Braze init 
+function (a, p, P, b, y) {
    a.braze = {}; a.brazeQueue = []; for (var s = "BrazeSdkMetadata DeviceProperties Card Card.prototype.dismissCard Card.prototype.removeAllSubscriptions Card.prototype.removeSubscription Card.prototype.subscribeToClickedEvent Card.prototype.subscribeToDismissedEvent Card.fromContentCardsJson Banner CaptionedImage ClassicCard ControlCard ContentCards ContentCards.prototype.getUnviewedCardCount Feed Feed.prototype.getUnreadCardCount ControlMessage InAppMessage InAppMessage.SlideFrom InAppMessage.ClickAction InAppMessage.DismissType InAppMessage.OpenTarget InAppMessage.ImageStyle InAppMessage.Orientation InAppMessage.TextAlignment InAppMessage.CropType InAppMessage.prototype.closeMessage InAppMessage.prototype.removeAllSubscriptions InAppMessage.prototype.removeSubscription InAppMessage.prototype.subscribeToClickedEvent InAppMessage.prototype.subscribeToDismissedEvent InAppMessage.fromJson FullScreenMessage ModalMessage HtmlMessage SlideUpMessage User User.Genders User.NotificationSubscriptionTypes User.prototype.addAlias User.prototype.addToCustomAttributeArray User.prototype.addToSubscriptionGroup User.prototype.getUserId User.prototype.incrementCustomUserAttribute User.prototype.removeFromCustomAttributeArray User.prototype.removeFromSubscriptionGroup User.prototype.setCountry User.prototype.setCustomLocationAttribute User.prototype.setCustomUserAttribute User.prototype.setDateOfBirth User.prototype.setEmail User.prototype.setEmailNotificationSubscriptionType User.prototype.setFirstName User.prototype.setGender User.prototype.setHomeCity User.prototype.setLanguage User.prototype.setLastKnownLocation User.prototype.setLastName User.prototype.setPhoneNumber User.prototype.setPushNotificationSubscriptionType InAppMessageButton InAppMessageButton.prototype.removeAllSubscriptions InAppMessageButton.prototype.removeSubscription InAppMessageButton.prototype.subscribeToClickedEvent automaticallyShowInAppMessages destroyFeed hideContentCards showContentCards showFeed showInAppMessage toggleContentCards toggleFeed changeUser destroy getDeviceId initialize isPushBlocked isPushPermissionGranted isPushSupported logCardClick logCardDismissal logCardImpressions logContentCardImpressions logContentCardsDisplayed logCustomEvent logFeedDisplayed logInAppMessageButtonClick logInAppMessageClick logInAppMessageHtmlClick logInAppMessageImpression logPurchase openSession requestPushPermission removeAllSubscriptions removeSubscription requestContentCardsRefresh requestFeedRefresh requestImmediateDataFlush enableSDK isDisabled setLogger setSdkAuthenticationSignature addSdkMetadata disableSDK subscribeToContentCardsUpdates subscribeToFeedUpdates subscribeToInAppMessage subscribeToSdkAuthenticationFailures toggleLogging unregisterPush wipeData handleBrazeAction".split(" "), i = 0; i < s.length; i++) { for (var m = s[i], k = a.braze, l = m.split("."), j = 0; j < l.length - 1; j++)k = k[l[j]]; k[l[j]] = (new Function("return function " + m.replace(/\./g, "_") + "(){window.brazeQueue.push(arguments); return true}"))() } window.braze.getCachedContentCards = function () { return new window.braze.ContentCards }; window.braze.getCachedFeed = function () { return new window.braze.Feed }; window.braze.getUser = function () { return new window.braze.User }; (y = p.createElement(P)).type = 'text/javascript';
    y.src = 'https://js.appboycdn.com/web-sdk/5.9/braze.min.js';
    y.async = 1; (b = p.getElementsByTagName(P)[0]).parentNode.insertBefore(y, b);
}(window, document, 'script');

var luxmaxBrazeProdKey = 'ceecd209-9073-4584-95bb-5076dcca26a8'
var luxmaxBrazeDevKey = 'c69fd386-c1c9-4a2e-ad1f-852a277b4dd0'
var luxmaxBrazeAdminKey = '6e322aed-e91b-41c6-8845-2710e11d2ba1'
var luxmaxBrazeOfficialKey = 'b5df0871-77e3-4294-b36b-52f70c9a2806'
var luxmaxHandsOnBrazeProdKey = 'c86d6586-39bd-4d79-8621-bb92390a3bbb'
var kGroupBrazeKey = 'cae18af2-4b2a-48ac-bc92-395cc3583261'

// Luxmax Prod group 
braze.initialize(luxmaxBrazeProdKey, {
    baseUrl: "sdk.iad-01.braze.com",
    // requireExplicitInAppMessageDismissal: true,
    minimumIntervalBetweenTriggerActionsInSeconds: 0,
    allowUserSuppliedJavascript: true,
    enableLogging: true,
    sessionTimeoutInSeconds: 10
});

////////////////////////////////////////////////////////////////////////
// extras coupon issue sample
braze.subscribeToInAppMessage(function (inAppMessage) {

    //// soft prompt custom
    if (inAppMessage instanceof braze.ControlMessage) {
        return braze.showInAppMessage(inAppMessage);
    }

    if (inAppMessage instanceof braze.InAppMessage) {
        // in app payload display
        console.log("======== in app message information ========");
        console.log(inAppMessage);
        console.log(inAppMessage.extras['style']);
        console.log("============================================");

        // extras check 
        var extras = inAppMessage.extras;
        if (extras) {

            // soft prompt 
            if (extras["msg-id"] === "push-primer") {
                // We don't want to display the soft push prompt to users on browsers
                // that don't support push, or if the user has already granted/blocked permission
                if (
                    braze.isPushSupported() === false ||
                    braze.isPushPermissionGranted() ||
                    braze.isPushBlocked()
                ) {
                    // do not call `showInAppMessage`
                    return;
                }

                // user is eligible to receive the native prompt
                // register a click handler on one of the two buttons
                if (inAppMessage.buttons[0]) {
                    // Prompt the user when the first button is clicked
                    inAppMessage.buttons[0].subscribeToClickedEvent(function () {
                        alert('왼쪽 상단에 표시되는 동의절차에서 허용을 눌러주셔야 쿠폰 혜택을 드릴 수 있어요!');
                        braze.requestPushPermission(
                            function () {
                                // success!
                            },
                            function () {
                                // user declined
                            }
                        );
                    });
                };
            };

            if (extras["style"] === "custom") {
                // slide inapp style change (style 변경을 탐지하기 위해 mutation observer 사용)

                const observer = new MutationObserver((mutations, obs) => {
                    const el = document.querySelector('div.ab-in-app-message');
                    if (el && el.classList.contains('ab-slideup')) {
                        console.log('In-App Message 감지됨');
                        obs.disconnect(); // 더 이상 감지할 필요 없음

                        // inapp design
                        console.log(window.innerWidth);
                        if (window.innerWidth < 600) {
                            el.style.padding = "17px 10px 17px 10px";
                        } else {
                            el.style.padding = "17px 80px 17px 10px";
                        }
                        el.style.borderRadius = "25px";
                        el.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.4)";

                        // font load
                        const font = new FontFace("NanumSquareNeo", "url('assets/font/NanumSquareNeoOTF-Rg.otf')");
                        font.load().then(function (loadedFont) {
                            document.fonts.add(loadedFont);
                            const span = document.querySelector('div.ab-message-text.start-aligned.ab-with-image span');
                            if (span) {
                                span.style.fontFamily = "NanumSquareNeo";
                            } else {
                                console.warn("타겟 span을 찾을 수 없습니다.");
                            }
                        }).catch(function (error) {
                            console.error("폰트 로딩 실패:", error);
                        });

                        // close button activate
                        if (typeof extras !== 'undefined' && extras['close_button'] === 'true') {
                            try {
                                // close button display
                                document.querySelectorAll('.ab-close-button svg').forEach(svg => {
                                    svg.style.setProperty('width', '15px', 'important');
                                    svg.style.setProperty('height', '15px', 'important');
                                    svg.style.setProperty('fill', 'white', 'important');
                                    svg.style.setProperty('display', 'block', 'important');
                                    svg.style.setProperty('opacity', '1', 'important');
                                    svg.style.setProperty('visibility', 'visible', 'important');
                                });

                                // button style
                                document.querySelectorAll('.ab-close-button').forEach(btn => {
                                    btn.style.setProperty('width', '15px', 'important');
                                    btn.style.setProperty('height', '15px', 'important');
                                    btn.style.setProperty('position', 'absolute', 'important');
                                    btn.style.setProperty('padding', '20px', 'important');
                                    btn.style.setProperty('top', '50%', 'important');
                                    btn.style.setProperty('transform', 'translateY(-50%)', 'important');
                                    btn.style.setProperty('z-index', '9999', 'important');
                                    btn.style.setProperty('display', 'block', 'important');
                                    btn.style.setProperty('visibility', 'visible', 'important');
                                    btn.style.setProperty('opacity', '1', 'important');
                                    btn.style.setProperty('pointer-events', 'auto', 'important');
                                });

                                // chevron non-display
                                document.querySelectorAll('.ab-close-button .ab-chevron').forEach(el => {
                                    el.style.setProperty('display', 'none', 'important');
                                });
                            } catch (error) {
                                console.log(error);
                            }
                        }
                    }
                });

                // 감시 시작
                observer.observe(document.body, {
                    childList: true,
                    subtree: true
                });

            }
        }
    }
    braze.showInAppMessage(inAppMessage);
});
////////////////////////////////////////////////////////////////////////

window.addEventListener('message', function (event) {
    const receivedData = event.data;
    if (receivedData.action === 'brazeCouponIssue') {
        console.log('Received coupon code:', receivedData.couponCode);
        couponIssue(receivedData.couponCode);
    }
});


// if you use Content Cards
braze.subscribeToContentCardsUpdates(function (cards) {
    // cards have been updat
});

// braze.requestPushPermission();



setTimeout(() => {
    braze.subscribeToBannersUpdates((banners) => {

        // get this placement's banner. If it's `null` the user did not qualify for one.
        var globalBanner = braze.getBanner("main");
        if (!globalBanner) {
            return;
        }

        // choose where in the DOM you want to insert the banner HTML
        setTimeout(() => {
            var container = document.getElementById("global-banner-container");
            console.log(container);
            braze.insertBanner(globalBanner, container);
        }, 90);

        // Insert the banner which replaces the innerHTML of that container


        // Special handling if the user is part of a Control Variant
        if (globalBanner.isControl) {
            // hide or collapse the container
            container.style.display = 'none';
        }
    });

    braze.requestBannersRefresh(["main"]);
}, 90);






// Be sure to call `openSession` after `automaticallyShowInAppMessages`
braze.openSession();


// amplitude init
var amplitudeSdkKey = "cf4c439c94d3b0d118d74737fc630588";
var setAutoCapture = true;

window.amplitude.init(amplitudeSdkKey,
    {
        autocapture: {
            attribution: {
                excludeReferrers: ["luxmax.netlify.app", "luxmax.world"],
                resetSessionOnNewCampaign: false
            }, // utm 등 자동 수집
            sessions: true, // 세션 자동 수집
            pageViews: setAutoCapture,     //페이지뷰 자동 수집
            formInteractions: setAutoCapture,  //폼양식 자동 수집
            elementInteractions: setAutoCapture, //비주얼 레이블링
            fileDownloads: setAutoCapture   //파일다운로드 자동 수집
        },
        logLevel: 0, //Amplitude Debug 로그
        minIdLength: 1 //User ID 최소 길이 값 제어
    }
);


window.sessionReplay.init(amplitudeSdkKey, {
    sampleRate: "100"
    //...other options
})






setTimeout(() => {
    const featureFlag = braze.getFeatureFlag("featureFlag_test");
    braze.logFeatureFlagImpression("featureFlag_test");
    braze.refreshFeatureFlags();
    if (featureFlag?.enabled) {
        const carousel = document.querySelector('.carousel');
        if (carousel) {
            carousel.style.display = 'block';
        }
    } else {
        // use old feature
    }

}, 150);
