import React, {
  FocusEvent as ReactFocusEvent,
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent as ReactMouseEvent,
  MutableRefObject as ReactMutableRefObject,
  Ref as ReactRef,
} from 'react';

enum ActionTypes {
  TogglePopover,
  ClosePopover,
  SetButton,
  SetButtonId,
  SetPanel,
  SetPanelId,
}

enum Direction {
  Previous = -1,
  Next = 1,
}

enum Features {
  /** No features at all */
  None = 0,
  /**
   * When used, this will allow us to use one of the render strategies.
   *
   * **The render strategies are:**
   *    - **Unmount**   _(Will unmount the component.)_
   *    - **Hidden**    _(Will hide the component using the [hidden] attribute.)_
   */
  RenderStrategy = 1,
  /**
   * When used, this will allow the user of our component to be in control. This can be used when
   * you want to transition based on some state.
   */
  Static = 2,
}

enum FeaturesHidden {
  // The default, no features.
  None = 1 << 0,
  // Whether the element should be focusable or not.
  Focusable = 1 << 1,
  // Whether it should be completely hidden, even to assistive technologies.
  Hidden = 1 << 2,
}

enum FeaturesOutsideClick {
  None = 1 << 0,
  IgnoreScrollbars = 1 << 1,
}

enum Focus {
  /** Focus the first non-disabled element */
  First = 1 << 0,
  /** Focus the previous non-disabled element */
  Previous = 1 << 1,
  /** Focus the next non-disabled element */
  Next = 1 << 2,
  /** Focus the last non-disabled element */
  Last = 1 << 3,
  /** Wrap tab around */
  WrapAround = 1 << 4,
  /** Prevent scrolling the focusable elements into view */
  NoScroll = 1 << 5,
}

enum FocusResult {
  /** Something went wrong while trying to focus. */
  Error,
  /** When `Focus.WrapAround` is enabled, going from position `N` to `N+1` where `N` is the last index in the array, then we overflow. */
  Overflow,
  /** Focus was successful. */
  Success,
  /** When `Focus.WrapAround` is enabled, going from position `N` to `N-1` where `N` is the first index in the array, then we underflow. */
  Underflow,
}

enum FocusableMode {
  /** The element itself must be focusable. */
  Strict,
  /** The element should be inside of a focusable element. */
  Loose,
}

enum Keys {
  Space = ' ',
  Enter = 'Enter',
  Escape = 'Escape',
  Backspace = 'Backspace',
  Delete = 'Delete',
  ArrowLeft = 'ArrowLeft',
  ArrowUp = 'ArrowUp',
  ArrowRight = 'ArrowRight',
  ArrowDown = 'ArrowDown',
  Home = 'Home',
  End = 'End',
  PageUp = 'PageUp',
  PageDown = 'PageDown',
  Tab = 'Tab',
}

enum OpenClosedState {
  Open,
  Closed,
}

enum PopoverStates {
  Open,
  Closed,
}

enum RenderStrategy {
  Unmount,
  Hidden,
}

enum TabDirection {
  Forwards,
  Backwards,
}

type Actions =
  | { type: ActionTypes.TogglePopover }
  | { type: ActionTypes.ClosePopover }
  | { type: ActionTypes.SetButton; button: HTMLElement | null }
  | { type: ActionTypes.SetButtonId; buttonId: string }
  | { type: ActionTypes.SetPanel; panel: HTMLElement | null }
  | { type: ActionTypes.SetPanelId; panelId: string }

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }

type XOR<T, U> = T | U extends __
  ? never
  : T extends __
  ? U
  : U extends __
  ? T
  : T | U extends object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U

type PropsForFeature<TPassedInFeatures extends Features, TForFeature extends Features, TProps> = {
  [P in TPassedInFeatures]: P extends TForFeature ? TProps : __
}[TPassedInFeatures]

type PropsForFeatures<T extends Features> = XOR<
  PropsForFeature<T, Features.Static, { static?: boolean }>,
  PropsForFeature<T, Features.RenderStrategy, { unmount?: boolean }>
>

type __ = typeof __

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never

type PropsOf<TTag = any> = TTag extends React.ElementType
  ? React.ComponentProps<TTag>
  : never

type ButtonPropsWeControl =
| 'id'
| 'type'
| 'aria-expanded'
| 'aria-controls'
| 'onKeyDown'
| 'onClick'

type PropsWeControl = 'as' | 'children' | 'refName' | 'className'

// Resolve the props of the component, but ensure to omit certain props that we control
type CleanProps<TTag, TOmitableProps extends keyof any = __> = TOmitableProps extends __
  ? Omit<PropsOf<TTag>, PropsWeControl>
  : Omit<PropsOf<TTag>, TOmitableProps | PropsWeControl>

// Add certain props that we control
type OurProps<TTag, TSlot = any> = {
  as?: TTag
  children?: React.ReactNode | ((bag: TSlot) => React.ReactElement)
  refName?: string
}

// Conditionally override the `className`, to also allow for a function
// if and only if the PropsOf<TTag> already define `className`.
// This will allow us to have a TS error on as={Fragment}
type ClassNameOverride<TTag, TSlot = any> = PropsOf<TTag> extends { className?: any }
  ? { className?: string | ((bag: TSlot) => string) }
  : {}

type Container = React.MutableRefObject<HTMLElement | null> | HTMLElement | null
type ContainerCollection = Container[] | Set<Container>
type ContainerInput = Container | ContainerCollection

// Provide clean TypeScript props, which exposes some of our custom API's.
type Props<TTag, TSlot = any, TOmitableProps extends keyof any = __> = CleanProps<
  TTag,
  TOmitableProps
> &
  OurProps<TTag, TSlot> &
  ClassNameOverride<TTag, TSlot>

type PanelPropsWeControl = 'id' | 'onKeyDown'

