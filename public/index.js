var socket = io() 
var app = feathers();
app.configure(feathers.socketio(socket));

// this working good
app.service('/todos')
    .on('created', message => console.log('New todos created', message));

// *** 

function fail(err) {
	console.log(err)
}

new Vue({
  el: '#app',

  data: {
    doc: {},
    rows: []
  },

  mounted() {
  	this.rowsRefresh()
  },

  methods: {
  	formSubmit() {
      // this code make timeot error
      app.service('/todos').create(this.doc).then(res => {
        console.log('created', res)
      }).catch(fail)

      //this working good
  		$.post('/todos', this.doc, resp => {
  			this.doc = {}
  			this.rowsRefresh()
  		}).fail(fail)
  	},

  	rowsRefresh() {
	  	$.get('/todos', resp => {
	  		this.rows = resp
	  	})
  	},

  	rowRemoveClick(_id) {
  		
  	}
  }
})