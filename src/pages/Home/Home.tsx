import { Link } from 'react-router-dom';
import { Layout } from '../../components';
import styles from './Home.module.css';

const Home = () => {
  return (
    <Layout>
      <div className={styles.Section}>
        <h4>Table of contents</h4>
        <ul>
          <li>
            <a href="#components">Components</a>
          </li>
          <li>
            <a href="#fundamental-hooks">Fundamental Hooks</a>
          </li>
          <li>
            <a href="#forms">Forms</a>
          </li>
          <li>
            <a href="#custom-hooks">Custom Hooks</a>
          </li>
          <li>
            <a href="#performance-hooks">Performance Hooks</a>
          </li>
          <li>
            <a href="#styling">Styling</a>
          </li>
          <li>
            <a href="#context">Context</a>
          </li>
        </ul>
      </div>

      <div id="components" className={styles.Section}>
        <h2>Components</h2>

        <div className={styles.SubSection}>
          <h3>Component basics</h3>
          <ul>
            <li>
              <Link to="/components/basic">Basic component</Link>
            </li>
            <li>
              <Link to="/components/props">Component with props</Link>
            </li>
            <li>
              <Link to="/components/child-to-parent-communication">Child-to-parent component communication</Link>
            </li>
          </ul>
        </div>

        <div className={styles.SubSection}>
          <h3>Event handlers</h3>
          <ul>
            <li>
              <Link to="/components/event-handlers/inline-event-handler">Inline event handler</Link>
            </li>
            <li>
              <Link to="/components/event-handlers/event-handler-outside-jsx">Event handler outside JSX</Link>
            </li>
            <li>
              <Link to="/components/event-handlers/event-handler-onclick-div">onClick event handler on a div</Link>
            </li>
            <li>
              <Link to="/components/event-handlers/async-event-handler">Asynchronous event handler</Link>
            </li>
          </ul>
        </div>

        <div className={styles.SubSection}>
          <h3>Children prop & slots</h3>
          <ul>
            <li>
              <Link to="/components/children-slots/children-prop-text">The children prop receiving text</Link>
            </li>
            <li>
              <Link to="/components/children-slots/children-prop-components">
                The children prop receiving components
              </Link>
            </li>
            <li>
              <Link to="/components/children-slots/multiple-slots">Multiple slots</Link>
            </li>
          </ul>
        </div>

        <div className={styles.SubSection}>
          <h3>Conditional rendering</h3>
          <ul>
            <li>
              <Link to="/components/conditional-rendering/nothing">Conditionally rendering nothing</Link>
            </li>
            <li>
              <Link to="/components/conditional-rendering/ternary">
                Conditionally rendering with a ternary expression
              </Link>
            </li>
            <li>
              <Link to="/components/conditional-rendering/if">Conditionally rendering with an if statement</Link>
            </li>
            <li>
              <Link to="/components/conditional-rendering/if-variable">
                Conditionally rendering with an if statement and variable
              </Link>
            </li>
            <li>
              <Link to="/components/conditional-rendering/and">Conditionally rendering with logical AND</Link>
            </li>
            <li>
              <Link to="/components/conditional-rendering/and-pitfall">The logical AND pitfall</Link>
            </li>
          </ul>
        </div>

        <div className={styles.SubSection}>
          <h3>Iterating</h3>
          <ul>
            <li>
              <Link to="/components/iterating/map">Iterating with map()</Link>
            </li>
            <li>
              <Link to="/components/iterating/map-variable">Iterating with map() assigned to a variable</Link>
            </li>
            <li>
              <Link to="/components/iterating/map-implicit-return">Iterating with map() using an implicit return</Link>
            </li>
            <li>
              <Link to="/components/iterating/map-explicit-return">Iterating with map() using an explicit return</Link>
            </li>
            <li>
              <Link to="/components/iterating/keys-are-not-props">Keys are not props</Link>
            </li>
            <li>
              <Link to="/components/iterating/fragment-key">Key on a React Fragment</Link>
            </li>
          </ul>
        </div>
      </div>

      <div id="fundamental-hooks" className={styles.Section}>
        <h2>Fundamental Hooks</h2>

        <div className={styles.SubSection}>
          <h3>The useState() Hook</h3>
          <ul>
            <li>
              <Link to="/fundamental-hooks/usestate/counter">Counter</Link>
            </li>
            <li>
              <Link to="/fundamental-hooks/usestate/pending-state">Updating with pending state</Link>
            </li>
            <li>
              <Link to="/fundamental-hooks/usestate/object-mutation">Object mutation</Link>
            </li>
            <li>
              <Link to="/fundamental-hooks/usestate/nested-object-mutation">Nested object mutation</Link>
            </li>
            <li>
              <Link to="/fundamental-hooks/usestate/arrays">useState with arrays</Link>
            </li>
            <li>
              <Link to="/fundamental-hooks/usestate/child-components">useState with child components</Link>
            </li>
            <li>
              <Link to="/fundamental-hooks/usestate/lazy-initialization">Lazy initialization</Link>
            </li>
            <li>
              <Link to="/fundamental-hooks/usestate/state-is-private">State is private</Link>
            </li>
            <li>
              <Link to="/fundamental-hooks/usestate/lifting-state">Lifting state</Link>
            </li>
            <li>
              <Link to="/fundamental-hooks/usestate/colocating-state">Colocating state</Link>
            </li>
          </ul>
        </div>

        <div className={styles.SubSection}>
          <h3>The useEffect() Hook</h3>
          <ul>
            <li>
              <Link to="/fundamental-hooks/useeffect/document-title">Set the document title</Link>
            </li>
            <li>
              <Link to="/fundamental-hooks/useeffect/fetch">Fetch data</Link>
            </li>
            <li>
              <Link to="/fundamental-hooks/useeffect/dependency-pitfall">The dependency pitfall</Link>
            </li>
            <li>
              <Link to="/fundamental-hooks/useeffect/object-pitfall">The object pitfall</Link>
            </li>
            <li>
              <Link to="/fundamental-hooks/useeffect/props-in-state-pitfall">The props-in-state pitfall</Link>
            </li>
            <li>
              <Link to="/fundamental-hooks/useeffect/timer-cleanup">Timer cleanup function</Link>
            </li>
            <li>
              <Link to="/fundamental-hooks/useeffect/event-listener-cleanup">Event listener cleanup function</Link>
            </li>
            <li>
              <Link to="/fundamental-hooks/useeffect/race-condition">Race condition</Link>
            </li>
            <li>
              <Link to="/fundamental-hooks/useeffect/race-condition-abort">
                Race condition solution - AbortController
              </Link>
            </li>
            <li>
              <Link to="/fundamental-hooks/useeffect/race-condition-flag">Race condition solution - Boolean flag</Link>
            </li>
          </ul>
        </div>

        <div className={styles.SubSection}>
          <h3>Misusing the useEffect() Hook</h3>
          <ul>
            <li>
              <Link to="/fundamental-hooks/useeffect-misuse/update-state">
                Using useEffect() to update state based on other state
              </Link>
            </li>
            <li>
              <Link to="/fundamental-hooks/useeffect-misuse/reset-state">
                Using useEffect() to reset state when a prop changes
              </Link>
            </li>
            <li>
              <Link to="/fundamental-hooks/useeffect-misuse/prop-change">
                Using useEffect() to update state when a prop changes
              </Link>
            </li>
            <li>
              <Link to="/fundamental-hooks/useeffect-misuse/event-related-request">
                Using useEffect() for an event-related request
              </Link>
            </li>
            <li>
              <Link to="/fundamental-hooks/useeffect-misuse/passing-to-parent">
                Passing fetched data to the parent via useEffect()
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.SubSection}>
          <h3>The useReducer() Hook</h3>
          <ul>
            <li>
              <Link to="/fundamental-hooks/usereducer/counter">Counter</Link>
            </li>
            <li>
              <Link to="/fundamental-hooks/usereducer/counter-increment">
                Increment counter (using an object for state)
              </Link>
            </li>
            <li>
              <Link to="/fundamental-hooks/usereducer/counter-decrement">
                Increment/decrement counter (using an object for state)
              </Link>
            </li>
            <li>
              <Link to="/fundamental-hooks/usereducer/lazy">Lazy initialization</Link>
            </li>
            <li>
              <Link to="/fundamental-hooks/usereducer/form">Form</Link>
            </li>
            <li>
              <Link to="/fundamental-hooks/usereducer/form-ts-discriminate-union">
                Form (with TypeScript discriminate union)
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.SubSection}>
          <h3>The useRef() Hook</h3>
          <ul>
            <li>
              <Link to="/fundamental-hooks/useref/counter">Counter</Link>
            </li>
            <li>
              <Link to="/fundamental-hooks/useref/stopwatch">Stopwatch</Link>
            </li>
            <li>
              <Link to="/fundamental-hooks/useref/focus-click">Focus when clicking</Link>
            </li>
            <li>
              <Link to="/fundamental-hooks/useref/focus-loading">Focus when loading</Link>
            </li>
            <li>
              <Link to="/fundamental-hooks/useref/component">useRef() on a React component</Link>
            </li>
          </ul>
        </div>
      </div>

      <div id="forms" className={styles.Section}>
        <h2>Forms</h2>

        <ul>
          <li>
            <Link to="/forms/controlled">Controlled form</Link>
          </li>
          <li>
            <Link to="/forms/uncontrolled">Uncontrolled form</Link>
          </li>
        </ul>
      </div>

      <div id="custom-hooks" className={styles.Section}>
        <h2>Custom Hooks</h2>

        <ul>
          <li>
            <Link to="custom-hooks/counter">useCounter() custom Hook</Link>
          </li>
          <li>
            <Link to="custom-hooks/toggle">useToggle() custom Hook</Link>
          </li>
          <li>
            <Link to="custom-hooks/local-storage">useLocalStorage() custom Hook</Link>
          </li>
          <li>
            <Link to="custom-hooks/fetch">useData() custom Hook</Link>
          </li>
          <li>
            <Link to="custom-hooks/form">useFormField() custom Hook</Link>
          </li>
        </ul>
      </div>

      <div id="performance-hooks" className={styles.Section}>
        <h2>Performance Hooks</h2>

        <div className={styles.SubSection}>
          <h3>The useMemo() Hook</h3>
          <ul>
            <li>
              <Link to="/performance-hooks/usememo/factorial">Factorial</Link>
            </li>
            <li>
              <Link to="/performance-hooks/usememo/products">Products</Link>
            </li>
          </ul>
        </div>

        <div className={styles.SubSection}>
          <h3>memo</h3>
          <ul>
            <li>
              <Link to="/performance-hooks/memo/component">Memoize component</Link>
            </li>
          </ul>
        </div>

        <div className={styles.SubSection}>
          <h3>useCallback()</h3>
          <ul>
            <li>
              <Link to="/performance-hooks/usecallback/memo">useCallback() with memo()</Link>
            </li>
            <li>
              <Link to="/performance-hooks/usecallback/useeffect">useCallback() with useEffect()</Link>
            </li>
          </ul>
        </div>

        <div className={styles.SubSection}>
          <h3>useTransition()</h3>
          <ul>
            <li>
              <Link to="/performance-hooks/usetransition/search">useTransition() for search</Link>
            </li>
            <li>
              <Link to="/performance-hooks/usetransition/tabs">useTransition() for tabs</Link>
            </li>
          </ul>
        </div>

        <div className={styles.SubSection}>
          <h3>Profiling</h3>
          <ul>
            <li>
              <Link to="/performance-hooks/profiling/multiple-profilers">Multiple profilers</Link>
            </li>
            <li>
              <Link to="/performance-hooks/profiling/nested-profilers">Nested profilers</Link>
            </li>
            <li>
              <Link to="/performance-hooks/profiling/slow-component-profiler">Slow component profiler</Link>
            </li>
            <li>
              <Link to="/performance-hooks/profiling/profiling-improvement">Profiling improvement</Link>
            </li>
          </ul>
        </div>
      </div>

      <div id="styling" className={styles.Section}>
        <h2>Styling</h2>

        <ul>
          <li>
            <Link to="/styling/inline">Inline styling</Link>
          </li>
          <li>
            <Link to="/styling/css-file">CSS file styling</Link>
          </li>
          <li>
            <Link to="/styling/css-module">CSS module styling</Link>
          </li>
          <li>
            <Link to="/styling/sass-module">Sass module styling</Link>
          </li>
        </ul>
      </div>

      <div id="context" className={styles.Section}>
        <h2>Context</h2>

        <ul>
          <li>
            <Link to="/context/simple-context">Simple context</Link>
          </li>
          <li>
            <Link to="/context/override-context">Override context</Link>
          </li>
          <li>
            <Link to="/context/multiple-contexts">Multiple contexts</Link>
          </li>
          <li>
            <Link to="/context/extract-providers">Extract context providers to a component</Link>
          </li>
          <li>
            <Link to="/context/context-reducer">Context and reducer</Link>
          </li>
          <li>
            <Link to="/context/prop-drilling">Prop drilling</Link>
          </li>
          <li>
            <Link to="/context/prop-drilling-context-fix">Prop drilling fixed with context</Link>
          </li>
          <li>
            <Link to="/context/prop-drilling-composition-fix">Prop drilling fixed with composition</Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export { Home };
