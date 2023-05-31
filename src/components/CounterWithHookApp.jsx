import useCounter from "../hooks/useCounter";
 
const CounterWithHookApp = () => {
 
    const { counter, handleIncrement, handleReset, handleDecrement } = useCounter(6);
 
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={() => { handleIncrement(2) }}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={() => { handleDecrement(2) }}>-1</button>
        </>
    )
}
 
export default CounterWithHookApp;