interface OpenClosedProps {
  value: OpenClosedState
  children: React.ReactNode
}

interface PopoverRegisterBag {
  buttonId: string
  panelId: string
  close(): void
}

interface PopoverRegisterBag {
  buttonId: string
  panelId: string
  close(): void
}

interface ButtonRenderPropArg {
  open: boolean
}

interface PopoverRenderPropArg {
  open: boolean
  close(focusableElement?: HTMLElement | React.MutableRefObject<HTMLElement | null>): void
}

interface StateDefinition {
  popoverState: PopoverStates
  button: HTMLElement | null
  buttonId: string
  panel: HTMLElement | null
  panelId: string
  beforePanelSentinel: React.MutableRefObject<HTMLButtonElement | null>
  afterPanelSentinel: React.MutableRefObject<HTMLButtonElement | null>
}

interface PanelRenderPropArg {
  open: boolean
  close: (focusableElement?: HTMLElement | React.MutableRefObject<HTMLElement | null>) => void
}

let DEFAULT_BUTTON_TAG = 'button' as const
let DEFAULT_VISUALLY_HIDDEN_TAG = 'div' as const

let Optional = Symbol()

// Credit:
//  - https://stackoverflow.com/a/30753870
let focusableSelector = [
  '[contentEditable=true]',
  '[tabindex]',
  'a[href]',
  'area[href]',
  'button:not([disabled])',
  'iframe',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
]
.map(
  process.env.NODE_ENV === 'test'
    ? // TODO: Remove this once JSDOM fixes the issue where an element that is
      // "hidden" can be the document.activeElement, because this is not possible
      // in real browsers.
      (selector) => `${selector}:not([tabindex='-1']):not([style*='display: none'])`
    : (selector) => `${selector}:not([tabindex='-1'])`
)
.join(',')

function compact<T extends Record<any, any>>(object: T) {
  let clone = Object.assign({}, object)
  for (let key in clone) {
    if (clone[key] === undefined) delete clone[key]
  }
  return clone
}

function omit<T extends Record<any, any>>(object: T, keysToOmit: string[] = []) {
  let clone = Object.assign({}, object)
  for (let key of keysToOmit) {
    if (key in clone) delete clone[key]
  }
  return clone
}

function getFocusableElements(container: HTMLElement | null = document.body) {
  if (container == null) return []
  return Array.from(container.querySelectorAll<HTMLElement>(focusableSelector))
}

function getOwnerDocument<T extends Element | React.MutableRefObject<Element | null>>(
  element: T | null | undefined
) {
  if (typeof window === 'undefined') return null
  if (element instanceof Node) return element.ownerDocument
  if (element?.hasOwnProperty('current')) {
    if (element.current instanceof Node) return element.current.ownerDocument
  }

  return document
}

function useOwnerDocument(...args: Parameters<typeof getOwnerDocument>) {
  return React.useMemo(() => getOwnerDocument(...args), [...args])
}

let state = { serverHandoffComplete: false }

function useServerHandoffComplete() {
  let [serverHandoffComplete, setServerHandoffComplete] = React.useState(state.serverHandoffComplete)

  React.useEffect(() => {
    if (serverHandoffComplete === true) return
    setServerHandoffComplete(true)
  }, [serverHandoffComplete])

  React.useEffect(() => {
    if (state.serverHandoffComplete === false) state.serverHandoffComplete = true
  }, [])

  return serverHandoffComplete
}

function match<TValue extends string | number = string, TReturnValue = unknown>(
  value: TValue,
  lookup: Record<TValue, TReturnValue | ((...args: any[]) => TReturnValue)>,
  ...args: any[]
): TReturnValue {
  if (value in lookup) {
    let returnValue = lookup[value]
    return typeof returnValue === 'function' ? returnValue(...args) : returnValue
  }

  let error = new Error(
    `Tried to handle "${value}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      lookup
    )
      .map((key) => `"${key}"`)
      .join(', ')}.`
  )
  if (Error.captureStackTrace) Error.captureStackTrace(error, match)
  throw error
}

function microTask(cb: () => void) {
  if (typeof queueMicrotask === 'function') {
    queueMicrotask(cb)
  } else {
    Promise.resolve()
      .then(cb)
      .catch((e) =>
        setTimeout(() => {
          throw e
        })
      )
  }
}

/**
 * This is a hack, but basically we want to keep the full 'API' of the component, but we do want to
 * wrap it in a forwardRef so that we _can_ passthrough the ref
 */
function forwardRefWithAs<T extends { name: string; displayName?: string }>(
  component: T
): T & { displayName: string } {
  return Object.assign(React.forwardRef(component as unknown as any) as any, {
    displayName: component.displayName ?? component.name,
  })
}

function isFocusableElement(
  element: HTMLElement,
  mode: FocusableMode = FocusableMode.Strict
) {
  if (element === getOwnerDocument(element)?.body) return false

  return match(mode, {
    [FocusableMode.Strict]() {
      return element.matches(focusableSelector)
    },
    [FocusableMode.Loose]() {
      let next: HTMLElement | null = element

      while (next !== null) {
        if (next.matches(focusableSelector)) return true
        next = next.parentElement
      }

      return false
    },
  })
}

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select
let selectableSelector = ['textarea', 'input'].join(',')
function isSelectableElement(
  element: Element | null
): element is HTMLInputElement | HTMLTextAreaElement {
  return element?.matches?.(selectableSelector) ?? false
}

function useSyncRefs<TType>(
  ...refs: (React.MutableRefObject<TType | null> | ((instance: TType) => void) | null)[]
) {
  let cache = React.useRef(refs)

  React.useEffect(() => {
    cache.current = refs
  }, [refs])

  let syncRefs = React.useCallback(
    (value: TType) => {
      for (let ref of cache.current) {
        if (ref == null) continue
        if (typeof ref === 'function') ref(value)
        else ref.current = value
      }
    },
    [cache]
  )

  return refs.every(
    (ref) =>
      ref == null ||
      // @ts-expect-error
      ref?.[Optional]
  )
    ? undefined
    : syncRefs
}

