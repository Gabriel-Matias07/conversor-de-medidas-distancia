const KM = 0.001, HM = 0.01, DAM = 0.1, DM = 10, CM = 100, MM = 1000
let km, hm, dam, dm, cm, mm
let valorEmMetro = parseFloat (window.prompt("Olá, digite um valor em metro e iremos converter para km, hm, dam, dm, cm, mm:"))
if (valorEmMetro == ""){
    alert("O valor '0' irá retornar valores zerados para todas a conversões!")
}
km = KM * valorEmMetro
hm = HM * valorEmMetro
dam = DAM * valorEmMetro
dm = DM * valorEmMetro
cm = CM * valorEmMetro
mm = MM * valorEmMetro
document.write ("<h1>" +valorEmMetro+ "m é igual a: " +km+ "km</h1>")
document.write ("<h1>" +valorEmMetro+ "m é igual a: " +hm+ "hm</h1>")
document.write ("<h1>" +valorEmMetro+ "m é igual a: " +dam+ "dam</h1>")
document.write ("<h1>" +valorEmMetro+ "m é igual a: " +dm+ "dm</h1>")
document.write ("<h1>" +valorEmMetro+ "m é igual a: " +cm+ "cm</h1>")
document.write ("<h1>" +valorEmMetro+ "m é igual a: " +mm+ "mm</h1>")