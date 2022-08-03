import React, {Component } from 'react';
import Structure from "../Containts/Structure";
import StructureTwo from "../Containts/StructureTwo";

import './ThirdContaint.css'

class ThirdContaint extends Component {
   
    render() { 
        return (
            <section className="third-hightlight-wrapper">
              <Structure
                titleColor="black"
                title="Get supercharged for college."
                colorClass="black"
                description="Save on Mac or iPad. Plus get a gift card up to $150."
                >
                    {/* <a href='#'>Shop now</a>  */}
              </Structure>
            </section>
            
        //   <section className="third-hightlight-wrapper">
        //     <StructureTwo
        //       titleColor="black"
        //       title="Get supercharged for college."
        //       description="Save on Mac or iPad. Plus get a gift card up to $150."
        //       link="Shop now"
        //     />
        //   </section>
        );
    }
} 

export default ThirdContaint;

