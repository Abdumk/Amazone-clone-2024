import React from 'react';

function CurrencyFormat({ amount, currency = 'USD', locale = 'en-US' }) {
  // Use the Intl.NumberFormat API for currency formatting
  const formattedAmount = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount);

  return <span>{formattedAmount}</span>;
}

export default CurrencyFormat;