let useEvent =
// TODO: Add React.useEvent ?? once the useEvent hook is available
function useEvent<T, R>(cb: (...args: T[]) => R) {
  let cache = React.useRef(cb)
  cache.current = cb
  return React.useCallback((...args: T[]) => cache.current(...args), [cache])
}

function useWindowEvent<TType extends keyof WindowEventMap>(
  type: TType,
  listener: (ev: WindowEventMap[TType]) => any,
  options?: boolean | AddEventListenerOptions
) {
  let listenerRef = useLatestValue(listener)

  React.useEffect(() => {
    function handler(event: WindowEventMap[TType]) {
      listenerRef.current(event)
    }

    window.addEventListener(type, handler, options)
    return () => window.removeEventListener(type, handler, options)
  }, [type, options])
}

let id = 0
function generateId() {
  return ++id
}

function resolveType<TTag>(props: { type?: string; as?: TTag }) {
  if (props.type) return props.type

  let tag = props.as ?? 'button'
  if (typeof tag === 'string' && tag.toLowerCase() === 'button') return 'button'

  return undefined
}

const useIsoMorphicEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect

let useId = function useId() {
    let ready = useServerHandoffComplete()
    let [id, setId] = React.useState(ready ? generateId : null)

    useIsoMorphicEffect(() => {
      if (id === null) setId(generateId())
    }, [id])

    return id != null ? '' + id : undefined
}

function sortByDomNode<T>(
  nodes: T[],
  resolveKey: (item: T) => HTMLElement | null = (i) => i as unknown as HTMLElement | null
): T[] {
  return nodes.slice().sort((aItem, zItem) => {
    let a = resolveKey(aItem)
    let z = resolveKey(zItem)

    if (a === null || z === null) return 0

    let position = a.compareDocumentPosition(z)

    if (position & Node.DOCUMENT_POSITION_FOLLOWING) return -1
    if (position & Node.DOCUMENT_POSITION_PRECEDING) return 1
    return 0
  })
}

function focusIn(container: HTMLElement | HTMLElement[], focus: Focus, sorted = true) {
  let ownerDocument = Array.isArray(container)
    ? container.length > 0
      ? container[0].ownerDocument
      : document
    : container.ownerDocument

  let elements = Array.isArray(container)
    ? sorted
      ? sortByDomNode(container)
      : container
    : getFocusableElements(container)
  let active = ownerDocument.activeElement as HTMLElement

  let direction = (() => {
    if (focus & (Focus.First | Focus.Next)) return Direction.Next
    if (focus & (Focus.Previous | Focus.Last)) return Direction.Previous

    throw new Error('Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last')
  })()

  let startIndex = (() => {
    if (focus & Focus.First) return 0
    if (focus & Focus.Previous) return Math.max(0, elements.indexOf(active)) - 1
    if (focus & Focus.Next) return Math.max(0, elements.indexOf(active)) + 1
    if (focus & Focus.Last) return elements.length - 1

    throw new Error('Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last')
  })()

  let focusOptions = focus & Focus.NoScroll ? { preventScroll: true } : {}

  let offset = 0
  let total = elements.length
  let next = undefined
  do {
    // Guard against infinite loops
    if (offset >= total || offset + total <= 0) return FocusResult.Error

    let nextIdx = startIndex + offset

    if (focus & Focus.WrapAround) {
      nextIdx = (nextIdx + total) % total
    } else {
      if (nextIdx < 0) return FocusResult.Underflow
      if (nextIdx >= total) return FocusResult.Overflow
    }

    next = elements[nextIdx]

    // Try the focus the next element, might not work if it is "hidden" to the user.
    next?.focus(focusOptions)

    // Try the next one in line
    offset += direction
  } while (next !== ownerDocument.activeElement)

  // By default if you <Tab> to a text input or a textarea, the browser will
  // select all the text once the focus is inside these DOM Nodes. However,
  // since we are manually moving focus this behaviour is not happening. This
  // code will make sure that the text gets selected as-if you did it manually.
  // Note: We only do this when going forward / backward. Not for the
  // Focus.First or Focus.Last actions. This is similar to the `autoFocus`
  // behaviour on an input where the input will get focus but won't be
  // selected.
  if (focus & (Focus.Next | Focus.Previous) && isSelectableElement(next)) {
    next.select()
  }

  // This is a little weird, but let me try and explain: There are a few scenario's
  // in chrome for example where a focused `<a>` tag does not get the default focus
  // styles and sometimes they do. This highly depends on whether you started by
  // clicking or by using your keyboard. When you programmatically add focus `anchor.focus()`
  // then the active element (document.activeElement) is this anchor, which is expected.
  // However in that case the default focus styles are not applied *unless* you
  // also add this tabindex.
  if (!next.hasAttribute('tabindex')) next.setAttribute('tabindex', '0')

  return FocusResult.Success
}

function useLatestValue<T>(value: T) {
  let cache = React.useRef(value)

  useIsoMorphicEffect(() => {
    cache.current = value
  }, [value])

  return cache
}

function useEventListener<TType extends keyof WindowEventMap>(
  element: HTMLElement | Document | Window | EventTarget | null | undefined,
  type: TType,
  listener: (event: WindowEventMap[TType]) => any,
  options?: boolean | AddEventListenerOptions
) {
  let listenerRef = useLatestValue(listener)

  React.useEffect(() => {
    element = element ?? window

    function handler(event: WindowEventMap[TType]) {
      listenerRef.current(event)
    }

    element.addEventListener(type, handler as any, options)
    return () => element!.removeEventListener(type, handler as any, options)
  }, [element, type, options])
}

