import React, { Component } from 'react'

export default class logger extends Component {
    render() {
        return (
            <div>
                     console[type](
    ...args.map((item) => {
                if (typeof item === 'object') {
             return util.inspect(item, { depth: 5, colors: true });
                }
      return item;
    })
  );    
            </div>
        )
    }
}
