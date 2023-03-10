//img za display
const images =[
    'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80',
    'https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1579298245158-33e8f568f7d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&q=80',
    'https://images.unsplash.com/photo-1520263115673-610416f52ab6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1611417833111-284ac6508488?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1612821745127-53855be9cbd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1618453292507-4959ece6429e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    'https://images.unsplash.com/photo-1583410742325-7163c1276e4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    'https://images.unsplash.com/photo-1560196327-cca0a731441b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1548003724-7268ce19e487?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1576608583800-2dea5261c7ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1585843736857-bd7438e55c67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
]

//display slik

for(const idx in images){
    const img = document.createElement('img')
    img.src = images[idx];
    img.alt = "nike image"

    //like button
    const likeBtn = document.createElement('span')
    likeBtn.classList.add('like-btn')
    likeBtn.innerHTML = '&#10084' //koda za like gumb


    const imageBlock = document.createElement('div')
    imageBlock.classList.add('image-block')
    imageBlock.append(img)
    imageBlock.append(likeBtn)

    
    const gallery = document.getElementById("gallery")
    gallery.append(imageBlock)
}

const firstImageBlock = document.querySelector('.image-block:first-child')

const canvas = document.createElement('canvas')
canvas.id = 'bezierLogo'
firstImageBlock.append(canvas)

const secImageBlock = document.querySelectorAll('.image-block')[1];

