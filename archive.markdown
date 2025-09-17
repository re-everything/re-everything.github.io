---
layout: page
title: An archive of thoughts
permalink: /archive/
class: archive-page
menu_title: Archive
---

<p>A collection of my thoughts, organized by themes and topics that matter to me. Each tag represents a different facet of my journey and interests.</p>

<div id="tags-list">
{% for tag in site.tags %}
  {% assign tag_name = tag | first %}
  {% assign tag_name_pretty = tag_name | replace: "_", " " | capitalize %}
  <div class="tag-list">
    <h3 class="post-list-heading">#{{ tag_name }}</h3>
    <ul class="post-list post-list-narrow">
    {% for post in site.tags[tag_name] %}
      <li>
        {%- assign date_format = site.minima.date_format | default: "%B %-d, %Y" -%}
        <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
        <span class="post-meta">{{ post.date | date: date_format }}</span>
      </li>
    {% endfor %}
    </ul>
  </div>
{% endfor %}
</div>