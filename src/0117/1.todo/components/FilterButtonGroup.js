function FilterButtonGroup({ filter, setFilter }) {
  // 英文，用於狀態指定值用
  const filterOptions = ['All', 'Active', 'Completed'];
  //中文對照
  const filterOptionsChinese = ['所有', '進行中', '已完成'];

  return (
    <>
      {filterOptions.map((v, i) => {
        return (
          <button
            // 只有在選項在應用程式執行中，完全不會有任何更動，才能使用索引值當key值
            key={i}
            className={
              filter === v ? 'filter-button-active' : 'filter-button-normal'
            }
            onClick={() => {
              setFilter(v);
            }}
          >
            {filterOptionsChinese[i]}({v})
          </button>
        );
      })}
    </>
  );
}

export default FilterButtonGroup;
