Atributos globais são atributos aplicáveis em todas as Tags, sendo as principais:

class — além de classificar as Tags, é usada para aplicar estilo css e também para acessar com o Java Script.
<pre>
  &lt;div class="conteúdo"&gt;
  &lt;/div&gt;
</pre>

contenteditable — usado para editar o conteúdo da página, porém não é mantido após salvar.
<pre>
  &lt;div contentedtable="true"&gt;
  &lt;/div&gt;
</pre>

data-* — usado para expandir os tipos de atributos que podemos usar para fazer mais tarde lógica no Java Script , utilizado em css também.
<pre>
  &lt;div data-qualquercoisaaqui=""&gt;
  &lt;/div&gt;

  Escrito com "-" ou tudo junto.
</pre>

hidden — usado para esconder uma Tag.
<pre>
  &lt;div class="carrinho" hidden&gt;
  conteúdo
  &lt;/div&gt;
</pre>

id — usado apenas 1 por Tag para identificação, para também mais tarde usar no Java Script e css.
<pre>
  &lt;div id="texto"&gt;
  conteúdo
  &lt;/div&gt;

  &lt;div id="texto2"&gt;
  conteúdo
  &lt;/div&gt;
</pre>  
  
style — aplica a estilização na Tag, normalmente não se usa "style" dentro da Tag, mas sim em arquivos externos.
<pre>
  &lt;div style="color: red"&gt;
  tabindex — usado para ordenar o Tab na página.
  &lt;div tabindex="3"&gt;
  &lt;/div>

  &lt;div tabindex="1"&gt;
  &lt;/div&gt;

  &lt;div tabindex="2"&gt;
  &lt;/div&gt;
</pre>

title — serve para definir um título para a Tag, quando colocamos o mouse descansando em cima do conteúdo da página.

Para outros Atributos Globais acessar o site https://developer.mozilla.org/pt-BR/.