function useOutsideClick(
  containers: ContainerInput | (() => ContainerInput),
  cb: (event: MouseEvent | PointerEvent, target: HTMLElement) => void,
  features: Features = Features.None
) {
  let called = React.useRef(false)
  let handler = useEvent((event: MouseEvent | PointerEvent) => {
    if (called.current) return
    called.current = true
    microTask(() => {
      called.current = false
    })

    let _containers = (function resolve(containers): ContainerCollection {
      if (typeof containers === 'function') {
        return resolve(containers())
      }

      if (Array.isArray(containers)) {
        return containers
      }

      if (containers instanceof Set) {
        return containers
      }

      return [containers]
    })(containers)

    let target = event.target as HTMLElement

    // Ignore if the target doesn't exist in the DOM anymore
    if (!target.ownerDocument.documentElement.contains(target)) return

    // Ignore scrollbars:
    // This is a bit hacky, and is only necessary because we are checking for `pointerdown` and
    // `mousedown` events. They _are_ being called if you click on a scrollbar. The `click` event
    // is not called when clicking on a scrollbar, but we can't use that otherwise it won't work
    // on mobile devices where only pointer events are being used.
    if ((features & FeaturesOutsideClick.IgnoreScrollbars) === FeaturesOutsideClick.IgnoreScrollbars) {
      // TODO: We can calculate this dynamically~is. On macOS if you have the "Automatically based
      // on mouse or trackpad" setting enabled, then the scrollbar will float on top and therefore
      // you can't calculate its with by checking the clientWidth and scrollWidth of the element.
      // Therefore we are currently hardcoding this to be 20px.
      let scrollbarWidth = 20

      let viewport = target.ownerDocument.documentElement
      if (event.clientX > viewport.clientWidth - scrollbarWidth) return
      if (event.clientX < scrollbarWidth) return
      if (event.clientY > viewport.clientHeight - scrollbarWidth) return
      if (event.clientY < scrollbarWidth) return
    }

    // Ignore if the target exists in one of the containers
    for (let i = 0; i < _containers.length; i++) {
      let container = containers[i];
      if (container === null) continue
      if (container !== null) {
        let domNode = container instanceof HTMLElement ? container : container.current
        if (domNode?.contains(target)) {
          return
        }
      }
    }

    return cb(event, target)
  })

  useWindowEvent('pointerdown', handler)
  useWindowEvent('mousedown', handler)
}

function mergeProps(...listOfProps: Props<any, any>[]) {
  if (listOfProps.length === 0) return {}
  if (listOfProps.length === 1) return listOfProps[0]

  let target: Props<any, any> = {}

  let eventHandlers: Record<
    string,
    ((event: { defaultPrevented: boolean }) => void | undefined)[]
  > = {}
  console.log('mergeProps called ', listOfProps);

  for (let props of listOfProps) {
    for (let prop in props) {
      // Collect event handlers
      if (prop.startsWith('on') && typeof props[prop] === 'function') {
        eventHandlers[prop] ??= []
        eventHandlers[prop].push(props[prop])
      } else {
        // Override incoming prop
        target[prop] = props[prop]
      }
    }
  }

  // Do not attach any event handlers when there is a `disabled` or `aria-disabled` prop set.
  if (target.disabled || target['aria-disabled']) {
    return Object.assign(
      target,
      // Set all event listeners that we collected to `undefined`. This is
      // important because of the `cloneElement` from above, which merges the
      // existing and new props, they don't just override therefore we have to
      // explicitly nullify them.
      Object.fromEntries(Object.keys(eventHandlers).map((eventName) => [eventName, undefined]))
    )
  }

  // Merge event handlers
  for (let eventName in eventHandlers) {
    Object.assign(target, {
      [eventName](event: { defaultPrevented: boolean }) {
        let handlers = eventHandlers[eventName]

        for (let handler of handlers) {
          if (event.defaultPrevented) return

          handler(event)
        }
      },
    })
  }

  return target
}

function render<TFeature extends Features, TTag extends React.ElementType, TSlot>({
  ourProps,
  theirProps,
  slot,
  defaultTag,
  features,
  visible = true,
  name,
}: {
  ourProps: Expand<Props<TTag, TSlot, any> & PropsForFeatures<TFeature>>
  theirProps: Expand<Props<TTag, TSlot, any>>
  slot?: TSlot
  defaultTag: React.ElementType
  features?: TFeature
  visible?: boolean
  name: string
}) {
  let props = mergeProps(theirProps, ourProps)

  // Visible always render
  if (visible) return _render(props, slot, defaultTag, name)

  let featureFlags = features ?? Features.None

  // if (featureFlags & Features.Static) {
  //   let { static: isStatic = false, ...rest } = props as PropsForFeatures<Features.Static>

  //   // When the `static` prop is passed as `true`, then the user is in control, thus we don't care about anything else
  //   if (isStatic) return _render(rest, slot, defaultTag, name)
  // }

  if (featureFlags & Features.RenderStrategy) {
    //until ...rest typecast resolve below is shim
    let unmount = true;
    //let { unmount = true, ...rest } = props as PropsForFeatures<Features.RenderStrategy>
    let strategy = unmount ? RenderStrategy.Unmount : RenderStrategy.Hidden

    return match(strategy, {
      [RenderStrategy.Unmount]() {
        return null
      },
      [RenderStrategy.Hidden]() {
        return _render(
          {/* ...rest, */...{ hidden: true, style: { display: 'none' } } },
          slot,
          defaultTag,
          name
        )
      },
    })
  }

  // No features enabled, just render
  return _render(props, slot, defaultTag, name)
}

