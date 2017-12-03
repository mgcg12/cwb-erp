var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.connect("mongodb://dog:dog123@ds121456.mlab.com:21456/heroku_s2674vqf", {useMongoClient: true}, function(){
	
});;
autoIncrement.initialize(connection);


var pedidoSchema = new mongoose.Schema({
	totalVenda: Number,
	totalCusto: Number,
	pedidoId2: Number,
	dataPedido: String,
	data: {
		dia: Number,
		mes: {
			numero: Number,
			nome: String
			},
		ano: Number
	},
	status: {
		_id: String,
		nome: {type:String, default: "Iniciado"}
	},
	pagamento: {
		forma: String,
		nome: String,
		status: {type: String, default: "Não finalizada"},
		dataPgto: String
	},
	cliente: {
		_id: String,
		nome: String,
		sobrenome: String,
		telefone: String,
		celular: String,
		cpfcnpj: String,
		email: String,
		grupoCliente: String,
		cep:String,
		rua:String,
		numero:String,
		complemento:String,
		bairro:String,
		cidade:String,
		estado:String
	},
	produtos: Array
});
pedidoSchema.plugin(autoIncrement.plugin, { model: 'Pedido', field: 'pedidoId2' });
module.exports = connection.model('Pedido', pedidoSchema);