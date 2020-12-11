db.voos.deleteMany({ 'empresa.nome': 'AZUL', litrosCombustivel: { $lt: 400 } });
// db.voos.find({"empresa.nome":"AZUL", litrosCombustivel:{$lt:400}}).count();
