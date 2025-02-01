```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval.  The count variable is not updated correctly within the interval.
    const intervalId = setInterval(() => {
      setCount(count + 1); // This won't update correctly because of closure
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup function is present, which is good.
  }, []);

  return <div>Count: {count}</div>;
}
```