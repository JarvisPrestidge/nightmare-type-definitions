// Type definitions for Nightmare 2.10.0
// Project: https://github.com/segmentio/nightmare
// Definitions by: JarvisPrestidge <https://github.com/JarvisPrestidge>

declare class Nightmare {

    // == INFO ==

    /**
     * Creates an instance of Nightmare.
     * Takes any number of possible electron or nightmare-specific browser window options.
     *
     * @param {Nightmare.ConstructorOptions} [options]
     *
     * @memberOf Nightmare
     */
    constructor(options?: Nightmare.ConstructorOptions)

    /**
     * Returns the list of available namespaces on the main Nightmare object.
     *
     * @static
     * @type {string[]}
     *
     * @memberOf Nightmare
     */
    static namespaces: string[]

    /**
     * Returns the version of Nightmare.
     *
     * @static
     * @type {string}
     *
     * @memberOf Nightmare
     */
    static version: string

    /**
     * Gets the versions for Electron and Chromium.
     *
     * @returns {Nightmare.EngineVersions}
     *
     * @memberOf Nightmare
     */
    engineVersions(): Nightmare.EngineVersions

    // == SETTINGS ==

    /**
     * Set the user and password for accessing a web page using basic authentication.
     * Be sure to set it before calling .goto(url).
     *
     * @param {string} user
     * @param {string} password
     * @returns {Nightmare}
     *
     * @memberOf Nightmare
     */
    authentication(user: string, password: string): Nightmare

    /**
     * Set the useragent used by electron.
     *
     * @param {string} useragent
     * @returns {Nightmare}
     *
     * @memberOf Nightmare
     */
    useragent(useragent: string): Nightmare

    /**
     * Set the viewport size.
     *
     * @param {number} width
     * @param {number} height
     * @returns {Nightmare}
     *
     * @memberOf Nightmare
     */
    viewport(width: number, height: number): Nightmare

    /**
     * TODO
     *
     * @param {number} zoomFactor
     * @returns {Nightmare}
     *
     * @memberOf Nightmare
     */
    zoom(zoomFactor: number): Nightmare

    // == INTERACT ==

    /**
     * Load the page at url. Optionally, a headers hash can be supplied to set headers on the goto request.
     * Also returns a metadata object with response metrics.
     *
     * @param {string} url
     * @param {Nightmare.Headers} [headers]
     * @returns {Nightmare}
     *
     * @memberOf Nightmare
     */
    goto(url: string, headers?: Nightmare.Headers): Nightmare

    /**
     * Go back to the previous page.
     *
     * @returns {Nightmare}
     *
     * @memberOf Nightmare
     */
    back(): Nightmare

    /**
     * Go forward to the next page.
     *
     * @returns {Nightmare}
     *
     * @memberOf Nightmare
     */
    forward(): Nightmare

    /**
     * Refresh the current page.
     *
     * @returns {Nightmare}
     *
     * @memberOf Nightmare
     */
    refresh(): Nightmare

    /**
     * Clicks the selector element once.
     *
     * @param {string} selector
     * @returns {Nightmare}
     *
     * @memberOf Nightmare
     */
    click(selector: string): Nightmare

    /**
     * Mousedown the selector element once.
     *
     * @param {string} selector
     * @returns {Nightmare}
     *
     * @memberof Nightmare
     */
    mousedown(selector: string): Nightmare

    /**
     * Mouseup the selector element once.
     *
     * @param {string} selector
     * @returns {Nightmare}
     *
     * @memberof Nightmare
     */
    mouseup(selector: string): Nightmare

    /**
     * Mouseover the selector element once.
     *
     * @param {string} selector
     * @returns {Nightmare}
     *
     * @memberof Nightmare
     */
    mouseover(selector: string): Nightmare

    /**
     * Enters the text provided into the selector element. Empty or falsey values provided for text will clear the selector's value.
     *
     * @param {string} selector
     * @param {string} [text]
     * @returns {Nightmare}
     *
     * @memberof Nightmare
     */
    type(selector: string, text?: string): Nightmare

    /**
     * Similar to .type(). .insert() enters the text provided into the selector element.
     * Empty or falsey values provided for text will clear the selector's value.
     * .insert() is faster than .type() but does not trigger the keyboard events.
     *
     * @param {string} selector
     * @param {string} [text]
     * @returns {Nightmare}
     *
     * @memberof Nightmare
     */
    insert(selector: string, text?: string): Nightmare

    /**
     * Checks the selector checkbox element.
     *
     * @param {string} selector
     * @returns {Nightmare}
     *
     * @memberof Nightmare
     */
    check(selector: string): Nightmare

    /**
     * unchecks the selector checkbox element.
     *
     * @param {string} selector
     * @returns {Nightmare}
     *
     * @memberof Nightmare
     */
    uncheck(selector: string): Nightmare

    /**
     * Changes the selector dropdown element to the option with attribute [value=option]
     *
     * @param {string} selector
     * @param {string} option
     * @returns {Nightmare}
     *
     * @memberof Nightmare
     */
    select(selector: string, option?: string): Nightmare

    /**
     * Scrolls the page to desired position. top and left are always relative to the top left corner of the document.
     *
     * @param {number} top
     * @param {number} left
     * @returns {Nightmare}
     *
     * @memberof Nightmare
     */
    scrollTo(top: number, left: number): Nightmare

    /**
     * Inject a local file onto the current page. The file type must be either js or css.
     *
     * @param {string} type
     * @param {string} file
     * @returns {Nightmare}
     *
     * @memberof Nightmare
     */
    inject(type: string, file: string): Nightmare

