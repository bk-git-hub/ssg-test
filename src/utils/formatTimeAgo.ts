/**
 * Calculates the time elapsed since a given date and returns it in a "time ago" format.
 * @param date - The date to compare with the current time. Can be a Date object or a string that can be parsed into a Date.
 * @returns A formatted string like "5분 전", "3시간 전", "2일 전", "6개월 전", "3년 전".
 */
export const formatTimeAgo = (date: string | Date): string => {
  const now = new Date();
  const past = new Date(date);
  const secondsElapsed = Math.floor((now.getTime() - past.getTime()) / 1000);

  // Time intervals in seconds
  const intervals: { [key: string]: number } = {
    년: 31536000,
    개월: 2592000,
    일: 86400,
    시간: 3600,
    분: 60,
  };

  for (const intervalName in intervals) {
    const intervalInSeconds = intervals[intervalName];
    const counter = Math.floor(secondsElapsed / intervalInSeconds);

    if (counter > 0) {
      return `${counter}${intervalName} 전`;
    }
  }

  return "방금 전";
};
