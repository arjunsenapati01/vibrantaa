# Graph Report - /Users/arjun/Desktop/Projects/new web  (2026-04-14)

## Corpus Check
- 137 files · ~289,348 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1549 nodes · 2316 edges · 83 communities detected
- Extraction: 89% EXTRACTED · 11% INFERRED · 0% AMBIGUOUS · INFERRED: 265 edges (avg confidence: 0.52)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_httpx Auth Flows|httpx Auth Flows]]
- [[_COMMUNITY_AST Extractor Tests|AST Extractor Tests]]
- [[_COMMUNITY_AST Code Extraction Engine|AST Code Extraction Engine]]
- [[_COMMUNITY_File Detection & Classification|File Detection & Classification]]
- [[_COMMUNITY_Graphify Core Pipeline|Graphify Core Pipeline]]
- [[_COMMUNITY_Platform Install Tests|Platform Install Tests]]
- [[_COMMUNITY_MCP Server  Language Fixtures|MCP Server / Language Fixtures]]
- [[_COMMUNITY_Platform Integration Agents|Platform Integration Agents]]
- [[_COMMUNITY_Graph Analysis Engine|Graph Analysis Engine]]
- [[_COMMUNITY_Test Property Invariants|Test Property Invariants]]
- [[_COMMUNITY_Language-Agnostic Data Fixtures|Language-Agnostic Data Fixtures]]
- [[_COMMUNITY_Cache Module Tests|Cache Module Tests]]
- [[_COMMUNITY_MCP Server Handlers|MCP Server Handlers]]
- [[_COMMUNITY_Analyze Module Tests|Analyze Module Tests]]
- [[_COMMUNITY_Multi-Language AST Tests|Multi-Language AST Tests]]
- [[_COMMUNITY_Claude Install Tests|Claude Install Tests]]
- [[_COMMUNITY_Export Module (HTMLCypherJSON)|Export Module (HTML/Cypher/JSON)]]
- [[_COMMUNITY_Security Module Tests|Security Module Tests]]
- [[_COMMUNITY_Transcription Tests|Transcription Tests]]
- [[_COMMUNITY_Graphify Outputs & Integrations|Graphify Outputs & Integrations]]
- [[_COMMUNITY_Web Ingestion Pipeline|Web Ingestion Pipeline]]
- [[_COMMUNITY_Wiki Generation Tests|Wiki Generation Tests]]
- [[_COMMUNITY_MCP Query Helpers Tests|MCP Query Helpers Tests]]
- [[_COMMUNITY_Security & Path Guards|Security & Path Guards]]
- [[_COMMUNITY_Graph Clustering Engine|Graph Clustering Engine]]
- [[_COMMUNITY_Cache System|Cache System]]
- [[_COMMUNITY_HTTP Utilities|HTTP Utilities]]
- [[_COMMUNITY_Hyperedge Support Tests|Hyperedge Support Tests]]
- [[_COMMUNITY_Confidence Score Tests|Confidence Score Tests]]
- [[_COMMUNITY_Record Storage|Record Storage]]
- [[_COMMUNITY_Semantic Similarity Tests|Semantic Similarity Tests]]
- [[_COMMUNITY_Git Hook Tests|Git Hook Tests]]
- [[_COMMUNITY_CLI Graph Query|CLI Graph Query]]
- [[_COMMUNITY_Vibrantaa Service Icons|Vibrantaa Service Icons]]
- [[_COMMUNITY_Benchmark Tests|Benchmark Tests]]
- [[_COMMUNITY_Cypher & GraphML Export Tests|Cypher & GraphML Export Tests]]
- [[_COMMUNITY_Document Pipeline Processing|Document Pipeline Processing]]
- [[_COMMUNITY_Parsing Pipeline|Parsing Pipeline]]
- [[_COMMUNITY_Audio & Whisper Pipeline|Audio & Whisper Pipeline]]
- [[_COMMUNITY_Cluster Output Tests|Cluster Output Tests]]
- [[_COMMUNITY_End-to-End Pipeline Tests|End-to-End Pipeline Tests]]
- [[_COMMUNITY_Git Hooks Integration|Git Hooks Integration]]
- [[_COMMUNITY_Document Pipeline Architecture|Document Pipeline Architecture]]
- [[_COMMUNITY_Rationale Extraction Tests|Rationale Extraction Tests]]
- [[_COMMUNITY_Validation Tests|Validation Tests]]
- [[_COMMUNITY_Graph Build Module|Graph Build Module]]
- [[_COMMUNITY_File Watcher Tests|File Watcher Tests]]
- [[_COMMUNITY_Report Generator Tests|Report Generator Tests]]
- [[_COMMUNITY_Ingest Query Result Tests|Ingest Query Result Tests]]
- [[_COMMUNITY_API Client Fixtures|API Client Fixtures]]
- [[_COMMUNITY_Analyzer Class Fixtures|Analyzer Class Fixtures]]
- [[_COMMUNITY_Token Benchmark Module|Token Benchmark Module]]
- [[_COMMUNITY_Wiki Generator Module|Wiki Generator Module]]
- [[_COMMUNITY_Graph Build Tests|Graph Build Tests]]
- [[_COMMUNITY_File Watcher Module|File Watcher Module]]
- [[_COMMUNITY_Transformer Architecture Notes|Transformer Architecture Notes]]
- [[_COMMUNITY_Community 56|Community 56]]
- [[_COMMUNITY_Community 57|Community 57]]
- [[_COMMUNITY_Community 58|Community 58]]
- [[_COMMUNITY_Community 59|Community 59]]
- [[_COMMUNITY_Community 60|Community 60]]
- [[_COMMUNITY_Community 61|Community 61]]
- [[_COMMUNITY_Community 62|Community 62]]
- [[_COMMUNITY_Community 63|Community 63]]
- [[_COMMUNITY_Community 64|Community 64]]
- [[_COMMUNITY_Vibrantaa Brand Identity|Vibrantaa Brand Identity]]
- [[_COMMUNITY_UI Error States & Icons|UI Error States & Icons]]
- [[_COMMUNITY_Dev Server (serve.py)|Dev Server (serve.py)]]
- [[_COMMUNITY_Graphify Init Module|Graphify Init Module]]
- [[_COMMUNITY_AIG Portfolio Project|AIG Portfolio Project]]
- [[_COMMUNITY_HTML Fixer Utility|HTML Fixer Utility]]
- [[_COMMUNITY_Content Extractor Utility|Content Extractor Utility]]
- [[_COMMUNITY_Community 72|Community 72]]
- [[_COMMUNITY_Community 73|Community 73]]
- [[_COMMUNITY_Community 74|Community 74]]
- [[_COMMUNITY_Community 75|Community 75]]
- [[_COMMUNITY_Community 76|Community 76]]
- [[_COMMUNITY_Community 77|Community 77]]
- [[_COMMUNITY_Community 78|Community 78]]
- [[_COMMUNITY_Community 79|Community 79]]
- [[_COMMUNITY_Community 80|Community 80]]
- [[_COMMUNITY_Design Icon Assets|Design Icon Assets]]
- [[_COMMUNITY_Community 82|Community 82]]

