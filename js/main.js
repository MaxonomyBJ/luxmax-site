$(document).ready(function () {
    $("#navbarCommon").load("common.html", function () {
        // common.html이 로드된 후에 실행되는 콜백 함수
        // 네비게이션 바의 내용을 변경하는 작업을 수행합니다.
        try { cart_badge_write() } catch (e) { console.log(e) }
        try {
            if (!getUserId()) {
                document.getElementById('login_text').innerHTML = '<i id="login_text" class="bi bi-box-arrow-in-left me-1"></i>';
            } else {
                document.getElementById('login_text').innerHTML = '<i id="login_text" class="bi bi-box-arrow-right me-1"></i>';
                changeUser(getUserId());
            }
        } catch (e) {
            console.log(e);
        }

        // 도진님 요청(24/04/29), GNB 아이콘 알림 버튼 클릭 시 Push Permission 노출 
        var alarms = document.getElementsByClassName('btn')[0];
        alarms.addEventListener('click', function (event) {
            try {
                braze.requestPushPermission();
            } catch (error) {
                console.log('requestPushPermission error', error);
            }
        });
    });
});


// try {
//     braze.requestPushPermission();
// } catch (error) {
//     console.log('requestPushPermission error', error);
// }
// is initial login 
let loginHistory = localStorage.getItem("lm.stroage.login.loginHistory");
if (loginHistory == null) {
    brazeLogCustomEvent("최초 진입");
}

// var item = [];

// // Google Sheets API URL with your spreadsheet key
// const apiUrl = "https://sheets.googleapis.com/v4/spreadsheets/1a_KCEDEK2wbRcKn8ywBi6cbiG5Im8Ow8UCfABLXghRg?includeGridData=true&ranges=item!A:L&key=AIzaSyBXUiL9x22oeiK0VepHGfqk8_3caQ7dh8k";

// // Make an Ajax request to the Google Sheets API
// const xhr = new XMLHttpRequest();
// xhr.open("GET", apiUrl, true);
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             const result = JSON.parse(xhr.responseText);
//             const rowData = result.sheets[0].data[0].rowData;

//             // Check if the data exists
//             if (rowData) {
//                 const rowLength = rowData.length - 1;
//                 // Loop through rows and columns to display the data
//                 for (let j = 1; j < rowLength; j++) {
//                     const rowValues = rowData[j].values;
//                     let rowOutput = {};

//                     for (let i = 1; i < rowValues.length; i++) {
//                         const colValue = rowValues[i].formattedValue;
//                         const colHeader = rowData[0].values[i].formattedValue;

//                         // Store the data in the rowOutput object
//                         rowOutput[colHeader] = colValue;
//                     }

//                     // Push the row data to the item array
//                     item.push(rowOutput);
//                 }

//                 // Log the resulting array
//                 console.log(item);
//             } else {
//                 console.error("No data found.");
//             }
//         } else {
//             console.error("Failed to fetch data. Status code: " + xhr.status);
//         }
//     }
// };
// xhr.send();

// item object 
var item = [
    {
        id: "0000046",
        badge: "New",
        name: "[톰브라운] 센터백 스트라이프 반팔티셔츠",
        review: 5,
        price: 479000,
        salePrice: 426310,
        category: "의류",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/6427d4c0118a210b92a1a687/original.jpeg?1680331967",
        time: "1시간 전",
        timeString: "60",
        brand: "톰브라운"
    },
    {
        id: "0000047",
        badge: "Best",
        name: "[아미] 스몰 하트 로고 반팔티",
        review: 4,
        price: 198000,
        salePrice: 174420,
        category: "의류",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/6427d4bf679bdd439f2d21fa/original.jpeg?1680331967",
        time: "3시간 전",
        timeString: "180",
        brand: "아미"
    },
    {
        id: "0000048",
        badge: "New",
        name: "[셀린느] Mohair cardigan",
        review: 5,
        price: 4749500,
        salePrice: 4500000,
        category: "의류",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/6427d80c3849ee2a91c868d6/original.png?1680332812",
        time: "1시간 전",
        timeString: "180",
        brand: "셀린느"
    },
    {
        id: "0000049",
        badge: "Sale",
        name: "[셀린느] 로얄 블루 16 레터링 로고 티",
        review: 5,
        price: 790000,
        salePrice: 608000,
        category: "의류",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/6427d80b894d8c4482981234/original.png?1680332811",
        time: "",
        timeString: "",
        brand: "셀린느"
    },
    {
        id: "0000050",
        badge: "Best",
        name: "[디올] 11주년 버튼플라이 19CM 생지 데님진",
        review: 3,
        price: 432000,
        salePrice: 369000,
        category: "의류",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/6427d80c5d6d2b7743e78253/original.png?1680332812",
        time: "",
        timeString: "",
        brand: "디올"
    },
    {
        id: "0000051",
        badge: "New",
        name: "[끌로에] WOODY 우디백 스몰 토트 스트랩끈포함 브라운 네이비",
        review: 5,
        price: 1700000,
        salePrice: 1250000,
        category: "가방",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/6427d80b86063d2c15fcf033/original.png?1680332811",
        time: "1시간 전",
        timeString: "60",
        brand: "끌로에"
    },
    {
        id: "0000001",
        badge: "Best",
        name: "[몽클레어] 클로에 여성 롱패딩 블랙",
        review: 5,
        price: 4041000,
        salePrice: 3434850,
        category: "의류",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707c32eff12c3c3d94d504/original.jpg?1668316210",
        time: "",
        timeString: "",
        brand: "몽클레어"
    },
    {
        id: "0000002",
        badge: "New",
        name: "[디올] 페이던트 미니 레이디백 M0505OWCB",
        review: 5,
        price: 8203000,
        salePrice: 7257640,
        category: "가방",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707c329b7c1f082fc6c4bf/original.jpg?1668316210",
        time: "",
        timeString: "",
        brand: "디올"
    },
    {
        id: "0000003",
        badge: "Best",
        name: "[루이비통] 여자 명품 지갑 일본한정 M81288",
        review: 4,
        price: 1451000,
        salePrice: 1262370,
        category: "지갑",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707c32c7a9b84d73014804/original.jpg?1668316210",
        time: "1시간 전",
        timeString: "",
        brand: "루이비통"
    },
    {
        id: "0000004",
        badge: "New",
        name: "[프라다] 블랙 레더 레이스업 슈즈 1E708L",
        review: 4,
        price: 1007000,
        salePrice: 857890,
        category: "신발",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707c3167788517ac65b92c/original.jpg?1668316209",
        time: "",
        timeString: "",
        brand: "프라다"
    },
    {
        id: "0000005",
        badge: "Sale",
        name: "[생로랑] 모노그램 선셋 미디엄 스네이크 이펙트 백 442906",
        review: 5,
        price: 3545000,
        salePrice: 3282670,
        category: "가방",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e10eff12c530194d4d0/original.jpg?1668316688",
        time: "3시간 전",
        timeString: "180",
        brand: "생로랑"
    },
    {
        id: "0000006",
        badge: "Sale",
        name: "[톰브라운] 폴리 트윌 풋볼 패딩점퍼",
        review: 4,
        price: 2699900,
        salePrice: 1950100,
        category: "의류",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e1067788517ac65b93e/original.jpg?1668316688",
        time: "",
        timeString: "",
        brand: "톰브라운"
    },
    {
        id: "0000007",
        badge: "Sale",
        name: "[구찌] 라이톤 더티 스니커즈 498916 A9L00",
        review: 5,
        price: 1174000,
        salePrice: 1021380,
        category: "신발",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e1001c03f2332135f55/original.jpg?1668316688",
        time: "",
        timeString: "",
        brand: "구찌"
    },
    {
        id: "0000008",
        badge: "Best",
        name: "[프라다] 라벨루쏘 브러시드 가죽 더비 슈즈 2EE307 B4L F0002",
        review: 5,
        price: 885000,
        salePrice: 672000,
        category: "신발",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e105a0bdd462be6252c/original.jpg?1668316688",
        time: "",
        timeString: "",
        brand: "프라다"
    },
    {
        id: "0000009",
        badge: "Best",
        name: "[프라다] 숏패딩 라이트 리나이론 여성 다운 자켓",
        review: 3,
        price: 3626000,
        salePrice: 3154620,
        category: "의류",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e102a8c3f54dff87578/original.jpg?1668316688",
        time: "",
        timeString: "",
        brand: "프라다"
    },
    {
        id: "0000010",
        badge: "New",
        name: "[프라다] 여성 리나일론 패딩 29F430",
        review: 5,
        price: 2028000,
        salePrice: 1633800,
        category: "의류",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e10c7a9b84d73014842/original.jpg?1668316688",
        time: "",
        timeString: "",
        brand: "프라다"
    },
    {
        id: "0000011",
        badge: "Best",
        name: "[톰브라운] MOD040X 415 클래식 사선 다운필드 롱 패딩",
        review: 5,
        price: 3085000,
        salePrice: 2485350,
        category: "의류",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e0f258e4d606125ef3f/original.jpg?1668316687",
        time: "18분 전",
        timeString: "18",
        brand: "톰브라운"
    },
    {
        id: "0000012",
        badge: "New",
        name: "[루이비통] 에밀리 장지갑 여성 지갑 M60697",
        review: 3,
        price: 856300,
        salePrice: 744990,
        category: "지갑",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e104ce0460fb80f814b/original.jpg?1668316688",
        time: "",
        timeString: "",
        brand: "루이비통"
    },
    {
        id: "0000013",
        badge: "Sale",
        name: "[생로랑] 모노그램 루루 토이",
        review: 4,
        price: 2481000,
        salePrice: 2158470,
        category: "가방",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e0f0e1c0767778a6b5d/original.jpeg?1668316687",
        time: "2시간 전",
        timeString: "120",
        brand: "생로랑"
    },
    {
        id: "0000014",
        badge: "Sale",
        name: "[프라다] 22FW 사피아노 블랙 숄더백",
        review: 4,
        price: 2496000,
        salePrice: 2171520,
        category: "가방",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e0f4ce0460fb80f814a/original.jpeg?1668316687",
        time: "",
        timeString: "",
        brand: "프라다"
    },
    {
        id: "0000015",
        badge: "Best",
        name: "[BREITLING] Superocean Watch A17366021B1A1",
        review: 5,
        price: 4109000,
        salePrice: 3549000,
        category: "시계",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e10c162b76e76765763/original.jpg?1668316688",
        time: "",
        timeString: "",
        brand: "BREITLING"
    },
    {
        id: "0000016",
        badge: "Sale",
        name: "[IWC] Portofino Chronograph Silver Dial",
        review: 4,
        price: 8900000,
        salePrice: 7015000,
        category: "시계",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e1079a8655abc749b9a/original.jpg?1668316688",
        time: "",
        timeString: "",
        brand: "IWC"
    },
    {
        id: "0000017",
        badge: "New",
        name: "[디올] 카드지갑 새들 플랩 오블리크 블루 S5611CTZQ",
        review: 5,
        price: 1009000,
        salePrice: 908620,
        category: "지갑",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e106933103384695fa9/original.jpg?1668316688",
        time: "",
        timeString: "",
        brand: "디올"
    },
    {
        id: "0000018",
        badge: "New",
        name: "[구찌] 여성 브이넥 미디 원피스 드레스",
        review: 5,
        price: 1887900,
        salePrice: 1829380,
        category: "의류",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e101b20174e33d8bd4e/original.jpg?1668316688",
        time: "4시간 전",
        timeString: "240",
        brand: "구찌"
    },
    {
        id: "0000019",
        badge: "New",
        name: "[프라다] 레더 시어링 방한 스니커즈",
        review: 4,
        price: 1734500,
        salePrice: 1509200,
        category: "신발",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e101617241e093aa10b/original.jpg?1668316688",
        time: "18시간 전",
        timeString: "1080",
        brand: "프라다"
    },
    {
        id: "0000020",
        badge: "Sale",
        name: "[프라다] 1E344L 3V98 F0O5M 로고 니트 스니커즈",
        review: 5,
        price: 798900,
        salePrice: 680620,
        category: "신발",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e100ac5ad004ebdc980/original.jpg?1668316688",
        time: "41분 전",
        timeString: "41",
        brand: "프라다"
    },
    {
        id: "0000021",
        badge: "Sale",
        name: "[구찌] 260987 BMJ1N 1000 마이크로시마 GG 반지갑",
        review: 5,
        price: 499000,
        salePrice: 409180,
        category: "지갑",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e101415b16efc693740/original.jpg?1668316688",
        time: "",
        timeString: "",
        brand: "구찌"
    },
    {
        id: "0000022",
        badge: "Sale",
        name: "[생로랑] 카산드라 마틀라세 695108 BOW01 ",
        review: 3,
        price: 1899000,
        salePrice: 1773000,
        category: "가방",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e10a2604c2f13ef7541/original.jpg?1668316688",
        time: "",
        timeString: "",
        brand: "생로랑"
    },
    {
        id: "0000023",
        badge: "Best",
        name: "[프라다] 삼각 로고 포코노 백팩 1BZ677 V44",
        review: 4,
        price: 2240000,
        salePrice: 1555680,
        category: "가방",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e1079a8654e5e749b9a/original.jpg?1668316688",
        time: "",
        timeString: "",
        brand: "프라다"
    },
    {
        id: "0000024",
        badge: "Best",
        name: "[루이비통] 토트백 BB삭플라 모노그램 브라운",
        review: 3,
        price: 4160000,
        salePrice: 3428430,
        category: "가방",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e1074c142777748bcc7/original.jpg?1668316688",
        time: "",
        timeString: "",
        brand: "루이비통"
    },
    {
        id: "0000025",
        badge: "Sale",
        name: "[몽클레어] 로고 패치 BOED 블랙 퍼후드 여성 숏 패딩 자켓",
        review: 5,
        price: 3800000,
        salePrice: 3306000,
        category: "의류",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e102354904bc139a1c8/original.jpg?1668316688",
        time: "",
        timeString: "",
        brand: "몽클레어"
    },
    {
        id: "0000026",
        badge: "New",
        name: "[톰브라운] 사선완장 MJD061X 05411 415",
        review: 4,
        price: 2554900,
        salePrice: 2010970,
        category: "의류",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e1016172428f63aa0dd/original.jpg?1668316688",
        time: "",
        timeString: "",
        brand: "톰브라운"
    },
    {
        id: "0000027",
        badge: "Sale",
        name: "[프라다] 여성 퍼 트리밍 롱패딩 291795 ROK",
        review: 4,
        price: 2467000,
        salePrice: 2056010,
        category: "의류",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e10eff12c471994d4f2/original.jpg?1668316688",
        time: "11분 전",
        timeString: "11",
        brand: "프라다"
    },
    {
        id: "0000028",
        badge: "Best",
        name: "[디올] 블랙 칼로 더비 슈즈 3DE339ZJQ H900",
        review: 5,
        price: 1036000,
        salePrice: 901320,
        category: "신발",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e0ff8ff2f4e2d8fc285/original.jpg?1668316687",
        time: "",
        timeString: "",
        brand: "디올"
    },
    {
        id: "0000029",
        badge: "New",
        name: "[발렌시아가] 22SS 542023 W3AC1 1090",
        review: 5,
        price: 971200,
        salePrice: 876420,
        category: "신발",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e10412a960757943b30/original.jpg?1668316688",
        time: "",
        timeString: "",
        brand: "발렌시아가"
    },
    {
        id: "0000030",
        badge: "Sale",
        name: "[버버리] 엠버포드 트렌치 코트 블랙/40624611",
        review: 4,
        price: 1128000,
        salePrice: 981360,
        category: "의류",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e0f2354904bc139a1c7/original.jpg?1668316687",
        time: "52분 전",
        timeString: "52",
        brand: "버버리"
    },
    {
        id: "0000031",
        badge: "Best",
        name: "[톰브라운] 센터백 스트라이프 MJT085A 03377",
        review: 5,
        price: 611300,
        salePrice: 506530,
        category: "의류",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e109b7c1f082fc6c4ee/original.jpg?1668316688",
        time: "",
        timeString: "",
        brand: "톰브라운"
    },
    {
        id: "0000032",
        badge: "New",
        name: "[루이비통] 슬렌더 월릿 에피 반지갑 에삐 남성 반지갑",
        review: 5,
        price: 1108900,
        salePrice: 1003570,
        category: "지갑",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e1001c03f20b1135f8a/original.jpg?1668316688",
        time: "",
        timeString: "",
        brand: "루이비통"
    },
    {
        id: "0000033",
        badge: "Best",
        name: "[구찌] 22FW 구찌 소호 토트백 숄더백",
        review: 5,
        price: 2574000,
        salePrice: 2500380,
        category: "가방",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e0f2d19357c54b1c885/original.jpeg?1668316687",
        time: "2시간 전",
        timeString: "120",
        brand: "구찌"
    },
    {
        id: "0000034",
        badge: "New",
        name: "[구찌] 다이브 YA136208A 남성 메탈 시계",
        review: 5,
        price: 1654200,
        salePrice: 1439160,
        category: "시계",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e109aab4c3a3e5b2951/original.jpg?1668316688",
        time: "",
        timeString: "",
        brand: "구찌"
    },
    {
        id: "0000035",
        badge: "Sale",
        name: "[IWC] Portofino Automatic Leather Strap",
        review: 4,
        price: 5468000,
        salePrice: 5089000,
        category: "시계",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e106933103384695fa8/original.jpg?1668316688",
        time: "1시간 전",
        timeString: "60",
        brand: "IWC"
    },
    {
        id: "0000036",
        badge: "Best",
        name: "[BREITLING] A165C-1WBA Navitimer 1 Automatic Watch",
        review: 5,
        price: 4590000,
        salePrice: 4214000,
        category: "시계",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e10258e4d606125ef41/original.jpg?1668316688",
        time: "",
        timeString: "",
        brand: "BREITLING"
    },
    {
        id: "0000037",
        badge: "Sale",
        name: "[보테가베네타] 남성용 안트레치아토 반지갑",
        review: 5,
        price: 510000,
        salePrice: 448250,
        category: "지갑",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e102d19357c54b1c886/original.jpg?1668316688",
        time: "",
        timeString: "",
        brand: "보테가베네타"
    },
    {
        id: "0000038",
        badge: "Sale",
        name: "[태그호이어] 까레라 CBM2112.FC6455",
        review: 5,
        price: 5500000,
        salePrice: 4785000,
        category: "시계",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e101415b16049693740/original.jpg?1668316688",
        time: "",
        timeString: "",
        brand: "태그호이어"
    },
    {
        id: "0000039",
        badge: "Best",
        name: "[프라다] 남성용 사피아노 반지갑 2MO513",
        review: 4,
        price: 645000,
        salePrice: 561450,
        category: "지갑",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e1079a8654496749bda/original.jpg?1668316688",
        time: "",
        timeString: "",
        brand: "프라다"
    },
    {
        id: "0000040",
        badge: "Best",
        name: "[톰브라운] 21FW 밀라노 스티치 면 가디건",
        review: 5,
        price: 1950000,
        salePrice: 1643200,
        category: "의류",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e10c162b76e76765762/original.jpg?1668316688",
        time: "",
        timeString: "",
        brand: "톰브라운"
    },
    {
        id: "0000041",
        badge: "Sale",
        name: "[보테가베네타] 인트레치아토 크로스백 245354",
        review: 4,
        price: 1780000,
        salePrice: 1648280,
        category: "가방",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e0fb312e9032b7b65c6/original.jpg?1668316687",
        time: "",
        timeString: "",
        brand: "보테가베네타"
    },
    {
        id: "0000042",
        badge: "Sale",
        name: "[구찌] 웹 스트라이프 레이스업 더비슈즈",
        review: 4,
        price: 1464900,
        salePrice: 1207300,
        category: "신발",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e0f2354904bc139a1c6/original.jpg?1668316687",
        time: "",
        timeString: "",
        brand: "구찌"
    },
    {
        id: "0000043",
        badge: "Best",
        name: "[보테가베네타] 벨트 카세트백 애시드 키위",
        review: 5,
        price: 2285800,
        salePrice: 1988650,
        category: "가방",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e0f258e4d606125ef40/original.jpg?1668316687",
        time: "",
        timeString: "",
        brand: "보테가베네타"
    },
    {
        id: "0000044",
        badge: "New",
        name: "[구찌] 에이스 러브 스니커즈 497090",
        review: 5,
        price: 802000,
        salePrice: 697740,
        category: "신발",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e0ff8ff2f4e2d8fc284/original.jpg?1668316687",
        time: "",
        timeString: "",
        brand: "구찌"
    },
    {
        id: "0000045",
        badge: "New",
        name: "[태그호이어] 까레라 CBK2110.BA0715 ",
        review: 5,
        price: 5000000,
        salePrice: 4350000,
        category: "시계",
        image: "https://braze-images.com/appboy/communication/assets/image_assets/images/63707e0fa2604c2f13ef7540/original.jpg?1668316687",
        time: "2시간 전",
        timeString: "120",
        brand: "태그호이어"
    }
];

