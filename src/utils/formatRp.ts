export const formatRupiah = (money?: number): string => {
  if (money)
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(money);
  return 'Rp. 0';
};
