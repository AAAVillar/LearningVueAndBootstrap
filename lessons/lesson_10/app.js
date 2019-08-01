
new Vue({

el:'#vue-app',  // the id is the target... of the new Vue

	data:{
		
		key_1:false,
		nearBy:false
	},

	methods:{

	  
	},

		computed:{

			compClasses:function(){
				return {
					key_1:this.key_1,
					nearBy:this.nearBy
				}
			}
	

		}  // end of computed

});