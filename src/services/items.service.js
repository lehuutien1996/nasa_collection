const LS_KEY = 'items';

export const getAll = () => {
  if (! localStorage.getItem(LS_KEY)) {
    localStorage.setItem(LS_KEY, '[]');
  }

  return JSON.parse(localStorage.getItem(LS_KEY));
};

export const add = (info) => {
  const items = getAll();

  items.push(info);
  localStorage.setItem(LS_KEY, JSON.stringify(items));

  return items;
};
