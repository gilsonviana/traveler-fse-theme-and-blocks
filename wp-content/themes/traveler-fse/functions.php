<?php

function traveler_fse_theme_assets() {
  wp_enqueue_style('traveler-fse-theme-style', get_stylesheet_uri(), [], filemtime(get_stylesheet_uri()));
}

add_action('init', 'traveler_fse_theme_assets');
