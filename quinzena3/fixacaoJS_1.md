```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
salarioFixo = 2000
    if(qtdeCarrosVendidos !== 0) {
        let valorCar = valorTotalVendas / qtdeCarrosVendidos
        let comissaoFinal = qtdeCarrosVendidos * (100 + valorCar * 0.05)
        let salarioMes = comissaoFinal + salarioFixo
        return salarioMes
    } else {
        return salarioFixo
    }
}
```