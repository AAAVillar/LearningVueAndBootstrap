
new Vue({

el:'#vue-app',  // the id is the target... of the new Vue

	data:{
		
		output:'Your fav food'
		
	},

	methods:{

	 	readRefs:function(){
	 		console.log(this.$refs.test.innerText);
	 		this.output = this.$refs.input.value;
	 	}

	},

		computed:{

		
				
			
	

		}  // end of computed

});