    /**
     * Invokes fn on the page with arg1, arg2,.... All the args are optional. On completion it returns the return value of fn.
     * Useful for extracting information from the page. Here's an example:
     *
     * @param {() => void} fn
     * @returns {Nightmare}
     *
     * @memberof Nightmare
     */
    evaluate(fn: () => void): Nightmare
    evaluate<R>(fn: () => R, cb: (result: R) => void): Nightmare
    evaluate<T>(fn: (arg: T) => void, cb: () => void, arg: T): Nightmare
    evaluate<T, R>(fn: (arg: T) => R, cb: (result: R) => void, arg: T): Nightmare
    evaluate<T1, T2, R>(fn: (arg1: T1, arg2: T2) => R, cb: (result: R) => void, arg1: T1, arg2: T2): Nightmare
    evaluate<T1, T2, T3, R>(fn: (arg1: T1, arg2: T2, arg3: T3) => R, cb: (result: R) => void, arg1: T1, arg2: T2, arg3: T3): Nightmare

    /**
     * Wait for ms milliseconds e.g. .wait(5000)
     *
     * @returns {Nightmare}
     *
     * @memberof Nightmare
     */
    wait(): Nightmare
    wait(ms: number): Nightmare
    wait(selector: string, delay?: number): Nightmare
    wait(fn: () => any, value: any, delay?: number): Nightmare

    /**
     * Add a header override for all HTTP requests. If header is undefined, the header overrides will be reset.
     *
     * @param {Nightmare.Headers} header
     * @returns {Nightmare}
     *
     * @memberof Nightmare
     */
    header(header: Nightmare.Headers): Nightmare

    /**
     * Returns whether the selector exists or not on the page.
     *
     * @param {string} selector
     * @param {(result: boolean) => void} cb
     * @returns {Nightmare}
     *
     * @memberof Nightmare
     */
    exists(selector: string, cb: (result: boolean) => void): Nightmare

    /**
     * Returns whether the selector is visible or not
     *
     * @param {string} selector
     * @param {(result: boolean) => void} cb
     * @returns {Nightmare}
     *
     * @memberof Nightmare
     */
    visible(selector: string, cb: (result: boolean) => void): Nightmare

    /**
     * Capture page events with the callback. You have to call .on() before calling .goto().
     * Supported events are documented here: http://electron.atom.io/docs/api/web-contents/#instance-events
     *
     * @param {string} event
     * @param {() => void} cb
     * @returns {Nightmare}
     *
     * @memberof Nightmare
     */
    on(event: string, cb: () => void): Nightmare
    on(event: 'did-finish-load', cb: () => void): Nightmare
    on(event: 'did-fail-load', cb: (event: Event, errorCode: number, errorDescription: string, validatedURL: string, isMainFrame: boolean) => void): Nightmare
    on(event: 'did-frame-finish-load', cb: (event: Event, isMainFrame: boolean) => void): Nightmare
    on(event: 'did-start-loading', cb: () => void): Nightmare
    on(event: 'did-stop-loading', cb: () => void): Nightmare
    on(event: 'did-get-response-details', cb: (event: Event, status: boolean, newURL: string, originalURL: string, httpResponseCode: number, requestMethod: string, referrer: string, headers: Headers, resourceType: string) => void): Nightmare
    on(event: 'did-get-redirect-request', cb: (event: Event, oldURL: string, newURL: string, isMainFrame: boolean, httpResponseCode: number, requestMethod: string, referrer: string, headers: Headers) => void): Nightmare
    on(event: 'dom-ready', cb: (event: Event) => void): Nightmare
    on(event: 'page-favicon-updated', cb: (event: Event, favicons: string[]) => void): Nightmare
    on(event: 'new-window', cb: (event: Event, url: string, frameName: string, disposition: Nightmare.NewWindowDisposition, options: Nightmare.BrowserWindowOptions) => void): Nightmare
    on(event: 'will-navigate', cb: (event: Event, url: string) => void): Nightmare
    on(event: 'did-navigate', cb: (event: Event, url: string) => void): Nightmare
    on(event: 'did-navigate-in-page', cb: (event: Event, url: string, isMainFrame: boolean) => void): Nightmare
    on(event: 'crashed', cb: (event: Event, killed: boolean) => void): Nightmare
    on(event: 'plugin-crashed', cb: (event: Event, name: string, version: string) => void): Nightmare
    on(event: 'destroyed', cb: () => void): Nightmare
    on(event: 'devtools-opened', cb: () => void): Nightmare
    on(event: 'devtools-closed', cb: () => void): Nightmare
    on(event: 'devtools-focused', cb: () => void): Nightmare
    on(event: 'certificate-error', cb: (event: Event, url: string, error: string, cert: Nightmare.Certificate, cb: (trust: boolean) => void) => void): Nightmare
    on(event: 'select-client-certificate', cb: (event: Event, url: string, certList: Nightmare.Certificate[], cb: (certificate: Nightmare.Certificate) => void) => void): Nightmare
    on(event: 'login', cb: (event: Event, request: Nightmare.LoginRequest, authInfo: Nightmare.LoginAuthInfo, cb: (username: string, password: string) => void) => void): Nightmare
    on(event: 'found-in-page', cb: (event: Event, result: Nightmare.FoundInPageResult) => void): Nightmare
    on(event: 'media-started-playing', cb: () => void): Nightmare
    on(event: 'media-paused', cb: () => void): Nightmare
    on(event: 'did-change-theme-color', cb: () => void): Nightmare
    on(event: 'update-target-url', cb: (event: Event, url: string) => void): Nightmare
    on(event: 'cursor-changed', cb: (event: Event, type: Nightmare.CursorType, image?: any, scale?: number, size?: Nightmare.Size, hotspot?: Nightmare.Point) => void): Nightmare
    on(event: 'context-menu', cb: (event: Event, params: Nightmare.ContextMenuParams) => void): Nightmare
    on(event: 'select-bluetooth-device', cb: (event: Event, deviceList: Nightmare.BluetoothDevice[], cb: (deviceId: string) => void) => void): Nightmare
    on(event: 'paint', cb: (event: Event, dirtyRect: Nightmare.Rectangle, image: any) => void): Nightmare