## God Nodes (most connected - your core abstractions)
1. `Response` - 45 edges
2. `Request` - 42 edges
3. `_labels()` - 34 edges
4. `graphify Tool` - 28 edges
5. `Cookies` - 27 edges
6. `Client` - 27 edges
7. `AsyncClient` - 26 edges
8. `_make_id()` - 26 edges
9. `HTTPTransport` - 22 edges
10. `TransportError` - 22 edges

## Surprising Connections (you probably didn't know these)
- `validate_url()` --implements--> `SSRF Mitigation`  [EXTRACTED]
  /Users/arjun/Desktop/Projects/new web/graphify-4/graphify/security.py → graphify-4/SECURITY.md
- `safe_fetch()` --implements--> `SSRF Mitigation`  [EXTRACTED]
  /Users/arjun/Desktop/Projects/new web/graphify-4/graphify/security.py → graphify-4/SECURITY.md
- `Security Threat Model` --references--> `validate_url()`  [EXTRACTED]
  graphify-4/SECURITY.md → /Users/arjun/Desktop/Projects/new web/graphify-4/graphify/security.py
- `Security Threat Model` --references--> `safe_fetch()`  [EXTRACTED]
  graphify-4/SECURITY.md → /Users/arjun/Desktop/Projects/new web/graphify-4/graphify/security.py
- `validate_graph_path()` --implements--> `Path Traversal Mitigation`  [EXTRACTED]
  /Users/arjun/Desktop/Projects/new web/graphify-4/graphify/security.py → graphify-4/SECURITY.md

