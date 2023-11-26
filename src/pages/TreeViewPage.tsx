import { TreeView, TreeViewItemClickEvent } from "@progress/kendo-react-treeview";
import { useState } from "react";

const TreeViewPage = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const tree = [
    {
      id: "1",
      text: "Level 1 - A",
      expanded: expandedItems.includes("1"),
      items: [
        {
          id: "2",
          text: "Level 2 - A1",
          expanded: expandedItems.includes("2"),
          items: [
            { id: "3", text: "Level 3 - A1.1" },
            { id: "4", text: "Level 3 - A1.2" },
          ],
        },
        {
          id: "5",
          text: "Level 2 - A2",
          expanded: expandedItems.includes("5"),
          items: [
            { id: "6", text: "Level 3 - A2.1" },
            { id: "7", text: "Level 3 - A2.2" },
          ],
        },
      ],
    }
    // ... rest of the data
  ];

  const handleExpandCollapse = (event: TreeViewItemClickEvent) => {
    console.log(event);
    const itemId = event.item.id as string;
    if (expandedItems.includes(itemId)) {
      // Collapse the item
      setExpandedItems((prevExpanded) =>
        prevExpanded.filter((id) => id !== itemId)
      );
    } else {
      // Expand the item
      setExpandedItems((prevExpanded) => [...prevExpanded, itemId]);
    }
  };

  return (
    <div>
      <h1>Multi Level TreeView using Kendo UI</h1>
      <TreeView
        data={tree}
        expandIcons={true}
        onItemClick={handleExpandCollapse}
      />
    </div>
  );
};

export default TreeViewPage;
