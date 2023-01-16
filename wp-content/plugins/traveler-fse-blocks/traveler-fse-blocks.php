<?php
/**
 * Plugin Name:       Traveler Fse Blocks
 * Description:       Example static block scaffolded with Create Block tool.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       traveler-fse-blocks
 *
 * @package           create-block
 */

namespace TravelerFseBlocks;

use function define;
use function defined;

if ( ! defined( 'ABSPATH' ) ) {
	header( 'Status: 403 Forbidden' );
	header( 'HTTP/1.1 403 Forbidden' );
	exit();
}


if (!defined('TRAVELER_FSE_BLOCKS_DOMAIN')) {
  // Block text domain
  define( 'TRAVELER_FSE_BLOCKS_DOMAIN', 'traveler-fse-blocks' );
}

if (!defined('TRAVELER_FSE_BLOCKS_PREFIX')) {
  // Block prefix name
  define( 'TRAVELER_FSE_BLOCKS_PREFIX', TRAVELER_FSE_BLOCKS_DOMAIN . '/' );
}

if (!defined('TRAVELER_FSE_BLOCKS_PATH')) {
  // Plugin's folder path
  define( 'TRAVELER_FSE_BLOCKS_PATH', dirname(__FILE__) . '/' );
}

if (!defined('TRAVELER_FSE_BLOCK_OUTPUT_PATH')) {
  // Plugin's output (compiled) folder path
  define( 'TRAVELER_FSE_BLOCK_OUTPUT_PATH', TRAVELER_FSE_BLOCKS_PATH . 'dist/blocks/' );
}

if (!defined('TRAVELER_FSE_BLOCKS_DIST_OUTPUT_PATH_URL')) {
  // Plugin's output (compiled) folder url
  define( 'TRAVELER_FSE_BLOCKS_DIST_OUTPUT_PATH_URL', plugin_dir_url( __FILE__ ) . 'dist/blocks/' );
}


if (file_exists(dirname( __FILE__ ) . '/vendor/autoload.php')) {
	require_once dirname( __FILE__ ) . '/vendor/autoload.php';
}
