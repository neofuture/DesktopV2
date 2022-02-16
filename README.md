Tailwind
--------


Complete re-write from the ground up

Problem - The desktop UI framework has been altered and changed in some ways that have caused performance issues, being a learning experience in building this the need for optimisations is not always possible 

Case Study

Resizing the Canvas… 

Original Solution was not aware of the inner component size of the window so a special refresh method was added to trigger a resize on the canvas to issue a new size to the canvas object, the solution would be to calculate the canvas size from outside the window object and assign this directly to the canvas.


Improvements


Window Component 
----------------

1. In the original window component, the size or the items within the window view are dynamically calculated in javascript, the new version uses a grid so the calculation of icons/widths and positions are accelerated by the browser.
2. The inner size of the component size is only calculated once instead of multiple calculations from inside and outside the component, ideal for resizing a canvas in real time
3. Window DOM nodes have been significantly reduced to allow for around a 40% increase in speed and a 30% reduction in power usage (Semi tested)
4. Better choice of cursors when resizing windows,  previously for instance on bottom resize the s-resize cursor was used illustrating that the window could only be enlarged, which was confusing, now the icon is a ns-resize with is an arrow up and down.
5. Size, the size given to the window is now correct on the width as the window is recalculated to make it the correct component with, height is not recalculated and is dependent on content (ribbon/status bar) this is important because the width is more likely to be needed to be correct, vertical scrolling is a more natural experience so is easier catered for when designing components.
6. New Mini mode for title bar for windows to enable the full size of asset area and have a mini control centre
7. New corner dock methods 
8. New methods to “Dock” a window left, right, top or bottom, this can be expanded to 25% left dock and other types if we require
9. Automated ribbon/footer/buttons that can (will be not 100% done yet) from the component contractor or window object
10. A global or local ribbon control for each window so we can have adaptive ribbons for controlling inside the window or on a global scope
11. New status bar for each window that can be controlled from within the component or from the window control object for allowing for status messages
12. Always on top, Always on bottom conditions for all windows - (this was a hack to keep the planner window always on the bottom)
13. Only functions used will be re-added to this FW
14. All positions (minimise/maximise) are now css classes and not calculated on the fly in JS which means the browser will accelerate the repaint through css
15. More structured in window control drag and drop, and resize, and improvements in the icon control allows for a much better touch control
16. Better sizing, the size of the window is adapted to keep the content the correct size
17. Currently when a window is positioned the resize event does not effect the window, in V2 the resize event will resize a window so if the plan window is 50% width it will retain that wish on resize 
18. Loading indicator is now a part of the window component and not added as a hack, so the loading indicator can have better and more flexible control
19. New Mini mode for title bar for windows to enable the full size of asset area and have a mini control centre
20. New corner dock methods 
21. Windows now use the transform/translate x/y coordinates for GPU acceleration of position
22. Customised dock position above and beyond the standard dock positions
23. Dragging a window from its drag location will remove it from the drag position, a window has a 20 pixel locked zone so when moving a window it will only undock if the mouse has moved 20 pixels
24. You can now set an unsaved property as true which will define a dialog warning if the window is attempted to be closed
25. system windows, can now be defined as windowConfig.systemWindow = true, this window is not confined to the desktop and sites in the higher area of the UI this is useful for login windows or splash screens
26. always active - this is a new flag that allows a window to always appear active 

Ribbon Component 
----------------

1. No longer uses a poor grid implementation 

Lazy Load 
---------

All components now lazy load, we have designed a way to lazy load module definitions so now the sub components or modules can be loaded when required and are tree shaken from the bootstrap code, this is achieved using Angular 9 and 10 updates without the reliance on injecting service and module definitions

Package size
------------

I have managed to reduce the base footprint of the UI framework so far to around 500kb instead of 6mb initial package instantiation

Language Service 
----------------

A better more organised language JSON

Ribbon
------

New compact top ribbon to save screen real estate

Versioning
----------

The new FW has build versioning so the version is updated at each build automatically, the build versioning also informs the user if the current code base is development

Tooltips
---------

Are inbuilt and do not rely on PrimeNG a new tooltip directive has verb created

100% library and dependency free
-------------------------------

1. im not currently using any packages what so ever, this is all native, inclusion of CS themes/components is possible, but as with the original solution only form elements and tooltips would use the cs components
2. 80% base class style-able from variables, some radius settings are caried over from FW v1 in the html templates, but these will be refactored in to a base class too

Tabs
----

Simplified the maxmise/restore was cool but the tab is so small the real estate should be used for text and not actions, actions are now done in the window control

Toasts
------

with auto close now have a indicator to how long is left to display the toast, mouse over pauses the timer if you need further time to read it

Dialogs
-------

Ability to have a dialog called from anywhere that will callback to the component

set custom focused actions for a dialog

Desktop Component 
-----------------

Does not contain the toolbar and title bar so calculations to remove these from the desktop size to condition the window locations is more optimised

The size is not in an observable so resizing the client window does not rely on having to recalculate the individual desktop items.

Keyboard Handler
----------------

This is now handled in the component blueprint for each component so a window inner component can have key bindings that only work when the window is the active window


External JS
-----------

There is an external component, that can be instructed to perform internal angular function calls, likewise there is now an interface back into standard JS scripts through the same binding of component and external.js

Bugs 
	
1.	Top menus are buggy, and the click to focus is not working if you long click on a menu option

Wishlist

1.	Component schematic so when creating a new window component a boiler plate can be reused.

