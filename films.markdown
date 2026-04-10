---
layout: page
permalink: /films/
---

# My Favorite Films

Here is a list of movies I really enjoyed. The slashes (/) indicate how much I love them: / = loved it, // = really loved it, /// = absolutely adored it.

{% for genre in site.data.films.genres %}
<div style="margin-top: 2em; padding-top: 1em; border-top: 3px solid {{ genre.color }};">
  <h2 style="color: {{ genre.color }}; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">{{ genre.name }}</h2>
  
  <ul>
  {% for movie in genre.movies %}
  <li><strong>{{ movie.title }}</strong>{% if movie.rating %} <span style="color: {{ genre.color }};">{{ movie.rating }}</span>{% endif %}{% if movie.cast %} ({{ movie.cast }}){% endif %}</li>
  {% endfor %}
  </ul>
</div>
{% endfor %}