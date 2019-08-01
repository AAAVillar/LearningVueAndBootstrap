var data = {
	name:"Yoshi"
}


Vue.component('greeting',{

	
	template:'<p>Hey there, I am a {{name}}.<button v-on:click="changeName">Change name</button></p>',

	data:function(){
		return {
			name:"Yoshi"
		}
	

	},

	methods:{
		changeName:function(){
			this.name = "Mario"
		}
	}
	
	

	
});


new Vue({

el:'#vue-app-one',  // the id is the target... of the new Vue

	data:{
		
		  },

	methods:{

	  
	         },

		computed:{

		         }  // end of computed

});



new Vue({

el:'#vue-app-two',  // the id is the target... of the new Vue

	data:{
		
		  },

	methods:{

	  
	         },

		computed:{

		         }  // end of computed

});