"use client";

import { useState } from "react";
// 1. IconPicker와 Icon, IconName 타입을 import 합니다.
import { IconPicker, Icon, type IconName } from "@/components/ui/icon-picker";

const IconTester = () => {
  // 2. 선택된 아이콘의 이름(string)을 저장할 state를 만듭니다.
  const [selectedIcon, setSelectedIcon] = useState<IconName | undefined>();

  return (
    <div className="space-y-6 p-8">
      <h1 className="text-2xl font-bold">Icon Picker Example</h1>

      <div>
        <h2 className="mb-2 font-semibold">Select an Icon:</h2>
        {/* 3. IconPicker를 사용하고, onValueChange로 선택된 값을 받아 state를 업데이트합니다. */}
        <IconPicker
          onValueChange={(iconName: IconName) => {
            setSelectedIcon(iconName);
          }}
        />
      </div>

      <hr />

      <div>
        <h2 className="mb-2 font-semibold">Selected Icon Display</h2>
        <div className="flex w-fit items-center gap-4 rounded-lg border p-4">
          {selectedIcon ? (
            <>
              {/* 4. 저장된 state 값을 Icon 컴포넌트의 name prop으로 전달하여 아이콘을 렌더링합니다. */}
              <Icon name={selectedIcon} size={48} />
              <div className="text-lg">
                The selected icon is: <span className="rounded bg-slate-200 p-1 font-mono">{selectedIcon}</span>
              </div>
            </>
          ) : (
            <p className="text-gray-500">No icon selected yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default IconTester;
