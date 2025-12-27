// React hook for icon matching
import { useState, useCallback } from 'react';
import { iconMatcher, type MatchResult } from './iconMatcher';
import { loadImage } from './imageHash';

export interface UseIconMatcherReturn {
  isReady: boolean;
  isLoading: boolean;
  error: string | null;
  loadCheatSheet: (imageUrl: string) => Promise<void>;
  scanScreenshot: (imageUrl: string) => Promise<MatchResult[]>;
  quickScan: (imageUrl: string) => Promise<MatchResult[]>;
}

export function useIconMatcher(): UseIconMatcherReturn {
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadCheatSheet = useCallback(async (imageUrl: string) => {
    setIsLoading(true);
    setError(null);

    try {
      await iconMatcher.initialize(imageUrl);
      setIsReady(true);
      console.log('Icon matcher ready with icons:', iconMatcher.getLoadedIcons());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load cheat sheet');
      console.error('Failed to initialize icon matcher:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const scanScreenshot = useCallback(async (imageUrl: string): Promise<MatchResult[]> => {
    if (!iconMatcher.isReady()) {
      throw new Error('Icon matcher not initialized. Load cheat sheet first.');
    }

    setIsLoading(true);
    try {
      const results = await iconMatcher.scanScreenshot(imageUrl, {
        threshold: 65,
        maxResults: 30,
      });
      return results;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const quickScan = useCallback(async (imageUrl: string): Promise<MatchResult[]> => {
    if (!iconMatcher.isReady()) {
      throw new Error('Icon matcher not initialized. Load cheat sheet first.');
    }

    setIsLoading(true);
    try {
      const results = await iconMatcher.quickScan(imageUrl, 60);
      return results;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isReady,
    isLoading,
    error,
    loadCheatSheet,
    scanScreenshot,
    quickScan,
  };
}
