---
layout: page
title: An archive of thoughts
permalink: /archive/
class: archive-page
---

<p>A collection of my thoughts, organized by themes and topics that matter to me. Each tag represents a different facet of my journey and interests.</p>

<div class="view-toggle">
  <input type="radio" id="view-tags" name="view" value="tags" checked>
  <label for="view-tags">By Topic</label>
  <input type="radio" id="view-dates" name="view" value="dates">
  <label for="view-dates">By Date</label>
</div>

<div class="view-content tags-view">
  {% for tag in site.tags %}
    {% assign tag_name = tag | first %}
    <div class="tag-list">
      <h3 class="post-list-heading">In #{{ tag_name }}:</h3>
      <ul class="post-list">
        {% for post in site.tags[tag_name] %}
        <li>
          {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
          <a href="{{ post.url | relative_url }}" class="post-link">{{ post.title | escape }}</a>
          <span class="post-date">{{ post.date | date: date_format }}</span>
        </li>
        {% endfor %}
      </ul>
    </div>
  {% endfor %}
</div>

<div class="view-content dates-view">
  {% assign posts_by_year = site.posts | group_by_exp:"post", "post.date | date: '%Y'" %}
  {% for year in posts_by_year %}
    <h3 class="post-list-heading">{{ year.name }}</h3>
    <ul class="post-list">
      {% for post in year.items %}
        <li>
          <a href="{{ post.url | relative_url }}" class="post-link">{{ post.title | escape }}</a>
          {%- assign date_format = "%b %-d" -%}
          <span class="post-date">{{ post.date | date: date_format }}</span>
          {% if post.tags.size > 0 %}
            <span class="post-tags">
              {% for tag in post.tags %}#{{ tag }}{% unless forloop.last %}, {% endunless %}{% endfor %}
            </span>
          {% endif %}
        </li>
      {% endfor %}
    </ul>
  {% endfor %}
</div>