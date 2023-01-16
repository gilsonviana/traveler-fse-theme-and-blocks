<?php

namespace TravelerFseBlocks\Classes;

use Exception;

use const TRAVELER_FSE_BLOCKS_DIST_OUTPUT_PATH_URL;
use const TRAVELER_FSE_BLOCKS_DOMAIN;

class BlockAssetsKeys {
  public static $editor_script = 'editor_script';
  public static $script        = 'script';
  public static $view_script   = 'view_script';
  public static $editor_style  = 'editor_style';
  public static $style         = 'style';
  public static $assets        = '';
}

class BlockAssetsValues {
  public static $handles = array(
    'editor_script' => '-editor-script',
    'script'        => '-script',
    'view_script'   => '-view-script',
    'editor_style'  => '-editor-style',
    'style'         => '-style',
  );

  public static $files = array(
    'editor_script' => 'index.js',
    'script'        => 'script.js',
    'view_script'   => 'view.js',
    'editor_style'  => 'index.css',
    'style'         => 'style.css',
    'assets'        => 'index.asset.php'
  );
}

class BlockAssets extends BlockAssetsValues {
  public static function get_asset_version($block_path) {
    $assets_path = $block_path . '/' . parent::$files['assets'];

    if (file_exists($assets_path)) {
      $block_dependencies = include($assets_path);
      return $block_dependencies['version'];
    }

    return rand(1, 100);
  }

  public static function get_asset_path(string $block_name, string $file_type): string {
    $file_name = isset(parent::$files[$file_type]) ? self::$files[$file_type] : '';

    if ($file_name) {
      return TRAVELER_FSE_BLOCKS_DIST_OUTPUT_PATH_URL . $block_name . "/" . $file_name;
    }

    throw new Exception('get_file_name not identified.');
  }

  public static function get_asset_handle(string $block_name, string $file_type): string {
    $file_handle = isset(parent::$handles[$file_type]) ? parent::$handles[$file_type] : '';
    if ($file_handle) {
      return TRAVELER_FSE_BLOCKS_DOMAIN . '-' . $block_name . parent::$handles[$file_type];
    }

    throw new Exception('get_file_handler not identified.');
  }
}