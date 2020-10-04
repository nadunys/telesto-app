import React, { Component } from 'react'
import Globe from 'react-globe.gl'
import LocationsService from '../../services/locations.service';

type State = {
    observatories:{lat:number,lng:number,pop:number}[];
}

type Props = {
}

export default class GlobeContainer extends Component<Props,State> {
    locationsService = new LocationsService()
    constructor (props:any){
        super(props);
        this.state = {
            observatories:[]
        }
    }

    async componentDidMount(){
        try {
            const data = (await this.locationsService.getMinifiedObservatories()).data.minifiedObservatories;
            const observatories:{lat:number,lng:number,pop:number}[] = [];
            for(const d of data){
                if(d.coordinate){
                    const temp = {
                        lat:d.coordinate.latitude,
                        lng:d.coordinate.longitude,
                        pop:2000000
                    }

                    observatories.push(temp);
                }
            }           
            this.setState({observatories})
        } catch (error) {
            console.log(error.message);
        }
    }

    render() {
        return (
            <div>
                <Globe
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          
                hexBinPointsData={this.state.observatories}
                hexBinPointWeight="pop"
                hexAltitude={d => d.sumWeight * 6e-8}
                hexBinResolution={4}
                //hexTopColor={d => weightColor(d.sumWeight)}
                //hexSideColor={d => weightColor(d.sumWeight)}
                hexBinMerge={true}
                enablePointerInteraction={false}
                />
            </div>
        )
    }
}
