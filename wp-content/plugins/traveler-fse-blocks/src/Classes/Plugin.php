<?php

namespace TravelerFseBlocks\Classes;

use TravelerFseBlocks\Interfaces\BasePlugin;

class Plugin implements BasePlugin {
  public function __construct() {
    // TODO: load plugin theme domain

    add_filter('block_categories_all', [$this, 'register_category']);
  }

  public function register_category(array $categories): array {
    $new_category_name = 'fse-blocks';
    $category_slugs = wp_list_pluck($categories, 'slug');

    if (in_array($new_category_name, $category_slugs, true) ) {
      return $categories;
    }

    return array_merge($categories, array(
      array(
        'slug'  => $new_category_name,
        'title' => 'FSE blocks',
        'icon'  => null
      )
    ));
  }
}
