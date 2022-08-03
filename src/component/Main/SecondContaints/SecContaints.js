import React, {Component } from 'react';
import Structure from "../Containts/Structure"
import './SecContaints.css';

class SecondContaints extends Component {
    
    render() { 
        return (
          <section className="second-hightlight-wrapper">
            <Structure
              titleColor="black"
              title="iPhone 13"
              colorClass="black"
              description="Your new superpower."
            />
          </section>
        );
    } 
}
export default SecondContaints;