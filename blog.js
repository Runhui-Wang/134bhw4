var crud = new function() {
    // Examples
    this.blogs = ["Webdev", "Javascript", "DOM"];
    this.times = ["1921/23/23", "2022/98/65", "1983/85/12"];
    this.summarys = ["webdev", "javascript", "dom"];
    
    // Stores current index 
    var indexRetreive = '';
    var indexRemove = '';
    
    // Display all posts
    this.DisplayAll = function() {
        var data = '';
        
        if (this.blogs.length > 0) {
            var i;
            for (i=0; i < this.blogs.length; i++) {
                data += '<li>';
                data += this.blogs[i] + ' (' + this.times[i] + ') - summary: ' + this.summarys[i];
                data += '<button id="edit" onclick="crud.Retreive(' + i + ')"> Edit</button>';
                data += '<button id="delete" onclick="crud.Remove(' + i + ')"> Delete</button>';
                data += '</li>';
            }
        }
        else {
            data = "No blogs are added";
        }
        
        return document.getElementById('postList').innerHTML = data;
    };
    
    // Function that shows add blog dialog box
    this.Add = function() {
        document.getElementById('title').value = "";
        document.getElementById('time').value = "";
        document.getElementById('userInput').showModal();
    };
    
    // Insert new 
    this.Insert = function() {
        var title = document.getElementById('title').value;
        var time = document.getElementById('time').value;
        var summary = document.getElementById('summary').value;
        if (title || time) {
            this.blogs.push(title.trim());
            this.times.push(time.trim());
            this.summarys.push(summary.trim());
            this.DisplayAll();
        }
        document.getElementById('userInput').close();
    };

    // Cancel blog input
    this.cancelAdd = function() {
        document.getElementById('userInput').close();    
    };
    
    // Opens edit dialog box
    this.Retreive = function(item) {
        indexRetreive = item;
        document.getElementById('titleEdit').value = this.blogs[item];
        document.getElementById('timeEdit').value = this.times[item];
        document.getElementById('summaryEdit').value = this.summarys[item];
        document.getElementById('userInput2').showModal();
    };
    
    // Edit selected blog that is already in array
    this.Edit = function() {
        var title = document.getElementById('titleEdit').value;
        var time = document.getElementById('timeEdit').value;
        var summary = document.getElementById('summaryEdit').value;
        var self = this;      
        if (title || time) {
            self.blogs.splice(indexRetreive, 1, title.trim());
            self.times.splice(indexRetreive, 1, time.trim());
            self.summarys.splice(indexRetreive, 1, summary.trim());
            self.DisplayAll();
        }
        document.getElementById('userInput2').close();
    };
    
    // Cancel blog edit
    this.cancelEdit = function() {
        document.getElementById('userInput2').close();    
    };
 
    // Opens delete dialog box
    this.Remove = function(item) {
        indexRemove = item;
        document.getElementById('deleteblog').showModal();
    }; 
    
    // Delete blog from arrays
    this.Delete = function() {
        this.blogs.splice(indexRemove, 1);
        this.times.splice(indexRemove, 1);
        this.summarys.splice(indexRemove, 1);
        this.DisplayAll();
        document.getElementById('deleteblog').close();        
    };
   
    // Cancel delete
    this.cancelDelete = function() {
        document.getElementById('deleteblog').close();    
    };    
}

crud.DisplayAll();