# Projeto teste Vibra

Para o cliente Vibbraneo

## demo

Veja

## Detalhamento

Projeto de lista de itens
cada lista pode ter sua arvore de itens com subitens

## Iniciar

Intale as dependencias com:

```bash
  yarn
```

Isso irá configurar o husky também.
Agora é só rodar em desenvolvimento.

```bash
  yarn dev
```

## Design system

Facil de dar manutenção no estilo do projeto no arquivo de configuração no tailwind.
Estruturei um esquema de cores seguindo padrões comuns de design.

## Comunicação com API

Toda a logica é feita do lado server do frontEnd

Criei umas pequenas rotas de api, para que usuario faça manupilações de dados a partir do client.
que então passar pela regra de negócio do service e vai pro provedor que guarda as informações

Criei uma camada de abstração para em ambiente de desenvolvimento usar lista no lugar de chamar a api que ainda não está pronta do Vibbraneo

## Funcionalidades

[X] Lista de itens e subItens
[X] Compartilhar por email
[X] Todos podem colaborar
[X] Excluir list ou item
[X] Editar list ou item

[] Editar ordem de itens
[] Authorization token
