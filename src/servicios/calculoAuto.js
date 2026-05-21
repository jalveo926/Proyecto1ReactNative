export function calcularAuto(precioOriginal, transmision, tipoPago, salario) {

    let costo = parseFloat(precioOriginal) || 0
    let impuesto = 0
    let total = 0
    let letraMensual = 0
    let salario30 = parseFloat(salario) * 0.30 || 0
    let estado = ""

    // Aumento por transmisión automática
    if (transmision === "Automatico") {
        costo += 1500
    }

    // Pago al contado
    if (tipoPago === "Contado") {
        impuesto = costo * 0.07
        total = costo + impuesto

        return {
            tipo: "contado",
            costo: costo.toFixed(2),
            impuesto: impuesto.toFixed(2),
            total: total.toFixed(2)
        }
    }

    // Crédito con interés compuesto
    else {
        const tasa = 0.08
        const años = 9

        costo = costo * Math.pow((1 + tasa), años)
        impuesto = costo * 0.07
        total = costo + impuesto
        letraMensual = total / (años * 12)

        estado = salario30 >= letraMensual ? "APROBADO" : "NO APROBADO"

        return {
            tipo: "credito",
            costo: costo.toFixed(2),
            impuesto: impuesto.toFixed(2),
            total: total.toFixed(2),
            letraMensual: letraMensual.toFixed(2),
            salario30: salario30.toFixed(2),
            estado,
            aprobado: salario30 >= letraMensual
        }
    }
}