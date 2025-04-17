// Helper Function:  Response Content
export const responseContent = (
  message: string,
): { content: { type: "text"; text: string }[] } => {
  return {
    content: [
      {
        type: "text",
        text: message,
      },
    ],
  };
};
