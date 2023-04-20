function Calculator() {
  return (
    <div className="calculator">
      <input type="text" />
      <div className="button-grid">
        <button>C</button>
        <button>/</button>
        <button>*</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button className="equals-button">=</button>
        <button>0</button>
        <button>.</button>
      </div>
    </div>
  )
}

export default Calculator;