// coupon object
var coupon = [
    { cpnId: "CPN0001", cpnName: "신규가입 축하 쿠폰", upperLimit: 1000000, botLimit: 0, discount: 0.02, dueDate: 24, isForMembership: true },
    { cpnId: "CPN0002", cpnName: "Luxmax 탄생 기념 쿠폰", upperLimit: 500000, botLimit: 0, discount: 100000, dueDate: 96, isForMembership: false },
    { cpnId: "CPN0003", cpnName: new Date().getMonth() + 1 + "월 초특가 일반 쿠폰", upperLimit: 100000, botLimit: 0, discount: 0.03, dueDate: 1, isForMembership: false },
    { cpnId: "CPN0004", cpnName: new Date().getMonth() + 1 + "월 초특가 멤버십 쿠폰", upperLimit: 100000, botLimit: 0, discount: 0.05, dueDate: 1, isForMembership: true },
    { cpnId: "CPN0005", cpnName: "쇼핑 지원 쿠폰", upperLimit: 50000, botLimit: 0, discount: 50000, dueDate: 3, isForMembership: false }
];

// membership object 
var membership = [
    { memId: "MEM0001", memName: "전상품 무제한 1% 할인 (1일권)", durationHours: 24, memPrice: 800000, memDicount: 0.01 },
    { memId: "MEM0002", memName: "전상품 무제한 1% 할인 (7일권)", durationHours: 168, memPrice: 2000000, memDicount: 0.01 },
    { memId: "MEM0003", memName: "전상품 무제한 3% 할인 (1일권)", durationHours: 24, memPrice: 3000000, memDicount: 0.03 },
    { memId: "MEM0004", memName: "전상품 무제한 3% 할인 (7일권)", durationHours: 168, memPrice: 5800000, memDicount: 0.03 }
];

// 최초 진입 시 셔플 
var item = applyShuffleIfNeeded(item, 'lm.storage.item.shuffleApplied');


// 장바구니에 물건을 추가하는 함수
function addToCartById(id, isPDP) {
    event.stopPropagation();
    // 로컬 스토리지에서 저장된 장바구니 데이터 가져오기
    var cartItems = localStorage.getItem('lm.storage.item.cartItems');
    var cart = [];

    // 로컬 스토리지에 데이터가 이미 있는 경우, 파싱하여 배열로 변환
    if (cartItems) {
        cart = JSON.parse(cartItems);
    }

    // 선택한 id 기준의 상품 정보 가져오기
    var item_detail = getItemById(id);

    // 추가 정보 및 매핑 값 입력 (For SaaS)
    if (item_detail.timeString != null) {
        var timezoneOffset = new Date().getTimezoneOffset() * 60000;
        var regOffset = item_detail.timeString * 60000;
        var timezoneDate = new Date(Date.now() - timezoneOffset - regOffset);
        var regTime = timezoneDate.toISOString()
    }
    item_detail['regTime'] = regTime;
    item_detail['clickedFrom'] = isPDP ? "PDP" : "PLP";

    // 중복된 아이템이 있는 경우 알림을 표시하고 함수 종료
    if (findCartItemsById(item_detail.id)) {
        // alert('이미 장바구니에 추가된 상품입니다.');
        Swal.fire({
            title: '이미 추가된 상품입니다.',
            text: '장바구니로 이동하시겠어요?',
            icon: 'warning',
            confirmButtonText: '장바구니로 이동하기',
            showCloseButton: true,
            showCancelButton: true,
            cancelButtonText: '계속 쇼핑하기',
            confirmButtonColor: '#FF407D', // 확인 버튼 색상 설정
            cancelButtonColor: '#1B3C73' // 취소 버튼 색상 설정
        }).then((result) => {
            if (result.isConfirmed) {
                // If the confirm button is clicked, redirect to index.html
                window.location.href = '/cart.html';
            } else {
                // Handle the case where the user clicks the cancel button or closes the modal
                // You can add additional logic here if needed
            }
        });

        // SaaS Log
        amplitudeLogCustomEvent("장바구니 중복 추가", item_detail);
        brazeLogCustomEvent("장바구니 중복 추가", item_detail);
        return;
    }

    // 장바구니에 물건 정보 추가
    cart.push(item_detail);

    // 로컬 스토리지에 장바구니 데이터 저장
    localStorage.setItem('lm.storage.item.cartItems', JSON.stringify(cart));

    Swal.fire({
        title: '장바구니 추가 완료',
        text: '자동으로 닫힙니다.',
        icon: 'success',
        timer: 780,
        showConfirmButton: false, // 확인 버튼을 표시하지 않음
    });
    // alert("장바구니에 담겼습니다.")

    // displaying alert and cart badge DOM write 
    try { cart_badge_write() } catch (e) { console.log(e) }

    // // SaaS Log
    var today = getDateByString()
    brazeLogCustomEvent("장바구니 추가", item_detail);
    amplitudeLogCustomEvent("장바구니 추가", item_detail);
    brazeAddCustomAttribute("장바구니 이력", "date_" + today + "/prdNo_" + item_detail.id + "/prdNm_" + item_detail.name + "/catNm_" + item_detail.category + "/price_" + item_detail.price + "/salePrice_" + item_detail.salePrice + "/tag_" + item_detail.badge + "/brand_" + item_detail.brand);
    brazeAddCustomAttribute("장바구니 리스트", item_detail.id);

}

