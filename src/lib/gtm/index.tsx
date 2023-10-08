interface gtmEventsProps {
  event: string;
  category: "clic" | "carga";
  action?: "load-page" | "clic-event";
  label?: string;
}

export const gtmEvents = ({ event, ...props }: gtmEventsProps) => {
  if (typeof window !== "undefined") {
    // @ts-ignore
    window.dataLayer?.push({
      event,
      ...props,
    });
  }
};
