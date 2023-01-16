<?php

namespace TravelerFseBlocks\Classes;

use TravelerFseBlocks\Interfaces\BaseBlock;

use const TRAVELER_FSE_BLOCK_OUTPUT_PATH;
use const TRAVELER_FSE_BLOCKS_PREFIX;
use function register_block_type;
use function register_block_style;

class Block implements BaseBlock {
  public string $raw_block_name;
  public string $block_path;
  public array $block_attributes;

  private function __get_block_name(): string {
    return TRAVELER_FSE_BLOCKS_PREFIX . $this->raw_block_name;
  }

  public function __construct( string $name, array $block_attributes) {
    $this->raw_block_name = $name;
    $this->block_path = TRAVELER_FSE_BLOCK_OUTPUT_PATH . $name;
    $this->block_attributes = $block_attributes;

    add_action('enqueue_block_editor_assets', [$this, 'enqueue_editor_assets']);
    add_action('enqueue_block_assets', [$this, 'enqueue_assets']);
    add_action('init', [$this, 'register_block']);
  }

  public function register_block(): void {
    register_block_type(
      $this->block_path,
      $this->block_attributes
    );
  }

  public function enqueue_assets(): void {
    $style_handle   = BlockAssets::get_asset_handle($this->raw_block_name, BlockAssetsKeys::$style);
    $script_handle  = BlockAssets::get_asset_handle($this->raw_block_name, BlockAssetsKeys::$script);
    
    $style_file     = BlockAssets::get_asset_path($this->raw_block_name, BlockAssetsKeys::$style);
    $script_file    = BlockAssets::get_asset_path($this->raw_block_name, BlockAssetsKeys::$script);
    
    $style_version  = BlockAssets::get_asset_version($style_file);
    $script_version = BlockAssets::get_asset_version($script_file);
    
    if (file_exists($style_file)) {
      wp_register_style($style_handle, $style_file, [], $style_version);
    }

    if (file_exists($script_file)) {
      wp_register_script($script_handle, $script_file, ['wp-i18n'], $script_version, true);
    }
  }
  
  public function enqueue_editor_assets(): void {
    $style_handle   = BlockAssets::get_asset_handle($this->raw_block_name, BlockAssetsKeys::$editor_style);
    $script_handle  = BlockAssets::get_asset_handle($this->raw_block_name, BlockAssetsKeys::$editor_script);
    
    $style_file     = BlockAssets::get_asset_path($this->raw_block_name, BlockAssetsKeys::$editor_style);
    $script_file    = BlockAssets::get_asset_path($this->raw_block_name, BlockAssetsKeys::$editor_script);

    $style_version  = BlockAssets::get_asset_version($style_file);
    $script_version = BlockAssets::get_asset_version($script_file);
    
    if (file_exists($style_file)) {
      wp_register_style($style_handle, $style_file, [], $style_version);
    }
    
    if (file_exists($script_file)) {
      wp_register_script($script_handle, $script_file, ['wp-i18n'], $script_version, true);
    }
  }
}
