<?php

/**
 * Plugin Name:       Studio Val - Gutenberg Blocks
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       studioval-blocks
 */

if (! defined('ABSPATH')) exit();


function create_block_studioval_blocks_block_init()
{
	register_block_type(__DIR__ . '/build/1-callout');
}
add_action('init', 'create_block_studioval_blocks_block_init');
