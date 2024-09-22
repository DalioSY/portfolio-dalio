const formatDate = (date: any) => {
  return new Date(date).toLocaleDateString('pt-Br', {
    month: 'short',
    year: 'numeric',
  });
};

export default formatDate;
