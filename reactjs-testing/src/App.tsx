import { useEffect, useState } from "react";

import { DataItem, DropdownList } from "src/components/DropdownList";

const fakeApiCall = (): Promise<DataItem[]> => {
  return new Promise((resolve) => {
    resolve([
      { value: "1", label: "Item 1" },
      { value: "2", label: "Item 2" },
      { value: "3", label: "Item 3" },
      { value: "4", label: "Item 4" },
      { value: "5", label: "Item 5" },
    ]);
  });
};

function App() {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    fakeApiCall().then((data) => {
      setData(data);
    });
  }, []);

  return <DropdownList data={data} onRemoveItem={() => {}} labels={{ show: "Show Data", hide: "Hide Data" }} />;
}

export default App;