    /**
     * This event is triggered if any javascript exception is thrown on the page.
     * But this event is not triggered if the injected javascript code (e.g. via .evaluate()) is throwing an exception.
     *
     * @param {'page'} event
     * @param {(type: 'error', message: string, stack: string) => void} cb
     * @returns {Nightmare}
     *
     * @memberof Nightmare
     */
    on(event: 'page', cb: (type: 'error', message: string, stack: string) => void): Nightmare
    on(event: 'page', cb: (type: 'alert', message: string) => void): Nightmare
    on(event: 'page', cb: (type: 'prompt', message: string, response: object) => void): Nightmare
    on(event: 'page', cb: (type: 'confirm', message: string, response: object) => void): Nightmare
    on(event: 'console', cb: (type: string, args?: any) => void): Nightmare

    /**
     * Similar to .on(), but captures page events with the callback one time.
     *
     * @param {string} event
     * @param {() => void} cb
     * @returns {Nightmare}
     *
     * @memberof Nightmare
     */
    once(event: string, cb: () => void): Nightmare
    once(event: 'did-finish-load', cb: () => void): Nightmare
    once(event: 'did-fail-load', cb: (event: Event, errorCode: number, errorDescription: string, validatedURL: string, isMainFrame: boolean) => void): Nightmare
    once(event: 'did-frame-finish-load', cb: (event: Event, isMainFrame: boolean) => void): Nightmare
    once(event: 'did-start-loading', cb: () => void): Nightmare
    once(event: 'did-stop-loading', cb: () => void): Nightmare
    once(event: 'did-get-response-details', cb: (event: Event, status: boolean, newURL: string, originalURL: string, httpResponseCode: number, requestMethod: string, referrer: string, headers: Headers, resourceType: string) => void): Nightmare
    once(event: 'did-get-redirect-request', cb: (event: Event, oldURL: string, newURL: string, isMainFrame: boolean, httpResponseCode: number, requestMethod: string, referrer: string, headers: Headers) => void): Nightmare
    once(event: 'dom-ready', cb: (event: Event) => void): Nightmare
    once(event: 'page-favicon-updated', cb: (event: Event, favicons: string[]) => void): Nightmare
    once(event: 'new-window', cb: (event: Event, url: string, frameName: string, disposition: Nightmare.NewWindowDisposition, options: Nightmare.BrowserWindowOptions) => void): Nightmare
    once(event: 'will-navigate', cb: (event: Event, url: string) => void): Nightmare
    once(event: 'did-navigate', cb: (event: Event, url: string) => void): Nightmare
    once(event: 'did-navigate-in-page', cb: (event: Event, url: string, isMainFrame: boolean) => void): Nightmare
    once(event: 'crashed', cb: (event: Event, killed: boolean) => void): Nightmare
    once(event: 'plugin-crashed', cb: (event: Event, name: string, version: string) => void): Nightmare
    once(event: 'destroyed', cb: () => void): Nightmare
    once(event: 'devtools-opened', cb: () => void): Nightmare
    once(event: 'devtools-closed', cb: () => void): Nightmare
    once(event: 'devtools-focused', cb: () => void): Nightmare
    once(event: 'certificate-error', cb: (event: Event, url: string, error: string, cert: Nightmare.Certificate, cb: (trust: boolean) => void) => void): Nightmare
    once(event: 'select-client-certificate', cb: (event: Event, url: string, certList: Nightmare.Certificate[], cb: (certificate: Nightmare.Certificate) => void) => void): Nightmare
    once(event: 'login', cb: (event: Event, request: Nightmare.LoginRequest, authInfo: Nightmare.LoginAuthInfo, cb: (username: string, password: string) => void) => void): Nightmare
    once(event: 'found-in-page', cb: (event: Event, result: Nightmare.FoundInPageResult) => void): Nightmare
    once(event: 'media-started-playing', cb: () => void): Nightmare
    once(event: 'media-paused', cb: () => void): Nightmare
    once(event: 'did-change-theme-color', cb: () => void): Nightmare
    once(event: 'update-target-url', cb: (event: Event, url: string) => void): Nightmare
    once(event: 'cursor-changed', cb: (event: Event, type: Nightmare.CursorType, image?: any, scale?: number, size?: Nightmare.Size, hotspot?: Nightmare.Point) => void): Nightmare
    once(event: 'context-menu', cb: (event: Event, params: Nightmare.ContextMenuParams) => void): Nightmare
    once(event: 'select-bluetooth-device', cb: (event: Event, deviceList: Nightmare.BluetoothDevice[], cb: (deviceId: string) => void) => void): Nightmare
    once(event: 'paint', cb: (event: Event, dirtyRect: Nightmare.Rectangle, image: any) => void): Nightmare

    /**
     * This event is triggered if any javascript exception is thrown on the page.
     * But this event is not triggered if the injected javascript code (e.g. via .evaluate()) is throwing an exception.
     *
     * @param {'page'} event
     * @param {(type: 'any', message: string, stack?: string) => void} cb
     * @returns {Nightmare}
     *
     * @memberof Nightmare
     */
    once(event: 'page', cb: (type: 'error', message: string, stack: string) => void): Nightmare
    once(event: 'page', cb: (type: 'alert', message: string) => void): Nightmare
    once(event: 'page', cb: (type: 'prompt', message: string, response: object) => void): Nightmare
    once(event: 'page', cb: (type: 'confirm', message: string, response: object) => void): Nightmare
    once(event: 'console', cb: (type: string, args?: any) => void): Nightmare