// 로컬 스토리지에서 카트 정보 있는지 확인하여 데이터 가져오는 함수
function findCartItemsById(id) {
    var cartItems = JSON.parse(localStorage.getItem('lm.storage.item.cartItems'));
    if (cartItems == null || cartItems.length == 0) {
        return null;
    }
    for (var i = 0; i < cartItems.length; i++) {
        if (cartItems[i].id === id) {
            return cartItems[i];
        }
    }
    return null; // 매칭되는 상품이 없을 경우 null 반환
}

// 갖고 있는 모든 상품 정보에서 id 기준 상품 정보 가져오는 함수
function getItemById(id) {
    for (var i = 0; i < item.length; i++) {
        if (item[i].id === id) {
            return item[i];
        }
    }
    return null; // 매칭되는 상품이 없을 경우 null 반환
}

function getCouponById(id) {
    for (var i = 0; i < coupon.length; i++) {
        if (coupon[i].cpnId === id) {
            return coupon[i];
        }
    }
    return null; // 매칭되는 상품이 없을 경우 null 반환
}

// index.html에서 직접 호출
// Login Box Display by login status
// try {
//     if (!getUserId()) {
//         document.getElementById('login_text').innerHTML = '<i id="login_text" class="bi bi-box-arrow-in-left me-1"></i>';
//     } else {
//         document.getElementById('login_text').innerHTML = '<i id="login_text" class="bi bi-box-arrow-right me-1"></i>';
//         changeUser(getUserId());
//     }
// } catch (e) {
//     console.log(e);
// }

// Cart Badge DOM Wright 
// try { cart_badge_write() } catch (e) { console.log(e) }

// Cart Page Check & Display Products
url = String(document.URL);
let query_index = []
// Is Cart Page
if (url.indexOf('/cart') > -1) {
    // When Cart Page, List Up For Cart List By Local Storage
    var cartItems = JSON.parse(localStorage.getItem('lm.storage.item.cartItems'));

    // DOM write when cart is empty
    if (cartItems == null || cartItems.length == 0) {
        document.getElementById('main_section').innerHTML = '<h4 style="text-align:center">장바구니에 담긴 상품이 없습니다.</h4>\
        <br><h6 style="text-align:center; margin-bottom:960px"><a href="index.html">여기</a>를 눌러서 쇼핑하러 가기</h6>';

        // SaaS Log
        brazeSetCustomAttribute("장바구니 리스트", null)
        brazeLogCustomEvent('장바구니 페이지 진입', { "장바구니 상품수": 0, "장바구니 상품 상세": null });
        amplitudeLogCustomEvent('장바구니 페이지 진입', { "장바구니 상품수": 0 });

    } else {
        // DOM write when cart is not empty
        var printItemAll = [];
        for (let i = 0; i < cartItems.length; i++) {
            printItemAll.push(printItem(cartItems[i], i));
        }
        document.getElementById('item_view').innerHTML = printItemAll.join('');

        // SaaS Log
        var cartItems_id = cartItems.map(obj => obj.id);
        const cart_total = cartItems
            .filter((cartItems) => cartItems_id.includes(cartItems?.id))
            .reduce((total, cartItems) => total + (cartItems?.salePrice || 0), 0);
        brazeSetCustomAttribute("장바구니 리스트", cartItems_id)
        brazeLogCustomEvent('장바구니 페이지 진입', { "장바구니 상품수": cartItems.length, "장바구니 금액 합계": cart_total, "장바구니 상품 상세": cartItems });
        amplitudeLogCustomEvent('장바구니 페이지 진입', { "장바구니 상품수": cartItems.length, "장바구니 금액 합계": cart_total, "장바구니 상품 상세": cartItems });
    }

} else if (url.indexOf('/mypage') > -1) {
    // When My Page
    try {
        braze.requestPushPermission();
    } catch (error) {
        console.log('requestPushPermission error', error);
    }
    brazeLogCustomEvent('마이페이지 진입');
    amplitudeLogCustomEvent('마이페이지 진입');
    if (getUserId() == null) {
        alert('회원정보 수정은 로그인 상태에서만 가능합니다.\n확인 버튼을 누르면 메인페이지로 이동합니다.');
        location.href = 'index.html'
    }
    if (getUserId()) {
        var userinfoStr = localStorage.getItem(`lm.storage.userinfo.${getUserId()}`);
        var userInfo = JSON.parse(userinfoStr);
        document.getElementById("phone").value = userInfo && userInfo.info && userInfo.info.phone || "";
        document.getElementById("first_name").value = userInfo && userInfo.info && userInfo.info.name || "";
        document.getElementById("email").value = userInfo && userInfo.info && userInfo.info.email || "";
        document.getElementById("pushSubscribe").value = userInfo && userInfo.info && userInfo.info.pushSubscribe || "";
        document.getElementById("emailSubscribe").value = userInfo && userInfo.info && userInfo.info.emailSubscribe || "";
        document.getElementById("smsSubscribe").value = userInfo && userInfo.info && userInfo.info.smsSubscribe || "";
        document.getElementById("gender").value = userInfo && userInfo.info && userInfo.info.gender || "";
        document.getElementById("dob").value = userInfo && userInfo.info && userInfo.info.dob || "";

    }
    // When coupon page
} else if (url.indexOf('/coupon') > -1) {

    brazeLogCustomEvent('쿠폰 페이지 진입');
    amplitudeLogCustomEvent('쿠폰 페이지 진입');

    var printItemAll = [];
    for (let i = 0; i < coupon.length; i++) {
        printItemAll.push(printCoupon(coupon[i]));
    }
    document.getElementById('coupon_view').innerHTML = printItemAll.join('');
    refreshCouponPage();

} else if (url.indexOf('/mycoupon') > -1) {
    var user_id = getUserId();
    if (!user_id) {
        alert('로그인 후 이용 가능합니다.');
        const prePage = document.referrer;
        if (prePage.indexOf('/mycoupon') > -1) {
            location.pathname = 'index.html';
        } else {
            window.history.back();
        }
    } else {
        // When My Coupon Page
        var coupon = getCouponByUserId(user_id);
        // Alert if Cart is empty
        if (!coupon || coupon.length == 0) {
            couponCount = 0;
            document.getElementById('main_section').innerHTML = '<h4 style="text-align:center">보유한 쿠폰이 없습니다.</h4>\
                    <br><h6 style="text-align:center; margin-bottom:960px"><a href="coupon.html">여기</a>를 눌러서 받을 수 있는 쿠폰 확인하기</h6>';
        } else {
            var printItemAll = [];
            for (let i = 0; i < coupon.length; i++) {
                printItemAll.push(printCoupon(coupon[i]));
                couponCount = i + 1;
            }
            document.getElementById('coupon_view').innerHTML = printItemAll.join('');
        }

        // SaaS Log 
        var coupon_ids = coupon.map(obj => obj.cpnId);
        console.log(coupon_ids)
        brazeSetCustomAttribute('쿠폰 리스트', coupon_ids);

        brazeLogCustomEvent('나의 쿠폰 페이지 진입', { '보유 쿠폰 개수': couponCount, '보유 쿠폰 상세': coupon });
        amplitudeLogCustomEvent('나의 쿠폰 페이지 진입', { '보유 쿠폰 개수': couponCount, '보유 쿠폰 상세': coupon });
    }

} else if (url.indexOf('/membership') > -1) {
    // When Membership Page
    brazeLogCustomEvent('멤버십 페이지 진입');
    amplitudeLogCustomEvent('멤버십 페이지 진입');
    var userId = getUserId();
    if (userId) {
        var haveMembership = getMembershipByUserId(userId);
        if (haveMembership) {
            var memDueTo = new Date(haveMembership.memDueTo);
            try {
                document.getElementById(haveMembership.memId).innerText = '멤버십 이용 중\n~ ' + memDueTo.toLocaleString();
            } catch (e) {
                console.log(e);
            }
        }
    }

} else if (url.indexOf('/order') > -1) {
    // When Order Page

    // id 값 추출하여 배열로 표시
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var idValues = urlParams.get("id").split(",");
    var sort = urlParams.get("sort")
    var isEachPurchase = ("sort" === "All") ? false : ("sort" === "Each") ? true : undefined;

    // Log SaaS 
    var item_arrays = [];
    idValues.forEach(function (id) {
        item_arrays.push(getItemById(id));
    });

    if (!getUserId()) {
        brazeLogCustomEvent('주문서 페이지 진입', { "회원 주문 여부": false, "단일 상품 진입": isEachPurchase, "주문 예정 상품": item_arrays });
        amplitudeLogCustomEvent('주문서 페이지 진입', { "회원 주문 여부": false, "단일 상품 진입": isEachPurchase, "주문 예정 상품": item_arrays });
    } else {
        couponImport()
        brazeLogCustomEvent('주문서 페이지 진입', { "회원 주문 여부": true, "단일 상품 진입": isEachPurchase, "주문 예정 상품": item_arrays });
        amplitudeLogCustomEvent('주문서 페이지 진입', { "회원 주문 여부": true, "단일 상품 진입": isEachPurchase, "주문 예정 상품": item_arrays });
    }

    // 주문서 DOM Write 
    var printItemAll = [];
    for (let i = 0; i < idValues.length; i++) {
        printItemAll.push(orderItemComp(getItemById(idValues[i])));
    }
    document.getElementById('order_item_displaying').innerHTML = printItemAll.join('');

    // 금액 계산 후 DOM Write
    const salePrice_total = item
        .filter((item) => idValues.includes(item?.id))
        .reduce((total, item) => total + (item?.salePrice || 0), 0);

    document.getElementById('order_cartTotalPrice').innerText = Math.floor(Number(salePrice_total)).toLocaleString() + '원';
    membership_discount = membershipDiscount();
    document.getElementById('order_membership_discount').innerText = '- ' + Math.floor(Number(membership_discount)).toLocaleString() + '원';
    discount_total = salePrice_total - membership_discount;
    document.getElementById('order_purchaseTotalPrice').innerText = Math.floor(Number(discount_total)).toLocaleString() + '원';

} else if (url.indexOf('/product') > -1) {
    // When product detail page
    var target_item_id = getURLParams(url).prdId
    var item_detail = getItemById(target_item_id);
    const count = checkEventCount(target_item_id);

    if (item_detail.timeString != null) {
        var timezoneOffset = new Date().getTimezoneOffset() * 60000;
        var regOffset = item_detail.timeString * 60000;
        var timezoneDate = new Date(Date.now() - timezoneOffset - regOffset);
        var regTime = timezoneDate.toISOString()
    }
    item_detail['regTime'] = regTime;
    ;

    brazeLogCustomEvent('상품 상세페이지 진입', mergeObjects(item_detail, { '동일 세션 반복조회 수': count }));
    amplitudeLogCustomEvent('상품 상세페이지 진입', mergeObjects(item_detail, { '동일 세션 반복조회 수': count }));
    var today = getDateByString()
    brazeAddCustomAttribute("상품 상세페이지 진입 이력", "date_" + today + "/prdNo_" + item_detail.id + "/prdNm_" + item_detail.name + "/catNm_" + item_detail.category + "/price_" + item_detail.price + "/salePrice_" + item_detail.salePrice + "/tag_" + item_detail.badge + "/brand_" + item_detail.brand);
    var item_comp = printItem(item_detail);
    document.getElementById('item_view').innerHTML = item_comp;

} else {
    // When Searched
    if (url.indexOf('query') > -1) {
        // When Searched
        var searchYn = true;
        const urlParams = new URLSearchParams(new URL(url).search);
        const url_keyword = urlParams.get('query');

        // Search Result
        if (url.indexOf('sort') === -1) {
            let search_count = 0
            for (i in item) {
                if (item[i].name.indexOf(url_keyword) > -1 || item[i].badge.indexOf(url_keyword) > -1 || item[i].category.indexOf(url_keyword) > -1) {
                    search_count += 1
                }
            }
            brazeLogCustomEvent("검색 완료", { "검색어": url_keyword, "검색결과 수": search_count });
            brazeAddCustomAttribute("검색 이력", url_keyword);
            amplitudeLogCustomEvent("검색 완료", { "검색어": url_keyword, "검색결과 수": search_count });
            document.getElementById('search_result').innerHTML = '<b>' + url_keyword + '</b>에 대해 <b>' + search_count + '</b>개 상품이 검색되었습니다.';
        } else if (url.indexOf('category') > -1) {
            brazeLogCustomEvent("카테고리 상세페이지 진입", { "카테고리": url_keyword });
            amplitudeLogCustomEvent("카테고리 상세페이지 진입", { "카테고리": url_keyword });
        } else if (url.indexOf('tag') > -1) {
            brazeLogCustomEvent("태그 상세페이지 진입", { "태그": url_keyword });
            amplitudeLogCustomEvent("태그 상세페이지 진입", { "태그": url_keyword });
        }

        // Display Search Result
        var printItemAll = [];
        var search_count = 0;
        for (i in item) {
            if (item[i].name.indexOf(url_keyword) > -1 || item[i].badge.indexOf(url_keyword) > -1 || item[i].category.indexOf(url_keyword) > -1) {
                printItemAll.push(printItem(item[i], i));
                search_count += 1;
            }
        }
        document.getElementById('item_view').innerHTML = printItemAll.join('');

        // When Search Result is empty
        if (search_count == 0) {
            document.getElementById('main_section').innerHTML = '<h4 style="text-align:center; margin-top:50px; "><b>[ '
                + url_keyword +
                ' ]</b>에 대한 검색 결과가 없습니다.</h4><h6 style="text-align:center; margin-bottom:500px">정확한 검색어인지 확인해보신 후에 다시 검색해주시기 바랍니다.';
        }
    }
    else {
        // When Main Page (Not Searched)
        if (window.location.search === "") {
            brazeLogCustomEvent('메인 페이지 진입');
            amplitudeLogCustomEvent('메인 페이지 진입');
        }
        var printItemAll = [];
        for (let i = 0; i < item.length; i++) {
            printItemAll.push(printItem(item[i], i));
            try { document.getElementById('item_view').innerHTML = printItemAll.join('') } catch (e) { console.log(e) };
        }
    }
};




