module.exports = {
    listar: () => {
        return [{ id: 1, total: 150.50 }];
    },

    crear: (data) => {
        return { id: Date.now(), ...data };
    }
};