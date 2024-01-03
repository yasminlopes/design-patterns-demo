class Logotipo {
  constructor(
    private readonly forma: string,
    private readonly cor: string,
    private readonly texto: string
  ) {}

  exibirLogotipo(): void {
    console.log(`Logotipo: Forma - ${this.forma}, Cor - ${this.cor}, Texto - ${this.texto}`)
  }
}

interface ConstrutorDeLogotipo {
  selecionarForma(forma: string): void
  selecionarCor(cor: string): void
  adicionarTexto(texto: string): void
  obterLogotipo(): Logotipo
}

class ConstrutorDeLogotipoPersonalizado implements ConstrutorDeLogotipo {
  private forma: string
  private cor: string
  private texto: string

  constructor() {
    this.forma = 'Padrão'
    this.cor = 'Preto'
    this.texto = 'Logotipo'
  }

  selecionarForma(forma: string): void {
    this.forma = forma
  }

  selecionarCor(cor: string): void {
    this.cor = cor
  }

  adicionarTexto(texto: string): void {
    this.texto = texto
  }

  obterLogotipo(): Logotipo {
    return new Logotipo(this.forma, this.cor, this.texto)
  }
}

// cliente  que utiliza o Builder para criar um logotipo personalizado 
class DesignerGrafico {
  criarLogotipoPersonalizado(construtor: ConstrutorDeLogotipo): Logotipo {
    construtor.selecionarForma('Bordas Arredondadas')

    construtor.selecionarCor('Vermelho')

    construtor.adicionarTexto('Empresa LTDA')

    return construtor.obterLogotipo()
  }
}

const designer = new DesignerGrafico()

const construtor = new ConstrutorDeLogotipoPersonalizado()

const logotipoPersonalizado = designer.criarLogotipoPersonalizado(construtor)

logotipoPersonalizado.exibirLogotipo()