    /**
     * Removes a given listener callback for an event.
     *
     * @param {string} event
     * @param {() => void} cb
     * @returns {Nightmare}
     *
     * @memberof Nightmare
     */
    removeListener(event: string, cb: () => void): Nightmare

    /**
     * Takes a screenshot of the current page. Useful for debugging. The output is always a png. Both arguments are optional.
     * If path is provided, it saves the image to the disk. Otherwise it returns a Buffer of the image data.
     * If clip is provided (as documented here), the image will be clipped to the rectangle.
     *
     * @param {string} [path]
     * @param {Nightmare.Rectangle} [clip]
     * @returns {Nightmare}
     *
     * @memberof Nightmare
     */
    screenshot(path?: string, clip?: Nightmare.Rectangle): Nightmare

    /**
     * Save the current page as html as files to disk at the given path. Save type options are here.
     *
     * @param {string} path
     * @param {Nightmare.SaveType} saveType
     * @returns {Nightmare}
     *
     * @memberof Nightmare
     */
    html(path: string, saveType: Nightmare.SaveType): Nightmare

    /**
     * Saves a PDF to the specified path.
     * Options are here: https://github.com/electron/electron/blob/v1.4.4/docs/api/web-contents.md#contentsprinttopdfoptions-callback
     *
     * @param {string} path
     * @param {Nightmare.PDFOptions} [options]
     * @returns {Nightmare}
     *
     * @memberof Nightmare
     */
    pdf(path: string, options?: Nightmare.PDFOptions): Nightmare

    /**
     * Returns the title of the current page.
     *
     * @param {(title: string) => void} cb
     * @returns {Nightmare}
     *
     * @memberof Nightmare
     */
    title(cb: (title: string) => void): Nightmare

    /**
     *
     *
     * @param {(url: string) => void} cb
     * @returns {Nightmare}
     *
     * @memberof Nightmare
     */
    url(cb: (url: string) => void): Nightmare

    /**
     *
     *
     * @param {(url: string) => void} cb
     * @returns {Nightmare}
     *
     * @memberof Nightmare
     */
    path(cb: (url: string) => void): Nightmare

    /**
     * Manipulate cookies using the following sub-functions:
     * get(query?: Cookie): Promise<Cookie[]>;
     * set(name: string, value: string): Nightmare;
     * get(cookie: Cookie): Nightmare;
     * clearAll(): Nightmare;
     *
     * @returns {Nightmare.Cookies}
     *
     * @memberof Nightmare
     */
    cookies(): Nightmare.Cookies

    /**
     * nightmare.use is useful for reusing a set of tasks on an instance. Check out nightmare-swiftly for some examples.
     *
     * @param {(nightmare: Nightmare) => void} plugin
     * @returns {Nightmare}
     *
     * @memberof Nightmare
     */
    use(plugin: (nightmare: Nightmare) => void): Nightmare

    /**
     * Runs an instance of nightmare
     *
     * @param {(err: any, nightmare: Nightmare) => void} [cb]
     * @returns {Nightmare}
     *
     * @memberof Nightmare
     */
    run(cb?: (err: any, nightmare: Nightmare) => void): Nightmare

    /**
     * Clears all queued operations, kills the electron process, and passes error message or 'Nightmare Halted' to an unresolved promise.
     * Done will be called after the process has exited.
     *
     * @param {({} | string)} [error]
     * @param {*} [done]
     * @returns {Nightmare}
     *
     * @memberof Nightmare
     */
    halt(error?: {} | string, done?: any): Nightmare

    /**
     * Complete any queue operations, disconnect and close the electron process.
     * Note that if you're using promises, .then() must be called after .end() to run the .end() task.
     * Also note that if using a .end() callback, the .end() call is equivalent to calling .end() followed by .then(fn)
     *
     * @returns {Nightmare}
     *
     * @memberof Nightmare
     */
    end(): Nightmare

    // Evaluate_now overloads
    evaluate_now<T1, T2, T3, R>(fn: (arg1: T1, arg2: T2, arg3: T3) => R, cb: (result: R) => void, arg1: T1, arg2: T2, arg3: T3): Nightmare
    evaluate_now<T1, T2, R>(fn: (arg1: T1, arg2: T2) => R, cb: (result: R) => void, arg1: T1, arg2: T2): Nightmare
    evaluate_now<T, R>(fn: (arg: T) => R, cb: (result: R) => void, arg: T): Nightmare
    evaluate_now<T>(fn: (arg: T) => void, cb: () => void, arg: T): Nightmare
    evaluate_now<R>(fn: () => R, cb: (result: R) => void): Nightmare
    evaluate_now(fn: () => void): Nightmare

    static action(...args: any[]): Nightmare

    catch<T>(reject?: (error: any) => T): Promise<T>
    // Native method no parameter or return type inference available
    then<T>(fulfill?: (value: any) => T, reject?: (value: any) => T): Promise<T>
}

declare namespace Nightmare {

    interface ConstructorOptions extends BrowserWindowOptions {
        // Nightmare specifc options documented here:
        // https://github.com/segmentio/nightmare/blob/2f5c4b9d97f4cfc29300b9a33c0caf9b048a2997/Readme.md#nightmareoptions

