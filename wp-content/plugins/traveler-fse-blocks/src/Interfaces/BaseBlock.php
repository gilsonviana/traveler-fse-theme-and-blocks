<?php

namespace TravelerFseBlocks\Interfaces;

interface BaseBlock {
  function register_block(): void;

  function enqueue_assets(): void;

  function enqueue_editor_assets(): void;
}