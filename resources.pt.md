---
layout: page
order: 0
title: Indicações
permalink: /pt/resources/
lang: pt
toc: false
last_modified_at:
---
<style>
figure {
float: left;
width: 120px;
object-fit: cover;
margin-right: 15px;
margin-top: 10px;
margin-bottom: -5px    
}

figure > img {
width: 100%;
object-fit: contain
}

    /*Floating Back-To-Top Button*/
    #myBtn {
        position: fixed;
        bottom: 10px;
        width: 40px;
        height: 40px;
        right: 18.5%;
        left: 77.25%;
        text-align: center;
        font-size: 26px;
        background-color: #D2D6CC;
        padding:0 0 0 0;
        border-radius: 20px;
        border-color: transparent;
        transform: rotate(-90deg);
        color: #f5f5f5;
        weight: bold;
    }
/*On Hover Color Change*/
    #myBtn:hover {
        background-color: #D2D6CC;
    }

</style>

<p style="display: inline; font-size: medium; font-style: italic">
{{ site.data.academic_i18n.lastupdated[page.lang]}}{% include _i18n/date.html date=page.last_modified_at %}</p>
<b>

Minha ideia com essa página é compilar algumas indicações de diferentes tipos (software, dicas de produtividade, divulgação de oportunidades e eventos, etc...) e escrever um pouco mais extensamente sobre o que eu uso no meu dia-a-dia de estudo e pesquisa.

Eu tenho muitas indicações, mas nem sempre sobra tempo de escrever tudo, então volte com frequência à essa página e se atente à data de atualização. Meu objetivo no momento é escrever uma indicação por semana, mas vou publicar isso aqui "incompleto" porque o importante é a informação chegar a você :D