        /**
         * This will throw an exception if the .wait() didn't return true within the set timeframe.
         */
        waitTimeout?: number
        /**
         * This will throw an exception if the .goto() didn't finish loading within the set timeframe.
         * Note that, even though goto normally waits for all the resources on a page to load, a timeout exception is only raised if the DOM itself has not yet loaded.
         */
        goTimeout?: number
        /**
         * This will force Nightmare to move on if a page transition caused by an action (eg, .click()) didn't finish within the set timeframe.
         * If loadTimeout is shorter than gotoTimeout, the exceptions thrown by gotoTimeout will be suppressed.
         */
        loadTimeout?: number
        /**
         * The maxiumum amount of time to wait for an .evaluate() statement to complete.
         */
        executionTimeout?: number
        /**
         * The default system paths that Electron knows about.
         * Here's a list of available paths: https://github.com/atom/electron/blob/master/docs/api/app.md#appgetpathname
         */
        paths?: Nightmare.Paths
        /**
         * The command line switches used by the Chrome browser that are also supported by Electron.
         * Here's a list of supported Chrome command line switches: https://github.com/atom/electron/blob/master/docs/api/chrome-command-line-switches.md
         */
        switches?: Switches
        /**
         * The path to prebuilt Electron binary. This is useful for testing on different version Electron.
         * Note that Nightmare only supports the version this package depending on. Please use this option at your own risk.
         */
        electronPath?: string
        /**
         * A boolean to optionally show the Electron icon in the dock (defaults to false). This is useful for testing purposes.
         */
        dock?: boolean
        /**
         * Optionally show the DevTools in the Electron window using true, or use an object hash containing mode: 'detach' to show in a separate window.
         * The hash gets passed to contents.openDevTools() to be handled. This is also useful for testing purposes. Note that this option is honored only if show is set to true.
         */
        openDevTools?: boolean
        /**
         * How long to wait between keystrokes when using .type().
         */
        typeInterval?: number
        /**
         * How long to wait between checks for the .wait() condition to be successful.
         */
        pollInterval?: number
        /**
         * Defines the number of times to retry an authentication when set up with .authenticate().
         */
        maxAuthRetries?: number
        /**
         * By default, Nightmare uses default native ES6 promises. You can plug in your favorite ES6-style promises library like bluebird or q for convenience!
         */
        promise?: any
    }


    interface BrowserWindowOptions {
        // Electron specific options documented here:
        // https://github.com/atom/electron/blob/master/docs/api/browser-window.md#new-browserwindowoptions
        /**
         * Window’s width in pixels.
         * Default: 800.
         */
        width?: number;
		/**
		 * Window’s height in pixels.
		 * Default: 600.
		 */
        height?: number;
		/**
		 * Window’s left offset from screen.
		 * Default: center the window.
		 */
        x?: number;
		/**
		 * Window’s top offset from screen.
		 * Default: center the window.
		 */
        y?: number;
		/**
		 * The width and height would be used as web page’s size, which means
		 * the actual window’s size will include window frame’s size and be slightly larger.
		 * Default: false.
		 */
        useContentSize?: boolean;
		/**
		 * Show window in the center of the screen.
		 * Default: true
		 */
        center?: boolean;
		/**
		 * Window’s minimum width.
		 * Default: 0.
		 */
        minWidth?: number;
		/**
		 * Window’s minimum height.
		 * Default: 0.
		 */
        minHeight?: number;
		/**
		 * Window’s maximum width.
		 * Default: no limit.
		 */
        maxWidth?: number;
		/**
		 * Window’s maximum height.
		 * Default: no limit.
		 */
        maxHeight?: number;
		/**
		 * Whether window is resizable.
		 * Default: true.
		 */
        resizable?: boolean;
		/**
		 * Whether window is movable.
		 * Note: This is not implemented on Linux.
		 * Default: true.
		 */
        movable?: boolean;
		/**
		 * Whether window is minimizable.
		 * Note: This is not implemented on Linux.
		 * Default: true.
		 */
        minimizable?: boolean;
		/**
		 * Whether window is maximizable.
		 * Note: This is not implemented on Linux.
		 * Default: true.
		 */
        maximizable?: boolean;
		/**
		 * Whether window is closable.
		 * Note: This is not implemented on Linux.
		 * Default: true.
		 */
        closable?: boolean;
		/**
		 * Whether the window can be focused.
		 * On Windows setting focusable: false also implies setting skipTaskbar: true.
		 * On Linux setting focusable: false makes the window stop interacting with wm,
		 * so the window will always stay on top in all workspaces.
		 * Default: true.
		 */
        focusable?: boolean;
		/**
		 * Whether the window should always stay on top of other windows.
		 * Default: false.
		 */
        alwaysOnTop?: boolean;
		/**
		 * Whether the window should show in fullscreen.
		 * When explicitly set to false the fullscreen button will be hidden or disabled on macOS.
		 * Default: false.
		 */
        fullscreen?: boolean;
		/**
		 * Whether the window can be put into fullscreen mode.
		 * On macOS, also whether the maximize/zoom button should toggle full screen mode or maximize window.
		 * Default: true.
		 */
		fullscreenable?: boolean;
		/**
		 * Whether to show the window in taskbar.
		 * Default: false.
		 */
		skipTaskbar?: boolean;
		/**
		 * The kiosk mode.
		 * Default: false.
		 */
		kiosk?: boolean;
		/**
		 * Default window title.
		 * Default: "Electron".
		 */
		title?: string;
		/**
		 * The window icon, when omitted on Windows the executable’s icon would be used as window icon.
		 */
		icon?: string;
		/**
		 * Whether window should be shown when created.
		 * Default: true.
		 */
		show?: boolean;
		/**
		 * Specify false to create a Frameless Window.
		 * Default: true.
		 */
		frame?: boolean;
		/**
		 * Specify parent window.
		 * Default: null.
		 */
		parent?: BrowserWindowType;
		/**
		 * Whether this is a modal window. This only works when the window is a child window.
		 * Default: false.
		 */
		modal?: boolean;
		/**
		 * Whether the web view accepts a single mouse-down event that simultaneously activates the window.
		 * Default: false.
		 */
		acceptFirstMouse?: boolean;
		/**
		 * Whether to hide cursor when typing.
		 * Default: false.
		 */
		disableAutoHideCursor?: boolean;
		/**
		 * Auto hide the menu bar unless the Alt key is pressed.
		 * Default: true.
		 */
		autoHideMenuBar?: boolean;
		/**
		 * Enable the window to be resized larger than screen.
		 * Default: false.
		 */
		enableLargerThanScreen?: boolean;
		/**
		 * Window’s background color as Hexadecimal value, like #66CD00 or #FFF or #80FFFFFF (alpha is supported).
		 * Default: #FFF (white).
		 */
		backgroundColor?: string;
		/**
		 * Whether window should have a shadow.
		 * Note: This is only implemented on macOS.
		 * Default: true.
		 */
		hasShadow?: boolean;
		/**
		 * Forces using dark theme for the window.
		 * Note: Only works on some GTK+3 desktop environments.
		 * Default: false.
		 */
		darkTheme?: boolean;
		/**
		 * Makes the window transparent.
		 * Default: false.
		 */
		transparent?: boolean;
		/**
		 * The type of window, default is normal window.
		 */
		type?: BrowserWindowType;
		/**
		 * The style of window title bar.
		 */
		titleBarStyle?: 'default' | 'hidden' | 'hidden-inset';
		/**
		 * Use WS_THICKFRAME style for frameless windows on Windows
		 */
		thickFrame?: boolean;
		/**
		 * Add a type of vibrancy effect to the window, only on macOS
		 */
		vibrancy?: VibrancyType;
		/**
		 * Settings of web page’s features.
		 */
		webPreferences?: WebPreferences;
    }