function _render<TTag extends React.ElementType, TSlot>(
  props: Props<TTag, TSlot> & { ref?: unknown },
  slot: TSlot = {} as TSlot,
  tag: React.ElementType,
  name: string
) {
  let {
    as: Component = tag,
    children,
    refName = 'ref',
    ...rest
  } = omit(props, ['unmount', 'static'])

  // This allows us to use `<HeadlessUIComponent as={MyComponent} refName="innerRef" />`
  let refRelatedProps = props.ref !== undefined ? { [refName]: props.ref } : {}

  let resolvedChildren = (typeof children === 'function' ? children(slot) : children) as
    | React.ReactElement
    | React.ReactElement[]

  // Allow for className to be a function with the slot as the contents
  if (rest.className && typeof rest.className === 'function') {
    ;(rest as any).className = rest.className(slot)
  }

  if (Component === React.Fragment) {
    if (Object.keys(compact(rest)).length > 0) {
      if (
        !React.isValidElement(resolvedChildren) ||
        (Array.isArray(resolvedChildren) && resolvedChildren.length > 1)
      ) {
        throw new Error(
          [
            'Passing props on "Fragment"!',
            '',
            `The current component <${name} /> is rendering a "Fragment".`,
            `However we need to passthrough the following props:`,
            Object.keys(rest)
              .map((line) => `  - ${line}`)
              .join('\n'),
            '',
            'You can apply a few solutions:',
            [
              'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
              'Render a single element as the child so that we can forward the props onto that element.',
            ]
              .map((line) => `  - ${line}`)
              .join('\n'),
          ].join('\n')
        )
      }
      /* add to style props obj
      absolute top-0 left-0 
      */
      console.log('just before render->_render return ', resolvedChildren.props);
      return React.cloneElement(
        resolvedChildren,
        Object.assign(
          {},
          // Filter out undefined values so that they don't override the existing values
          mergeProps(resolvedChildren.props, compact(omit(rest, ['ref']))),
          refRelatedProps
        )
      )
    }
  } //end of _render

  return React.createElement(
    Component,
    Object.assign({}, omit(rest, ['ref']), Component !== React.Fragment && refRelatedProps),
    resolvedChildren
  )
}

function stateReducer(state: StateDefinition, action: Actions) {
  return match(action.type, reducers, state, action)
}

let reducers: {
  [P in ActionTypes]: (
    state: StateDefinition,
    action: Extract<Actions, { type: P }>
  ) => StateDefinition
} = {
  [ActionTypes.TogglePopover]: (state) => ({
    ...state,
    popoverState: match(state.popoverState, {
      [PopoverStates.Open]: PopoverStates.Closed,
      [PopoverStates.Closed]: PopoverStates.Open,
    }),
  }),
  [ActionTypes.ClosePopover](state) {
    if (state.popoverState === PopoverStates.Closed) return state
    return { ...state, popoverState: PopoverStates.Closed }
  },
  [ActionTypes.SetButton](state, action) {
    if (state.button === action.button) return state
    return { ...state, button: action.button }
  },
  [ActionTypes.SetButtonId](state, action) {
    if (state.buttonId === action.buttonId) return state
    return { ...state, buttonId: action.buttonId }
  },
  [ActionTypes.SetPanel](state, action) {
    if (state.panel === action.panel) return state
    return { ...state, panel: action.panel }
  },
  [ActionTypes.SetPanelId](state, action) {
    if (state.panelId === action.panelId) return state
    return { ...state, panelId: action.panelId }
  },
}

let Context = React.createContext<OpenClosedState | null>(null)
Context.displayName = 'OpenClosedContext'

let PopoverContext = React.createContext<[StateDefinition, React.Dispatch<Actions>] | null>(null)
PopoverContext.displayName = 'PopoverContext'

let PopoverAPIContext = React.createContext<{
  close(focusableElement?: HTMLElement | React.MutableRefObject<HTMLElement | null>): void
  isPortalled: boolean
} | null>(null)
PopoverAPIContext.displayName = 'PopoverAPIContext'

let PopoverGroupContext = React.createContext<{
  registerPopover(registerbag: PopoverRegisterBag): void
  unregisterPopover(registerbag: PopoverRegisterBag): void
  isFocusWithinPopoverGroup(): boolean
  closeOthers(buttonId: string): void
} | null>(null)
PopoverGroupContext.displayName = 'PopoverGroupContext'

let PopoverPanelContext = React.createContext<string | null>(null)
PopoverPanelContext.displayName = 'PopoverPanelContext'

function usePopoverContext(component: string) {
  let context = React.useContext(PopoverContext)
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Popover /> component.`)
    if (Error.captureStackTrace) Error.captureStackTrace(err, usePopoverContext)
    throw err
  }
  return context
}

function usePopoverGroupContext() {
  return React.useContext(PopoverGroupContext)
}

function useOpenClosed() {
  return React.useContext(Context)
}

function OpenClosedProvider({ value, children }: OpenClosedProps): React.Element {
  return <Context.Provider value={value}>{children}</Context.Provider>
}

function usePopoverPanelContext() {
  return React.useContext(PopoverPanelContext)
}

function usePopoverAPIContext(component: string) {
  let context = React.useContext(PopoverAPIContext)
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Popover /> component.`)
    if (Error.captureStackTrace) Error.captureStackTrace(err, usePopoverAPIContext)
    throw err
  }
  return context
}

export function useResolveButtonType<TTag>(
  props: { type?: string; as?: TTag },
  ref: React.MutableRefObject<HTMLElement | null>
) {
  let [type, setType] = React.useState(() => resolveType(props))

  useIsoMorphicEffect(() => {
    setType(resolveType(props))
  }, [props.type, props.as])

  useIsoMorphicEffect(() => {
    if (type) return
    if (!ref.current) return

    if (ref.current instanceof HTMLButtonElement && !ref.current.hasAttribute('type')) {
      setType('button')
    }
  }, [type, ref])

  return type
}

