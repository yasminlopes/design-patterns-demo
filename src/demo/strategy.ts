interface DeliveryStrategy {
  entregarPresente(cidade: string): void;
}

// as diferentes estratégias de entrega
class TrenoDelivery implements DeliveryStrategy {
  entregarPresente(cidade: string) {
    console.log(`🚆 Entregando presentes de trenó em ${cidade}`);
  }
}

class BikeDelivery implements DeliveryStrategy {
  entregarPresente(cidade: string) {
    console.log(`🚲 Entregando presentes de bicicleta em ${cidade}`);
  }
}

class CarroDelivery implements DeliveryStrategy {
  entregarPresente(cidade: string) {
    console.log(`🚗 Entregando presentes de carro em ${cidade}`);
  }
}

//escolher a estratégia de entrega apropriada com base na cidade

class PapaiNoel {
  public deliveryStrategy: DeliveryStrategy;

  constructor(deliveryStrategy: DeliveryStrategy) {
    this.deliveryStrategy = deliveryStrategy;
  }

  entregarPresentesNaCidade(cidade: string) {
    this.deliveryStrategy.entregarPresente(cidade);
  }
}

// instância de papaiNoel com a estratégia de entrega apropriada e entregar presentes em diferentes cidades
const papaiNoel = new PapaiNoel(new TrenoDelivery());
papaiNoel.entregarPresentesNaCidade('Marília');

papaiNoel.deliveryStrategy = new BikeDelivery();
papaiNoel.entregarPresentesNaCidade('Pompéia');

papaiNoel.deliveryStrategy = new CarroDelivery();
papaiNoel.entregarPresentesNaCidade('Bauru');
