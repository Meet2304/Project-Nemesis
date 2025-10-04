import { track } from '@/lib/analyticsStub';

describe('Analytics Stub', () => {
  let consoleLogSpy: jest.SpyInstance;
  const originalEnv = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS_STUB;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
    process.env.NEXT_PUBLIC_ENABLE_ANALYTICS_STUB = originalEnv;
  });

  it('does not log when NEXT_PUBLIC_ENABLE_ANALYTICS_STUB is not set', () => {
    delete process.env.NEXT_PUBLIC_ENABLE_ANALYTICS_STUB;
    
    track('button_click', { label: 'CTA' });
    
    expect(consoleLogSpy).not.toHaveBeenCalled();
  });

  it('does not log when NEXT_PUBLIC_ENABLE_ANALYTICS_STUB is "false"', () => {
    process.env.NEXT_PUBLIC_ENABLE_ANALYTICS_STUB = 'false';
    
    track('button_click', { label: 'CTA' });
    
    expect(consoleLogSpy).not.toHaveBeenCalled();
  });

  it('logs event when NEXT_PUBLIC_ENABLE_ANALYTICS_STUB is "true"', () => {
    process.env.NEXT_PUBLIC_ENABLE_ANALYTICS_STUB = 'true';
    
    track('button_click', { label: 'CTA' });
    
    expect(consoleLogSpy).toHaveBeenCalledWith(
      '[Analytics]',
      'button_click',
      { label: 'CTA' }
    );
  });

  it('logs event with undefined data when no data provided', () => {
    process.env.NEXT_PUBLIC_ENABLE_ANALYTICS_STUB = 'true';
    
    track('page_view');
    
    expect(consoleLogSpy).toHaveBeenCalledWith(
      '[Analytics]',
      'page_view',
      undefined
    );
  });

  it('handles multiple events when enabled', () => {
    process.env.NEXT_PUBLIC_ENABLE_ANALYTICS_STUB = 'true';
    
    track('event_one', { id: 1 });
    track('event_two', { id: 2 });
    
    expect(consoleLogSpy).toHaveBeenCalledTimes(2);
    expect(consoleLogSpy).toHaveBeenNthCalledWith(1, '[Analytics]', 'event_one', { id: 1 });
    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, '[Analytics]', 'event_two', { id: 2 });
  });
});
