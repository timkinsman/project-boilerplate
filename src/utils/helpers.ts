import { COLORS } from '../AppTheme';

/**
 * Log a `msg` to console only in dev mode.
 *
 * @param context Success, warning, error or info
 * @param name Name of console
 * @param msg Message to log
 */
export const devLog = (
  context: 'success' | 'warning' | 'error' | 'info',
  name: string,
  msg: string,
) => {
  const color =
    (context === 'success' && COLORS.SUCCESS_GREEN) ||
    (context === 'warning' && COLORS.WARNING_ORANGE) ||
    (context === 'error' && COLORS.ERROR_RED) ||
    (context === 'info' && COLORS.INFO_BLUE);

  if (process.env.REACT_APP_ENV === 'development') {
    console.log(`%c${context.toUpperCase()} ${name}: `, `color: ${color}`, msg);
  }
};
