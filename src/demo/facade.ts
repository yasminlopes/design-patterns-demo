class IluminacaoNatalina {
  ligar(): void {
    console.log('pisca pisca ligados')
  }

  desligar(): void {
    console.log('pisca pisca desligados')
  }
}

class MusicaNatalina {
  tocar(): void {
    console.log('tocando músicas natalinas')
  }

  parar(): void {
    console.log('musicas natalinas desligadas')
  }
}

class DecoracoesNatalinas {
  decorarCasa(): void {
    console.log('casa decorada para o Natal')
  }
}

/**
 * Facade para simplificar a interação natalina
 */
class NatalFacade {
  private readonly iluminacao: IluminacaoNatalina

  private readonly musica: MusicaNatalina

  private readonly decoracoes: DecoracoesNatalinas

  constructor() {
    this.iluminacao = new IluminacaoNatalina()
    this.musica = new MusicaNatalina()
    this.decoracoes = new DecoracoesNatalinas()
  }

  public prepararCasaParaNatal() {
    this.iluminacao.ligar()

    this.musica.tocar()

    this.decoracoes.decorarCasa()
  }

  public desligarNatal() {
    this.iluminacao.desligar()

    this.musica.parar()
  }
}

// Utilizando o Facade para interagir com o sistema de Natal
const natalFacade = new NatalFacade()
natalFacade.prepararCasaParaNatal() // prepara a casa para o Natal ligando o pisca pisca, tocando músicas e decorando a casa
natalFacade.desligarNatal() // desliga as luzes e para a reprodução de músicas natalinas