export function useTabDirection() {
  let direction = React.useRef(TabDirection.Forwards)

  useWindowEvent(
    'keydown',
    (event) => {
      if (event.key === 'Tab') {
        direction.current = event.shiftKey ? TabDirection.Backwards : Direction.Forwards
      }
    },
    true
  )

  return direction
}

let Button = forwardRefWithAs(function Button<TTag extends React.ElementType = typeof DEFAULT_BUTTON_TAG>(
  props: Props<TTag, ButtonRenderPropArg, ButtonPropsWeControl>,
  ref: React.Ref<HTMLButtonElement>
) {
  let [state, dispatch] = usePopoverContext('Popover.Button')
  let { isPortalled } = usePopoverAPIContext('Popover.Button')
  let internalButtonRef = React.useRef<HTMLButtonElement | null>(null)

  let sentinelId = `tw-focus-sentinel-${useId()}`

  let groupContext = usePopoverGroupContext()
  let closeOthers = groupContext?.closeOthers

  let panelContext = usePopoverPanelContext()
  let isWithinPanel = panelContext === null ? false : panelContext === state.panelId

  let buttonRef = useSyncRefs(
    internalButtonRef,
    ref,
    isWithinPanel ? null : (button) => dispatch({ type: ActionTypes.SetButton, button })
  )
  let withinPanelButtonRef = useSyncRefs(internalButtonRef, ref)
  let ownerDocument = useOwnerDocument(internalButtonRef)

  let handleKeyDown = useEvent((event: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (isWithinPanel) {
      if (state.popoverState === PopoverStates.Closed) return
      switch (event.key) {
        case Keys.Space:
        case Keys.Enter:
          event.preventDefault() // Prevent triggering a *click* event
          // @ts-expect-error
          event.target.click?.()
          dispatch({ type: ActionTypes.ClosePopover })
          state.button?.focus() // Re-focus the original opening Button
          break
      }
    } else {
      switch (event.key) {
        case Keys.Space:
        case Keys.Enter:
          event.preventDefault() // Prevent triggering a *click* event
          event.stopPropagation()
          if (state.popoverState === PopoverStates.Closed) closeOthers?.(state.buttonId)
          dispatch({ type: ActionTypes.TogglePopover })
          break

        case Keys.Escape:
          if (state.popoverState !== PopoverStates.Open) return closeOthers?.(state.buttonId)
          if (!internalButtonRef.current) return
          if (
            ownerDocument?.activeElement &&
            !internalButtonRef.current.contains(ownerDocument.activeElement)
          ) {
            return
          }
          event.preventDefault()
          event.stopPropagation()
          dispatch({ type: ActionTypes.ClosePopover })
          break
      }
    }
  })

  let handleKeyUp = useEvent((event: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (isWithinPanel) return
    if (event.key === Keys.Space) {
      // Required for firefox, event.preventDefault() in handleKeyDown for
      // the Space key doesn't cancel the handleKeyUp, which in turn
      // triggers a *click*.
      event.preventDefault()
    }
  })

  let handleClick = useEvent((event: ReactMouseEvent) => {
//    if (isDisabledReactIssue7711(event.currentTarget)) return
    if (props.disabled) return
    if (isWithinPanel) {
      dispatch({ type: ActionTypes.ClosePopover })
      state.button?.focus() // Re-focus the original opening Button
    } else {
      event.preventDefault()
      event.stopPropagation()
      if (state.popoverState === PopoverStates.Closed) closeOthers?.(state.buttonId)
      dispatch({ type: ActionTypes.TogglePopover })
      state.button?.focus()
    }
  })

  let handleMouseDown = useEvent((event: ReactMouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
  })

  let visible = state.popoverState === PopoverStates.Open
  let slot = React.useMemo<ButtonRenderPropArg>(() => ({ open: visible }), [visible])

  let type = useResolveButtonType(props, internalButtonRef)
  let theirProps = props
  let ourProps = isWithinPanel
    ? {
        ref: withinPanelButtonRef,
        type,
        onKeyDown: handleKeyDown,
        onClick: handleClick,
      }
    : {
        ref: buttonRef,
        id: state.buttonId,
        type,
        'aria-expanded': props.disabled ? undefined : state.popoverState === PopoverStates.Open,
        'aria-controls': state.panel ? state.panelId : undefined,
        onKeyDown: handleKeyDown,
        onKeyUp: handleKeyUp,
        onClick: handleClick,
        onMouseDown: handleMouseDown,
      }

  let direction = useTabDirection()
  let handleFocus = useEvent(() => {
    let el = state.panel as HTMLElement
    if (!el) return

    function run() {
      match(direction.current, {
        [TabDirection.Forwards]: () => focusIn(el, Focus.First),
        [TabDirection.Backwards]: () => focusIn(el, Focus.Last),
      })
    }

    // TODO: Cleanup once we are using real browser tests
    if (process.env.NODE_ENV === 'test') {
      microTask(run)
    } else {
      run()
    }
  })

  console.log('button rendered ourProps', ourProps)
  return (
    <>
      {render({
        ourProps,
        theirProps,
        slot,
        defaultTag: DEFAULT_BUTTON_TAG,
        name: 'Popover.Button',
      })}
      {visible && !isWithinPanel && isPortalled && (
        <Hidden
          id={sentinelId}
          features={FeaturesHidden.Focusable}
          as="button"
          type="button"
          onFocus={handleFocus}
        />
      )}
    </>
  )
})

