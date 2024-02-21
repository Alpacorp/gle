import { useEffect, useState } from 'react';

const useObserverTracking = (observerActive: boolean) => {
  const [showTrackingIcon, setShowTrackingIcon] = useState(observerActive);
  const [showTrackingForm, setShowTrackingForm] = useState(false);

  const showTrackingFormHandler = () => {
    setShowTrackingForm(!showTrackingForm);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setShowTrackingIcon(entry.isIntersecting);
      },
      {
        threshold: 1,
      }
    );
    const trackingElement = document.querySelector('#tracking');

    if (trackingElement) {
      observer.observe(trackingElement);
    }

    return () => {
      observer.disconnect();
      setShowTrackingForm(false);
    };
  }, [showTrackingIcon]);

  return [showTrackingIcon, showTrackingForm, showTrackingFormHandler] as const;
};

export default useObserverTracking;
