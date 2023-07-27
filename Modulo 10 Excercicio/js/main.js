$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000')
    $('#CPF').mask('000.000.000-00')
    $('#CEP').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            CPF: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereço: {
                required: true
            },
            CEP: {
                required: true
            },
        },
        messages: {
            nome: 'Porfavor, insira o seu Nome.',
            CPF: 'Porfavor, insira o seu CPF',
            telefone: 'Porfavor, insira o seu Telefone',
            email: 'Porfavor, insira o seu E-mail',
            endereço: 'Porfavor, insira o seu Endereço',
            CEP: 'Porfavor, insira o seu CEP'
        },
    })
})


/*
Anotações do Rafa para Depois - :)

    $('#telefone').mask('(00) 00000-0000',{
        placeholder: 'Ex: (21) 12345-1234' )
    }

    $('#CPF').mask('000.000.000-00',{
        placeholder: 'Ex: 123.456.789-00' )
    }

    $('#CEP').mask('00000-000',{
        placeholder: 'Ex: 12345-678' )
    }

    $('#Aniversario').mask('00/00/000',{
        placeholder: 'Ex: __/__/____' )
    }

    Ou Placa de Carro :)
*/ 
