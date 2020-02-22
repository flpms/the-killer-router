# Router (Cause I don't have a better name)

A router library for a view frameworks based

## Motivation

React is a view library!

Start from that principle
 - Router and routes are not concern from view
 - Adds a complicated layer to develop SPA with React
 - Services calls should occur outside rendering and React lifecicle
 - Router checking can't occur inside any React Components
 - Some rendering results depends from a service execution with sucess or failures
 - Navigation behaviors like a flow and architure should
  - A route is a filter to specify a component rendering
 - Router should be able to render another views library
