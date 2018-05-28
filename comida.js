let pedido = prompt('Qué quieres ordenar? Ceviche, Tacos al Pastor, Empanada Chilena o Hamburguesa?');
let pedidoToPlayStandard = pedido.toLowerCase();
while (false == pedido || null === pedido);
    switch (pedidoToPlayStandard) {
    case "ceviche": alert("No nos queda Ceviche, escoge otra porfavor.");
        break;
    case "tacos al pastor": alert("No nos queda Tacos al Pastor, escoge otra porfavor.");
        break;
    case "empanada chilena": alert("No nos queda Empanada Chilena, escoge otra porfavor.");
        break;
    case "hamburguesa": alert("En unos minutos tendremos tu pedido");
}