_Disclaimer_: em geral o que eu indico aqui é do ponto de vista de uma pessoa que usa Linux e Android e tem uma preferência pessoal por softwares livres e de código aberto gratuitos (também conhecidos como FOSS) ou com algum tipo de desconto estudantil. Existem diversas alternativas a tudo que eu vou mencionar aqui e você pode procurar por elas no [AlternativeTo](https://alternativeto.net/).

* TOC
{:toc}


# Organizadores de bibliografia

Quando eu digo "bibliografia", não estou me referindo apenas a artigos ou fontes textuiais, estou falando também de imagens, gráficos, sites, vídeos e tudo mais que você possa imaginar. O meu "Big Three" pessoal é o seguinte:
## Zotero

{% include image.html src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Zotero_logo.svg/320px-Zotero_logo.svg.png" %}

O Zotero é um gerenciador bibliográfico que facilita muito o processo de organização e citação. Nele é possível criar categorias para os items (que vão além de artigos!), adicionar etiquetas, notas etc. É possível acessar sua biblioteca pelo próprio [site do Zotero](https://www.zotero.org) e também criar bibliotecas compartilhadas que facilitam trabalhar em grupo. Uma das minhas funcionalidaeds favoritas são as extensões para navegador, os diversos plugins que melhoram a experiência de uso e o fato de que o Zotero é capaz de extrair metadados de vários tipos de arquivos automaticamente.

Eu tenho alguns projetinhos pessoais de fluxo de trabalho envolvendo o Zotero, então futuramente devo incluir alguma coisa a aqui.

## Calibre
{% include image.html src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Calibre_logo_3.png" %}

O Calibre é similar ao Zotero em filosofia, mas é voltado especialmente para e-books (e livros em geral, na verdade). É meu gerenciador de escolha tanto para livros acadêmicos, listas de exercícios e slides de aula, quanto para literatura geral, partituras, quadrinhos, etc. O grande "tchan" do Calibre é a busca por metadados usando apenas algumas informações (como nome do autor ou livro) e ele busca tudinho: ano de publicação, ISBN, editora... Assim como o Zotero também é possível criar etiquetas, hierarquias e até mesmo outras bibliotecas. Também conta com uma comunidade ativa de usuários que desenvolve plugins que fazem as coisas mais mirabolates que você conseguir imaginar.

É a minha recomendação final para organização de uma "biblioteca virtual", depois de alguns anos usando eu garanto que você vai ficar muito feliz por ter deixado tudo organizado e fácil de procurar.


## Tropy
{% include image.html src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Tropy-icon-small.svg/270px-Tropy-icon-small.svg.png" %}

O que dizer desse programa que mal conheço e amo pacas? O Tropy é dos mesmos criadores do Zotero, mas tem foco na parte _gráfica_ de bibliografias. Isso pode não parecer tão óbvio ou necessário inicialmente, mas depois de alguns anos lendo muitos livros, artigos e vendo gráficos lindos em conferências e palestras, eu garanto que você vai querer uma forma fácil de navegar e encontrar esses gráficos para usar nas suas próprias apresentações e trabalhos. No momento o Tropy (ainda) não tem uma integração com o Zotero, mas ele conta com campos de metadados onde você pode botar as informações de autoria das imagens. Também é possível criar bibliotecas, etiquetas e notas para as imagens.

# Escrita
## TexStudio e afins
{% include image.html src="https://upload.wikimedia.org/wikipedia/commons/2/2a/TeXstudio_Logo.svg" %}

Eu recomento **fortemente** que ao começar a usar o LaTeX, você escolha um editor _local_, que pode ser usado offline. A grande vantagem desse tipo de editor é, além da independência de uma conexão estável de internet, a possibilidade de personalização de atalhos. Depois de algunas dezenas de horas usando, escrever se torna uma experiência muito mais fluida nesse tipo de editor em comparação a editores online. Os editores online têm as suas vantagens e é possível manter algumas mesmo usando um editor local (mais sobre isso [aqui](https://rayssags.github.io/acosmicray/pt/escrita/)).
## Overleaf
{% include image.html src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Cib-overleaf_%28CoreUI_Icons_v1.0.0%29.svg/480px-Cib-overleaf_%28CoreUI_Icons_v1.0.0%29.svg.png" %}

O editor online de LaTeX mais famoso não podia ficar de fora dessa lista. Recomendo fortemente para trabalhos em grupo, a capacidade de sincronização e compartilhamento é sem igual caso você não queira recorrer ao Git.

## VSCode
{% include image.html src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" %}

Bom, escrever códigos ainda é escrever, né... Existem diversos editores de texto que podem ser usados para escrever código, mas o VSCode realmente vem crescendo nos últimos anos e é um ótimo editor na minha opinião. Hoje em dia suporta nativamente diversos tipos de arquivo, como notebooks Jupyter, e conta com uma loja de extensões que vão melhorar muito a sua experiência de uso individual.

PS: hoje em dia é até possível compilar arquivos `.tex` dentro do VSCode!

## Mathpix e LaTeX OCR

{% include image.html src="https://mathpix.com/images/logo/image-logo.png" %}

Bom, o gif abaixo já diz tudo o que pode ser dito sobre essa duplinha de indicação. Ambos programas trabalham com o reconhecimento ótico de caracteres (OCR) de equações e trascrevem para LaTeX. O [Mathpix](https://mathpix.com/) começou como apenas com essa funcionalidade, mas hoje em dia reconhece equações manunscritas, tabelas, importa texto e mais um monte de coisa. Também exporta para diferentes formatos, como MS Word. Infelizmente hoje em dia há limitações para o plano grátis, em especial o número de usos mensais. 

<p style="text-align: center">
<img src="https://user-images.githubusercontent.com/55287601/117812740-77b7b780-b262-11eb-81f6-fc19766ae2ae.gif" style="width: 50%" caption="">
</p>

{% include image.html src="https://raw.githubusercontent.com/rayssags/LaTeX-OCR/fd271d25f9aaac6225dfd3e6460a2cfc07ebca96/resources/icon.svg" %}

Com isso em mente, a minha indicação é o [LaTeX OCR](https://github.com/lukas-blecher/LaTeX-OCR). Ele retoma a função básica de transcrever equações para LaTeX, mas é FOSS e está em desenvolvimento ativo no GitHub. No momento só funciona com equações "digitadas", mas há vários planos para expandir as funcionalidades da ferramenta.

## dpScreenOCR

{% include image.html src="https://danpla.github.io/dpscreenocr/img/dpscreenocr.svg" %}

O [dpScreenOCR](https://danpla.github.io/dpscreenocr/) é a contraparte textual dos programas acima. Sempre que você precisar extrair um trecho de texto de algum arquivo, esse é o programa para você. Suporta diversos idiomas e também até um suporte razoável para colunas, como mostrado na figura a seguir:

<p style="text-align: center">
<img src="https://danpla.github.io/dpscreenocr/manual-data/split.png" style="width: 50%" caption="">
</p>

## WebPlotDigitizer

{% include image.html src="https://automeris.io/WebPlotDigitizer/images/icon.svg" %}

Quem nunca passou pela situação de precisar de alguns dados que só estavam disponíveis em um gráfico? Se você não passou por isso, provavelmente ainda vai passar. A boa notícia é que existem programas capazes de extrair esses dados para você. O meu programa de escolha é o WebPlotDigitizer por ser online, fácil de mexer e grátis. Apesar de ter "web" no nome, [há versões locais para vários sistemas operacionais](https://automeris.io/WebPlotDigitizer/). Elas funcionam exatamente como a ferramenta online.


# Produtividade e organização

## Git + GitHub

{% include image.html src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" %}

Antes que eu me alongue falando sobre Git, vale a pena olhar esse [link](https://kenzie.com.br/blog/o-que-e-git/) que discute Git e GitHub. De maneira muito ampla, o Git é um sistema de controle de versionamento. Isso quer dizer que ele permite que você versione --- i.e., crie um histórico personalizado --- de algum projeto ou conjunto de arquivos. Entretanto, além disso, o Git permite que você explore desenvolvimento em paralelo e/ou em conjunto desses projetos através dos _branches_.
<p style="text-align: center">
<img src="https://coderefinery.org/git-intro-stockholm/img/octopus.jpeg" style="width: 80%" caption="">
</p>

Se você quer saber mais sobre como usar o Git, recomendo [o curso do Software Carpentry](https://swcarpentry.github.io/git-novice/).

{% include image.html src="https://desktop.github.com/images/desktop-icon.svg" %}

Sobre o GitHub... Bom, esse site está literalmente no GitHub. A ideia do GitHub (e outros, como o BitBucket) é basicamente colocar esse versionamento/histórico na nuvem. Isso permite que o GitHub ofereça funcionalidades extras desde publicar sites e trabalhar em equipe através de um repositório remoto até sincronizar esses repositórios com outros programas e sites (como o Overleaf). Resumindo, é uma ferramenta extramemente poderosa de aprender a usar.

Para terminar a indicação, o maior aspecto do GitHub é a sua capacidade de compartilhamento e disseminação, por exemplo, projetos abertos podem ser copiados na forma de _fork_. Isso permite que um programa que outra pessoa desenvolveu e que você usa seja congelado no tempo pelo seu fork (particularmente recomendo se for um programa importante para você), o que previne que alterações futuras afetem o que você usa. Além disso, [é possível fazer alterações nessa cópia e sugerí-las de ao dono do programa original através de um _pull request_.



## Notion

{% include image.html src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" %}

Seria um crime falar de produtividade e não citar o Notion. Para aqueles que usam Evernote, Trello, ClickUp e afins, eu considero o Notion uma alternativa extremamente forte a todos eles, pois ele oferece muitas funcionalidades: escrita em Markdown, anexos de diversos tipos, suporte a KaTeX, bases de dados internas que podem ser referidas por diversas páginas diferentes, [plugin com o Zotero](https://github.com/dvanoni/notero) caso você goste de fazer notas separadas da fonte bibliográfica, uma comunidade super ativa que oferece diversos templates, diversas funcionalidaes para times... E o melhor de tudo? O [Notion tem um plano estudantil](https://www.notion.so/product/notion-for-education). Recomendo muito testar. 

## Forest
{% include image.html src="https://www.forestapp.cc/img/icon.png" %}

O Forest é vendido como um aplicativo que ajuda a manter o foco. Dependendo do quão capaz (ou não) de procrastinação você é, ele pode ser um grande aliado em te ajduar a completar tarefas. No celular e no computador, o Forest bloqueia todos os apps e sites que não estejam em uma lista de permissão (então nada de olhar o Twitter!). Para mim, a grande coisa do Forest é a parceria com o [Trees for the Future](https://trees.org/) --- uma organização que planta àrvores reais. Basicamente, após atingir um certo número de minutos e ganhar uma certa quantidade de moedas, você pode escolher plantar uma àrvore real no aplicativo e ele doará dinheiro para a organização fazer isso.

# Astroindicações

Eu tenho diversas indicações específicas para Astronomia, mas ainda estou escrevendo. Fique de olho na página inicial do meu site que vou avisar assim que a seção estiver de pé! Por enquanto as indicações em forma de lista estão [aqui](https://rayssags.github.io/acosmicray/pt/astrorecs/).

<button id="myBtn"><a href="#"><b>&#10161;</b></a></button>