## Hyperedges (group relationships)
- **graphify Core Pipeline Stages** — architecture_detect_py, architecture_extract_py, architecture_build_py, architecture_cluster_py, architecture_analyze_py, architecture_report_py, architecture_export_py [EXTRACTED 1.00]
- **Supported AI Coding Platforms** — readme_claude_code_platform, readme_codex_platform, readme_opencode_platform, readme_cursor_platform, readme_gemini_cli_platform, readme_aider_platform, readme_copilot_platform, readme_hermes_platform, readme_antigravity_platform [EXTRACTED 1.00]
- **Security Mitigations** — security_validate_url, security_safe_fetch, security_validate_graph_path, security_sanitize_label [EXTRACTED 1.00]
- **Worked Example Benchmarks** — karpathy_benchmark, mixed_corpus_benchmark, httpx_benchmark, example_document_pipeline [EXTRACTED 1.00]
- **Example Document Pipeline Modules** — example_parser_py, example_validator_py, example_processor_py, example_storage_py, example_api_py [EXTRACTED 1.00]
- **Graphify Platform Variants (all implement same pipeline)** — skill_graphify_skill, skill_windows_graphify, skill_codex_graphify, skill_copilot_graphify, skill_opencode_graphify, skill_aider_graphify, skill_claw_graphify, skill_droid_graphify [EXTRACTED 1.00]
- **Graphify Pipeline Steps (detect → transcribe → extract → cluster → output)** — skill_graphify_step_detect, skill_graphify_step_transcribe, skill_graphify_step_extract, skill_graphify_ast_extraction, skill_graphify_semantic_extraction, skill_graphify_community_detection, skill_graphify_outputs [EXTRACTED 1.00]
- **Transformer Core Concepts (Vaswani 2017)** — attention_notes_transformer, attention_notes_multihead_attention, attention_notes_scaled_dot_product, attention_notes_positional_encoding, attention_notes_encoder_decoder, attention_notes_layer_norm, attention_notes_residual_connections [EXTRACTED 1.00]
- **Vibrantaa Brand Assets** — logo_png_vibrantaa_dark, vibrantaa_logo_png_white, concept_vibrantaa_brand [EXTRACTED 1.00]
- **Error / Form Error UI Assets** — img_error_vhs_noise, img_form_error_laptop, icon_error_refresh [INFERRED 0.85]
- **Design Service Icon Set (design1–design6)** — 686683492ec21aed4c80082d_design1, 6866833a840768ce60c44af5_design2, 6866833a6d672e7105092cf6_design3, 6866833acf7b3e43902cf213_design4, 6866833aca902947fe631bbf_design6 [EXTRACTED 1.00]
- **Navigation Link Icon Set (Blog, Pricing, Resources)** — 69301aed7d12a6d6ef0a20ea_blog-link-ico, 69301ac07334f19f8157f72e_pricing-link-ico, 6867bcefdc3abae0e2436a9e_resources2 [EXTRACTED 1.00]
- **Unified Blue #3827C7 Icon System Across All Nav and Design Icons** — 686683492ec21aed4c80082d_design1, 6866833a840768ce60c44af5_design2, 6866833a6d672e7105092cf6_design3, 6866833acf7b3e43902cf213_design4, 6866833aca902947fe631bbf_design6, 69301aed7d12a6d6ef0a20ea_blog-link-ico, 69301ac07334f19f8157f72e_pricing-link-ico, 6867bcefdc3abae0e2436a9e_resources2, icon_color_blue_3827C7 [EXTRACTED 1.00]

## Communities

### Community 0 - "httpx Auth Flows"
Cohesion: 0.03
Nodes (84): Auth, BasicAuth, BearerAuth, DigestAuth, NetRCAuth, Authentication handlers. Auth objects are callables that modify a request before, Load credentials from ~/.netrc based on the request host., Base class for all authentication handlers. (+76 more)

### Community 1 - "AST Extractor Tests"
Cohesion: 0.03
Nodes (52): _calls(), _labels(), Tests for language extractors: Java, C, C++, Ruby, C#, Kotlin, Scala, PHP, Swift, Methods on the same receiver type must share one canonical type node., Type node id should be scoped to directory, not file stem., _relations(), test_c_finds_functions(), test_c_finds_includes() (+44 more)

### Community 2 - "AST Code Extraction Engine"
Cohesion: 0.04
Nodes (82): _check_tree_sitter_version(), _csharp_extra_walk(), extract(), extract_blade(), extract_c(), extract_cpp(), extract_csharp(), extract_dart() (+74 more)

### Community 3 - "File Detection & Classification"
Cohesion: 0.04
Nodes (56): classify_file(), convert_office_file(), count_words(), detect(), detect_incremental(), docx_to_markdown(), extract_pdf_text(), FileType (+48 more)

### Community 4 - "Graphify Core Pipeline"
Cohesion: 0.03
Nodes (69): analyze.py, build.py, cluster.py, Confidence Labels (EXTRACTED/INFERRED/AMBIGUOUS), detect.py, export.py, extract.py, Extraction Output Schema (+61 more)

### Community 5 - "Platform Install Tests"
Cohesion: 0.05
Nodes (51): _agents_install(), _agents_uninstall(), _install(), Tests for graphify install --platform routing., Claude platform install writes CLAUDE.md; others do not., Installing twice does not duplicate the section., Installs into an existing AGENTS.md without overwriting other content., Uninstall keeps pre-existing content. (+43 more)

### Community 6 - "MCP Server / Language Fixtures"
Cohesion: 0.07
Nodes (19): Base, Server, LinearAlgebra, add(), area(), Circle, Color, Config (+11 more)

### Community 7 - "Platform Integration Agents"
Cohesion: 0.08
Nodes (39): _agents_install(), _agents_uninstall(), _antigravity_install(), _antigravity_uninstall(), _check_skill_version(), claude_install(), claude_uninstall(), _cursor_install() (+31 more)

