import  React from 'react';
 
import Cube from 'react-3d-cube';
import Center from './Center';
import Left from './Left';
 
class Example extends React.Component {
  render() {
    return (
      <div>
        <h1>Photos</h1>
        
        <div
          style={{
            width: 300,
            height: 300
          }}
        >
          <Cube size={300} index="front" />
        </div>
        
        <div
          style={{
            width: 300,
            height: 300,
           
          }}
        >
          <Cube size={300} index="front">
            <div>front</div>
            <div>right</div>
            <div>back</div>
            <div>left</div>
            <div>top</div>
            <div>bottom</div>
          </Cube>
        </div>
      </div>
    );
  }
}

export default Example
