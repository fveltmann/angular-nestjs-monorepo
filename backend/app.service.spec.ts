import { describe, expect, it } from 'vitest';
import { AppService } from './app.service';

describe('AppService', () => {
  it('returns OK', () => {
    expect(new AppService().getHealth()).toBe('OK');
  });
});
