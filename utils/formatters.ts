/**
 * Formats a number as IDR currency
 * @param price - The price to format
 * @returns Formatted price string in IDR
 */
export function formatPriceIDR(price: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
}

/**
 * Formats a number as USD currency
 * @param price - The price to format
 * @returns Formatted price string in USD
 */
export function formatPriceUSD(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(price);
}

/**
 * Converts USD to IDR
 * @param usdPrice - The price in USD
 * @returns The price in IDR
 */
export function convertUSDtoIDR(usdPrice: number): number {
  // Using a fixed conversion rate for simplicity (1 USD = 15,000 IDR)
  const conversionRate = 15000;
  return usdPrice * conversionRate;
} 