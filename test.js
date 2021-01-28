<script>
	var arrObj = [{"_id": 1, "parentId": null, "comment": "abcd1", "contentId": "555555"}
	            , {"_id": 1, "parentId": null, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 1, "parentId": null, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 1, "parentId": null, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 1, "parentId": null, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 1, "parentId": null, "comment": "abcd1", "contentId": "555555"}
	            , {"_id": 1, "parentId": null, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 1, "parentId": null, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 1, "parentId": null, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 1, "parentId": null, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 1, "parentId": null, "comment": "abcd1", "contentId": "555555"}
	            , {"_id": 1, "parentId": null, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 1, "parentId": null, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 1, "parentId": null, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 1, "parentId": null, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 1, "parentId": null, "comment": "abcd1", "contentId": "555555"}
	            , {"_id": 1, "parentId": null, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 1, "parentId": null, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 1, "parentId": null, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 1, "parentId": null, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 1, "parentId": null, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 1, "parentId": null, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 1, "parentId": null, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 1, "parentId": null, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 1, "parentId": null, "comment": "abcd1", "contentId": "555555"}
				, {"_id": 1, "parentId": null, "comment": "abcd1", "contentId": "555555"}
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
