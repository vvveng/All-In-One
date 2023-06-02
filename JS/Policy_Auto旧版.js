const [Group, Policy] = $argument.match(/(?<=\=)[^&]+/g);

[Group, Policy].  forEach((value, index) => {
  const _value = ["Group", "Policy"][index];
  $surge.setSelectGroupPolicy(`${Group}`, `${Policy}`);
});

$notification.post(
  `${Group}`,
  `   ↓ ↓ ↓`,
  `${Policy}`
);

$done({});