// Products dispalying func
function printItem(printItem, loop) {
    var number = Number(loop) + 1;
    // Is Cart
    if (String(document.URL).indexOf('/cart') > -1) {
        // Cart List Page Component
        var item_comp = '\
        <div class="col mb-5" id="prd_div">\
            <div class="card h-100">\
                <!-- Sale badge-->\
                <div id="prd_badge" class="badge bg-dark text-white position-absolute"\
                    style="top: 0.5rem; right: 0.5rem">'+ printItem.badge + '</div>\
                <!-- Product image-->\
                <a href="product.html?prdId='+ printItem.id + '"><img class="card-img-top" src="' + printItem.image + '" alt="..." id="prd_image"/></a> \
                <!-- Product details-->\
                <div class="card-body p-4">\
                    <div class="text-center">\
                        <!-- Product name-->\
                        <a href="product.html?prdId='+ printItem.id + '"><h5 name= "prd_name" class="fw-bolder">' + printItem.name + '</h5></a> \
                        <!-- Product reviews-->\
                        <a href="product.html?prdId='+ printItem.id + '"><div name="prd_review" class="d-flex justify-content-center small text-warning mb-2">' + starCount(printItem.review) + '\
                        </div></a> \
                        <!-- Product price-->\
                        <a href="product.html?prdId='+ printItem.id + '"><span name="prd_price" class="text-muted text-decoration-line-through">' + Number(printItem.price).toLocaleString() + '원</span></a><br>\
                        <a href="product.html?prdId='+ printItem.id + '"><span name="prd_salePrice">' + Number(printItem.salePrice).toLocaleString() + '원</span></a>\
                    </div>\
                </div>\
                        <!-- Product actions-->\
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">\
                            <div class="text-center">\
                                <button onclick="javascript:orderById(this.id);" id="'+ printItem.id + '"\
                                    name="purchaseFromCart_btn" class="btn btn-outline-dark mt-auto"\
                                    style="margin-right:7px"><i class="bi bi-credit-card"></i></button>\
                                <button onclick="javascript:removeCartItemButton(this.id);" id="'+ printItem.id + '"\
                                    name="removeFromCart_btn" class="btn btn-outline-dark mt-auto"><i class="bi bi-trash"></i></button>\
                            </div>\
                        </div>\
                    </div>\
                </div>'
        // Is Product Detail Page 
    } else if (String(document.URL).indexOf('/product') > -1) {
        var item_comp = '\
                <div class="product-detail-wrapper">\
                    <!-- Product Image Section (Left) -->\
                    <div class="product-image-section">\
                        <div class="product-badge">'+ printItem.badge + '</div>\
                        <div class="product-image-container">\
                            <img class="product-main-image" src="' + printItem.image + '" alt="' + printItem.name + '" id="prd_image"/>\
                        </div>\
                    </div>\
                    <!-- Product Info Section (Right) -->\
                    <div class="product-info-section">\
                        <div class="product-header">\
                            <h1 class="product-name" name="prd_name">' + printItem.name + '</h1>\
                            <div class="product-review" name="prd_review">\
                                <div class="review-stars">' + starCount(printItem.review) + '</div>\
                                <span class="review-score">' + printItem.review + '점</span>\
                            </div>\
                        </div>\
                        <div class="product-price-section">\
                            <div class="price-original">\
                                <span class="price-label">기본 가격</span>\
                                <span name="prd_price" class="price-value text-decoration-line-through">' + Number(printItem.price).toLocaleString() + '원</span>\
                            </div>\
                            <div class="price-sale">\
                                <span class="price-label">판매 가격</span>\
                                <span name="prd_salePrice" class="price-value price-highlight">' + Number(printItem.salePrice).toLocaleString() + '원</span>\
                            </div>\
                            <div class="price-discount">\
                                <span class="discount-badge">' + Math.round((1 - printItem.salePrice / printItem.price) * 100) + '% 할인</span>\
                            </div>\
                        </div>\
                        <div class="product-actions">\
                            <button onclick="javascript:addToCartById(this.id,true);"\
                                id="'+ printItem.id + '" name="addToCart_btn" class="btn-cart">\
                                <i class="bi bi-cart"></i>\
                                <span>장바구니 담기</span>\
                            </button>\
                            <button onclick="javascript:orderById(this.id);"\
                                id="'+ printItem.id + '" name="purchase_btn" class="btn-purchase">\
                                <i class="bi bi-credit-card"></i>\
                                <span>바로 구매하기</span>\
                            </button>\
                        </div>\
                    </div>\
                </div>'

        // Is Main Page
    } else {
        var item_comp = '\
                <div class="col mb-5" id="prd_div">\
                    <div class="card h-100" id="'+ printItem.id + '" onclick="redirectToProduct(this.id)">\
                        <!-- Sale badge-->\
                        <div id="prd_badge" class="badge bg-dark text-white position-absolute"\
                            style="top: 0.5rem; right: 0.5rem">'+ printItem.badge + '</div>\
                        <div id="prd_badge2" class="badge bg-dark text-white position-absolute"\
                            style="top: 0.5rem; right: 3.5rem">'+ printItem.time + '</div>\
                        <!-- Product image-->\
                        <a href="product.html?prdId='+ printItem.id + '"><img class="card-img-top" src="' + printItem.image + '" alt="..." id="prd_image"/></a> \
                        <!-- Product details-->\
                        <div class="card-body p-4">\
                            <div class="text-center">\
                                <!-- Product name-->\
                                <a href="product.html?prdId='+ printItem.id + '"><h5 name= "prd_name" class="fw-bolder">' + printItem.name + '</h5></a> \
                                <!-- Product reviews-->\
                                <a href="product.html?prdId='+ printItem.id + '"><div name="prd_review" class="d-flex justify-content-center small text-warning mb-2">' + starCount(printItem.review) + '\
                                </div></a> \
                                <!-- Product price-->\
                                <a href="product.html?prdId='+ printItem.id + '"><span name="prd_price" class="text-muted text-decoration-line-through">' + Number(printItem.price).toLocaleString() + '원</span></a><br>\
                                <a href="product.html?prdId='+ printItem.id + '"><span name="prd_salePrice">' + Number(printItem.salePrice).toLocaleString() + '원</span></a>\
                            </div>\
                        </div>\
                        <!-- Product actions-->\
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">\
                            <div class="text-center"><button onclick="javascript:addToCartById(this.id);"\
                                    id="'+ printItem.id + '" name="addToCart_btn" class="btn btn-outline-dark mt-auto">장바구니\
                                    담기</div>\
                        </div>\
                    </div>\
                </div>'
    }
    return item_comp;
}

function redirectToProduct(id) {
    const url = `product.html?prdId=${id}`;
    window.location.href = url;
}

function printCoupon(printCoupon) {
    if (printCoupon.isForMembership == true | printCoupon.isForMembership == 'true') {
        var membership = '멤버십 전용 쿠폰'
    } else {
        var membership = '일반 쿠폰'
    };
    if (Number(printCoupon.discount) < 1) {
        var discount_disp = Number(printCoupon.discount) * 100 + '%'
    } else {
        var discount_disp = Number(printCoupon.discount).toLocaleString() + '원'
    }

    // if (String(document.URL).indexOf('/mycoupon') > -1) {
    //     var timezoneOffset = new Date().getTimezoneOffset() * 60000;
    //     var remainTime = Number(printCoupon.dueDate) * 3600000;
    //     var timezoneDate = new Date(Date.now() - timezoneOffset + remainTime);
    //     var dueDate = timezoneDate.toLocaleString()
    // }
    // var number = Number(i) + 1;

    if (String(document.URL).indexOf('/mycoupon') > -1) {
        var dueToTime = new Date(printCoupon.dueTo).toLocaleString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        });
        var item_comp = '<div class="col mb-5" id="cpn_div"> \
    <div class="card h-100">\
        <!-- Sale badge-->\
        <div id="prd_badge" class="badge bg-dark text-white position-absolute"\
            style="top: 0.5rem; right: 0.5rem; padding-left: 2rem; padding-right: 2rem;">' + membership + ' </div>\
        <table style="margin:11% 2rem 0 2rem; border:0.5px dashed grey;">\
            <tr>\
            <td style="padding:1% 0 2% 0;">\
            <div style="text-align:center;">\
                <span>\
                  <strong style="font-size:calc(2vw + 20px); white-space:nowrap; white-space:nowrap;">'+ discount_disp + ' 할인쿠폰</strong>\
                </span>\
                <span style="font-size:calc(0.7vw + 12px);">\
                    <center><strong>전 상품 구매 가능</strong></center>\
                </span>\
            </div>\
        </td>\
            </tr>\
        </table>\
        <!-- Product details-->\
        <div class="card-body p-3">\
            <div class="text-center">\
                <!-- Product name-->\
                <span id="coupon_name" class="fw-bolder">' + printCoupon.cpnName + '</span><br>\
                    <span id="coupon_dueDate" class="fw-bolder" due_date="' + printCoupon.dueTo + '">쿠폰 만료일 : ' + dueToTime + '</span>\
            </div>\
        </div>\
        <!-- Product actions-->\
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent id="couponIssue_btn_section">\
            <div class="text-center"><button\
                style="padding:2% 25% 2% 25% !important; border-radius: 15rem !important; background-color: black !important; color: white !important;"\
                onclick="javascript:moveToHome();" id="' + printCoupon.cpnId + '"\
                name="couponIssue_btn" class="btn btn-outline-dark mt-auto">쿠폰 사용하기</div>\
        </div>\ </div>\ </div>'
    } else {
        var item_comp = '<div class="col mb-5" id="cpn_div"> \
        <div class="card h-100">\
            <!-- Sale badge-->\
            <div id="prd_badge" class="badge bg-dark text-white position-absolute"\
                style="top: 0.5rem; right: 0.5rem; padding-left: 2rem; padding-right: 2rem;">' + membership + ' </div>\
            <table style="margin:11% 2rem 0 2rem; border:0.5px dashed grey;">\
                <tr>\
                    <td style="padding:1% 0 2% 0;">\
                        <div style="text-align:center;">\
                            <span>\
                              <strong style="font-size:calc(2vw + 20px); white-space:nowrap; white-space:nowrap;">'+ discount_disp + ' 할인쿠폰</strong>\
                            </span>\
                            <span style="font-size:calc(0.7vw + 12px);">\
                                <center><strong>전 상품 구매 가능</strong></center>\
                            </span>\
                        </div>\
                    </td>\
                </tr>\
            </table>\
            <!-- Product details-->\
            <div class="card-body p-3">\
                <div class="text-center">\
                    <!-- Product name-->\
                    <span id="coupon_name" class="fw-bolder">' + printCoupon.cpnName + '</span><br>\
                        <span id="coupon_dueDate" class="fw-bolder" due_date="' + printCoupon.dueDate + '">발급 후 ' + printCoupon.dueDate + '시간 동안 사용 가능</span>\
                </div>\
            </div>\
            <!-- Product actions-->\
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent id="couponIssue_btn_section">\
                <div class="text-center"><button\
                style="padding:2% 25% 2% 25% !important; border-radius: 15rem !important; background-color:black!important; color: white !important;"\
                    onclick="javascript:couponIssue(this.id)" id="' + printCoupon.cpnId + '"\
                    name="couponIssue_btn" class="btn btn-outline-dark mt-auto">쿠폰 다운로드</div>\
            </div>\ </div>\ </div> '
    }

    return item_comp;
}
function couponImport() {
    var coupon = getCouponByUserId(getUserId());
    var selectElement = document.getElementById('order_coupon_select');

    // Clear existing options
    selectElement.innerHTML = '';

    // Create and append default option
    var defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = '쿠폰 미적용';
    selectElement.appendChild(defaultOption);

    if (!coupon) {

    } else {
        // Create and append new option elements
        for (var i = 0; i < coupon.length; i++) {
            var option = document.createElement('option');
            var discount = coupon[i].discount <= 1 ? coupon[i].discount * 100 + '% 할인' : Math.floor(Number(coupon[i].discount)).toLocaleString() + '원 할인'

            option.value = coupon[i].cpnId;
            option.textContent = coupon[i].cpnName + ' : ' + discount;
            selectElement.appendChild(option);
        }
    }
}

