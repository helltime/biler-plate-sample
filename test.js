<script>
	var arrObj = [{"_id": 1, "parentId": null, "comment": "abcd1", "contentId": "555555"}
	            , {"_id": 2, "parentId": 8, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 3, "parentId": 8, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 4, "parentId": 7, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 5, "parentId": 7, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 6, "parentId": 1, "comment": "abcd1", "contentId": "555555"}
	            , {"_id": 7, "parentId": 1, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 8, "parentId": 1, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 9, "parentId": null, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 10, "parentId": 9, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 11, "parentId": 9, "comment": "abcd1", "contentId": "555555"}
	            , {"_id": 12, "parentId": 11, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 13, "parentId": 9, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 14, "parentId": 13, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 15, "parentId": 13, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 16, "parentId": null, "comment": "abcd1", "contentId": "555555"}
	            , {"_id": 17, "parentId": 11, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 18, "parentId": 8, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 19, "parentId": 7, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 20, "parentId": 6, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 21, "parentId": 16, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 22, "parentId": 16, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 23, "parentId": 22, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 24, "parentId": 22, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 25, "parentId": 16, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 26, "parentId": 25, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 27, "parentId": 25, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 28, "parentId": 18, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 29, "parentId": 18, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 30, "parentId": 18, "comment": "abcd1", "contentId": "555555"}		
	];
	
	let fn_tree = function(arrObj) {
		let arrParent  = [];
		let arrComment = [];
		
		let fn_r = function(arrObj, parentObj) {
			for(var i=0;i<arrObj.length;i++) {
				if(i == parentObj["idx"]) {
					continue;
				}
				
				if(arrObj[i]["parentId"] == parentObj["_id"]) {
					let obj = arrObj[i];
					
					obj["lv"] = parentObj["lv"]+1;
					
					arrComment.push(obj);
					
					fn_r(arrObj, obj);
				}
			}
		}
		
		for(var i=0;i<arrObj.length;i++) {
			var val = arrObj[i]["parentId"];
			
			if(!val) {
				var obj = arrObj[i];
				
				obj["idx"] = i;
				
				arrParent.push(obj);
			}
		}
		
		for(var i=0;i<arrParent.length;i++) {
			var obj = arrParent[i];
			
			obj["lv"] = 0;
			
			arrComment.push(obj);
			
			fn_r(arrObj, obj);
		}
	}
	
	let start = 0;
	let end   = 0;
	
	start = new Date().getTime();
	fn_tree(arrObj);
	end = new Date().getTime()-start;
	
	console.log(`소요시간 : ${end} msec`);
	
	

</script>
