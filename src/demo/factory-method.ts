abstract class Dispositivo {
    abstract criar(): void
  }
  
  class EchoDot extends Dispositivo {
    criar(): void {
      console.log("Criando Echo Dot")
    }
  }

  class EchoShow extends Dispositivo {
    criar(): void {
      console.log("Criando Echo Show")
    }
  }
  
  class ClienteAlexa {
    criar(dispositivo: Dispositivo): void {
      dispositivo.criar()
    }
  }
  
  // utilizando o Factory Method para criar dispositivos Alexa
  const makeDispositivo = () => {
    const cliente = new ClienteAlexa()

    return {
      cliente
    }
  }

  const { cliente } = makeDispositivo()
  cliente.criar(new EchoDot())
  cliente.criar(new EchoShow())
  // cliente.criar('') // Argument of type 'string' is not assignable to parameter of type 'Dispositivo'.ts(2345)
  