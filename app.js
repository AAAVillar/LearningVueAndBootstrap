
new Vue({

el:'#vue-app',  // the id is the target... of the new Vue

	data:{
		
		name:"bobby",
	    job:"Ninja-HairDresser"
	},

	methods:{

	    greet:function(time){
	    return 'Good ' + time;
	                    },

	    greet2:function(time){
	    	return 'Good ' + time + ' ' + this.name;
	        } // methods
	    }


});