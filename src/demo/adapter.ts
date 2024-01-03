interface PiscaPisca {
  ligar(): void
  desligar(): void
}

class PiscaPiscaAntigo implements PiscaPisca {
  ligar() {
    console.log('Ligando o pisca pisca antigo')
  }

  desligar() {
    console.log('Desligando o pisca pisca antigo')
  }
}

interface PiscaPiscaNovo {
  ativar(): void
  desativar(): void
}

/**
 * Adapter para adaptar a nova interface de luzes de Natal a interface existente
 */

class PiscaPiscaNovoAdapter implements PiscaPisca {
  private piscaPiscaNovo: PiscaPiscaNovo

  constructor(piscaPiscaNovo: PiscaPiscaNovo) {
    this.piscaPiscaNovo = piscaPiscaNovo
  }

  ligar() {
    this.piscaPiscaNovo.ativar()
  }

  desligar() {
    this.piscaPiscaNovo.desativar()
  }
}

// Utilizando o adapter para ligar e desligar o novo pisca pisca
const piscaPiscaNovo: PiscaPiscaNovo = {
  ativar: () => console.log('✨ Ligando o novo pisca pisca'),
  desativar: () => console.log('🔴 Desligando o novo pisca pisca')
}

const adapter = new PiscaPiscaNovoAdapter(piscaPiscaNovo)
adapter.ligar()
adapter.desligar()

// Transformação com Adapter

// interface Presente {
//   tipo: string;
// }

// class PresenteEscolhido implements Presente {
//   constructor(public tipo: string) {}
// }

// interface PresenteAdaptado {
//   descricao: string;
// }

// class PresenteAdapter implements PresenteAdaptado {
//   constructor(private presente: Presente) {}

//   get descricao(): string {
//     switch (this.presente.tipo) {
//       case 'bola':
//         return 'Um presente que seja bola';
//       case 'barbie':
//         return 'Um presente que seja boneca Barbie';
//       default:
//         return 'Qualquer categoria ';
//     }
//   }
// }

// const presente = new PresenteEscolhido('bola');
// const adapter = new PresenteAdapter(presente);
// console.log(adapter.descricao); // presente adaptado

// const outropresente = new PresenteEscolhido('barbie');
// const outroAdapter = new PresenteAdapter(outropresente);
// console.log(outroAdapter.descricao); // presente adaptado
