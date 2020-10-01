import React from "react";
import Globe from "react-globe.gl";
import "./ExploreContainer.css";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const { useState, useEffect, useRef } = React;
    const globeEl = useRef();
    const [popData, setPopData] = useState([]);

    useEffect(() => {}, []);

    useEffect(() => {}, []);

    const weightColor = null;

  return (
    <div className="container">
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
  
        hexBinPointsData={popData}
        hexBinPointWeight="pop"
        hexAltitude={d => d.sumWeight * 6e-8}
        hexBinResolution={4}
        // hexTopColor={d => weightColor(d.sumWeight)}
        // hexSideColor={d => weightColor(d.sumWeight)}
        hexBinMerge={true}
        enablePointerInteraction={false}
      />
    </div>
  );
};

export default ExploreContainer;
