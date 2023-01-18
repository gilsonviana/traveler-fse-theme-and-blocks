<?php

namespace TravelerFseBlocks\Interfaces;

interface BasePlugin {
  function register_category(array $categories): array;
}