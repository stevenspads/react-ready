import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages';
import {
  UseEffectHook,
  UseEffectDependencyPitfall,
  UseEffectObjectPitfall,
  UseEffectDocumentTitle,
  UseEffectFetch,
  UseEffectPropStatePitfall,
  UseEffectTimerCleanup,
  UseEffectEventListenerCleanup,
  UseEffectRaceCondition,
  UseEffectRaceConditionFlag,
  UseEffectRaceConditionAbort,
} from './sections/FundamentalHooks/UseEffectHook';
import { Memo, MemoizeComponent } from './sections/PerformanceHooks/Memo';
import { UseMemoHook, UseMemoFactorial, UseMemoProducts } from './sections/PerformanceHooks/UseMemoHook';
import { UseCallbackHook, UseCallbackMemo, UseCallbackUseEffect } from './sections/PerformanceHooks/UseCallbackHook';
import {
  UseTransitionHook,
  UseTransitionSearch,
  UseTransitionTabs,
} from './sections/PerformanceHooks/UseTransitionHook';
import { PerformanceHooks } from './sections/PerformanceHooks';
import {
  MultipleProfilers,
  ProfilingImprovement,
  Profiling,
  SlowComponentProfiler,
  NestedProfilers,
} from './sections/PerformanceHooks/Profiling';
import {
  CounterCustomHook,
  FormFieldCustomHook,
  LocalStorageCustomHook,
  ToggleCustomHook,
  CustomHooks,
  FetchCustomHook,
} from './sections/CustomHooks';
import {
  UseRefCounter,
  UseRefClickFocus,
  UseRefStopwatch,
  UseRefLoadFocus,
  UseRefHook,
  UseRefComponent,
} from './sections/FundamentalHooks/UseRefHook';
import {
  UseReducerCounter,
  UseReducerCounterIncrement,
  UseReducerCounterDecrement,
  UseReducerLazy,
  UseReducerForm,
  UseReducerDiscriminateUnion,
  UseReducerHook,
} from './sections/FundamentalHooks/UseReducerHook';
import {
  UseEffectEventRequest,
  UseEffectMisuse,
  UseEffectPassingToParent,
  UseEffectPropChange,
  UseEffectResetState,
  UseEffectUpdateState,
} from './sections/FundamentalHooks/UseEffectMisuse';
import { CssFileStyling, CssModuleStyling, InlineStyling, SassModuleStyling, Styling } from './sections/Styling';
import { ChildToParentCommunication, ComponentBasic, ComponentProps, Components } from './sections/Components';
import {
  Iterating,
  IteratingWithMap,
  IteratingWithMapVariable,
  KeysAreNotProps,
  MapExplicitReturn,
  MapImplicitReturn,
  FragmentKey,
} from './sections/Components/Iterating';
import {
  ChildrenPropComponents,
  ChildrenPropText,
  ChildrenSlots,
  MultipleSlots,
} from './sections/Components/ChildrenSlots';
import {
  ConditionalRendering,
  ConditionalRenderingAnd,
  ConditionalRenderingAndPitfall,
  ConditionalRenderingIf,
  ConditionalRenderingIfVariable,
  ConditionalRenderingNothing,
  ConditionalRenderingTernary,
} from './sections/Components/ConditionalRendering';
import {
  AsyncEventHandler,
  EventHandlerOnClickDiv,
  EventHandlerOutsideJSX,
  EventHandlers,
  InlineEventHandler,
} from './sections/Components/EventHandlers';
import { ControlledForm, Forms, UncontrolledForm } from './sections/Forms';
import { FundamentalHooks } from './sections/FundamentalHooks';
import {
  ColocatingState,
  LiftingState,
  StateIsPrivate,
  UseStateArrays,
  UseStateChildComponents,
  UseStateCounter,
  UseStateHook,
  UseStateLazyInitialization,
  UseStateNestedMutation,
  UseStateObjectMutation,
  UseStatePendingState,
} from './sections/FundamentalHooks/UseStateHook';
import {
  Context,
  ContextReducer,
  ExtractProviders,
  MultipleContexts,
  OverrideContext,
  PropDrilling,
  PropDrillingCompositionFix,
  PropDrillingContextFix,
  SimpleContext,
} from './sections/Context';
import { UseDeferredValueHook } from './sections/PerformanceHooks/UseDeferredValueHook/UseDeferredValueHook';
import { UseDeferredValueSearch } from './sections/PerformanceHooks/UseDeferredValueHook';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'components',
    element: <Components />,
    children: [
      {
        path: 'basic',
        element: <ComponentBasic />,
      },
      {
        path: 'props',
        element: <ComponentProps />,
      },
      {
        path: 'child-to-parent-communication',
        element: <ChildToParentCommunication />,
      },
      {
        path: 'event-handlers',
        element: <EventHandlers />,
        children: [
          {
            path: 'inline-event-handler',
            element: <InlineEventHandler />,
          },
          {
            path: 'event-handler-outside-jsx',
            element: <EventHandlerOutsideJSX />,
          },
          {
            path: 'event-handler-onclick-div',
            element: <EventHandlerOnClickDiv />,
          },
          {
            path: 'async-event-handler',
            element: <AsyncEventHandler />,
          },
        ],
      },
      {
        path: 'children-slots',
        element: <ChildrenSlots />,
        children: [
          {
            path: 'children-prop-text',
            element: <ChildrenPropText />,
          },
          {
            path: 'children-prop-components',
            element: <ChildrenPropComponents />,
          },
          {
            path: 'multiple-slots',
            element: <MultipleSlots />,
          },
        ],
      },
      {
        path: 'conditional-rendering',
        element: <ConditionalRendering />,
        children: [
          {
            path: 'nothing',
            element: <ConditionalRenderingNothing />,
          },
          {
            path: 'ternary',
            element: <ConditionalRenderingTernary />,
          },
          {
            path: 'if',
            element: <ConditionalRenderingIf />,
          },
          {
            path: 'if-variable',
            element: <ConditionalRenderingIfVariable />,
          },
          {
            path: 'and',
            element: <ConditionalRenderingAnd />,
          },
          {
            path: 'and-pitfall',
            element: <ConditionalRenderingAndPitfall />,
          },
        ],
      },
      {
        path: 'iterating',
        element: <Iterating />,
        children: [
          {
            path: 'map',
            element: <IteratingWithMap />,
          },
          {
            path: 'map-variable',
            element: <IteratingWithMapVariable />,
          },
          {
            path: 'map-implicit-return',
            element: <MapImplicitReturn />,
          },
          {
            path: 'map-explicit-return',
            element: <MapExplicitReturn />,
          },
          {
            path: 'keys-are-not-props',
            element: <KeysAreNotProps />,
          },
          {
            path: 'fragment-key',
            element: <FragmentKey />,
          },
        ],
      },
    ],
  },
  {
    path: 'fundamental-hooks',
    element: <FundamentalHooks />,
    children: [
      {
        path: 'usestate',
        element: <UseStateHook />,
        children: [
          {
            path: 'counter',
            element: <UseStateCounter />,
          },
          {
            path: 'pending-state',
            element: <UseStatePendingState />,
          },
          {
            path: 'object-mutation',
            element: <UseStateObjectMutation />,
          },
          {
            path: 'nested-object-mutation',
            element: <UseStateNestedMutation />,
          },
          {
            path: 'arrays',
            element: <UseStateArrays />,
          },
          {
            path: 'child-components',
            element: <UseStateChildComponents />,
          },
          {
            path: 'lazy-initialization',
            element: <UseStateLazyInitialization />,
          },
          {
            path: 'state-is-private',
            element: <StateIsPrivate />,
          },
          {
            path: 'lifting-state',
            element: <LiftingState />,
          },
          {
            path: 'colocating-state',
            element: <ColocatingState />,
          },
        ],
      },
      {
        path: 'usereducer',
        element: <UseReducerHook />,
        children: [
          {
            path: 'counter',
            element: <UseReducerCounter />,
          },
          {
            path: 'counter-increment',
            element: <UseReducerCounterIncrement />,
          },
          {
            path: 'counter-decrement',
            element: <UseReducerCounterDecrement />,
          },
          {
            path: 'lazy',
            element: <UseReducerLazy />,
          },
          {
            path: 'form',
            element: <UseReducerForm />,
          },
          {
            path: 'form-ts-discriminate-union',
            element: <UseReducerDiscriminateUnion />,
          },
        ],
      },
      {
        path: 'useeffect',
        element: <UseEffectHook />,
        children: [
          {
            path: 'document-title',
            element: <UseEffectDocumentTitle />,
          },
          {
            path: 'fetch',
            element: <UseEffectFetch />,
          },
          {
            path: 'dependency-pitfall',
            element: <UseEffectDependencyPitfall />,
          },
          {
            path: 'object-pitfall',
            element: <UseEffectObjectPitfall />,
          },
          {
            path: 'props-in-state-pitfall',
            element: <UseEffectPropStatePitfall />,
          },
          {
            path: 'timer-cleanup',
            element: <UseEffectTimerCleanup />,
          },
          {
            path: 'event-listener-cleanup',
            element: <UseEffectEventListenerCleanup />,
          },
          {
            path: 'race-condition',
            element: <UseEffectRaceCondition />,
          },
          {
            path: 'race-condition-abort',
            element: <UseEffectRaceConditionAbort />,
          },
          {
            path: 'race-condition-flag',
            element: <UseEffectRaceConditionFlag />,
          },
        ],
      },
      {
        path: 'useeffect-misuse',
        element: <UseEffectMisuse />,
        children: [
          {
            path: 'update-state',
            element: <UseEffectUpdateState />,
          },
          {
            path: 'reset-state',
            element: <UseEffectResetState />,
          },
          {
            path: 'prop-change',
            element: <UseEffectPropChange />,
          },
          {
            path: 'event-related-request',
            element: <UseEffectEventRequest />,
          },
          {
            path: 'passing-to-parent',
            element: <UseEffectPassingToParent />,
          },
        ],
      },
      {
        path: 'useref',
        element: <UseRefHook />,
        children: [
          {
            path: 'counter',
            element: <UseRefCounter />,
          },
          {
            path: 'stopwatch',
            element: <UseRefStopwatch />,
          },
          {
            path: 'focus-click',
            element: <UseRefClickFocus />,
          },
          {
            path: 'focus-loading',
            element: <UseRefLoadFocus />,
          },
          {
            path: 'component',
            element: <UseRefComponent />,
          },
        ],
      },
    ],
  },
  {
    path: 'custom-hooks',
    element: <CustomHooks />,
    children: [
      {
        path: 'counter',
        element: <CounterCustomHook />,
      },
      {
        path: 'toggle',
        element: <ToggleCustomHook />,
      },
      {
        path: 'local-storage',
        element: <LocalStorageCustomHook />,
      },
      {
        path: 'fetch',
        element: <FetchCustomHook />,
      },
      {
        path: 'form',
        element: <FormFieldCustomHook />,
      },
    ],
  },
  {
    path: 'performance-hooks',
    element: <PerformanceHooks />,
    children: [
      {
        path: 'usememo',
        element: <UseMemoHook />,
        children: [
          {
            path: 'factorial',
            element: <UseMemoFactorial />,
          },
          {
            path: 'products',
            element: <UseMemoProducts />,
          },
        ],
      },
      {
        path: 'memo',
        element: <Memo />,
        children: [
          {
            path: 'component',
            element: <MemoizeComponent />,
          },
        ],
      },
      {
        path: 'usecallback',
        element: <UseCallbackHook />,
        children: [
          {
            path: 'memo',
            element: <UseCallbackMemo />,
          },
          {
            path: 'useeffect',
            element: <UseCallbackUseEffect />,
          },
        ],
      },
      {
        path: 'usetransition',
        element: <UseTransitionHook />,
        children: [
          {
            path: 'search',
            element: <UseTransitionSearch />,
          },
          {
            path: 'tabs',
            element: <UseTransitionTabs />,
          },
        ],
      },
      {
        path: 'usedeferredvalue',
        element: <UseDeferredValueHook />,
        children: [
          {
            path: 'search',
            element: <UseDeferredValueSearch />,
          },
        ],
      },
      {
        path: 'profiling',
        element: <Profiling />,
        children: [
          {
            path: 'multiple-profilers',
            element: <MultipleProfilers />,
          },
          {
            path: 'nested-profilers',
            element: <NestedProfilers />,
          },
          {
            path: 'slow-component-profiler',
            element: <SlowComponentProfiler />,
          },
          {
            path: 'profiling-improvement',
            element: <ProfilingImprovement />,
          },
        ],
      },
    ],
  },
  {
    path: 'forms',
    element: <Forms />,
    children: [
      {
        path: 'controlled',
        element: <ControlledForm />,
      },
      {
        path: 'uncontrolled',
        element: <UncontrolledForm />,
      },
    ],
  },
  {
    path: 'styling',
    element: <Styling />,
    children: [
      {
        path: 'inline',
        element: <InlineStyling />,
      },
      {
        path: 'css-file',
        element: <CssFileStyling />,
      },
      {
        path: 'css-module',
        element: <CssModuleStyling />,
      },
      {
        path: 'sass-module',
        element: <SassModuleStyling />,
      },
    ],
  },
  {
    path: 'context',
    element: <Context />,
    children: [
      {
        path: 'simple-context',
        element: <SimpleContext />,
      },
      {
        path: 'override-context',
        element: <OverrideContext />,
      },
      {
        path: 'multiple-contexts',
        element: <MultipleContexts />,
      },
      {
        path: 'extract-providers',
        element: <ExtractProviders />,
      },
      {
        path: 'context-reducer',
        element: <ContextReducer />,
      },
      {
        path: 'prop-drilling',
        element: <PropDrilling />,
      },
      {
        path: 'prop-drilling-context-fix',
        element: <PropDrillingContextFix />,
      },
      {
        path: 'prop-drilling-composition-fix',
        element: <PropDrillingCompositionFix />,
      },
    ],
  },
]);

export { router };
