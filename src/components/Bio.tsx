import type React from "react";
import { useClickAnalytics } from "@/hooks/use-click-analytics";

interface BioProps {
  title: string;
  canvaUrl: string;
  canvaDesignId: string;
}

const Bio: React.FC<BioProps> = ({ title, canvaUrl, canvaDesignId }) => {
  const { trackLinkAccess } = useClickAnalytics();

  const handleCanvaLinkClick = () => {
    trackLinkAccess({
      url: canvaUrl,
      section: "bio",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 0,
              paddingTop: "361.7862%",
              paddingBottom: 0,
              boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
              marginTop: "1.6em",
              marginBottom: "0.9em",
              overflow: "hidden",
              borderRadius: "8px",
              willChange: "transform",
            }}
          >
            {/* biome-ignore lint/a11y/useIframeTitle: <explanation> */}
            <iframe
              loading="lazy"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                border: "none",
                padding: 0,
                margin: 0,
              }}
              src={`https://www.canva.com/design/${canvaDesignId}/view?embed`}
              allowFullScreen
              allow="fullscreen"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