### Community 8 - "Graph Analysis Engine"
Cohesion: 0.1
Nodes (33): _cross_community_surprises(), _cross_file_surprises(), _file_category(), god_nodes(), graph_diff(), _is_concept_node(), _is_file_node(), _node_community_map() (+25 more)

### Community 9 - "Test Property Invariants"
Cohesion: 0.07
Nodes (18): After merging multiple files, no internal edges should be dangling., Call-graph pass must produce INFERRED calls edges., AST-resolved call edges are deterministic and should be EXTRACTED/1.0., Same input always produces same output., run_analysis() calls compute_score() - must appear as a calls edge., Analyzer.process() calls run_analysis() - cross class→function calls edge., Same caller→callee pair must appear only once even if called multiple times., All edge sources must reference a known node (targets may be external imports). (+10 more)

### Community 10 - "Language-Agnostic Data Fixtures"
Cohesion: 0.08
Nodes (13): CacheManager, createProcessor(), DataProcessor, Get-Data(), GraphifyDemo, IProcessor, Loggable, NetworkError (+5 more)

### Community 11 - "Cache Module Tests"
Cohesion: 0.07
Nodes (25): Tests for graphify/cache.py., Non-.md files are still hashed by their full content., _body_content correctly strips YAML frontmatter., _body_content returns content unchanged when no frontmatter present., Same file gives same hash on repeated calls., Different file contents give different hashes., Save then load returns the same result dict., After file content changes, load_cached returns None. (+17 more)

### Community 12 - "MCP Server Handlers"
Cohesion: 0.11
Nodes (25): handle_delete(), handle_enrich(), handle_get(), handle_list(), handle_search(), handle_upload(), API module - exposes the document pipeline over HTTP. Thin layer over parser, va, Accept a list of file paths, run the full pipeline on each,     and return a sum (+17 more)

### Community 13 - "Analyze Module Tests"
Cohesion: 0.11
Nodes (23): make_graph(), _make_simple_graph(), Tests for analyze.py., Code↔paper edge should score higher than code↔code edge., Helper: build a small nx.Graph from node/edge specs., Multi-file graph: should find cross-file edges between real entities., Concept nodes (empty source_file) must not appear in surprises., Single-file graph: should return cross-community edges, not empty list. (+15 more)

### Community 14 - "Multi-Language AST Tests"
Cohesion: 0.12
Nodes (17): _call_pairs(), _confidences(), _labels(), Tests for multi-language AST extraction: JS/TS, Go, Rust., test_go_emits_calls(), test_go_finds_constructor(), test_go_finds_methods(), test_go_finds_struct() (+9 more)

### Community 15 - "Claude Install Tests"
Cohesion: 0.08
Nodes (25): Tests for graphify claude install / uninstall commands., claude_install also writes .claude/settings.json with PreToolUse hook., Running claude_install twice does not duplicate the PreToolUse hook., Creates CLAUDE.md when none exists., claude_uninstall removes the PreToolUse hook from settings.json., Written section includes the three rules., Appends to an existing CLAUDE.md without clobbering it., Running install twice does not duplicate the section. (+17 more)

### Community 16 - "Export Module (HTML/Cypher/JSON)"
Cohesion: 0.1
Nodes (24): attach_hyperedges(), _cypher_escape(), _html_script(), _html_styles(), _hyperedge_script(), prune_dangling_edges(), push_to_neo4j(), Store hyperedges in the graph's metadata dict. (+16 more)

### Community 17 - "Security Module Tests"
Cohesion: 0.1
Nodes (6): _make_mock_response(), Tests for graphify/security.py - URL validation, safe fetch, path guards, label, test_safe_fetch_raises_on_non_2xx(), test_safe_fetch_returns_bytes(), test_safe_fetch_text_decodes_utf8(), test_safe_fetch_text_replaces_bad_bytes()

### Community 18 - "Transcription Tests"
Cohesion: 0.09
Nodes (21): Tests for graphify.transcribe — video/audio transcription support., ImportError propagates when faster_whisper is not installed., Empty input returns empty list without error., transcribe_all() returns cached paths for already-transcribed files., transcribe_all() warns and skips files that fail to transcribe., Empty god_nodes returns fallback prompt., GRAPHIFY_WHISPER_PROMPT env var short-circuits LLM call., Returns a topic-based prompt from god node labels — no LLM call. (+13 more)

### Community 19 - "Graphify Outputs & Integrations"
Cohesion: 0.09
Nodes (23): GraphRAG-Ready JSON Output, Karpathy /raw Folder Workflow, Neo4j Cypher Export, Obsidian Vault Output, OpenAI Whisper (audio transcription), Graphify Skill (Aider variant — sequential extraction), Graphify Skill (OpenClaw variant — sequential extraction), Graphify Skill (OpenAI Codex variant) (+15 more)

### Community 20 - "Web Ingestion Pipeline"
Cohesion: 0.16
Nodes (21): _detect_url_type(), _download_binary(), _fetch_arxiv(), _fetch_html(), _fetch_tweet(), _fetch_webpage(), _html_to_markdown(), ingest() (+13 more)

