// Basic in-memory rate limiter
// Note: This is a basic implementation and will reset on server restart.

const rateLimitMap = new Map<string, number[]>();

export function rateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const maxRequests = parseInt(process.env.RATE_LIMIT_MAX || '5', 10);
  const windowMs = parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000', 10); // 15 mins default
  
  const now = Date.now();
  
  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, [now]);
    return { allowed: true };
  }
  
  const timestamps = rateLimitMap.get(ip)!;
  const windowStart = now - windowMs;
  
  // Filter out timestamps outside the window
  const recentTimestamps = timestamps.filter(ts => ts > windowStart);
  
  if (recentTimestamps.length >= maxRequests) {
    const oldestTimestamp = recentTimestamps[0];
    const retryAfter = windowMs - (now - oldestTimestamp);
    
    // Keep the map updated
    rateLimitMap.set(ip, recentTimestamps);
    
    return { allowed: false, retryAfter };
  }
  
  recentTimestamps.push(now);
  rateLimitMap.set(ip, recentTimestamps);
  
  return { allowed: true };
}
