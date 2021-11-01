# **UI-Component System** - ***UCS***

## ***Objectives***
----
<br>

> The objective of the ***UCS*** will be to allow the user total control over the UI/ Look and feel of their application.

To achieve this the **UCS*** will need to perform multiple critical roles.

* The ***UCS*** must be modular at runtime.
* Premade components can be dragged and placed in the UI.
* Easy to modify layouts.
* Very few component base types
    * Containers, Cards - divs
    * Text Elements
    * Graphical Elements

<br>

## ***Overview - Idea Board***
----

Create a system that can ***recursively render components*** based on what the user created.

<br>

Ifd the user wants to add a Bar Chart for cpu usage stats: The user should be able to select a chart element and then select what data to render to it. Furthermore custom styling such as width, color, text-align, margin, padding, etc should all effect the component.

<br>

> Think of a ***wix/ website builder style component system***. Luckily we only need to support Text, Advanced UI elements, and Containers. 
>>  For each Component the user can change the styles and those styles should be reactive to the parent element.

<br>

This system will be the stand out feature for this app so making sure it can be fully flexible and responsive to the users styles would be best.


In the settings page I want there to be a tab for customizing the layout. Inside this tab the user can change the layout and see a live preview.

<br>

Luckily with svelte the recursive component system should play really nicely with this type of system.

<br>

## ***Implimentation Details***
-----

