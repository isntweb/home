import { useState, useCallback, useEffect } from 'react';

const useElementSize = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [node, setNode] = useState(null);

  const resetSize = useCallback(() => {
    if (node) {
      setSize({
        width: node.offsetWidth || 0,
        height: node.offsetHeight || 0,
      });
    }
  }, [node]);

  useEffect(() => {
    resetSize();
  }, [resetSize]);

  const onRefChange = useCallback(
    newNode => newNode && setNode(newNode),
    [setNode],
  );

  return [onRefChange, size, resetSize];
}

export default useElementSize;