let Hidden = forwardRefWithAs(function VisuallyHidden<
  TTag extends React.ElementType = typeof DEFAULT_VISUALLY_HIDDEN_TAG
>(props: Props<TTag> & { features?: FeaturesHidden }, ref: React.Ref<HTMLElement>) {
  let { features = Features.None, ...theirProps } = props
  let ourProps = {
    ref,
    'aria-hidden': (features & FeaturesHidden.Focusable) === FeaturesHidden.Focusable ? true : undefined,
    style: {
      position: 'absolute',
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      borderWidth: '0',
      ...((features & FeaturesHidden.Hidden) === FeaturesHidden.Hidden &&
        !((features & FeaturesHidden.Focusable) === FeaturesHidden.Focusable) && { display: 'none' }),
    },
  }

  return render({
    ourProps,
    theirProps,
    slot: {},
    defaultTag: DEFAULT_VISUALLY_HIDDEN_TAG,
    name: 'Hidden',
  })
})

let DEFAULT_POPOVER_TAG = 'div' as const
  
let PopoverRoot = forwardRefWithAs(function Popover<
    TTag extends React.ElementType = typeof DEFAULT_POPOVER_TAG
  >(props: Props<TTag, PopoverRenderPropArg>, ref: React.Ref<HTMLElement>) {
    let buttonId = `tw-popover-button-${useId()}`
    let panelId = `tw-popover-panel-${useId()}`
    let internalPopoverRef = React.useRef<HTMLElement | null>(null)
    let popoverRef = useSyncRefs(ref, internalPopoverRef)
    let ownerDocument = useOwnerDocument(internalPopoverRef)
  
    let reducerBag = React.useReducer(stateReducer, {
      popoverState: PopoverStates.Closed,
      button: null,
      buttonId,
      panel: null,
      panelId,
      beforePanelSentinel: React.createRef(),
      afterPanelSentinel: React.createRef(),
    } as StateDefinition)

  let [{ popoverState, button, panel, beforePanelSentinel, afterPanelSentinel }, dispatch] =
    reducerBag

  React.useEffect(() => dispatch({ type: ActionTypes.SetButtonId, buttonId }), [buttonId, dispatch])
  React.useEffect(() => dispatch({ type: ActionTypes.SetPanelId, panelId }), [panelId, dispatch])
      
  let isPortalled = React.useMemo(() => {
    if (!button) return false
    if (!panel) return false

    // for (let root of document.querySelectorAll('body > *')) {
    //   if (Number(root?.contains(button)) ^ Number(root?.contains(panel))) {
    //     return true
    //   }
    // }

    return false
  }, [button, panel])

  let registerBag = React.useMemo(
    () => ({ buttonId, panelId, close: () => dispatch({ type: ActionTypes.ClosePopover }) }),
    [buttonId, panelId, dispatch]
  )

  let groupContext = usePopoverGroupContext()
  let registerPopover = groupContext?.registerPopover
  let isFocusWithinPopoverGroup = React.useCallback(() => {
    return (
      groupContext?.isFocusWithinPopoverGroup() ??
      (ownerDocument?.activeElement &&
        (button?.contains(ownerDocument.activeElement) ||
          panel?.contains(ownerDocument.activeElement)))
    )
  }, [groupContext, button, panel])

  React.useEffect(() => registerPopover?.(registerBag), [registerPopover, registerBag])

  // Handle focus out
  useEventListener(
    ownerDocument?.defaultView,
    'focus',
    (event) => {
      if (popoverState !== PopoverStates.Open) return
      if (isFocusWithinPopoverGroup()) return
      if (!button) return
      if (!panel) return
      if (beforePanelSentinel.current?.contains?.(event.target as HTMLElement)) return
      if (afterPanelSentinel.current?.contains?.(event.target as HTMLElement)) return

      dispatch({ type: ActionTypes.ClosePopover })
    },
    true
  )

  // Handle outside click
  useOutsideClick([button, panel], (event, target) => {
    if (popoverState !== PopoverStates.Open) return

    dispatch({ type: ActionTypes.ClosePopover })

    if (!isFocusableElement(target, FocusableMode.Loose)) {
      event.preventDefault()
      button?.focus()
    }
  })

  let close = React.useCallback(
    (focusableElement?: HTMLElement | React.MutableRefObject<HTMLElement | null>) => {
      dispatch({ type: ActionTypes.ClosePopover })

      let restoreElement = (() => {
        if (!focusableElement) return button
        if (focusableElement instanceof HTMLElement) return focusableElement
        if (focusableElement.current instanceof HTMLElement) return focusableElement.current

        return button
      })()

      restoreElement?.focus()
    },
    [dispatch, button]
  )

  let api = React.useMemo<React.ContextType<typeof PopoverAPIContext>>(
    () => ({ close, isPortalled }),
    [close, isPortalled]
  )

  let slot = React.useMemo<PopoverRenderPropArg>(
    () => ({ open: popoverState === PopoverStates.Open, close }),
    [popoverState, close]
  )

  let theirProps = props
  let ourProps = { ref: popoverRef }

  return (
    <PopoverContext.Provider value={reducerBag}>
    <PopoverAPIContext.Provider value={api}>
      <OpenClosedProvider
        value={match(popoverState, {
          [PopoverStates.Open]: OpenClosedState.Open,
          [PopoverStates.Closed]: OpenClosedState.Closed,
        })}
      >
        {render({
          ourProps,
          theirProps,
          slot,
          defaultTag: DEFAULT_POPOVER_TAG,
          name: 'Popover',
        })}
      </OpenClosedProvider>
    </PopoverAPIContext.Provider>
    </PopoverContext.Provider>
  )
})

let DEFAULT_PANEL_TAG = 'div' as const
let PanelRenderFeatures = Features.RenderStrategy | Features.Static

