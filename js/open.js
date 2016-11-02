function tc(id){
	var dk=document.getElementById(id);
	dk.style.display="block";
	}

function xc(id){
	var dk=document.getElementById(id);
	dk.style.display="none";}
/*------*/

function $G(Read_Id) { return document.getElementById(Read_Id) }

function Effect(ObjectId,parentId,id){
  if ($G(ObjectId).style.display == 'none'||$G(ObjectId).style.display == ''){
	  document.getElementById(id).style.transform="rotate(180deg)";
  Start(ObjectId,'Opens');
  $G(parentId).innerHTML = "<a href=# onClick=javascript:Effect('"+ObjectId+"','"+parentId+"');>'关闭'</a>"
  
  }else{ 
      document.getElementById(id).style.transform="rotate(0deg)";
  Start(ObjectId,'Close');

  $G(parentId).innerHTML = "<a href=# onClick=javascript:Effect('"+ObjectId+"','"+parentId+"');>'打开'</a>"

   
  }
}

function Start(ObjId,method){
var BoxHeight = $G(ObjId).offsetHeight;         //获取对象高度
var MinHeight = 5;                  //定义对象最小高度
var MaxHeight = 460;                 //定义对象最大高度
var BoxAddMax = 1;                  //递增量初始值
var Every_Add = 0.15;                //每次的递(减)增量  [数值越大速度越快]
var Reduce = (BoxAddMax - Every_Add);
var Add    = (BoxAddMax + Every_Add);

if (method == "Close"){
var Alter_Close = function(){            //构建一个虚拟的[递减]循环
  BoxAddMax /= Reduce;
  BoxHeight -= BoxAddMax;
  if (BoxHeight <= MinHeight){
    $G(ObjId).style.display = "none";
    window.clearInterval(BoxAction);
  }
  else $G(ObjId).style.height = BoxHeight;
}
var BoxAction = window.setInterval(Alter_Close,1);
}

else if (method == "Opens"){
var Alter_Opens = function(){            //构建一个虚拟的[递增]循环
  BoxAddMax *= Add;
  BoxHeight += BoxAddMax;
  if (BoxHeight >= MaxHeight){
    $G(ObjId).style.height = MaxHeight;
    window.clearInterval(BoxAction);
  }else{
  $G(ObjId).style.display= "block";
  $G(ObjId).style.height = BoxHeight;
  }
}
var BoxAction = window.setInterval(Alter_Opens,1);
}

}