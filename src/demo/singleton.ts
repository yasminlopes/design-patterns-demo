class FornecedorDeRecursos {
    private static instancia: FornecedorDeRecursos
  
    private recursosDisponiveis: string[]
  
    private constructor() {
      this.recursosDisponiveis = ['água', 'comida', 'medicamentos']
    }
  
    static obterInstancia(): FornecedorDeRecursos {
      if (!FornecedorDeRecursos.instancia) {
        FornecedorDeRecursos.instancia = new FornecedorDeRecursos()
      }

      return FornecedorDeRecursos.instancia;
    }
  
    public fornecerRecurso(recurso: string): void {
      if (this.recursosDisponiveis.includes(recurso)) {
        console.log(`Fornecendo ${recurso} para os sobreviventes.`)
      } else {
        console.log(`${recurso} não está disponível no momento.`)
      }
    }
  }
  
  class Sobrevivente {
    obterRecursos(): void {
      const fornecedor = FornecedorDeRecursos.obterInstancia()

      fornecedor.fornecerRecurso('água')

      fornecedor.fornecerRecurso('medicamentos')

      fornecedor.fornecerRecurso('alimento')
    }
  }
  
  const sobrevivente1 = new Sobrevivente()
  
  const sobrevivente2 = new Sobrevivente()
  
  sobrevivente1.obterRecursos()
  sobrevivente2.obterRecursos()
  