let Panel = forwardRefWithAs(function Panel<TTag extends React.ElementType = typeof DEFAULT_PANEL_TAG>(
  props: Props<TTag, PanelRenderPropArg, PanelPropsWeControl> &
    PropsForFeatures<typeof PanelRenderFeatures> & {
      focus?: boolean
    },
  ref: React.Ref<HTMLDivElement>
) {
  let { focus = false, ...theirProps } = props

  let [state, dispatch] = usePopoverContext('Popover.Panel')
  let { close, isPortalled } = usePopoverAPIContext('Popover.Panel')

  let beforePanelSentinelId = `tw-focus-sentinel-before-${useId()}`
  let afterPanelSentinelId = `tw-focus-sentinel-after-${useId()}`

  let internalPanelRef = React.useRef<HTMLDivElement | null>(null)
  let panelRef = useSyncRefs(internalPanelRef, ref, (panel) => {
    dispatch({ type: ActionTypes.SetPanel, panel })
  })
  let ownerDocument = useOwnerDocument(internalPanelRef)

  let usesOpenClosedState = useOpenClosed()
  let visible = (() => {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === OpenClosedState.Open
    }

    return state.popoverState === PopoverStates.Open
  })()

  let handleKeyDown = React.useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case Keys.Escape:
          if (state.popoverState !== PopoverStates.Open) return
          if (!internalPanelRef.current) return
          if (
            ownerDocument?.activeElement &&
            !internalPanelRef.current.contains(ownerDocument.activeElement)
          ) {
            return
          }
          event.preventDefault()
          event.stopPropagation()
          dispatch({ type: ActionTypes.ClosePopover })
          state.button?.focus()
          break
      }
    },
    [state, internalPanelRef, dispatch]
  )

  // Unlink on "unmount" children
  React.useEffect(() => {
    if (props.static) return

    if (state.popoverState === PopoverStates.Closed && (props.unmount ?? true)) {
      dispatch({ type: ActionTypes.SetPanel, panel: null })
    }
  }, [state.popoverState, props.unmount, props.static, dispatch])

  // Move focus within panel
  React.useEffect(() => {
    if (!focus) return
    if (state.popoverState !== PopoverStates.Open) return
    if (!internalPanelRef.current) return

    let activeElement = ownerDocument?.activeElement as HTMLElement
    if (internalPanelRef.current.contains(activeElement)) return // Already focused within Dialog

    focusIn(internalPanelRef.current, Focus.First)
  }, [focus, internalPanelRef, state.popoverState])

  // Handle focus out when we are in special "focus" mode
  useEventListener(
    ownerDocument?.defaultView,
    'focus',
    () => {
      if (!focus) return
      if (state.popoverState !== PopoverStates.Open) return
      if (!internalPanelRef.current) return

      let activeElement = ownerDocument?.activeElement as HTMLElement

      if (
        activeElement &&
        (internalPanelRef.current?.contains(activeElement) ||
          state.beforePanelSentinel.current?.contains?.(activeElement) ||
          state.afterPanelSentinel.current?.contains?.(activeElement))
      ) {
        return
      }

      dispatch({ type: ActionTypes.ClosePopover })
    },
    true
  )

  let slot = React.useMemo<PanelRenderPropArg>(
    () => ({ open: state.popoverState === PopoverStates.Open, close }),
    [state, close]
  )

  let ourProps = {
    ref: panelRef,
    id: state.panelId,
    onKeyDown: handleKeyDown,
    tabIndex: -1,
  }

  let direction = useTabDirection()
  let handleBeforeFocus = useEvent(() => {
    let el = internalPanelRef.current as HTMLElement
    if (!el) return

    function run() {
      match(direction.current, {
        [TabDirection.Forwards]: () => {
          focusIn(el, Focus.First)
        },
        [TabDirection.Backwards]: () => {
          // Coming from the Popover.Panel (which is portalled to somewhere else). Let's redirect
          // the focus to the Popover.Button again.
          state.button?.focus({ preventScroll: true })
        },
      })
    }

    // TODO: Cleanup once we are using real browser tests
    if (process.env.NODE_ENV === 'test') {
      microTask(run)
    } else {
      run()
    }
  })

  let handleAfterFocus = useEvent(() => {
    let el = internalPanelRef.current as HTMLElement
    if (!el) return

    function run() {
      match(direction.current, {
        [TabDirection.Forwards]: () => {
          if (!state.button) return

          let elements = getFocusableElements()

          let idx = elements.indexOf(state.button)
          let before = elements.slice(0, idx + 1)
          let after = elements.slice(idx + 1)

          let combined = [...after, ...before]

          // Ignore sentinel buttons and items inside the panel
          for (let element of combined.slice()) {
            if (
              element?.id?.startsWith?.('tw-focus-sentinel-') ||
              state.panel?.contains(element)
            ) {
              let idx = combined.indexOf(element)
              if (idx !== -1) combined.splice(idx, 1)
            }
          }

          focusIn(combined, Focus.First, false)
        },
        [TabDirection.Backwards]: () => focusIn(el, Focus.Last),
      })
    }

    // TODO: Cleanup once we are using real browser tests
    if (process.env.NODE_ENV === 'test') {
      microTask(run)
    } else {
      run()
    }
  })

  return (
    <PopoverPanelContext.Provider value={state.panelId}>
      {visible && isPortalled && (
        <Hidden
          id={beforePanelSentinelId}
          ref={state.beforePanelSentinel}
          features={FeaturesHidden.Focusable}
          as="button"
          type="button"
          onFocus={handleBeforeFocus}
        />
      )}
      {render({
        ourProps,
        theirProps,
        slot,
        defaultTag: DEFAULT_PANEL_TAG,
        features: PanelRenderFeatures,
        visible,
        name: 'Popover.Panel',
      })}
      {visible && isPortalled && (
        <Hidden
          id={afterPanelSentinelId}
          ref={state.afterPanelSentinel}
          features={FeaturesHidden.Focusable}
          as="button"
          type="button"
          onFocus={handleAfterFocus}
        />
      )}
    </PopoverPanelContext.Provider>
  )
})

// ---

export let Popover = Object.assign(PopoverRoot, { Button, Panel })