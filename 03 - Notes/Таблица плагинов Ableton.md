---

database-plugin: basic

---


```yaml:dbfolder
name: new database
description: new description
columns:
  __file__:
    key: __file__
    id: __file__
    input: markdown
    label: File
    accessorKey: __file__
    isMetadata: true
    skipPersist: false
    isDragDisabled: false
    csvCandidate: true
    position: 1
    isHidden: false
    sortIndex: -1
    width: 283
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: true
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Effect:
    input: tags
    accessorKey: Effect
    key: Effect
    id: Effect
    label: Effect
    position: 2
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 216
    options:
      - { label: "Chorus", value: "Chorus", color: "hsl(101, 95%, 90%)"}
      - { label: "Synth", value: "Synth", color: "hsl(194, 95%, 90%)"}
      - { label: "Saturator", value: "Saturator", color: "hsl(244, 95%, 90%)"}
      - { label: "Delay", value: "Delay", color: "hsl(35, 95%, 90%)"}
      - { label: "Equalizer", value: "Equalizer", color: "hsl(315, 95%, 90%)"}
      - { label: "Compressor", value: "Compressor", color: "hsl(190, 95%, 90%)"}
      - { label: "Limiter", value: "Limiter", color: "hsl(286, 95%, 90%)"}
      - { label: "Distortion", value: "Distortion", color: "hsl(87, 95%, 90%)"}
      - { label: "Master", value: "Master", color: "hsl(18, 95%, 90%)"}
      - { label: "Stylization", value: "Stylization", color: "hsl(146, 95%, 90%)"}
      - { label: "Reverb", value: "Reverb", color: "hsl(134, 95%, 90%)"}
      - { label: "Clipper", value: "Clipper", color: "hsl(12, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      option_source: manual
  Author:
    input: select
    accessorKey: Author
    key: Author
    id: Author
    label: Author
    position: 4
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 174
    options:
      - { label: "Valhalla", value: "Valhalla", color: "hsl(311, 95%, 90%)"}
      - { label: "Arturia", value: "Arturia", color: "hsl(268, 95%, 90%)"}
      - { label: "Default", value: "Default", color: "hsl(76, 95%, 90%)"}
      - { label: "SoundToys", value: "SoundToys", color: "hsl(185, 95%, 90%)"}
      - { label: "FabFilter", value: "FabFilter", color: "hsl(229, 95%, 90%)"}
      - { label: "Illformed", value: "Illformed", color: "hsl(251, 95%, 90%)"}
      - { label: "SoundTheory", value: "SoundTheory", color: "hsl(78, 95%, 90%)"}
      - { label: "Melda", value: "Melda", color: "hsl(6, 95%, 90%)"}
      - { label: "iZotope", value: "iZotope", color: "hsl(89, 95%, 90%)"}
      - { label: "XLN audio", value: "XLN audio", color: "hsl(224, 95%, 90%)"}
      - { label: "CableGuys", value: "CableGuys", color: "hsl(27, 95%, 90%)"}
      - { label: "T-RackS", value: "T-RackS", color: "hsl(348, 95%, 90%)"}
      - { label: "Wavesfactory", value: "Wavesfactory", color: "hsl(118, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Description:
    input: text
    accessorKey: Description
    key: Description
    id: Description
    label: Description
    position: 5
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 522
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      wrap_content: true
  Type_or_Soft:
    input: tags
    accessorKey: Type_or_Soft
    key: Type_or_Soft
    id: Type/Soft
    label: Type/Soft
    position: 3
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 138
    options:
      - { label: "VST3", value: "VST3", color: "hsl(4, 95%, 90%)"}
      - { label: "Ableton", value: "Ableton", color: "hsl(110,96%,90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      option_source: manual
config:
  remove_field_when_delete_column: false
  cell_size: normal
  sticky_first_column: true
  group_folder_column: 
  remove_empty_folders: false
  automatically_group_files: false
  hoist_files_with_empty_attributes: true
  show_metadata_created: false
  show_metadata_modified: false
  show_metadata_tasks: false
  show_metadata_inlinks: false
  show_metadata_outlinks: false
  show_metadata_tags: false
  source_data: query
  source_form_result: "FROM \"98 - Database/Ableton Plugins\""
  source_destination_path: /
  row_templates_folder: /
  current_row_template: 
  pagination_size: 50
  font_size: 14
  enable_js_formulas: false
  formula_folder_path: /
  inline_default: false
  inline_new_position: last_field
  date_format: yyyy-MM-dd
  datetime_format: "yyyy-MM-dd HH:mm:ss"
  metadata_date_format: "yyyy-MM-dd HH:mm:ss"
  enable_footer: true
  implementation: default
filters:
  enabled: false
  conditions:
```

