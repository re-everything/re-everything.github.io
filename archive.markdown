---
layout: page
title: An archive of thoughts
permalink: /archive/
class: archive-page
---
<link rel="stylesheet" href="{{ "/assets/css/archive.css" | relative_url }}">

<p>A collection of my thoughts, organized by themes and topics that matter to me. Each tag represents a different facet of my journey and interests.</p>

<div class="archive-nav">
  <button id="by-date-btn" class="archive-nav-btn active">by date</button>
  <button id="by-tag-btn" class="archive-nav-btn">by tag</button>
</div>

<div class="archive-container">
  <div id="archive-by-date" class="archive-view">
    {% assign postsByYear = site.posts | group_by_exp:"post", "post.date | date: '%Y'" %}
    {% for year in postsByYear %}
      <div class="archive-year">
        <h2 class="year-heading" data-toggle-year="{{ year.name }}">
          <span class="toggle-icon">▼</span> {{ year.name }}
        </h2>
        <div id="year-{{ year.name }}" class="year-content">
          {% assign postsByMonth = year.items | group_by_exp:"post", "post.date | date: '%B'" %}
          {% for month in postsByMonth %}
            <div class="archive-month">
              <h3 class="month-heading" data-toggle-month="{{ year.name }}-{{ month.name }}">
                <span class="toggle-icon">▼</span> {{ month.name }}
              </h3>
              <div id="month-{{ year.name }}-{{ month.name }}" class="month-content">
                <ul class="post-list post-list-narrow">
                  {% for post in month.items %}
                    <li>
                      {%- assign date_format = "%d" -%}
                      <span class="post-date">{{ post.date | date: date_format }}</span>
                      <a href="{{ post.url | relative_url }}" class="post-link">
                        {{ post.title | escape }}
                      </a>
                    </li>
                  {% endfor %}
                </ul>
              </div>
            </div>
          {% endfor %}
        </div>
      </div>
    {% endfor %}
  </div>

  <div id="archive-by-tag" class="archive-view" style="display: none;">
    <div class="tags-overview">
      {% for tag in site.tags %}
        {% assign tag_name = tag | first %}
        <a href="#tag-{{ tag_name | slugize }}" class="tag-link">#{{ tag_name }} ({{ tag[1].size }})</a>
      {% endfor %}
    </div>

    {% for tag in site.tags %}
      {% assign tag_name = tag | first %}
      <div id="tag-{{ tag_name | slugize }}" class="tag-section">
        <h3 class="tag-heading">#{{ tag_name }}</h3>
        <ul class="post-list post-list-narrow">
          {% for post in site.tags[tag_name] %}
            <li>
              {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
              <span class="post-date">{{ post.date | date: date_format }}</span>
              <a href="{{ post.url | relative_url }}" class="post-link">
                {{ post.title | escape }}
              </a>
            </li>
          {% endfor %}
        </ul>
      </div>
    {% endfor %}
  </div>
</div>
<script src="{{ '/assets/js/archive.js' | relative_url }}"></script>
