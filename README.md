# The Killer Router

A router library for a view frameworks based

## Motivation

React is a view library!

Start from that principle
 - Router and routes are not concern from view
 - Adds a complicated layer to develop SPA with React
 - Services calls should occurs React lifecicle and rendering
 - Router checking can't occur inside any React Components
 - Some rendering results depends from a service execution with sucess or failures
 - Navigation behaviors like a flow
  - A route is a filter to specify a component rendering
 - Router should be able to render another views library
