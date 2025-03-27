const addEmpleado = async (req, res) => {
    try {
        const {nombre, salarioBase, diasTrabajados, horasExtras } = req.body;
        const horasDia = 8;
        valorHora = salarioBase/(diasTrabajados*horasDia);
        pagoHorasExtra = valorHora*horasExtras*1.5;
        salarioTotal = salarioBase + pagoHorasExtra;
        const Empleados= await Empleados.create({nombre, salarioBase, diasTrabajados, horasExtra, salarioTotal});
        return res.status(200).json(Empleados);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};
const getEmpleados = async (req, res) => {
    try {
        const empleados = await Empleados.findAll();
        return res.status(200).json(empleados);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};