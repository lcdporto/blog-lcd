---
title: "Projeto: LCD Monitor"
date: "2018-10-11T10:15:05.169Z"
author: João Figueiredo
---

![Let's Make It](bernard-hermant-590572-unsplash.jpg)

Como espaço de trabalho partilhado por várias pessoas, onde ser pretende ter a maior flexibilidade e ao mesmo tempo segurança e responsabilidade, o controlo de acessos é um desafio que há muito tentamos resolver.

Resolvemos canibalizar o atual alarme e criar um novo cuja programação seja bem mais flexivel.

---

Coordenador: João Figueiredo<br />
Repositório: [https://github.com/lcdporto/lcd-monitor][repo]

---

Vamos aproveitar os sensores de movimento do atual alarme e fabricar uma nova consola.

As funcionalidades que queremos ter em funcionamento na primeira versão são:
* gestão de códigos por utilizador
* ativação/desativação remota (via web) do alarme
* atribuição de códigos temporários

Posteriormente temos planeado implementar:
* check-in de membros do LCD Porto
* adição de sensores para deteção de incêndios
* controlo de fechaduras

## Implementação

O LCD Monitor será controlado por um Arduino e uma API a correr num servidor.

O Arduino irá operar o alarme de forma independente, monitorizar o estado dos sensores, aceitar códigos de ativação/desativação pelo keypad, e despoletar os besouros.

A API para interagir com a App do LCD e receber instruções que passará ao Arduino via Ethernet.

Nesta primeira fase, embora não se planeie fazer já uso, será logo integrado no hardware um leitor RFID/NFC que será utilizado em futuras versões de software.


## Atualizações

#### 16-10-2018

De forma a simplificar o projeto e deixar de manter uma Raspberry PI ‘presa’ e subutilizada decidimos adicionar um módulo Ethernet ao Arduino.

A API passa a correr num qualquer servidor na LAN que comunica com o Arduino via Ethernet.

O projeto foi dividido em quatro componentes principais, dois de software (API e Código do Arduino) e dois de hardware (PCB e consola).

O [projeto no GitHub][repo] começou a ser atualizado com estas decisões e com os requisitos mínimos que cada um dos componentes terá que cumprir para que as funcionalidades base do projeto sejam implementadas.

A descrição do projeto neste post (texto acima) foi também atualizada.


---
<a href="https://unsplash.com/photos/IhcSHrZXFs4" target="_blank">Cover photo</a>
by <a href="https://unsplash.com/@bernardhermant" target="_blank">Bernard Hermant</a>


[repo]:https://github.com/lcdporto/lcd-monitor