function getSelectOptionsAsObjects(element) {
    var selectElement = document.getElementById(element);
    var options = selectElement.options;
    var selectOptions = [];

    for (var i = 0; i < options.length; i++) {
        var option = options[i];
        var optionObject = {
            value: option.value,
            text: option.textContent
        };
        selectOptions.push(optionObject);
    }

    return selectOptions;
}

function orderItemComp(printItem) {
    var order_comp = '<!-- Item Listing -->\
    <table class="row row-4" id="order_item_displaying" align="center" width="100%" border="0" cellpadding="0" cellspacing="0"\
        role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">\
        <tbody>\
            <tr>\
                <td>\
                    <table class="row-content" align="center" border="0" cellpadding="0" cellspacing="0"\
                        role="presentation"\
                        style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;color:#333;width:650px"\
                        width="650">\
                        <tbody>\
                            <tr>\
                                <td class="column column-1" width="25%"\
                                    style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">\
                                    <table class="image_block block-2" width="100%" border="0"\
                                        cellpadding="0" cellspacing="0" role="presentation"\
                                        style="mso-table-lspace:0;mso-table-rspace:0">\
                                        <tr>\
                                            <td class="pad"\
                                                style="width:100%;padding-right:0;padding-left:0;padding-top:5px;padding-bottom:5px">\
                                                <div class="alignment" align="center"\
                                                    style="line-height:10px"><img\
                                                        src="' + printItem.image + '"\
                                                        style="display:block;height:auto;border:0;width:130px;max-width:100%"\
                                                        width="130" alt="Image" title="Image"></div>\
                                            </td>\
                                        </tr>\
                                    </table>\
                                </td>\
                                <td class="column column-2" width="41.666666666666664%"\
                                    style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;border-right:1px dotted #e8e8e8;vertical-align:top;border-top:0;border-bottom:0;border-left:0">\
                                    <table class="text_block block-2" width="100%" border="0"\
                                        cellpadding="0" cellspacing="0" role="presentation"\
                                        style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">\
                                        <tr>\
                                            <td class="pad"\
                                                style="padding-bottom:5px;padding-right:10px;padding-top:40px">\
                                                <div style="font-family:sans-serif">\
                                                    <div class\
                                                        style="font-size:12px;font-family:Lato,Tahoma,Verdana,Segoe,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2">\
                                                        <p\
                                                            style="margin:0;font-size:14px;text-align:left;mso-line-height-alt:16.8px">\
                                                            <span\
                                                                style="font-size:16px;color:#2190e3;"><strong>' + printItem.category + '</strong></span>\
                                                        </p>\
                                                    </div>\
                                                </div>\
                                            </td>\
                                        </tr>\
                                    </table>\
                                    <table class="text_block block-3" width="100%" border="0"\
                                        cellpadding="0" cellspacing="0" role="presentation"\
                                        style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">\
                                        <tr>\
                                            <td class="pad"\
                                                style="padding-bottom:45px;padding-right:10px">\
                                                <div style="font-family:sans-serif">\
                                                    <div class\
                                                        style="font-size:12px;font-family:Lato,Tahoma,Verdana,Segoe,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2">\
                                                        <p\
                                                            style="margin:0;font-size:14px;text-align:left;mso-line-height-alt:16.8px">\
                                                            ' + printItem.name + '\
                                                        </p>\
                                                    </div>\
                                                </div>\
                                            </td>\
                                        </tr>\
                                    </table>\
                                </td>\
                                <td class="column column-3" width="33.333333333333336%"\
                                    style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">\
                                    <table class="text_block block-2" width="100%" border="0"\
                                        cellpadding="0" cellspacing="0" role="presentation"\
                                        style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">\
                                        <tr>\
                                            <td class="pad"\
                                                style="padding-right:15px;padding-top:55px;padding-bottom:5px">\
                                                <div style="font-family:sans-serif">\
                                                    <div class\
                                                        style="font-size:12px;font-family:Lato,Tahoma,Verdana,Segoe,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2">\
                                                        <p\
                                                            style="margin:0;text-align:center;font-size:12px;mso-line-height-alt:14.399999999999999px">\
                                                            <span style="font-size:20px;"><span\
                                                                    style="font-size:20px;"><strong>' + Number(printItem.salePrice).toLocaleString() + ' 원' + '</strong></span></span>\
                                                        </p>\
                                                    </div>\
                                                </div>\
                                            </td>\
                                        </tr>\
                                    </table>\
                                </td>\
                            </tr>\
                        </tbody>\
                    </table>\
                </td>\
            </tr>\
        </tbody>\
        \
    </table>\
    <!-- Item Listing End  -->'
    return order_comp;
}

// event check method 
function checkEventCount(event) {
    var eventStorage = sessionStorage.getItem('lm.storage.event');
    if (!eventStorage) {
        eventStorage = {};
    } else {
        eventStorage = JSON.parse(eventStorage);
    }
    if (!eventStorage[event]) {
        eventStorage[event] = 0;
    }
    eventStorage[event]++; // 이벤트 카운트 증가
    sessionStorage.setItem('lm.storage.event', JSON.stringify(eventStorage));
    return eventStorage[event];
}

function membershipDiscount() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var idValues = urlParams.get("id").split(",");
    var salePrice_total = idValues.reduce((total, id) => {
        var item = getItemById(id);
        if (item) {
            return total + item.salePrice;
        }
        return total;
    }, 0);

    var membership = getMembershipByUserId(getUserId());
    if (!membership) {
        return 0;
    } else {
        return salePrice_total * membership.memDicount;
    }
    return 0;
}

function coupon_apply_click() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var idValues = urlParams.get("id").split(",");
    var salePrice_total = idValues.reduce((total, id) => {
        var item = getItemById(id);
        if (item) {
            return total + item.salePrice;
        }
        return total;
    }, 0);

    var apply_coupon = document.getElementById('order_coupon_select').value;

    if (!apply_coupon) {
        coupon_discount = 0;
    } else {
        coupon_discount = getCouponById(apply_coupon).discount < 1 ? salePrice_total * getCouponById(apply_coupon).discount : getCouponById(apply_coupon).discount;
    }
    document.getElementById('order_coupon_discount').innerText = '- ' + Math.floor(Number(coupon_discount)).toLocaleString() + '원';
    var membership_discount = membershipDiscount();
    var discount_total = salePrice_total - coupon_discount - membership_discount;
    document.getElementById('order_purchaseTotalPrice').innerText = Math.floor(Number(discount_total)).toLocaleString() + '원';
}

// Translate Review Score To Star
function starCount(number) {
    var star = '<div class="bi-star-fill"></div>'
    for (let i = 1; i < number; i++) {
        star += '<div class="bi-star-fill"></div>';
    }
    return star
}

// Purchase All Button Click From Cart Page 
function removeAll(param) {
    var cartItems = JSON.parse(localStorage.getItem('lm.storage.item.cartItems'));
    if (cartItems == null || cartItems.length == 0) {
        alert('장바구니에 상품이 없습니다.');
    } else {
        if (window.confirm("정말 모두 삭제하시겠습니까?")) {
            amplitudeLogCustomEvent("장바구니 모두 삭제", { "삭제 품목수": cartItems.length, "삭제 품목 상세": renameKeys(cartItems) });
            brazeLogCustomEvent("장바구니 모두 삭제", { "삭제 품목수": cartItems.length, "삭제 품목 상세": renameKeys(cartItems) });
            localStorage.removeItem("lm.storage.item.cartItems");
            window.location.reload();
            alert('모두 삭제되었습니다.');
        }
    }
};

function removeCartItemButton(id) {
    // 로컬 스토리지에서 제거 
    removeCartItemById(id);

    // alert message
    alert('삭제가 완료되었습니다.');

    // SaaS Log 
    brazeLogCustomEvent("장바구니 삭제 완료", renameKeys(getItemById(id)));
    amplitudeLogCustomEvent("장바구니 삭제 완료", renameKeys(getItemById(id)));

    // reload 
    window.location.reload();
}

function removeCartItemById(id) {
    var cartItems = JSON.parse(localStorage.getItem('lm.storage.item.cartItems')) || [];

    if (cartItems.length === 0) {
        return;
    }

    cartItems = cartItems.filter(function (item) {
        return item.id !== id;
    });

    localStorage.setItem('lm.storage.item.cartItems', JSON.stringify(cartItems));
}

function removeCouponById(cpnId) {
    // 로컬스토리지에서 데이터 가져오기
    var localStorageInfo = 'lm.storage.userinfo.' + getUserId();
    console.log(localStorageInfo);
    var userInfo = JSON.parse(localStorage.getItem(localStorageInfo));
    // 쿠폰 배열에서 해당 cpnId를 가진 쿠폰 찾기
    var couponIndex = userInfo.coupon.findIndex(function (coupon) {
        return coupon.cpnId === cpnId;
    });

    // 쿠폰 배열에서 해당 쿠폰 삭제
    if (couponIndex > -1) {
        userInfo.coupon.splice(couponIndex, 1);
    }

    // 수정된 데이터 다시 로컬스토리지에 저장
    localStorage.setItem(localStorageInfo, JSON.stringify(userInfo));
}

// Purchase All Cart Products - Cart Page Only
function purchaseRequest(param) {
    var cartItems = JSON.parse(localStorage.getItem('lm.storage.item.cartItems'));

    if (window.confirm("정말 구매하시겠습니까?")) {
        var appliedCoupon = document.getElementById('order_coupon_select').value;
        var finalCouponDicount = Math.abs(parseFloat(document.getElementById('order_coupon_discount').innerText.replace(/[^0-9-]/g, '')));
        if (finalCouponDicount === 0) {
            haveCouponObj = getSelectOptionsAsObjects('order_coupon_select')
            if (haveCouponObj.length > 1) {
                if (window.confirm("적용되지 않은 쿠폰이 있어요.\n적용하지 않고 구매하시겠습니까?")) {
                } else {
                    return
                }
            }
        } else {
            var userCoupons = getCouponByUserId(getUserId());
            if (userCoupons && userCoupons.length > 0) {
                var cpnId = appliedCoupon;
                var usedCoupon = userCoupons.find((coupon) => coupon.cpnId === cpnId);
                console.log(usedCoupon);
            }
            removeCouponById(appliedCoupon);
        }

        // Delete local storage 
        var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        var idValues = urlParams.get("id").split(",");
        idValues.forEach(function (id) {
            removeCartItemById(id);
        });

        // SaaS Log 
        var item_arrays = [];
        idValues.forEach(function (id) {
            item_arrays.push(getItemById(id));
            brazeLogCustomEvent('주문 완료', getItemById(id));
            var item_detail = getItemById(id);
            var today = getDateByString()
            // brazeAddCustomAttribute("주문 이력", "date_" + today + "/prdNo_" + item_detail.id + "/prdNm_" + item_detail.name + "/catNm_" + item_detail.category + "/price_" + item_detail.price + "/salePrice_" + item_detail.salePrice + "/tag_" + item_detail.badge + "/brand_" + item_detail.brand);
            var order_obj = {
                "$add": [{
                    "orderId": Date.now(),
                    "productId": item_detail.id,
                    "productName": item_detail.name,
                    "brandName": item_detail.brand,
                    "categoryName": item_detail.category,
                    "salePrice": item_detail.salePrice,
                    "productImage": item_detail.image,
                    "orderDate": { "$time": today }
                }]
            };
            braze.getUser().setCustomUserAttribute("주문 리스트", order_obj, true);
            braze.requestImmediateDataFlush();
        });
        // totalRevenue = item_arrays.reduce((a, b) => a + b.price, 0);
        var finalTotalRevenue = parseFloat(document.getElementById('order_purchaseTotalPrice').innerText.replace(/[^0-9-]/g, ''));
        var finalMembershipDiscount = Math.abs(parseFloat(document.getElementById('order_membership_discount').innerText.replace(/[^0-9-]/g, '')));
        var finalCouponDicount = Math.abs(parseFloat(document.getElementById('order_coupon_discount').innerText.replace(/[^0-9-]/g, '')));

        brazeLogPurchase('주문 완료', { "주문 상세": item_arrays, "사용 쿠폰": usedCoupon, "쿠폰 할인액": finalCouponDicount, "멤버십 할인액": finalMembershipDiscount }, finalTotalRevenue);
        amplitudeLogCustomEvent('주문 완료', { '주문 상세': item_arrays, '사용 쿠폰': usedCoupon, "쿠폰 할인액": finalCouponDicount, "멤버십 할인액": finalMembershipDiscount }, finalTotalRevenue);
        if (usedCoupon) {
            brazeRemoveCustomAttribute('쿠폰 리스트', usedCoupon.cpnId);
            remove_obj = {
                "$remove": [
                    {
                        "$identifier_key": "id",
                        "$identifier_value": usedCoupon.cpnId,
                    }
                ]
            };
            braze.getUser().setCustomUserAttribute("쿠폰 리스트 상세", remove_obj, true);
            braze.requestImmediateDataFlush();
        }

        // Alert displaying 
        setTimeout(() => {
            // 구매 완료 메시지를 화면 중앙에 띄우고 카운트다운 후 창을 닫는 함수
            function showMessage() {
                // 화면의 모든 기존 내용 지우기
                document.body.innerHTML = '';

                // 구매 완료 메시지를 담을 div 요소 생성
                const messageElement = document.createElement('div');
                messageElement.textContent = '구매가 완료되었습니다.';

                // 스타일 적용
                messageElement.style.position = 'fixed';
                messageElement.style.top = '50%';
                messageElement.style.left = '50%';
                messageElement.style.transform = 'translate(-50%, -50%)';
                messageElement.style.padding = '20px 80px';
                messageElement.style.backgroundColor = 'black';
                messageElement.style.color = 'white';
                messageElement.style.fontSize = '4vw';
                messageElement.style.whiteSpace = 'nowrap';
                messageElement.style.maxWidth = '100vw';
                messageElement.style.fontWeight = 'bold';
                messageElement.style.borderRadius = '10px';
                messageElement.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.4)';

                // 메시지 표시
                document.body.appendChild(messageElement);

                // 3초 뒤에 창이 닫힌다는 메시지 생성
                const countdownMessage = document.createElement('div');
                countdownMessage.textContent = '3초 뒤에 창이 닫힙니다.';
                countdownMessage.style.position = 'fixed';
                countdownMessage.style.top = '60%';
                countdownMessage.style.left = '50%';
                countdownMessage.style.transform = 'translateX(-50%)';
                countdownMessage.style.fontSize = '20px';
                countdownMessage.style.fontWeight = 'normal';
                countdownMessage.style.color = '#333';

                // 카운트다운 메시지 표시
                document.body.appendChild(countdownMessage);

                let countdown = 3;

                // 카운트다운 진행
                const interval = setInterval(() => {
                    countdown--;
                    countdownMessage.textContent = `${countdown}초 뒤에 창이 닫힙니다.`;

                    if (countdown === 0) {
                        clearInterval(interval);  // 카운트다운 종료
                        window.close();
                    }
                }, 1000);  // 1초 간격으로 카운트다운 진행
                opener.parent.location.reload();

            }

            // 메시지를 띄울 함수 호출 (예시로 바로 호출)
            showMessage();


        }, 1000);

    }
};