const nikesvg = document.createElement('div')
nikesvg.id = 'nikesvg';
nikesvg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" id="svg"
width="94%"
viewBox="0 0 1410 1000">
<path id="Unnamed"
   fill="#000000" stroke="black" stroke-width="1"
   d="M 775.45,368.73
      C 775.45,368.73 774.73,378.55 774.73,378.55
        774.73,378.55 773.82,386.73 773.82,386.73
        773.82,386.73 773.09,394.00 773.09,394.00
        773.09,394.00 772.73,399.45 772.73,399.45
        772.73,399.45 772.00,407.09 772.00,407.09
        772.00,407.09 771.45,412.00 771.45,412.00
        771.45,412.00 771.45,417.45 771.45,417.45
        771.45,417.45 772.00,422.55 772.00,422.55
        772.00,422.55 772.55,427.09 772.55,427.09
        772.55,427.09 773.09,431.64 773.09,431.64
        773.09,431.64 774.18,435.82 774.18,435.82
        774.18,435.82 775.64,439.45 775.64,439.45
        775.64,439.45 776.55,443.45 776.55,443.45
        776.55,443.45 777.82,446.36 777.82,446.36
        777.82,446.36 779.64,450.00 779.64,450.00
        779.64,450.00 781.82,452.73 781.82,452.73
        781.82,452.73 783.82,455.82 783.82,455.82
        783.82,455.82 785.82,458.73 785.82,458.73
        785.82,458.73 788.91,461.27 788.91,461.27
        788.91,461.27 792.36,464.55 792.36,464.55
        792.36,464.55 795.27,466.73 795.27,466.73
        795.27,466.73 799.09,469.45 799.09,469.45
        799.09,469.45 802.00,470.36 802.00,470.36
        802.00,470.36 806.73,472.73 806.73,472.73
        806.73,472.73 811.82,475.82 811.82,475.82
        811.82,475.82 818.00,477.09 818.00,477.09
        818.00,477.09 824.55,478.73 824.55,478.73
        824.55,478.73 830.18,479.27 830.18,479.27
        830.18,479.27 835.82,480.00 835.82,480.00
        835.82,480.00 843.27,480.00 843.27,480.00
        843.27,480.00 849.82,480.00 849.82,480.00
        849.82,480.00 856.36,480.36 856.36,480.36
        856.36,480.36 861.27,480.36 861.45,480.36
        861.64,480.36 868.36,479.64 868.36,479.64
        868.36,479.64 872.73,479.45 872.73,479.45
        872.73,479.45 876.73,478.91 876.91,478.91
        877.09,478.91 882.18,478.18 882.18,478.18
        882.18,478.18 887.09,477.45 887.09,477.45
        887.09,477.45 892.18,476.73 892.18,476.73
        892.18,476.73 899.64,475.45 899.64,475.45
        899.64,475.45 904.55,474.73 904.55,474.73
        904.55,474.73 911.64,473.82 911.64,473.82
        911.64,473.82 919.09,472.73 919.09,472.73
        919.09,472.73 925.27,472.00 925.27,472.00
        925.27,472.00 930.73,470.73 930.73,470.73
        930.73,470.73 938.55,469.09 938.55,469.09
        938.55,469.09 948.18,466.91 948.18,466.91
        948.18,466.91 958.36,464.73 958.36,464.73
        958.36,464.73 966.18,463.27 966.18,463.27
        966.18,463.27 974.55,461.45 974.55,461.45
        974.55,461.45 988.91,458.73 988.91,458.73
        988.91,458.73 1008.91,454.73 1008.91,454.73
        1008.91,454.73 1024.91,451.45 1024.91,451.45
        1024.91,451.45 1040.36,448.55 1040.36,448.55
        1040.36,448.55 1064.36,443.82 1064.36,443.82
        1064.36,443.82 1085.09,439.09 1085.09,439.09
        1085.09,439.09 1108.00,433.27 1108.00,433.27
        1108.00,433.27 1138.00,426.18 1138.00,426.18
        1138.00,426.18 1160.73,421.09 1160.73,421.09
        1160.73,421.09 1182.00,415.09 1182.00,415.09
        1182.00,415.09 1196.55,411.64 1196.55,411.64
        1196.55,411.64 1217.09,406.18 1217.09,406.18
        1217.09,406.18 1236.18,401.82 1236.18,401.82
        1236.18,401.82 1250.55,398.36 1250.55,398.36
        1250.55,398.36 1262.00,395.09 1262.00,395.09
        1262.00,395.09 1265.45,394.36 1265.45,394.36
        1265.45,394.36 1270.00,394.73 1270.00,394.73
        1270.00,394.73 1272.18,395.82 1272.18,395.82
        1272.18,395.82 1277.27,396.36 1277.27,396.36
        1277.27,396.36 1281.82,396.73 1282.00,396.73
        1282.18,396.73 1288.18,396.55 1288.18,396.55
        1288.18,396.55 1293.82,397.27 1293.82,397.27
        1293.82,397.27 1298.91,397.45 1298.91,397.45
        1298.91,397.45 1304.00,397.82 1304.00,397.82
        1304.00,397.82 1307.45,397.82 1307.45,397.82
        1307.45,397.82 1312.18,398.55 1312.18,398.55
        1312.18,398.55 1315.27,399.09 1315.27,399.09
        1315.27,399.09 1318.36,399.45 1318.36,399.45
        1318.36,399.45 1321.09,400.18 1321.09,400.18
        1321.09,400.18 1323.64,400.55 1323.64,400.55
        1323.64,400.55 1326.18,401.45 1326.18,401.45
        1326.18,401.45 1329.27,402.36 1329.27,402.36
        1329.27,402.36 1332.55,403.82 1332.55,403.82
        1332.55,403.82 1335.09,404.91 1335.09,404.91
        1335.09,404.91 1334.00,407.82 1333.82,407.82
        1333.64,407.82 1330.91,408.55 1330.91,408.55
        1330.91,408.55 1325.82,410.91 1325.82,410.91
        1325.82,410.91 1316.36,414.55 1316.36,414.55
        1316.36,414.55 1302.36,420.91 1302.36,420.91
        1302.36,420.91 1286.91,426.55 1286.91,426.55
        1286.91,426.55 1266.00,434.18 1266.00,434.18
        1266.00,434.18 1243.82,441.64 1243.82,441.64
        1243.82,441.64 1224.36,448.00 1224.36,448.00
        1224.36,448.00 1205.45,453.09 1205.45,453.09
        1205.45,453.09 1185.09,459.64 1185.09,459.64
        1185.09,459.64 1155.82,469.09 1155.82,469.09
        1155.82,469.09 1125.82,478.73 1125.82,478.73
        1125.82,478.73 1072.00,494.55 1072.00,494.55
        1072.00,494.55 1042.91,503.27 1042.91,503.27
        1042.91,503.27 1027.64,507.64 1027.64,507.64
        1027.64,507.64 1015.27,511.09 1015.27,511.09
        1015.27,511.09 1004.18,514.55 1004.18,514.55
        1004.18,514.55 988.55,517.82 988.55,517.82
        988.55,517.82 974.18,521.82 974.18,521.82
        974.18,521.82 958.18,526.55 958.18,526.55
        958.18,526.55 937.45,532.55 937.45,532.55
        937.45,532.55 924.00,536.55 924.00,536.55
        924.00,536.55 915.45,538.91 915.45,538.91
        915.45,538.91 905.82,541.27 905.82,541.27
        905.82,541.27 896.91,543.64 896.91,543.64
        896.91,543.64 884.73,546.55 884.73,546.55
        884.73,546.55 872.55,549.09 872.55,549.09
        872.55,549.09 860.73,552.18 860.73,552.18
        860.73,552.18 848.55,554.36 848.55,554.36
        848.55,554.36 840.55,556.55 840.55,556.55
        840.55,556.55 831.64,557.82 831.64,557.82
        831.64,557.82 821.45,559.09 821.45,559.09
        821.45,559.09 813.45,560.73 813.45,560.73
        813.45,560.73 806.55,561.64 806.55,561.64
        806.55,561.64 801.45,562.36 801.27,562.36
        801.09,562.36 795.27,562.91 795.27,562.91
        795.27,562.91 788.36,563.45 788.36,563.45
        788.36,563.45 778.73,563.82 778.73,563.82
        778.73,563.82 771.09,564.00 771.09,564.00
        771.09,564.00 763.82,564.00 763.82,564.00
        763.82,564.00 757.45,564.36 757.45,564.36
        757.45,564.36 747.64,564.00 747.64,564.00
        747.64,564.00 738.36,563.27 738.36,563.27
        738.36,563.27 728.73,561.45 728.73,561.45
        728.73,561.45 719.27,558.73 719.27,558.73
        719.27,558.73 710.91,554.55 710.91,554.55
        710.91,554.55 702.55,550.36 702.55,550.36
        702.55,550.36 695.09,545.09 695.09,545.09
        695.09,545.09 689.82,540.36 689.82,540.36
        689.82,540.36 686.00,534.73 686.00,534.73
        686.00,534.73 681.27,528.73 681.27,528.73
        681.27,528.73 677.64,523.45 677.64,523.45
        677.64,523.45 675.09,516.55 675.09,516.55
        675.09,516.55 672.18,510.73 672.18,510.73
        672.18,510.73 670.55,504.55 670.55,504.55
        670.55,504.55 670.36,498.73 670.36,498.73
        670.36,498.73 669.45,492.91 669.45,492.91
        669.45,492.91 669.27,484.36 669.27,484.36
        669.27,484.36 669.27,477.82 669.45,477.45
        669.64,477.09 671.09,470.00 671.09,470.00
        671.09,470.00 672.91,462.55 672.91,462.55
        672.91,462.55 674.91,457.45 675.09,457.45
        675.27,457.45 677.45,454.18 677.45,454.18
        677.45,454.18 679.64,450.00 679.64,450.00
        679.64,450.00 682.18,445.45 682.18,445.45
        682.18,445.45 685.27,441.64 685.27,441.64
        685.27,441.64 687.82,437.27 687.82,437.27
        687.82,437.27 692.36,432.18 692.36,432.18
        692.36,432.18 698.18,425.64 698.18,425.64
        698.18,425.64 705.09,419.09 705.09,419.09
        705.09,419.09 711.45,413.27 711.45,413.27
        711.45,413.27 717.45,407.64 717.45,407.64
        717.45,407.64 722.55,403.64 722.55,403.64
        722.55,403.64 728.00,399.64 728.00,399.64
        728.00,399.64 732.18,396.00 732.18,396.00
        732.18,396.00 736.91,391.82 736.91,391.82
        736.91,391.82 743.27,387.64 743.27,387.64
        743.27,387.64 747.45,384.55 747.45,384.55
        747.45,384.55 752.73,380.55 752.73,380.55
        752.73,380.55 759.45,376.18 759.45,376.18
        759.45,376.18 765.27,371.82 765.27,371.82
        765.27,371.82 770.36,368.55 770.36,368.55
        770.36,368.55 774.00,366.73 774.00,366.73
        774.00,366.73 775.82,365.27 775.82,365.27
        775.82,365.27 775.82,367.27 775.82,367.27" />
