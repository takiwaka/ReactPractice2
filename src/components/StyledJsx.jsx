export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p>Styled JSX</p>
        <button>ボタン</button>
      </div>

      {/* デフォルトでは擬似要素のスタイル指定できないので注意！！ */}
      <style jsx="true">{`
        .container {
          border: solid 2px red;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
      `}</style>
    </>
  );
};
