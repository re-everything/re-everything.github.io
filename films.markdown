---
layout: page
permalink: /films/
hide_title: true
---

<h1 style="font-size: 2em; font-weight: normal;">My Favorite Films</h1>

<p>Here is a list of films I really enjoyed. The slashes (<span style="color: red;">/</span>) indicate the depth of my enjoyment or its meanifulness to my life.</p>

<blockquote>
  <p><strong>Disclaimer</strong>: I started building this list in 2013, so many entries are quite outdated or reflect a more immature perspective. Evolving tastes, so to speak.</p>
</blockquote>

{% for genre in site.data.films.genres %}
<div style="margin-top: 2em; padding-top: 1em; border-top: 3px solid {{ genre.color }};">
  <h2 style="color: {{ genre.color }}; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; font-size: 1.3em;">{{ genre.name }}</h2>
  
  <ul>
  {% for movie in genre.movies %}
  <li><strong>{{ movie.title }}</strong>{% if movie.rating %} <span style="color: {{ genre.color }};">{{ movie.rating }}</span>{% endif %}{% if movie.cast %} ({{ movie.cast }}){% endif %}</li>
  {% endfor %}
  </ul>
</div>
{% endfor %}