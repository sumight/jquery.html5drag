(function($){
	/*可以相互拖放的标记对*/
	var tabMap={};
	/*子元素被开始拖动的时候触发*/
	$.fn.drag = function(tab,callback){
		$(this).children().attr("draggable",true);						//将子元素设置为可拖放
		$(this).children().on("dragstart",function(event){				//注册子元素的拖放开始事件
			tabMap[tab]=event.target;									//将子元素保存在tab标记中
			if(callback)												//若有回调函数
				callback();												//调用之
		});
	}
	/*其他元素被释放到本元素时触发*/
	$.fn.drop = function(tab,callback){
		$(this).on("drop",function(event){								//注册元素丢弃属性
			event.preventDefault();										//禁用默认事件
			var dropedEle = tabMap[tab];								//获取被丢弃元素
//			if(dropedEle)
//				event.target.appendChild(dropedEle);					//添加被丢弃元素
			tabMap[tab]=null
			if(callback)												//若有回调函数
				callback(dropedEle);									//调用之
		});
		
		var isOnDragover = $._data($(this)[0],"events")['dragover'];
		if(!isOnDragover){
			$(this).on("dragover",function(event){						//注册拖拽到上面的事件
				event.preventDefault();									//禁用默认事件
			})
		}
	}
	/*元素被拖拽到上面的时但未释放的时候触发*/
	$.fn.dragover = function(callback){
		$(this).on("dragover",function(event){							//注册拖拽到上面的事件
			event.preventDefault();										//禁用默认事件
			if(callback)												//若有回调函数
				callback();												//调用之
		})
	}
})(jQuery)