// Purchase Button Click From Product Detail Page
function orderById(clicked_id) {
    var clicked_id = String(clicked_id);
    windowPopUp('order.html?sort=Each&id=' + clicked_id)
};

function windowPopUp(url) {
    var screenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var screenTop = window.screenTop != undefined ? window.screenTop : screen.top;
    width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
    let w = 840;
    let h = 840;
    var left = ((width / 2) - (w / 2)) + screenLeft;
    var top = ((height / 2) - (h / 2)) + screenTop;
    window.open(url, '주문서', 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
}

// URL parameter Parsing 
function getURLParams(url) {
    var result = {};
    url.replace(/[?&]{1}([^=&#]+)=([^&#]*)/g, function (s, k, v) { result[k] = decodeURIComponent(v); });
    return result;
}

function getCouponByUserId(userId) {
    const couponInfoString = `lm.storage.userinfo.${userId}`;
    const couponInfoObj = JSON.parse(localStorage.getItem(couponInfoString));

    if (couponInfoObj && couponInfoObj.coupon) {
        const now = Date.now();
        const nonExpiredCoupons = couponInfoObj.coupon.filter(
            (coupon) => new Date(coupon.dueTo).getTime() > now
        );
        couponInfoObj.coupon = nonExpiredCoupons;
        localStorage.setItem(couponInfoString, JSON.stringify(couponInfoObj));
        return couponInfoObj.coupon;
    }

    return null;
}


// ** Handler Method Start **

// Move To Home 
function moveToHome() {
    location.pathname = "/index.html";
}

// mypage click button listener 
function mypageClick() {
    if (getUserId()) {
        location.pathname = 'mypage.html'
    } else {
        if (window.confirm('마이페이지는 로그인 후 이용 가능합니다.\n로그인 하시겠어요?')) {
            input_login('mypage');
        } else {
            return;
        }
    }
}

function handleOptionChange(id) {
    var selectElement = document.getElementById(id);
    var selectedOption = selectElement.options[selectElement.selectedIndex].text;
    var target_warningArea = id + '_warningArea'
    if (selectedOption == '동의') {
        document.getElementById('pushSubscribe_warningArea').innerHTML = '\
            <table style="border-collapse: collapse; table-layout: fixed; width: 100%;">\
                <tr>\
                    <th style="width: 15%; text-align: center">항목</th>\
                    <th style="width: 30%; text-align: center">상세</th>\
                </tr>\
                <tr>\
                    <td style="padding: 7px; text-align: center; border: 0.5px solid grey;">동의 항목</td>\
                    <td style="padding: 7px; text-align: center; border: 0.5px solid grey;">마이페이지 > 앱푸시 마케팅 구독</td>\
                </tr>\
                <tr>\
                    <td style="padding: 7px; text-align: center; border: 0.5px solid grey;">수집/이용목적</td>\
                    <td style="padding: 7px; text-align: center; border: 0.5px solid grey;">SaaS 솔루션 학습을 위한 메시지 발송</td>\
                </tr>\
                <tr>\
                    <td style="padding: 7px; text-align: center; border: 0.5px solid grey;">수집 항목</td>\
                    <td style="padding: 7px; text-align: center; border: 0.5px solid grey;">마이페이지 내 전달된 모든 항목 및 앱내 행태 정보</td>\
                </tr>\
                <tr>\
                    <td style="padding: 7px; text-align: center; border: 0.5px solid grey;">보유/이용 기간</td>\
                    <td style="padding: 7px; text-align: center; border: 0.5px solid grey;">별도 요청 전까지 영구적 보관</td>\
                </tr>\
            </table>'
    } else {
        document.getElementById(target_warningArea).innerText = ''
    }
}



// mypage regist click listener
function mypageReg() {
    // 기존의 사용자 정보 가져오기
    var userinfoStr = localStorage.getItem(`lm.storage.userinfo.${getUserId()}`);
    var userInfo = userinfoStr ? JSON.parse(userinfoStr) : {};

    // 입력된 정보 가져오기
    var phone = document.getElementById("phone").value;
    var name = document.getElementById("first_name").value;
    var email = document.getElementById("email").value;
    var pushSubscribe = document.getElementById("pushSubscribe").value;
    var emailSubscribe = document.getElementById("emailSubscribe").value;
    var smsSubscribe = document.getElementById("smsSubscribe").value;
    var gender = document.getElementById("gender").value;
    var dob = document.getElementById("dob").value;
    var infoSubscribe = document.getElementById("getInfo").value;

    var phoneCheck = /^$|\d{3}-\d{3,4}-\d{4}|^[0-9]{10,11}$/;
    var emailCheck = /^$|^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    var infoChagneCount = 0;

    if (!userInfo.info) {
        userInfo.info = {
            "phone": "",
            "name": "",
            "email": "",
            "pushSubscribe": "",
            "emailSubscribe": "",
            "smsSubscribe": "",
            "gender": "",
            "dob": ""
        }; // info 객체가 없는 경우 기본 객체 생성
    }

    if (infoSubscribe == '거부') {
        if (window.confirm('정보 수집 및 활용에 대해 동의해주셔야 정보 반영이 가능합니다.\n동의 후 변경을 진행하시겠습니까?')) {
            document.getElementById("getInfo").value = '동의'
        } else {
            return;
        }
    }

    if (phone !== userInfo.info.phone) {
        if (phoneCheck.test(phone)) {
            userInfo.info.phone = phone;
            infoChagneCount += 1;
            brazeSetPhone(phone);
            document.getElementById('phone_warningArea').innerText = ''
        } else {
            document.getElementById('phone_warningArea').innerText = '형식이 맞지 않습니다.\n입력 예시) 010-1234-5678'
            return;
        }
    }

    if (email !== userInfo.info.email) {
        if (emailCheck.test(email)) {
            userInfo.info.email = email;
            infoChagneCount += 1;
            brazeSetEmail(email);
            document.getElementById('email_warningArea').innerText = ''
        } else {
            document.getElementById('email_warningArea').innerText = '형식이 맞지 않습니다.\n입력 예시) sample@luxmax.com'
            return;
        }
    }

    if (name !== userInfo.info.name) {
        userInfo.info.name = name;
        infoChagneCount += 1;
        brazeSetFirstName(name);
    }

    if (pushSubscribe !== userInfo.info.pushSubscribe) {
        userInfo.info.pushSubscribe = pushSubscribe;
        infoChagneCount += 1;
        brazeSetPushSubscribe(pushSubscribe);

    }

    if (emailSubscribe !== userInfo.info.emailSubscribe) {
        userInfo.info.emailSubscribe = emailSubscribe;
        infoChagneCount += 1;
        brazeSetEmailSubscribe(emailSubscribe);
    }

    if (smsSubscribe !== userInfo.info.smsSubscribe) {
        userInfo.info.smsSubscribe = smsSubscribe;
        infoChagneCount += 1;
        brazeSetSmsSubscribe(smsSubscribe);
    }

    if (gender !== userInfo.info.gender) {
        userInfo.info.gender = gender;
        infoChagneCount += 1;
        brazeSetGender(gender);
    }

    if (dob !== userInfo.info.dob) {
        userInfo.info.dob = dob;
        infoChagneCount += 1;
        brazeSetDob(dob);
    }

    if (infoChagneCount == 0) {
        alert('변경된 정보가 없습니다.');
        return
    }
    localStorage.setItem(`lm.storage.userinfo.${getUserId()}`, JSON.stringify(userInfo));
    if (window.confirm('정보 변경이 완료되었습니다.\n메인페이지로 이동하시겠습니까?')) {
        location.pathname = 'index.html'
    }
}

// Search Enter Event Listner
function inputSearch() {
    if (window.event.keyCode == 13) {
        // Get value from either desktop or mobile search input
        const desktopInput = document.getElementById('searchKeyword');
        const mobileInput = document.getElementById('searchKeywordMobile');
        const search_key = (desktopInput && desktopInput.value) || (mobileInput && mobileInput.value) || '';
        
        if (search_key.length < 1) {
            alert('검색어를 입력해주세요.');
            return;
        }
        location.href = 'index.html?query=' + encodeURIComponent(search_key);
    }
};

function clickSearch() {
    // Get value from either desktop or mobile search input
    const desktopInput = document.getElementById('searchKeyword');
    const mobileInput = document.getElementById('searchKeywordMobile');
    const search_key = (desktopInput && desktopInput.value) || (mobileInput && mobileInput.value) || '';
    
    if (search_key.length < 1) {
        alert('검색어를 입력해주세요.');
        return;
    }
    location.href = 'index.html?query=' + encodeURIComponent(search_key);
};

// Sync search inputs between desktop and mobile
function syncSearchInputs() {
    const desktopInput = document.getElementById('searchKeyword');
    const mobileInput = document.getElementById('searchKeywordMobile');
    
    if (desktopInput && mobileInput) {
        desktopInput.addEventListener('input', function() {
            mobileInput.value = this.value;
        });
        
        mobileInput.addEventListener('input', function() {
            desktopInput.value = this.value;
        });
    }
}

// Initialize search input sync when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', syncSearchInputs);
} else {
    syncSearchInputs();
}


// Login check func
function getUserId() {
    var user_id = localStorage.getItem("lm.stroage.login.userId");
    if (user_id == null || user_id == 'null') {
        return null
    }
    return user_id;
}

// Add to login history func
function addLoginHistory(id) {
    let loginHistory = localStorage.getItem("lm.stroage.login.loginHistory");
    if (!loginHistory) {
        loginHistory = [];
    } else {
        loginHistory = JSON.parse(loginHistory);
    }
    loginHistory.push(id);
    localStorage.setItem("lm.stroage.login.loginHistory", JSON.stringify(loginHistory));
}

// logout
function logout() {
    // Log SaaS
    try {
        braze.wipeData()
    } catch (error) {
        console.log('wipeData error', error);
    }
    try {
        amplitude.setUserId(null);
        amplitude.reset();
    } catch (error) {
        console.log('reset amplitudeId', error);
    }

    // local storage nullification 
    localStorage.setItem("lm.stroage.login.userId", null);
    // DOM wirte 
    document.getElementById('login_text').innerHTML = '<i id="login_text" class="bi bi-box-arrow-in-left me-1"></i>';
}

// login button handler
async function input_login(redirectUrl) {
    var user_id = getUserId();
    if (user_id) {
        const result = await Swal.fire({
            title: `${user_id}님, 정말 로그아웃 하시겠습니까?`,
            icon: 'warning',
            showCancelButton: true,
            // confirmButtonColor: '#3085d6',
            // cancelButtonColor: '#d33',
            confirmButtonText: '로그아웃',
            cancelButtonText: '취소'
        });

        if (result.isConfirmed) {
            logout();
            Swal.fire('로그아웃', '정상적으로 로그아웃 되었습니다.', 'success').then(() => {
                location.reload();
            });
        }
    } else {
        let loginHistory = localStorage.getItem("lm.stroage.login.loginHistory");
        if (loginHistory) {
            loginHistory = JSON.parse(loginHistory);
            const lastIdIndex = loginHistory.length - 1;
            const { value: id, isDismissed } = await Swal.fire({
                title: '로그인할 아이디를 \n 목록에서 선택해주세요.',
                input: 'select',
                inputOptions: Object.fromEntries(loginHistory.map((id) => [id, id])),
                inputValue: loginHistory[lastIdIndex],
                confirmButtonText: '로그인',
                cancelButtonText: '신규가입',
                showCancelButton: true,
                // showCloseButton: true
            });

            if (isDismissed) {
                handleNewLogin(redirectUrl);
            }

            if (id) {
                // Log SaaS 
                changeUser(id);
                brazeLogCustomEvent("로그인 완료");
                amplitudeLogCustomEvent("로그인 완료");
                brazeSetCustomAttribute("로그인 상태", true);

                // Store to Local Stroage
                addLoginHistory(id);
                localStorage.setItem("lm.stroage.login.userId", id);
                Swal.fire('로그인', `${id}님, 로그인 되었습니다.`, 'success').then(() => {
                    if (redirectUrl == 'mypage') {
                        location.pathname = 'mypage.html';
                        return true
                    } else {
                        location.reload();

                        return true
                    }
                });

                // DOM wirte 
                // document.getElementById('login_text').innerHTML = '<i id="login_text" class="bi bi-box-arrow-right me-1"></i>';
            } else {
                handleNewLogin(redirectUrl);
            }
        } else {
            handleNewLogin(redirectUrl);
        }
    }
}

// New login handler 
async function handleNewLogin(redirectUrl) {
    var reg = /^[a-zA-Z0-9_@.]{1,30}$/;
    const { value: id, isDismissed } = await Swal.fire({
        title: '로그인',
        input: 'text',
        inputLabel: '아이디를 입력해주세요',
        confirmButtonText: '로그인',
        cancelButtonText: '취소',
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                return '사용하실 아이디를 입력해주세요.';
            } else if (!reg.test(value)) {
                return '영문, 숫자 및 일부 특수기호(`@`,`_`)만 입력 가능합니다.';
            } else if (value.indexOf('null') > -1) {
                return 'ID에 null을 포함하실 수 없습니다.';
            } else {
                changeUser(value);
            }
        }
    });
    if (id) {
        // Log SaaS 
        changeUser(id);
        brazeLogCustomEvent("로그인 완료");
        amplitudeLogCustomEvent("로그인 완료");
        brazeSetCustomAttribute("로그인 상태", true);

        // Store to Local Stroage
        addLoginHistory(id);
        localStorage.setItem("lm.stroage.login.userId", id);
        Swal.fire('로그인', `${id}님, 로그인 되었습니다.`, 'success').then(() => {
            if (redirectUrl == 'mypage') {
                location.pathname = 'mypage.html';
                return true
            } else {
                location.reload();
                return true
            }
        });
        // DOM wirte 
        // document.getElementById('login_text').innerHTML = '<i id="login_text" class="bi bi-box-arrow-right me-1"></i>';
    }
}

// Page Scroll
var debounceScroll = debounce(function () {
    const pageName = getPageName();
    const sort = new URLSearchParams(window.location.search).get('sort');
    const query = new URLSearchParams(window.location.search).get('query');
    const scrollPosition = document.documentElement.scrollTop;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollPercentages = [50, 85];
    scrollPercentages.forEach((percent) => {
        const scrollThreshold = documentHeight * (percent / 100);
        if (scrollPosition + windowHeight >= scrollThreshold) {
            const eventData = {
                "페이지": `${pageName}`,
                "스크롤 지점": percent,
                "구분": sort,
                "상세": query
            };
            const eventKey = JSON.stringify(eventData);
            const existingEvents = sessionStorage.getItem("lm.storage.event.scroll") || "[]";
            const parsedEvents = JSON.parse(existingEvents);
            if (!parsedEvents.some(event => event === eventKey)) {
                parsedEvents.push(eventKey);
                sessionStorage.setItem("lm.storage.event.scroll", JSON.stringify(parsedEvents));
                console.log("페이지 스크롤", eventData);
                brazeLogCustomEvent("페이지 스크롤", eventData);
                amplitudeLogCustomEvent("페이지 스크롤", eventData);
            }
        }
    });
}, 250);

window.addEventListener('scroll', function () {
    const pageName = getPageName();
    const documentHeight = document.documentElement.scrollHeight;

    if (documentHeight >= 1000) {
        debounceScroll();
    }
});

// Page Scroll Event
function debounce(func, delay) {
    let timerId;
    return function () {
        clearTimeout(timerId);
        timerId = setTimeout(func, delay);
    }
}

// Coupon Issue 
function couponIssue(id) {
    var coupon = getCouponById(id);
    var userId = getUserId();

    if (!userId) {
        alert("로그인 후 이용 가능합니다.");
        return;
    }

    var localStorageItem = JSON.parse(
        localStorage.getItem(`lm.storage.userinfo.${userId}`)) || {};

    if (!localStorageItem.coupon) {
        localStorageItem.coupon = [];
    }

    var existingCoupon = localStorageItem.coupon.find((c) => c.cpnId === id);

    if (existingCoupon) {
        alert("이미 받은 쿠폰입니다.");
        return;
    }

    if (coupon.isForMembership && !getMembershipByUserId(userId)) {
        if (confirm("멤버십 전용 쿠폰입니다. 가입하시겠습니까?")) {
            window.location.href = "membership.html";
            return;
        } else {
            return;
        }
    }

    coupon.dueTo = new Date();
    coupon.dueTo.setHours(
        coupon.dueTo.getHours() + coupon.dueDate
    );

    localStorageItem.coupon.push(coupon);
    localStorage.setItem(
        `lm.storage.userinfo.${userId}`,
        JSON.stringify(localStorageItem)
    );

    // SaaS Log 
    brazeLogCustomEvent('쿠폰 다운로드 완료', coupon);
    amplitudeLogCustomEvent('쿠폰 다운로드 완료', coupon);
    brazeAddCustomAttribute('쿠폰 리스트', coupon.cpnId);
    var coupon_obj = {
        "$add": [{
            "id": coupon.cpnId,
            "name": coupon.cpnName,
            "discount": coupon.discount,
            "expDate": { "$time": coupon.dueTo },
            "issueDate": { "$time": new Date() }
        }]
    };
    braze.getUser().setCustomUserAttribute("쿠폰 리스트 상세", coupon_obj, true);
    braze.requestImmediateDataFlush();

    alert("쿠폰이 정상적으로 다운로드 되었습니다.");
    document.querySelector(`#${id}`).attributes.style.value =
        "padding:2% 25% 2% 25% !important; border-radius: 15rem !important; background-color: grey !important; color: white !important;";
}

function removeMembershipInfo(userId) {
    // local storage에서 userinfo 가져오기
    var userinfoStr = localStorage.getItem('lm.storage.userinfo.' + userId);

    // userinfo가 존재하지 않으면 작업 중단
    if (!userinfoStr) {
        return;
    }

    var userinfo = JSON.parse(userinfoStr);

    // membership 정보 삭제
    delete userinfo.membership;

    // 변경된 userinfo를 다시 local storage에 저장
    localStorage.setItem('lm.storage.userinfo.' + userId, JSON.stringify(userinfo));
}

function getMembershipByUserId(userId) {
    // local storage에서 userinfo 가져오기
    var userinfoStr = localStorage.getItem(`lm.storage.userinfo.${userId}`);

    // userinfo가 존재하지 않으면 null 반환
    if (!userinfoStr) {
        return null;
    }

    var userinfo = userinfoStr ? JSON.parse(userinfoStr) : {};

    if (!userinfo.membership) {
        return null;
    }
    var memDueTo = new Date(userinfo.membership.memDueTo);

    // 현재 날짜와 dueTo 날짜 비교
    var currentDate = new Date();
    if (currentDate < memDueTo) {
        // membership 정보 반환
        return userinfo.membership;
    } else {
        // 로컬 스토리지에서 userinfo 삭제
        removeMembershipInfo(userId);
        return null;
    }
}

function getMembershipById(id) {
    for (var i = 0; i < membership.length; i++) {
        if (membership[i].memId === id) {
            return membership[i];
        }
    }
    return null; // 매칭되는 상품이 없을 경우 null 반환
}

// Membership Reist 
function membershipRegist(id) {
    var userId = getUserId();

    if (!userId) {
        alert("로그인 후 이용 가능합니다.");
        return;
    }

    var localStorageItem = JSON.parse(localStorage.getItem(`lm.storage.userinfo.${userId}`)) || {};
    var haveMembership = getMembershipByUserId(userId);
    if (haveMembership) {
        if (haveMembership.memId == id) {
            if (window.confirm('멤버십을 보유 중입니다. 해지하시겠습니까?')) {
                // SaaS Log 
                brazeLogCustomEvent('멤버십 해지 완료', haveMembership);
                amplitudeLogCustomEvent('멤버십 해지 완료', haveMembership);

                // handler
                removeMembershipInfo(userId);
                alert('해지가 정상적으로 완료되었습니다.');
                window.location.reload();
                return;
            } else {
                return;
            }
        } else {
            if (window.confirm(`이미 ${haveMembership.memName} 멤버십을 구독 중입니다.\n해지 후 재구독하시겠습니까?`)) {
                // SaaS Log 
                brazeLogCustomEvent('멤버십 해지 완료', haveMembership);
                amplitudeLogCustomEvent('멤버십 해지 완료', haveMembership);
            } else {
                return;
            }
        }
    } else {
        if (window.confirm('멤버십을 구독하시겠습니까?')) {

        } else {
            return;
        }
    }

    var membership = getMembershipById(id);

    membership.memDueTo = new Date();
    membership.memDueTo.setHours(
        membership.memDueTo.getHours() + membership.durationHours
    );

    localStorageItem.membership = membership;
    localStorage.setItem(
        `lm.storage.userinfo.${userId}`,
        JSON.stringify(localStorageItem)
    );

    alert(`${membership.memName}\n멤버십을 정상적으로 구독하였습니다.`);

    // SaaS Log 
    brazeLogCustomEvent('멤버십 구독 완료', membership);
    amplitudeLogCustomEvent('멤버십 구독 완료', membership);
    window.location.reload();
}


// Purchase All Button Click From Cart Page 
function orderAll(param) {
    var cartItems = JSON.parse(localStorage.getItem('lm.storage.item.cartItems'));
    if (cartItems == null || cartItems.length == 0) {
        if (window.confirm("장바구니에 상품이 없습니다. \n상품을 담으러 갈까요?")) {
            location.pathname = "/index.html";
        }
    } else {
        var cartItems_id = cartItems.map(obj => obj.id);
        windowPopUp('order.html?sort=All&id=' + cartItems_id.join(","))
    }
}

// Refresh Coupon page 
function refreshCouponPage() {
    const user_id = getUserId();
    const validCoupons = getCouponByUserId(user_id);
    if (!validCoupons) {
        // console.log("유저가 보유한 쿠폰 없음");
    } else {
        // console.log(validCoupons);
        validCoupons.forEach((coupon) => {
            document.querySelector(`#${coupon.cpnId}`).attributes.style.value =
                "padding:2% 25% 2% 25% !important; border-radius: 15rem !important; background-color: grey !important; color: white !important;";
        });
    }
}
// ** Handler Method End **

// Rename object keys to default key map settings 
function renameKeys(obj, keyMap, isDelete = false, excludedKeys = []) {
    var defaultKeyMap = keyMapForSaaS();

    // If keyMap is null
    if (!keyMap) {
        keyMap = defaultKeyMap;
    }

    var renamedObj = {};

    if (Array.isArray(obj)) {
        return obj.map((item) => renameKeys(item, keyMap, isDelete, excludedKeys));
    }

    for (var key in obj) {
        if (obj.hasOwnProperty(key) && !excludedKeys.includes(key)) {
            if (keyMap.hasOwnProperty(key)) {
                var renamedKey = keyMap[key];
                var value = obj[key];

                if (typeof value === "object" && !Array.isArray(value)) {
                    renamedObj[renamedKey] = renameKeys(value, keyMap, isDelete, excludedKeys);
                } else if (Array.isArray(value)) {
                    renamedObj[renamedKey] = value.map((item) =>
                        renameKeys(item, keyMap, isDelete, excludedKeys)
                    );
                } else {
                    renamedObj[renamedKey] = value;
                }
            } else if (!isDelete) {
                // Only add to renamedObj if isDelete is false and key is not in keyMap
                var value = obj[key];

                if (typeof value === "object" && !Array.isArray(value)) {
                    renamedObj[key] = renameKeys(value, keyMap, isDelete, excludedKeys);
                } else if (Array.isArray(value)) {
                    renamedObj[key] = value.map((item) =>
                        renameKeys(item, keyMap, isDelete, excludedKeys)
                    );
                } else {
                    renamedObj[key] = value;
                }
            }
        }
    }

    return renamedObj;
}

// Cart Badge Count Write 
function cart_badge_write() {
    if (JSON.parse(localStorage.getItem('lm.storage.item.cartItems')) == null) {
        return document.getElementById('addToCart_count').innerText = 0;
    } else {
        return document.getElementById('addToCart_count').innerText = JSON.parse(localStorage.getItem('lm.storage.item.cartItems')).length;
    }
}

// Shuffle Main Items 
function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // 현재 인덱스부터 역순으로 배열을 순회하면서 랜덤한 인덱스와 교환합니다.
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Is shuffle already
function applyShuffleIfNeeded(array, storageKey) {
    var storedShuffle = sessionStorage.getItem(storageKey);

    if (storedShuffle) {
        // 세션 스토리지에 저장된 셔플된 배열을 가져옵니다.
        array = JSON.parse(storedShuffle);
    } else {
        // 객체들의 배열을 셔플합니다.
        array = shuffleArray(array);

        // 셔플된 배열을 세션 스토리지에 저장합니다.
        sessionStorage.setItem(storageKey, JSON.stringify(array));
    }
    return array;
}

var getPageName = function () {
    var url = window.location.href;
    if (window.location.search === "") {
        return "메인페이지";
    } else if (url.indexOf('cart') > -1) {
        return "카트페이지";
    } else if (url.indexOf('query') > -1) {
        return "검색페이지";
    } else if (url.indexOf('prdId') > -1) {
        return "상품 상세페이지";
    }
    // add more conditions for other page names
}


// Base function for SaaS
function keyMapForSaaS() {
    return {
        "id": "상품ID",
        "name": "상품명",
        "category": "카테고리",
        "image": "이미지",
        "brand": "브랜드",
        "salePrice": "판매가격",
        "review": "리뷰평점",
        "badge": "태그",
        "price": "원가격",
        "clickedFrom": "추가 위치",
        "regTime": "상품 등록일",
        "cpnId": "쿠폰ID",
        "cpnName": "쿠폰명",
        "upperLimit": "최대 할인액",
        "botLimit": "최소 주문액",
        "discount": "할인율/할인액",
        "dueDate": "발급 후 사용 가능기간",
        "isForMembership": "멤버십 전용 여부",
        "dueTo": "쿠폰 만료일",
        "memId": "멤버십ID",
        "durationHours": "사용 기간",
        "memName": "멤버십명",
        "memPrice": "멤버십 가격",
        "memDicount": "멤버십 할인액/할인율",
        "memDueTo": "멤버십 만료일"
    }
};

function excludedKeyForSaaS() {
    return [
        "time",
        "timeString"
    ]
};

function transformFromObjToArray(data) {
    const result = {};
    for (const [key, value] of Object.entries(data)) {
        if (Array.isArray(value)) {
            for (var item of value) {
                for (const [k, v] of Object.entries(item)) {
                    if (!result[k]) {
                        result[k] = [v];
                    } else {
                        result[k].push(v);
                    }
                }
            }
        } else if (typeof value === "object") {
            for (const [k, v] of Object.entries(value)) {
                if (!result[k]) {
                    result[k] = [v];
                } else {
                    result[k].push(v);
                }
            }
        } else {
            result[key] = value;
        }
    }
    return result;
}

function getDateByString() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0'),
        mm = String(today.getMonth() + 1).padStart(2, '0'),
        HH = String(today.getHours()).padStart(2, '0'),
        MM = String(today.getMinutes() + 1).padStart(2, '0'),
        SS = String(today.getSeconds() + 1).padStart(2, '0'),
        yyyy = today.getFullYear(),
        today = yyyy + "-" + mm + "-" + dd + " " + HH + ":" + MM + ":" + SS;
    return today
};

