import { VERSION } from "../../deps.ts";
import { rollup } from "./rollup.ts";

/**
 * @public
 */
export { rollup, VERSION };

/**
 * Prevent `warning: Compiled module not found` by re-exporting
 * types explicitly.
 * 
 * @public
 */
export type {
  AddonHook,
  AddonHookFunction,
  AmdOptions,
  AsyncPluginHooks,
  ChangeEvent,
  ChokidarOptions,
  CustomPluginOptions,
  DecodedSourceMapOrMissing,
  EmitAsset,
  EmitChunk,
  EmitFile,
  EmittedAsset,
  EmittedChunk,
  EmittedFile,
  ExistingDecodedSourceMap,
  ExistingRawSourceMap,
  ExternalOption,
  FilePlaceholder,
  FirstPluginHooks,
  GetInterop,
  GetManualChunk,
  GetModuleInfo,
  GlobalsOption,
  HasModuleSideEffects,
  InputOption,
  InputOptions,
  InternalModuleFormat,
  InteropType,
  IsExternal,
  IsPureModule,
  LoadHook,
  ManualChunksOption,
  MergedRollupOptions,
  MinimalPluginContext,
  ModuleFormat,
  ModuleJSON,
  ModuleParsedHook,
  ModuleSideEffectsOption,
  NormalizedAmdOptions,
  NormalizedInputOptions,
  NormalizedOutputOptions,
  NormalizedTreeshakingOptions,
  OptionsPaths,
  OutputAsset,
  OutputBundle,
  OutputBundleWithPlaceholders,
  OutputChunk,
  OutputOptions,
  OutputPlugin,
  ParallelPluginHooks,
  Plugin,
  PluginCache,
  PluginContext,
  PluginContextMeta,
  PluginHooks,
  PluginImpl,
  PluginValueHooks,
  PreRenderedAsset,
  PreRenderedChunk,
  PreserveEntrySignaturesOption,
  PureModulesOption,
  RenderChunkHook,
  RenderedChunk,
  RenderedModule,
  ResolveAssetUrlHook,
  ResolvedId,
  ResolvedIdMap,
  ResolveDynamicImportHook,
  ResolveFileUrlHook,
  ResolveIdHook,
  ResolveIdResult,
  ResolveImportMetaHook,
  RollupBuild,
  RollupCache,
  RollupError,
  RollupLogProps,
  RollupOptions,
  RollupOutput,
  RollupWarning,
  RollupWatcher,
  RollupWatcherEvent,
  RollupWatchOptions,
  SequentialPluginHooks,
  SerializablePluginCache,
  SerializedTimings,
  SourceDescription,
  SourceMap,
  SourceMapInput,
  SourcemapPathTransformOption,
  SourceMapSegment,
  SyncPluginHooks,
  TransformHook,
  TransformModuleJSON,
  TransformPluginContext,
  TransformResult,
  TreeshakingOptions,
  WarningHandler,
  WarningHandlerWithDefault,
  WatchChangeHook,
  WatcherOptions,
} from "https://unpkg.com/rollup@2.36.1/dist/rollup.d.ts";