    interface WebPreferences {
/**
		 * Whether to enable DevTools.
		 * If it is set to false, can not use BrowserWindow.webContents.openDevTools() to open DevTools.
		 * Default: true.
		 */
		devTools?: boolean;
		/**
		 * Whether node integration is enabled.
		 * Default: true.
		 */
		nodeIntegration?: boolean;
		/**
		 * Specifies a script that will be loaded before other scripts run in the page.
		 * This script will always have access to node APIs no matter whether node integration is turned on or off.
		 * The value should be the absolute file path to the script.
		 * When node integration is turned off, the preload script can reintroduce
		 * Node global symbols back to the global scope.
		 */
		preload?: string;
		/**
		 * Sets the session used by the page. Instead of passing the Session object directly,
		 * you can also choose to use the partition option instead, which accepts a partition string.
		 * When both session and partition are provided, session would be preferred.
		 * Default: the default session.
		 */
		session?: Object;
		/**
		 * Sets the session used by the page according to the session’s partition string.
		 * If partition starts with persist:, the page will use a persistent session available
		 * to all pages in the app with the same partition. if there is no persist: prefix,
		 * the page will use an in-memory session. By assigning the same partition,
		 * multiple pages can share the same session.
		 * Default: the default session.
		 */
		partition?: string;
		/**
		 * The default zoom factor of the page, 3.0 represents 300%.
		 * Default: 1.0.
		 */
		zoomFactor?: number;
		/**
		 * Enables JavaScript support.
		 * Default: true.
		 */
		javascript?: boolean;
		/**
		 * When setting false, it will disable the same-origin policy (Usually using testing
		 * websites by people), and set allowDisplayingInsecureContent and allowRunningInsecureContent
		 * to true if these two options are not set by user.
		 * Default: true.
		 */
		webSecurity?: boolean;
		/**
		 * Allow an https page to display content like images from http URLs.
		 * Default: false.
		 */
		allowDisplayingInsecureContent?: boolean;
		/**
		 * Allow a https page to run JavaScript, CSS or plugins from http URLs.
		 * Default: false.
		 */
		allowRunningInsecureContent?: boolean;
		/**
		 * Enables image support.
		 * Default: true.
		 */
		images?: boolean;
		/**
		 * Make TextArea elements resizable.
		 * Default: true.
		 */
		textAreasAreResizable?: boolean;
		/**
		 * Enables WebGL support.
		 * Default: true.
		 */
		webgl?: boolean;
		/**
		 * Enables WebAudio support.
		 * Default: true.
		 */
		webaudio?: boolean;
		/**
		 * Whether plugins should be enabled.
		 * Default: false.
		 */
		plugins?: boolean;
		/**
		 * Enables Chromium’s experimental features.
		 * Default: false.
		 */
		experimentalFeatures?: boolean;
		/**
		 * Enables Chromium’s experimental canvas features.
		 * Default: false.
		 */
		experimentalCanvasFeatures?: boolean;
		/**
		 * Enables DirectWrite font rendering system on Windows.
		 * Default: true.
		 */
		directWrite?: boolean;
		/**
		 * Enables scroll bounce (rubber banding) effect on macOS.
		 * Default: false.
		 */
		scrollBounce?: boolean;
		/**
		 * A list of feature strings separated by ",", like CSSVariables,KeyboardEventKey to enable.
		 */
		blinkFeatures?: string;
		/**
		 * A list of feature strings separated by ",", like CSSVariables,KeyboardEventKey to disable.
		 */
		disableBlinkFeatures?: string;
		/**
		 * Sets the default font for the font-family.
		 */
		defaultFontFamily?: {
			/**
			 * Default: Times New Roman.
			 */
			standard?: string;
			/**
			 * Default: Times New Roman.
			 */
			serif?: string;
			/**
			 * Default: Arial.
			 */
			sansSerif?: string;
			/**
			 * Default: Courier New.
			 */
			monospace?: string;
		};
		/**
		 * Default: 16.
		 */
		defaultFontSize?: number;
		/**
		 * Default: 13.
		 */
		defaultMonospaceFontSize?: number;
		/**
		 * Default: 0.
		 */
		minimumFontSize?: number;
		/**
		 * Default: ISO-8859-1.
		 */
		defaultEncoding?: string;
		/**
		 * Whether to throttle animations and timers when the page becomes background.
		 * Default: true.
		 */
		backgroundThrottling?: boolean;
		/**
		 * Whether to enable offscreen rendering for the browser window.
		 * Default: false.
		 */
		offscreen?: boolean;
		/**
		 * Whether to enable Chromium OS-level sandbox.
		 * Default: false.
		 */
		sandbox?: boolean;
	}

