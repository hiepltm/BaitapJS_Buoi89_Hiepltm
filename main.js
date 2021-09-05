
//0.NHẬP SỐ NGUYÊN, LƯU TRỮ VÀO MẢNG
var numArray = [];
function addElement(){
    var num = Number(document.querySelector("#inputNum").value);
    numArray.push(num);
    // console.log(numArray);
    document.getElementById("txtNum").innerHTML="Các số trong mảng là: "+numArray;
}
document.getElementById("btnThemSo").onclick=addElement;

//==============================================================
//1.TÍNH TỔNG CÁC SỐ DƯƠNG
function tongSoDuong(){
    var sum=0;
    for(var i=0;i<numArray.length;i++){
        if(numArray[i]>0){
            sum+=numArray[i];
        }
    }
    //console.log(sum);
    document.getElementById("txtTongSoDuong").innerHTML="Tổng các số dương là: "+sum;
}
document.getElementById("btnTongSoDuong").onclick=tongSoDuong;

//==============================================================
//2.ĐÉM CÓ BAO NHIÊU SỐ DƯƠNG
function soDuong(){
    var count=0;
    for(var i=0;i<numArray.length;i++){
        if(numArray[i]>0){
            count++;
        }
    }
    // console.log(count);
    document.getElementById("txtSoDuong").innerHTML="Có "+count +" số dương";
}
document.getElementById("btnSoDuong").onclick=soDuong;

//==============================================================
//3. TÌM SỐ NHỎ NHẤT
function timMin(){
    var viTri=0;
    var min=numArray[viTri];
    for(var i=0;i<numArray.length;i++){
        if(numArray[i]<min){
            viTri=i;
            min=numArray[viTri];
        }
    }
    // console.log("Số nhỏ nhất ở vị trí: "+viTri+". Giá trị là: "+min);
    document.getElementById("txtMin").innerHTML="Số nhỏ nhất ở vị trí: "+viTri+". Giá trị là: "+min;
}
document.getElementById("btnMin").onclick=timMin;
//==============================================================
//4. TÌM SỐ DƯƠNG NHỎ NHẤT
function timMinDuong(){
    var viTri=0;
    var minDuong=numArray[viTri];
    for(var i=0;i<numArray.length;i++){
        if(numArray[i]<=0){
            continue;
        }else if(numArray[i]<minDuong && numArray[i]>0){    
            viTri=i;
            minDuong=numArray[viTri];
        }
    }
    // console.log("Số nhỏ nhất ở vị trí: "+viTri+". Giá trị là: "+min);
    document.getElementById("txtMinDuong").innerHTML="Số dương nhỏ nhất ở vị trí: "+viTri+". Giá trị là: "+minDuong;
}
document.getElementById("btnMinDuong").onclick=timMinDuong;

//==============================================================
//5. TÌM SỐ CHẴN CUỐI CÙNG TRONG MẢNG
function timLastEven(){
    var lastEven=0;
    for(var i=0;i<numArray.length;i++){
        if(numArray[i]%2==0){
            lastEven=numArray[i];
        }
    }
    if(lastEven==0){
        document.getElementById("txtLastEven").innerHTML="-1";
    }else{
        document.getElementById("txtLastEven").innerHTML="Số chẵn cuối cùng là: "+lastEven;
    }
}
document.getElementById("btnLastEven").onclick=timLastEven;

//==============================================================
//6. ĐỔI CHỖ 2 GIÁ TRỊ TRONG MẢNG THEO VỊ TRÍ (CHO NHẬP VÀO 2 VỊ TRÍ MUỐN ĐỔI CHỖ GIÁ TRỊ)
function doiViTri(){
    var viTri1=parseFloat(document.getElementById("numChange1").value);
    var viTri2=parseFloat(document.getElementById("numChange2").value);

    if(viTri1<numArray.length && viTri2<numArray.length){
    var temp=numArray[viTri1];
    numArray[viTri1]=numArray[viTri2];
    numArray[viTri2]=temp;
    document.getElementById("txtChange").innerHTML=numArray;
    }else{
        document.getElementById("txtChange").innerHTML="Không tồn tại vị trí đã chọn";
    }
}
document.getElementById("btnChange").onclick=doiViTri;

//==============================================================
//7. SẮP XẾP MẢNG THEO THỨ TỰ TĂNG DẦN

function swap(index1,index2){
    var temp=numArray[index1];
    numArray[index1]=numArray[index2];
    numArray[index2]=temp;
}

function sapXepTang(){
    for(var i=0;i<numArray.length;i++){
        for(var j=0;j<numArray.length;j++){
            if(numArray[j]>numArray[j+1]){
                swap(j,j+1);
            }
        }
    }
    document.getElementById("txtArrange").innerHTML=numArray;
}
document.getElementById("btnArrange").onclick=sapXepTang;

//==============================================================
//8. TÌM SỐ NGUYÊN TỐ ĐẦU TIÊN TRONG MẢNG. NẾU MẢNG KHÔNG CÓ SỐ NGUYÊN TỐ THÌ TRẢ VỀ -1

function check(a) {
    // check = 1 la so nguyen so
    var check = 1;
    for (var i = 2; i <= Math.sqrt(a); i++) {
        if (a % i == 0) {
            check = 0;
            break;
        }
    }
    return check;
}

function prime() {
    var num = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (check(i)) {
            num = numArray[i];
            break;
        }else {
            num = -1;
        }
    }
    document.getElementById("txtNguyenTo").innerHTML = num;
}
document.getElementById("btnNguyenTo").onclick = prime;

//==============================================================
//9.NHẬP THÊM 1 MẢNG SỐ THƯC, TÌM XEM TRONG MẢNG CÓ BAO NHIÊU SỐ NGUYÊN

function intNum(){
    var count=0;
    for(var i=0; i<numArray.length;i++){
        if(numArray[i]%1==0){
            count++;
        }
    }
    document.getElementById("txtIntNum").innerHTML=count;
}
document.getElementById("btnIntNum").onclick=intNum;


//==============================================================
//10. SÓ SÁNH SỐ LƯỢNG SỐ DƯƠNG VÀ SỐ LƯỢNG SỐ ÂM XEM SỐ NÀO NHIỀU 

function demSoAmDuong(){
    var duongCount=0;
    var amCount=0;
    for(var i=0;i<numArray.length;i++){
        if(numArray[i]>0){
            duongCount++;
        }else if(numArray[i]<0){
            amCount++;
        }
    }

    if(duongCount>amCount){
        document.getElementById("txtDemAmDuong").innerHTML="Số dương nhiều hơn số âm"
    }else if(duongCount<amCount){
        document.getElementById("txtDemAmDuong").innerHTML="Số âm nhiều hơn số dương"
    }else{
        document.getElementById("txtDemAmDuong").innerHTML="Số dương bằng số âm"
    }
    
}
document.getElementById("btnDemAmDuong").onclick=demSoAmDuong;