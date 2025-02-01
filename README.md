# Incorrect setInterval Usage in React Component

This example demonstrates an uncommon error related to using `setInterval` within a React component's `useEffect` hook. The issue arises from how closures work with the state variable within the interval callback.