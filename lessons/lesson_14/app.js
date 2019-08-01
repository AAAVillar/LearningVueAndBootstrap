
var  one = new Vue({

el:'#vue-app-one',  // the id is the target... of the new Vue

	data:{
		
		title:'vue-app-one'
		
	},

	methods:{

	  
	},

		computed:{

		
		greet:function(){
			return 'hello from app one';
		}		
			
	

		}  // end of computed

});

var  two = new Vue({

el:'#vue-app-two',  // the id is the target... of the new Vue

	data:{
		
		title:'vue-app-two'
		
	},

	methods:{

	 	changeTitle:function(){
	 		one.title = "Title changed";
	 	} 

	},

		computed:{

		
				
			greet:function(){
			return 'hello from app two';
		}		
	

		}  // end of computed

});