import React, { useEffect, useRef } from "react";
import Globe from "react-globe.gl";

const GlobeComponent = () => {
  const globeRef = useRef();
  const globeContainerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const rect = globeContainerRef.current.getBoundingClientRect();
      // Check if the globe is in the viewport
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        // Set the initial position of the globe
        globeRef.current.pointOfView({ lat: 13, lng: 80, altitude: 2 }, 2000); // Adjust altitude and duration as needed
        window.removeEventListener("scroll", handleScroll); // Remove listener after setting position
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={globeContainerRef}>
      <Globe
        ref={globeRef}
        height={350}
        width={350}
        backgroundColor="rgba(0, 0, 0, 0)"
        backgroundImageOpacity={0.5}
        showAtmosphere
        showGraticules
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        labelsData={[
          {
            lat: 13,
            lng: 80,
            text: "Chennai, Tamil Nadu",
            color: "white",
            size: 15,
          },
        ]}
      />
    </div>
  );
};

export default GlobeComponent;
