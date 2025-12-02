module.exports = {
    listar: () => {
        return [{ id: 1, nombre: "Juan Pérez" }];
    },

    crear: (data) => {
        return { id: Date.now(), ...data };
    }
};