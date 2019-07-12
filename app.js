
new Vue({

el:'#vue-app',  // the id is the target... of the new Vue

	data:{
		
		name:"bobby",
	    job:"Ninja-HairDresser",
	    website_W3:'https://www.w3schools.com',
	    FarmerJs:'<a href= "https://farmerjhemp.com" target="_blank" >Farmer J\'s Hemp</a>',
	    age:25,
	    x:0,
	    y:0
	},

	methods:{

	    greet:function(time){
	    return 'Good ' + time;
	                    },

	    greet2:function(time){
	    	return 'Good ' + time + ' ' + this.name;
	       
	    },

	     add_1:function(){
	    	this.age++;
	    },

	    subtract_1:function(){
	    	this.age--;
	    },

	    add:function(inc){
	    	this.age+= inc;
	    },

	    subtract:function(dec){
	    	this.age-= dec;
	    },

	    upDateXY:function(event){
	    	this.x = event.offsetX;
	    	this.y = event.offsetY;
	    },

	    click:function(){
	    	alert('you click the button');
	    }
	}

});