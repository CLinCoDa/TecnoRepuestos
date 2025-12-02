module.exports = {
    listar: () => {
        return [{ id: 1, nombre: "Llanta", stock: 10 }];
    },

    crear: (data) => {
        return { id: Date.now(), ...data };
    }
};