### Community 21 - "Wiki Generation Tests"
Cohesion: 0.17
Nodes (19): _make_graph(), Tests for graphify.wiki — Wikipedia-style article generation., God node with bad ID should not crash., Communities with more than 25 nodes show a truncation notice., test_article_navigation_footer(), test_community_article_has_audit_trail(), test_community_article_has_cross_links(), test_community_article_shows_cohesion() (+11 more)

### Community 22 - "MCP Query Helpers Tests"
Cohesion: 0.18
Nodes (17): _make_graph(), Tests for serve.py - MCP graph query helpers (no mcp package required)., test_bfs_depth_1(), test_bfs_depth_2(), test_bfs_disconnected(), test_bfs_returns_edges(), test_communities_from_graph_basic(), test_communities_from_graph_isolated() (+9 more)

### Community 23 - "Security & Path Guards"
Cohesion: 0.14
Nodes (18): security.py, _build_opener(), _NoFileRedirectHandler, Path Traversal Mitigation, Fetch *url* and return decoded text (UTF-8, replacing bad bytes).      Wraps saf, Resolve *path* and verify it stays inside *base*.      *base* defaults to the `g, Strip control characters and cap length.      Safe for embedding in JSON data (i, Raise ValueError if *url* is not http or https, or targets a private/internal IP (+10 more)

### Community 24 - "Graph Clustering Engine"
Cohesion: 0.16
Nodes (17): build_graph(), cluster(), cohesion_score(), _partition(), Community detection on NetworkX graphs. Uses Leiden (graspologic) if available,, Run a second Leiden pass on a community subgraph to split it further., Context manager to suppress stdout/stderr during library calls.      graspologic, Ratio of actual intra-community edges to maximum possible. (+9 more)

### Community 25 - "Cache System"
Cohesion: 0.16
Nodes (18): _body_content(), cache_dir(), cached_files(), check_semantic_cache(), clear_cache(), file_hash(), load_cached(), Strip YAML frontmatter from Markdown content, returning only the body. (+10 more)

### Community 26 - "HTTP Utilities"
Cohesion: 0.12
Nodes (17): build_url_with_params(), flatten_queryparams(), is_known_encoding(), normalize_header_key(), obfuscate_sensitive_headers(), parse_content_type(), primitive_value_to_str(), Utility functions shared across the library. Small helpers that don't belong in (+9 more)

### Community 27 - "Hyperedge Support Tests"
Cohesion: 0.14
Nodes (8): _make_report(), Tests for hyperedge support in graphify., Write graph.json then reload it - hyperedges must survive., test_hyperedges_roundtrip_via_json_file(), test_report_includes_hyperedge_node_list(), test_report_includes_hyperedges_section(), test_report_skips_hyperedges_section_when_empty(), test_report_skips_hyperedges_section_when_key_missing()

### Community 28 - "Confidence Score Tests"
Cohesion: 0.14
Nodes (17): _make_extraction(), Tests for confidence_score on edges., Edges lacking confidence_score get sensible defaults in to_json., Report summary line should include avg confidence for INFERRED edges., Surprising connections section shows confidence score next to INFERRED edges., Return a minimal extraction dict with one edge of each confidence type., EXTRACTED edges must have confidence_score == 1.0., INFERRED edges must have confidence_score between 0.0 and 1.0. (+9 more)

### Community 29 - "Record Storage"
Cohesion: 0.21
Nodes (16): delete_record(), _ensure_storage(), list_records(), load_index(), load_record(), Storage module - persists documents to disk and maintains the search index. All, Load the full document index from disk., Persist the index to disk. (+8 more)

### Community 30 - "Semantic Similarity Tests"
Cohesion: 0.18
Nodes (16): _make_extraction_with_semantic_edge(), _make_graph_with_semantic_edge(), _make_report_with_semantic_surprise(), _make_two_edge_graph(), Tests for semantically_similar_to edge support., Two nodes in separate files connected by a semantically_similar_to edge., Non-semantic edges must not get the [semantically similar] tag., Graph with one semantically_similar_to edge and one references edge, both cross- (+8 more)

### Community 31 - "Git Hook Tests"
Cohesion: 0.23
Nodes (14): _make_git_repo(), Tests for hooks.py - git hook install/uninstall., test_install_appends_to_existing_hook(), test_install_creates_hook(), test_install_creates_post_checkout_hook(), test_install_idempotent(), test_install_is_executable(), test_install_post_checkout_is_executable() (+6 more)

### Community 32 - "CLI Graph Query"
Cohesion: 0.17
Nodes (13): _communities_from_graph(), _filter_blank_stdin(), _find_node(), _load_graph(), Return node IDs whose label or ID matches the search term (diacritic-insensitive, Filter blank lines from stdin before MCP reads it.      Some MCP clients (Claude, Start the MCP server. Requires pip install mcp., Reconstruct community dict from community property stored on nodes. (+5 more)

### Community 33 - "Vibrantaa Service Icons"
Cohesion: 0.18
Nodes (16): HALO Lab Logo – Wordmark with Circular Arc Emblem and Star Accent, Design Icon 3 – Document with Text Lines (File/Notes Icon), Design Icon 2 – Monitor/Screen with Stand (Desktop Display Icon), Design Icon 6 – Bottle / Tube Shape (App / Mobile Device Icon), Design Icon 4 – Rounded Rectangle with Horizontal Rule (Table/Grid Icon), Design Icon 1 – Rounded Rectangle Grid with Column Divider (Table/UI Panel Icon), Resources Icon 2 – Database / Cylinder Stack (Data/Storage Icon), Pricing Link Icon – Document with Edit Pencil Overlay (+8 more)

### Community 34 - "Benchmark Tests"
Cohesion: 0.29
Nodes (13): _make_graph(), Tests for graphify/benchmark.py., test_print_benchmark_no_crash(), test_query_bfs_expands_neighbors(), test_query_returns_positive_for_matching_question(), test_query_returns_zero_for_no_match(), test_run_benchmark_corpus_tokens_proportional(), test_run_benchmark_error_on_empty_graph() (+5 more)

### Community 35 - "Cypher & GraphML Export Tests"
Cohesion: 0.26
Nodes (14): make_graph(), test_to_cypher_contains_merge_statements(), test_to_cypher_creates_file(), test_to_graphml_creates_file(), test_to_graphml_has_community_attribute(), test_to_graphml_valid_xml(), test_to_html_contains_legend_with_labels(), test_to_html_contains_nodes_and_edges() (+6 more)

### Community 36 - "Document Pipeline Processing"
Cohesion: 0.2
Nodes (13): enrich_document(), extract_keywords(), find_cross_references(), normalize_text(), process_and_save(), Processor module - transforms validated documents into enriched records ready fo, Lowercase, strip extra whitespace, remove control characters., Pull non-stopword tokens from text, deduplicated. (+5 more)

### Community 37 - "Parsing Pipeline"
Cohesion: 0.2
Nodes (13): batch_parse(), parse_and_save(), parse_file(), parse_json(), parse_markdown(), parse_plaintext(), Parser module - reads raw input documents and converts them into a structured fo, Read a file from disk and return a structured document. (+5 more)

### Community 38 - "Audio & Whisper Pipeline"
Cohesion: 0.21
Nodes (13): build_whisper_prompt(), download_audio(), _get_whisper(), _get_yt_dlp(), is_url(), _model_name(), Transcribe a video/audio file or URL to a .txt transcript.      If video_path is, Transcribe a list of video/audio files or URLs, return paths to transcript .txt (+5 more)

### Community 39 - "Cluster Output Tests"
Cohesion: 0.23
Nodes (9): make_graph(), Clustering should not emit ANSI escape codes or other output.      graspologic's, Same as above but for stderr — ANSI codes can go to either stream., test_cluster_covers_all_nodes(), test_cluster_does_not_write_to_stderr(), test_cluster_does_not_write_to_stdout(), test_cluster_returns_dict(), test_cohesion_score_range() (+1 more)

### Community 40 - "End-to-End Pipeline Tests"
Cohesion: 0.26
Nodes (12): End-to-end pipeline test: detect → extract → build → cluster → analyze → report, Second run on unchanged corpus should produce identical node/edge counts., Run the full pipeline on the fixtures directory. Returns a dict of outputs., run_pipeline(), test_pipeline_all_nodes_have_community(), test_pipeline_detection_finds_code_and_docs(), test_pipeline_extraction_confidence_labels(), test_pipeline_graph_has_edges() (+4 more)

### Community 41 - "Git Hooks Integration"
Cohesion: 0.22
Nodes (12): _git_root(), install(), _install_hook(), Walk up to find .git directory., Install a single git hook, appending if an existing hook is present., Remove graphify section from a git hook using start/end markers., Install graphify post-commit and post-checkout hooks in the nearest git repo., Remove graphify post-commit and post-checkout hooks. (+4 more)

### Community 42 - "Document Pipeline Architecture"
Cohesion: 0.32
Nodes (13): api.py (Document Pipeline), Document Pipeline Architecture Notes, Example Document Pipeline, Embedding-Based Similarity Consideration, Rationale: Flat JSON Storage (simple, inspectable), Rationale: Intentionally Linear Pipeline (no event bus), Rationale: Naive Cross-Reference Detection (3 keyword threshold), Document Pipeline Research Notes (+5 more)

### Community 43 - "Rationale Extraction Tests"
Cohesion: 0.27
Nodes (11): Tests for rationale/docstring extraction in extract.py., # NOTE: must run before compile() or linker will fail, Trivial docstrings under 20 chars should not become rationale nodes., test_class_docstring_extracted(), test_function_docstring_extracted(), test_module_docstring_extracted(), test_rationale_comment_extracted(), test_rationale_confidence_is_extracted() (+3 more)

### Community 44 - "Validation Tests"
Cohesion: 0.17
Nodes (0): 

### Community 45 - "Graph Build Module"
Cohesion: 0.21
Nodes (9): build(), build_from_json(), Build a NetworkX graph from an extraction dict.      directed=True produces a Di, Merge multiple extraction results into one graph., Merge multiple extraction results into one graph.      directed=True produces a, assert_valid(), Validate an extraction JSON dict against the graphify schema.     Returns a list, Raise ValueError with all errors if extraction is invalid. (+1 more)

### Community 46 - "File Watcher Tests"
Cohesion: 0.2
Nodes (1): Tests for watch.py - file watcher helpers (no watchdog required).

### Community 47 - "Report Generator Tests"
Cohesion: 0.38
Nodes (9): make_inputs(), test_report_contains_ambiguous_section(), test_report_contains_communities(), test_report_contains_corpus_check(), test_report_contains_god_nodes(), test_report_contains_header(), test_report_contains_surprising_connections(), test_report_shows_raw_cohesion_scores() (+1 more)

### Community 48 - "Ingest Query Result Tests"
Cohesion: 0.2
Nodes (1): Tests for graphify.ingest.save_query_result

### Community 49 - "API Client Fixtures"
Cohesion: 0.24
Nodes (1): ApiClient

### Community 50 - "Analyzer Class Fixtures"
Cohesion: 0.39
Nodes (5): Analyzer, compute_score(), normalize(), Fixture: functions and methods that call each other - for call-graph extraction, run_analysis()

### Community 51 - "Token Benchmark Module"
Cohesion: 0.28
Nodes (8): _estimate_tokens(), print_benchmark(), _query_subgraph_tokens(), Token-reduction benchmark - measures how much context graphify saves vs naive fu, Print a human-readable benchmark report., Run BFS from best-matching nodes and return estimated tokens in the subgraph con, Measure token reduction: corpus tokens vs graphify query tokens.      Args:, run_benchmark()

### Community 52 - "Wiki Generator Module"
Cohesion: 0.36
Nodes (8): _community_article(), _cross_community_links(), _god_node_article(), _index_md(), Return (community_label, edge_count) pairs for cross-community connections, sort, Generate a Wikipedia-style wiki from the graph.      Writes:       - index.md, _safe_filename(), to_wiki()

### Community 53 - "Graph Build Tests"
Cohesion: 0.43
Nodes (6): load_extraction(), test_ambiguous_edge_preserved(), test_build_from_json_edge_count(), test_build_from_json_node_count(), test_edges_have_confidence(), test_nodes_have_label()

### Community 54 - "File Watcher Module"
Cohesion: 0.36
Nodes (7): _has_non_code(), _notify_only(), Watch watch_path for new or modified files and auto-update the graph.      For c, Re-run AST extraction + build + cluster + report for code files. No LLM needed., Write a flag file and print a notification (fallback for non-code-only corpora)., _rebuild_code(), watch()

### Community 55 - "Transformer Architecture Notes"
Cohesion: 0.29
Nodes (8): Stacked Encoder-Decoder Architecture, Layer Normalization, Multi-Head Attention Mechanism, Sinusoidal Positional Encoding, Residual Connections (He et al. 2016), Scaled Dot-Product Attention, Transformer Architecture (Vaswani et al. 2017), WMT 2014 Translation Benchmark Results

### Community 56 - "Community 56"
Cohesion: 0.43
Nodes (6): EventServiceProvider, NotifyAdmins, OrderPlaced, SendWelcomeEmail, ShipOrder, UserRegistered

### Community 57 - "Community 57"
Cohesion: 0.33
Nodes (5): Animal, -initWithName, -speak, Dog, -fetch

### Community 58 - "Community 58"
Cohesion: 0.47
Nodes (4): AppServiceProvider, CashierGateway, PaymentGateway, StripeGateway

### Community 59 - "Community 59"
Cohesion: 0.47
Nodes (2): build_graph(), Graph

### Community 60 - "Community 60"
Cohesion: 0.6
Nodes (2): ColorResolver, DefaultPalette

### Community 61 - "Community 61"
Cohesion: 0.6
Nodes (2): RateLimiter, Throttle

### Community 62 - "Community 62"
Cohesion: 0.5
Nodes (3): MyApp.Accounts.User, create(), validate()

### Community 63 - "Community 63"
Cohesion: 0.5
Nodes (1): Transformer

### Community 64 - "Community 64"
Cohesion: 0.67
Nodes (3): generate(), Mirrors export.safe_name so community hub filenames and report wikilinks always, _safe_community_name()

### Community 65 - "Vibrantaa Brand Identity"
Cohesion: 0.67
Nodes (4): Vibrantaa Brand Identity, Routine Creation UI Screenshot (mobile, Timer/Time stack/Check in), Vibrantaa Logo (Dark variant with gold star), Vibrantaa Logo (White/monochrome variant)

### Community 66 - "UI Error States & Icons"
Cohesion: 0.5
Nodes (4): Close / Dismiss Icon (white X, 24x24), Error Icon (circular refresh/retry, blue #3827C7), Error State Image (VHS static/noise, PLAY label), Form Error State Image (VHS static/noise, laptop context)

### Community 67 - "Dev Server (serve.py)"
Cohesion: 0.67
Nodes (1): NoCache

### Community 68 - "Graphify Init Module"
Cohesion: 0.67
Nodes (1): graphify - extract · build · cluster · analyze · report.

### Community 69 - "AIG Portfolio Project"
Cohesion: 0.67
Nodes (3): AIG Investment Platform for Culture (web project), Footer Label: Sanity CMS badge (with Sanity wordmark), Showreel Poster (AIG Investment Platform for Culture — laptop mockup)

### Community 70 - "HTML Fixer Utility"
Cohesion: 1.0
Nodes (0): 

### Community 71 - "Content Extractor Utility"
Cohesion: 1.0
Nodes (0): 

### Community 72 - "Community 72"
Cohesion: 1.0
Nodes (0): 

### Community 73 - "Community 73"
Cohesion: 1.0
Nodes (0): 

### Community 74 - "Community 74"
Cohesion: 1.0
Nodes (1): ingest.py

### Community 75 - "Community 75"
Cohesion: 1.0
Nodes (1): cache.py

### Community 76 - "Community 76"
Cohesion: 1.0
Nodes (1): watch.py

### Community 77 - "Community 77"
Cohesion: 1.0
Nodes (1): benchmark.py

### Community 78 - "Community 78"
Cohesion: 1.0
Nodes (1): norm_label Field (Diacritic-Insensitive Search)

### Community 79 - "Community 79"
Cohesion: 1.0
Nodes (1): prune_dangling_edges() Utility

### Community 80 - "Community 80"
Cohesion: 1.0
Nodes (1): graphify query CLI Command

### Community 81 - "Design Icon Assets"
Cohesion: 1.0
Nodes (1): Design Icon (palette/brush tool with blue accent #3827C7)

### Community 82 - "Community 82"
Cohesion: 1.0
Nodes (1): Graphify Tool (knowledge graph pipeline)

## Ambiguous Edges - Review These
- `Routine Creation UI Screenshot (mobile, Timer/Time stack/Check in)` → `Vibrantaa Brand Identity`  [AMBIGUOUS]
  frame.jpg · relation: conceptually_related_to

## Knowledge Gaps
- **395 isolated node(s):** `Merge multiple extraction results into one graph.`, `Build a NetworkX graph from graphify node/edge dicts.      Preserves original ed`, `Run Leiden community detection. Returns {community_id: [node_ids]}.      Communi`, `Run a second Leiden pass on a community subgraph to split it further.`, `Ratio of actual intra-community edges to maximum possible.` (+390 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `HTML Fixer Utility`** (1 nodes): `fix_html.py`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Content Extractor Utility`** (1 nodes): `extract.py`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 72`** (1 nodes): `__init__.py`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 73`** (1 nodes): `manifest.py`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 74`** (1 nodes): `ingest.py`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 75`** (1 nodes): `cache.py`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 76`** (1 nodes): `watch.py`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 77`** (1 nodes): `benchmark.py`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 78`** (1 nodes): `norm_label Field (Diacritic-Insensitive Search)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 79`** (1 nodes): `prune_dangling_edges() Utility`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 80`** (1 nodes): `graphify query CLI Command`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Design Icon Assets`** (1 nodes): `Design Icon (palette/brush tool with blue accent #3827C7)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 82`** (1 nodes): `Graphify Tool (knowledge graph pipeline)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Routine Creation UI Screenshot (mobile, Timer/Time stack/Check in)` and `Vibrantaa Brand Identity`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `ValidationError` connect `MCP Server Handlers` to `httpx Auth Flows`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Why does `Cookies` connect `httpx Auth Flows` to `HTTP Utilities`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Are the 39 inferred relationships involving `Response` (e.g. with `Auth` and `BasicAuth`) actually correct?**
  _`Response` has 39 INFERRED edges - model-reasoned connections that need verification._
- **Are the 39 inferred relationships involving `Request` (e.g. with `Auth` and `BasicAuth`) actually correct?**
  _`Request` has 39 INFERRED edges - model-reasoned connections that need verification._
- **Are the 19 inferred relationships involving `Cookies` (e.g. with `HTTPStatusError` and `Timeout`) actually correct?**
  _`Cookies` has 19 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Merge multiple extraction results into one graph.`, `Build a NetworkX graph from graphify node/edge dicts.      Preserves original ed`, `Run Leiden community detection. Returns {community_id: [node_ids]}.      Communi` to the rest of the system?**
  _395 weakly-connected nodes found - possible documentation gaps or missing edges._