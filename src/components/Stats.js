export default function Stats({ items }) {
  //Early return in case we don't have items
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list</em>
      </footer>
    );

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = numItems ? Math.round((packedItems / numItems) * 100) : 0;

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go!"
          : `You have ${numItems} items on your list, and you already packed ${packedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
