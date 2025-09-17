// Performance monitoring utilities
export const performanceMonitor = {
  // Measure component render time
  measureRenderTime: (componentName: string, startTime: number) => {
    const endTime = performance.now();
    const renderTime = endTime - startTime;
    console.log(`${componentName} render time: ${renderTime.toFixed(2)}ms`);

    // Log warning for slow renders
    if (renderTime > 16.67) { // More than one frame at 60fps
      console.warn(`⚠️ Slow render detected for ${componentName}: ${renderTime.toFixed(2)}ms`);
    }

    return renderTime;
  },

  // Monitor bundle size
  logBundleSize: () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Get all loaded resources
      const resources = performance.getEntriesByType('resource');
      const jsResources = resources.filter(r => r.name.includes('.js'));

      console.group('📦 Bundle Analysis');
      jsResources.forEach(resource => {
        const perfResource = resource as PerformanceResourceTiming;
        const sizeKB = (perfResource.transferSize / 1024).toFixed(2);
        console.log(`${resource.name}: ${sizeKB}KB`);
      });
      console.groupEnd();
    }
  },

  // Monitor memory usage
  logMemoryUsage: () => {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      const memory = (performance as any).memory;
      console.group('🧠 Memory Usage');
      console.log(`Used: ${(memory.usedJSHeapSize / 1024 / 1024).toFixed(2)}MB`);
      console.log(`Total: ${(memory.totalJSHeapSize / 1024 / 1024).toFixed(2)}MB`);
      console.log(`Limit: ${(memory.jsHeapSizeLimit / 1024 / 1024).toFixed(2)}MB`);
      console.groupEnd();
    }
  },

  // Web Vitals monitoring
  initWebVitals: () => {
    if (typeof window !== 'undefined') {
      // CLS - Cumulative Layout Shift
      let clsValue = 0;
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        console.log(`📊 CLS: ${clsValue.toFixed(4)}`);
      }).observe({ entryTypes: ['layout-shift'] });

      // LCP - Largest Contentful Paint
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log(`🎨 LCP: ${(lastEntry as any).renderTime || lastEntry.startTime}ms`);
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // FID - First Input Delay
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log(`👆 FID: ${(entry as any).processingStart - entry.startTime}ms`);
        }
      }).observe({ entryTypes: ['first-input'] });
    }
  }
};

// Bundle size monitoring
export const bundleMonitor = {
  // Check if bundle size exceeds threshold
  checkBundleSize: (maxSizeKB: number = 500) => {
    if (typeof document !== 'undefined') {
      const scripts = document.querySelectorAll('script[src]');
      let totalSize = 0;

      scripts.forEach(script => {
        const src = script.getAttribute('src');
        if (src && src.includes('.js')) {
          // This is a simplified check - in a real app you'd need to track actual sizes
          console.log(`Script loaded: ${src}`);
        }
      });

      if (totalSize > maxSizeKB * 1024) {
        console.warn(`⚠️ Bundle size exceeds ${maxSizeKB}KB: ${(totalSize / 1024).toFixed(2)}KB`);
      }
    }
  }
};