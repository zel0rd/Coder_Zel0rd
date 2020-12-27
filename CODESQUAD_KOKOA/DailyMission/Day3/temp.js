HashMap = function(){  
    this.map = new Array();
};  
HashMap.prototype = {  
    clear : function() {
        this.map = new Array();
        console.log(map)
    },
    put : function(key, value) {
        
        this.map[key] = value;
        console.log(map)
    },  
    contains : function(key) {
        // console.log(this.map.length)
        console.log(this.map.indexOf(key))
    }
    // get : function(key){  
    //     return this.map[key];
    // },  
    // getAll : function(){  
    //     return this.map;
    // },  
    // clear : function(){  
    //     this.map = new Array();
    // },  
    // isEmpty : function(){    
    //      return (this.map.size() == 0);
    // },
    // remove : function(key){    
    //      delete this.map[key];
    // },
    // toString : function(){
    //     var temp = '';
    //     for(i in this.map){  
    //         temp = temp + ',' + i + ':' +  this.map[i];
    //     }
    //     temp = temp.replace(',','');
    //       return temp;
    // },
    // keySet : function(){  
    //     var keys = new Array();  
    //     for(i in this.map){  
    //         keys.push(i);
    //     }  
    //     return keys;
    // }
};

function Hashtest(){//test
    try{
        var map = new HashMap();
        map.put("1", "2");
        map.put("3", "4");
        map.remove("1");
        var allTemp = map.getAll();
        for(i in allTemp){  console.log(i);}  
        console.log(map.toString());    
    }catch(e){console.log(e);}
}
var map = new HashMap()

map.put("A","1")
map.put("B","2")
map.put("C","3")
map.put("C","3")
map.put("D","4")
map.put("E","4")
map.contains("F")