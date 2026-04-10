---
layout: page
permalink: /series/
---

# My Favorite Series

Here is a list of TV series I really enjoyed. The slashes (/) indicate how much I love them: / = loved it, // = really loved it, /// = absolutely adored it.

{% for genre in site.data.series.genres %}
<div style="margin-top: 2em; padding-top: 1em; border-top: 3px solid {{ genre.color }};">
  <h2 style="color: {{ genre.color }}; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">{{ genre.name }}</h2>
  
  <ul>
  {% for show in genre.shows %}
  <li><strong>{{ show.title }}</strong>{% if show.rating %} <span style="color: {{ genre.color }};">{{ show.rating }}</span>{% endif %}{% if show.note %} ({{ show.note }}){% endif %}</li>
  {% endfor %}
  </ul>
</div>
{% endfor %}