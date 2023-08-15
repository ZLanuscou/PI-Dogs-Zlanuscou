const { ARRAY } = require("sequelize");
const app = require("../app")
const session = require("supertest")
const agent = session(app);
describe("Test de rutas", ()=>{
it("Debe tener las propiedades correspondientes en post", async()=>{
const dog = {
      Altura: "5",
      Años_de_vida: "2-5",
      Nombre: "MiPerro",
      Peso: "6",
      Temperamentos: 'Playful, Curious'
    };
await agent.get("/dogs/temperaments")
const response = await agent.post("/dogs/post").send(dog)
expect(response.body[0]).toHaveProperty(
    "Altura",
    "Años_de_vida",
    "Nombre",
    "Peso",
    "Temperamentos",
    "Imagen",
    "updatedAt",
    "createdAt",
    "ID"
  );
})
it("Los temperamentos deben ser un array", async()=>{
    const response = await agent.get("/dogs/temperaments")
    expect(response.body).toBeInstanceOf(Array)
})
it("El array de temperamentos no debe estar vacio", async()=>{
    const response = await agent.get("/dogs/temperaments")
    expect(response.body.length).toBeGreaterThan(0);
})
})