function mergeObjects(obj1, obj2) {
    const result = {};

    for (const key in obj1) {
        if (obj1.hasOwnProperty(key)) {
            result[key] = obj1[key];
        }
    }

    for (const key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            result[key] = obj2[key];
        }
    }
    return result;
}

function joinNestedObjects(data) {
    const result = {};

    for (const [key, value] of Object.entries(data)) {
        if (Array.isArray(value)) {
            const nestedKeys = Object.keys(value[0]);
            for (const nestedKey of nestedKeys) {
                const nestedValues = value.map((item) => item[nestedKey]);
                result[nestedKey] = nestedValues.join("$");
            }
        } else if (typeof value === "object") {
            const nestedResult = joinNestedObjects(value);
            Object.assign(result, nestedResult);
        }
    }
    return result;
}

function changeUser(user_id) {
    try {
        braze.changeUser(user_id);
        braze.refreshFeatureFlags();
    } catch (error) {
        console.log('changeUser error', error);
    }

    // amplitude.getInstance().setUserId(user_id);
    try {
        amplitude.setUserId(user_id);
    } catch (error) {
        console.log('amplitude setUserId error', error);
    }
    console.log('changeUser complete : ' + user_id);
}

function amplitudeSetUserProperty(n, v) {
    try {
        // var identify = new amplitude.Identify().set(n, v)
        // amplitude.getInstance().identify(identify);
        var identifyEvent = new amplitude.Identify();
        identifyEvent.set(n, v);
        amplitude.identify(identifyEvent);
    } catch (error) {
        console.log("amplitude logging error", error)
    }
}