    interface Certificate {
        /**
        * PEM encoded data.
        */
        data: string
        /**
        * Issuer principal
        */
        issuer: CertificatePrincipal
        /**
        * Issuer's Common Name.
        */
        issuerName: string
        /**
        * Issuer certificate (if not self-signed)
        */
        issuerCert: Certificate
        /**
        * Subject principal
        */
        subject: CertificatePrincipal
        /**
        * Subject's Common Name.
        */
        subjectName: string
        /**
        * Hex value represented string.
        */
        serialNumber: string
        /**
        * Start date of the certificate being valid in seconds.
        */
        validStart: number
        /**
        * End date of the certificate being valid in seconds.
        */
        validExpiry: number
        /**
        * Fingerprint of the certificate.
        */
        fingerprint: string
    }

    interface CertificatePrincipal {
        /**
        * Common Name
        */
        commonName: string
        /**
        * Organization names
        */
        organizations: string[]
        /**
        * Organization Unit names
        */
        organizationUnits: string[]
        /**
        * Locality
        */
        locality: string
        /**
        * State or province
        */
        state: string
        /**
        * Country or region
        */
        country: string
    }

    interface FindInPageOptions {
        /**
        * Whether to search forward or backward, defaults to true
        */
        forward?: boolean
        /**
        * Whether the operation is first request or a follow up, defaults to false.
        */
        findNext?: boolean
        /**
        * Whether search should be case-sensitive, defaults to false.
        */
        matchCase?: boolean
        /**
        * Whether to look only at the start of words. defaults to false.
        */
        wordStart?: boolean
        /**
        * When combined with wordStart, accepts a match in the middle of a word
        * if the match begins with an uppercase letter followed by a lowercase
        * or non-letter. Accepts several other intra-word matches, defaults to false.
        */
        medialCapitalAsWordStart?: boolean
    }

    interface FoundInPageResult {
        requestId: number
        /**
        * Indicates if more responses are to follow.
        */
        finalUpdate: boolean
        /**
        * Position of the active match.
        */
        activeMatchOrdinal?: number
        /**
        * Number of Matches.
        */
        matches?: number
        /**
        * Coordinates of first match region.
        */
        selectionArea?: Rectangle
    }

    interface ContextMenuParams {
        /**
        * x coordinate
        */
        x: number
        /**
        * y coordinate
        */
        y: number
        /**
        * URL of the link that encloses the node the context menu was invoked on.
        */
        linkURL: string
        /**
        * Text associated with the link. May be an empty string if the contents of the link are an image.
        */
        linkText: string
        /**
        * URL of the top level page that the context menu was invoked on.
        */
        pageURL: string
        /**
        * URL of the subframe that the context menu was invoked on.
        */
        frameURL: string
        /**
        * Source URL for the element that the context menu was invoked on.
        * Elements with source URLs are images, audio and video.
        */
        srcURL: string
        /**
        * Type of the node the context menu was invoked on.
        */
        mediaType: 'none' | 'image' | 'audio' | 'video' | 'canvas' | 'file' | 'plugin'
        /**
        * Parameters for the media element the context menu was invoked on.
        */
        mediaFlags: {
            /**
            * Whether the media element has crashed.
            */
            inError: boolean
            /**
            * Whether the media element is paused.
            */
            isPaused: boolean
            /**
            * Whether the media element is muted.
            */
            isMuted: boolean
            /**
            * Whether the media element has audio.
            */
            hasAudio: boolean
            /**
            * Whether the media element is looping.
            */
            isLooping: boolean
            /**
            * Whether the media element's controls are visible.
            */
            isControlsVisible: boolean
            /**
            * Whether the media element's controls are toggleable.
            */
            canToggleControls: boolean
            /**
            * Whether the media element can be rotated.
            */
            canRotate: boolean
        }
        /**
        * Whether the context menu was invoked on an image which has non-empty contents.
        */
        hasImageContents: boolean
        /**
        * Whether the context is editable.
        */
        isEditable: boolean
        /**
        * These flags indicate whether the renderer believes it is able to perform the corresponding action.
        */
        editFlags: {
            /**
            * Whether the renderer believes it can undo.
            */
            canUndo: boolean
            /**
            * Whether the renderer believes it can redo.
            */
            canRedo: boolean
            /**
            * Whether the renderer believes it can cut.
            */
            canCut: boolean
            /**
            * Whether the renderer believes it can copy
            */
            canCopy: boolean
            /**
            * Whether the renderer believes it can paste.
            */
            canPaste: boolean
            /**
            * Whether the renderer believes it can delete.
            */
            canDelete: boolean
            /**
            * Whether the renderer believes it can select all.
            */
            canSelectAll: boolean
        }
        /**
        * Text of the selection that the context menu was invoked on.
        */
        selectionText: string
        /**
        * Title or alt text of the selection that the context was invoked on.
        */
        titleText: string
        /**
        * The misspelled word under the cursor, if any.
        */
        misspelledWord: string
        /**
        * The character encoding of the frame on which the menu was invoked.
        */
        frameCharset: string
        /**
        * If the context menu was invoked on an input field, the type of that field.
        */
        inputFieldType: 'none' | 'plainText' | 'password' | 'other'
        /**
        * Input source that invoked the context menu.
        */
        menuSourceType: 'none' | 'mouse' | 'keyboard' | 'touch' | 'touchMenu'
    }