</svg>`;
secImageBlock.append(nikesvg)

var nikeBezier = document.getElementById("bezierLogo");
var ctx = nikeBezier.getContext("2d");
ctx.beginPath();
ctx.moveTo(80, 60);
ctx.bezierCurveTo(80, 130, 100, 90, 250, 50);
ctx.bezierCurveTo(20, 210, 30, 100, 60, 80);
ctx.fillStyle = "#FFFFFF";
ctx.fill();

//dark mode

const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', function(event){
    toggleTheme()
})

let isDark = false

function toggleTheme(){
    isDark = !isDark
    const newBackGroundColor = isDark ? '#121212' : '#ffffff' 
    const newThemeButtonText = isDark ? "????" : "????"
    const newHeadingColor = isDark ? '#eeeeee' : '#121212'

    document.body.style.backgroundColor = newBackGroundColor
    themeBtn.textContent = newThemeButtonText
    const heading = document.querySelector('.heading')
    heading.style.color = newHeadingColor
}

//like button

document.body.addEventListener('click', function(event){
    if(!event.target.classList.contains('liked')){
        event.target.classList.add('liked');
        event.target.style.color = '#d2042d'
    }
    else if(event.target.classList.contains('liked')){
        event.target.classList.remove('liked');
        event.target.style.color = '#999999'
    }
})