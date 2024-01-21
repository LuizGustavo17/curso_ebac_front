class Animal {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    emitirSom() {
      console.log("Som genérico de animal.");
    }
  }
  
  class Cachorro extends Animal {
    constructor(nome, idade, raca) {
      super(nome, idade);
      this.raca = raca;
    }
  
    emitirSom() {
      console.log("Au au!");
    }
  
    farejar() {
      console.log("Cachorro farejando...");
    }
  }
  
  class Tarantula extends Animal {
    constructor(nome, idade, venenosa) {
      super(nome, idade);
      this.venenosa = venenosa;
    }
  
    emitirSom() {
      console.log("Barulho silencioso da tarântula...");
    }
  
    tecerTeia() {
      console.log("Tarântula tecendo teia...");
    }
  }
  
  const animalGenerico = new Animal("Genérico", 5);
  const meuCachorro = new Cachorro("Rex", 3, "Labrador");
  const minhaTarantula = new Tarantula("Venom", 1, true);
  
  console.log(animalGenerico);
  animalGenerico.emitirSom();
  
  console.log(meuCachorro);
  meuCachorro.emitirSom();
  meuCachorro.farejar();
  
  console.log(minhaTarantula);
  minhaTarantula.emitirSom();
  minhaTarantula.tecerTeia();
  