    interface PDFOptions {
        /**
         * Specify the type of margins to use.
         *   0 - default
         *   1 - none
         *   2 - minimum
         * Default: 0
         */
        marginsType?: number
        /**
         * Specify page size of the generated PDF.
         * Default: A4.
         */
        pageSize?: 'A3' | 'A4' | 'A5' | 'Legal' | 'Letter' | 'Tabloid' | Size
        /**
         * Whether to print CSS backgrounds.
         * Default: false.
         */
        printBackground?: boolean
        /**
         * Whether to print selection only.
         * Default: false.
         */
        printSelectionOnly?: boolean
        /**
         * true for landscape, false for portrait.
         * Default: false.
         */
        landscape?: boolean
    }

    interface Paths {
        // https://github.com/electron/electron/blob/master/docs/api/app.md#appgetpathname
        home?: string;
        appData?: string;
        userData?: string;
        temp?: string;
        exe?: string;
        module?: string;
        desktop?: string;
        documents?: string;
        downloads?: string;
        music?: string;
        pictures?: string;
        videos?: string;
    }

    interface Cookie {
        domain?: string;
        hostOnly?: boolean;
        httpOnly?: boolean;
        name?: string;
        path?: string;
        secure?: boolean;
        session?: boolean;
        value?: string;
        expirationDate?: number;
    }

    interface Cookies {
        get(query?: Cookie): Promise<Cookie[]>;
        set(name: string, value: string): Nightmare;
        set(cookie: Cookie): Nightmare;
        clearAll(): Nightmare;
    }

    export interface EngineVersions {
        electron: string
        chrome: string
    }

    export interface Headers {
        [key: string]: string
    }

    interface BluetoothDevice {
        deviceName: string
        deviceId: string
    }

    interface LoginRequest {
        method: string
        url: string
        referrer: string
    }

    interface LoginAuthInfo {
        isProxy: boolean
        scheme: string
        host: string
        port: number
        realm: string
    }

    // -- Supporting types --

    type Rectangle = {
        x: number
        y: number
        width: number
        height: number
    }

    type Size = {
        width: number
        height: number
    }

    type Point = {
        x: number
        y: number
    }

    type SaveType = {
        HTMLOnly: string
        HTMLComplete: string
        MHTML: string
    }

    type Switches = {
        // https://github.com/electron/electron/blob/master/docs/api/chrome-command-line-switches.md

        'ignore-connection-limit'?: string;
        'disable-http-cache'?: boolean;
        'disable-http2'?: boolean;
        'remote-debugging-port'?: number;
        'js-flags'?: string;
        'proxy-server'?: string;
        'proxy-bypass-list'?: string;
        'proxy-pac-url'?: string;
        'no-proxy-server'?: boolean;
        'host-rules'?: string;
        'host-resolve-rules'?: string;
        'auth-server-whitelist'?: string;
        'auth-negotiate-delegate-whitelist'?: string;
        'ignore-certificate-errors'?: string;
        'ppapi-flash-path'?: string;
        'ppapi-flash-version'?: string;
        'log-net-log'?: string;
        'ssl-version-fallback-min'?: string;
        'cipher-suite-blacklist'?: string;
        'disable-renderer-backgrounding'?: string;
        'enable-logging'?: boolean;
        'v'?: string;
        'vmodule'?: string;
    }

    type BrowserWindowType = BrowserWindowTypeLinux | BrowserWindowTypeMac | BrowserWindowTypeWindows

    type BrowserWindowTypeLinux = 'desktop' | 'dock' | 'toolbar' | 'splash' | 'notification'

    type BrowserWindowTypeMac = 'desktop' | 'textured'

    type BrowserWindowTypeWindows = 'toolbar'

    type NewWindowDisposition = 'default' | 'foreground-tab' | 'background-tab' | 'new-window' | 'save-to-disk' | 'other'

    type VibrancyType = 'appearance-based' | 'light' | 'dark' | 'titlebar' | 'selection' | 'menu' | 'popover' | 'sidebar' | 'medium-light' | 'ultra-dark'

    type CursorType = 'default' | 'crosshair' | 'pointer' | 'text' | 'wait' | 'help' | 'e-resize' | 'n-resize' | 'ne-resize' | 'nw-resize' | 's-resize' | 'se-resize' | 'sw-resize' | 'w-resize' | 'ns-resize' | 'ew-resize' | 'nesw-resize' | 'nwse-resize' | 'col-resize' | 'row-resize' | 'm-panning' | 'e-panning' | 'n-panning' | 'ne-panning' | 'nw-panning' | 's-panning' | 'se-panning' | 'sw-panning' | 'w-panning' | 'move' | 'vertical-text' | 'cell' | 'context-menu' | 'alias' | 'progress' | 'nodrop' | 'copy' | 'none' | 'not-allowed' | 'zoom-in' | 'zoom-out' | 'grab' | 'grabbing' | 'custom'
}


declare module 'nightmare' {
    export = Nightmare
}