function amplitudeLogCustomEvent(n, p, r) {
    try {
        if (r) {
            revenue = { $revenue: r };
            // property = renameKeys(p, keyMapForSaaS(), false, excludedKeyForSaaS());
            amplitude.track(n, mergeObjects(revenue, transformFromObjToArray(property)));
        } else {
            property = renameKeys(p, keyMapForSaaS(), false, excludedKeyForSaaS());
            amplitude.track(n, transformFromObjToArray(property));
        }
    } catch (error) {
        console.log("amplitude logging error", error)
    }
}

function brazeLogCustomEvent(n, p) {
    property = renameKeys(p, keyMapForSaaS(), false, excludedKeyForSaaS());
    try {
        braze.logCustomEvent
            (n, (mergeObjects(property, joinNestedObjects(property))));

        braze.requestImmediateDataFlush();
    } catch (error) {
        console.log("brazeLogCustomEvent error", error)
    }
}

function brazeAddCustomAttribute(n, a) {
    braze.getUser().addToCustomAttributeArray(n, a);
    braze.requestImmediateDataFlush();
}

function brazeRemoveCustomAttribute(n, a) {
    braze.getUser().removeFromCustomAttributeArray(n, a);
    braze.requestImmediateDataFlush();
}

function brazeSetCustomAttribute(n, v) {
    braze.getUser().setCustomUserAttribute(n, v);
    braze.requestImmediateDataFlush();
};

function brazeLogPurchase(n, p, r) {
    property = renameKeys(p, keyMapForSaaS(), false, excludedKeyForSaaS());
    braze.logPurchase
        (
            n,
            r,
            "USD",
            1,
            mergeObjects(property, joinNestedObjects(property)
            )
        )
};

function brazeSetGender(v) {
    if (v === '여성') {
        braze.getUser().setGender(braze.User.Genders.FEMALE);
        amplitudeSetUserProperty("성별", "female");
    } else if (v === '남성') {
        braze.getUser().setGender(braze.User.Genders.MALE);
        amplitudeSetUserProperty("성별", "male");
    } else if (v === '기타') {
        braze.getUser().setGender(braze.User.Genders.OTHER);
        amplitudeSetUserProperty("성별", "other");
    } else {
        braze.getUser().setGender(null);
        amplitudeSetUserProperty("성별", null);
    }
}

function brazeSetDob(v) {
    if (v) {
        var dob = new Date(v);
        braze.getUser().setDateOfBirth(dob.getFullYear(), dob.getMonth() + 1, dob.getDate());
    } else {
        braze.getUser().setDateOfBirth(null, null, null);
    }
}

function brazeSetFirstName(v) {
    if (v) {
        braze.getUser().setFirstName(v);
        amplitudeSetUserProperty("이름", v);
    } else {
        braze.getUser().setFirstName(null);
        amplitudeSetUserProperty("이름", null);
    }
}

function brazeSetEmail(v) {
    if (v) {
        braze.getUser().setEmail(v);
        amplitudeSetUserProperty("email", v);
    } else {
        braze.getUser().setEmail(null);
        amplitudeSetUserProperty("email", null);
    }
}

function brazeSetPhone(v) {
    if (v) {
        braze.getUser().setPhoneNumber(v);
    } else {
        braze.getUser().setPhoneNumber(null);
    }

}

function brazeSetPushSubscribe(v) {
    if (v == '동의') {
        brazeSetCustomAttribute("앱푸시 마케팅 수신동의", true);
        amplitudeSetUserProperty("앱푸시 마케팅 수신동의", true);
        braze.getDeviceId(function (deviceId) {
            const v = deviceId
            brazeAddCustomAttribute("pushSubscribedDeivceList", deviceId)
        }
        )
    } else if (v == '거부') {
        brazeSetCustomAttribute("앱푸시 마케팅 수신동의", false);
        amplitudeSetUserProperty("앱푸시 마케팅 수신동의", false);
        braze.getDeviceId(function (deviceId) {
            const v = deviceId
            brazeRemoveCustomAttribute("pushSubscribedDeivceList", deviceId)
        }
        )
    } else {
        brazeSetCustomAttribute("앱푸시 마케팅 수신동의", null);
        amplitudeSetUserProperty("앱푸시 마케팅 수신동의", null);
        braze.getDeviceId(function (deviceId) {
            const v = deviceId
            brazeRemoveCustomAttribute("pushSubscribedDeivceList", deviceId)
        }
        )
    }
}

function brazeSetEmailSubscribe(v) {
    if (v == '동의') {
        braze.getUser().setEmailNotificationSubscriptionType(braze.User.NotificationSubscriptionTypes.OPTED_IN);
        amplitudeSetUserProperty("이메일 마케팅 수신동의", true);
    } else if (v == '거부') {
        braze.getUser().setEmailNotificationSubscriptionType(braze.User.NotificationSubscriptionTypes.UNSUBSCRIBED);
        amplitudeSetUserProperty("이메일 마케팅 수신동의", false);
    } else {
        braze.getUser().setEmailNotificationSubscriptionType(braze.User.NotificationSubscriptionTypes.SUBSCIRBED);
        amplitudeSetUserProperty("이메일 마케팅 수신동의", null);
    }
}

function brazeSetSmsSubscribe(v) {
    if (v == '동의') {
        brazeSetCustomAttribute("문자 마케팅 수신동의", true)
        amplitudeSetUserProperty("문자 마케팅 수신동의", true);
    } else if (v == '거부') {
        brazeSetCustomAttribute("문자 마케팅 수신동의", false)
        amplitudeSetUserProperty("문자 마케팅 수신동의", false);
    } else {
        brazeSetCustomAttribute("문자 마케팅 수신동의", null)
        amplitudeSetUserProperty("문자 마케팅 수신동의", null);
    }
}


window.addEventListener("DOMContentLoaded", function () {
    // 현재 페이지가 상품 상세 페이지인지 확인
    if (window.location.pathname.includes("/product")) {
        var urlParams = new URLSearchParams(window.location.search);
        var prdId = urlParams.get("prdId");
        var item_detail = getItemById(prdId);

        // 세션 스토리지에 데이터 저장
        sessionStorage.setItem("lastProductDetail", JSON.stringify(item_detail));
    } else {
        // 상품 상세 페이지가 아닐 때 이탈 이벤트 처리
        processProductDetailExit();
    }
});

// 뒤로가기/앞으로가기 감지
window.addEventListener("pageshow", function (event) {
    if (event.persisted) {
        // 캐시로 인해 로드된 경우에도 처리
        if (!window.location.pathname.includes("/product")) {
            processProductDetailExit();
        }
    }
});

// 이탈 이벤트 처리 함수
function processProductDetailExit() {
    var lastProductDetail = sessionStorage.getItem("lastProductDetail");
    if (lastProductDetail) {
        try {
            var item_detail = JSON.parse(lastProductDetail);

            // 이벤트 로그 기록
            brazeLogCustomEvent("상품 상세페이지 이탈", item_detail);
            amplitudeLogCustomEvent("상품 상세페이지 이탈", item_detail);

            // 데이터 처리 완료 후 제거
            sessionStorage.removeItem("lastProductDetail");
        } catch (error) {
            console.error("세션 데이터 처리 실패:", error);
        }
    }
}
