function fail(err) {
	console.log(err)
}

var app = new Vue({
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