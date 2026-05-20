export function calcularAuto(
    precioOriginal,
    transmision,
    tipoPago,
    salario
) {

    let costo = precioOriginal
    let impuesto = 0
    let total = 0
    let letraMensual = 0
    let salario30 = salario * 0.30
    let estado = ""

    // Aumento por transmisión automática
    if (transmision === "Automatica") {
        costo += 1500
    }

    // Pago al contado
    if (tipoPago === "Contado") {

        impuesto = costo * 0.07
        total = costo + impuesto

        return {
            costo: costo.toFixed(2),
            impuesto: impuesto.toFixed(2),
            total: total.toFixed(2)
        }
    }

    // Crédito con interés compuesto
    else {

        const tasa = 0.08
        const años = 9

        // Interés compuesto
        costo = costo * Math.pow((1 + tasa), años)

        impuesto = costo * 0.07

        total = costo + impuesto

        // Letra mensual
        letraMensual = total / (años * 12)

        estado =
            salario30 >= letraMensual
            ? "APROBADO"
            : "NO APROBADO"
        
           
        return {
            costo: costo.toFixed(2),
            impuesto: impuesto.toFixed(2),
            total: total.toFixed(2),
            letraMensual: letraMensual.toFixed(2),
            salario30: salario30.toFixed(2),
            estado
        }
    }
}