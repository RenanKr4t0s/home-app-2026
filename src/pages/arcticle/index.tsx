import { Arcticle } from "../../ui/arcticle"

export const HelloArcticle = () => {
  return (
      <Arcticle.Area>
        <Arcticle.Title content="
          Hello world of 2026
        " />
        <Arcticle.Paragraph content="
          Essa será nossa aplicação central de 2026, aqui faremos nossas anotações e se possível, nossa criação de componentes também.

          Nós temos aqui a diferença entre um parágrafo dentro do content.
        " />
        <Arcticle.Title content="
          Hello Mariana of 2026
        " />
        <Arcticle.Paragraph content="
          E um parágrafo em um componente separado.
        " />
      </Arcticle.Area>
  )
}
